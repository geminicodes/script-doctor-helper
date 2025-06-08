
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, QrCode, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  const generateQRCode = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a URL to generate QR code",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrDataUrl);
      
      toast({
        title: "QR Code Generated!",
        description: "Your QR code is ready for download"
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate QR code. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const saveQRCode = async () => {
    if (!user || !qrCodeUrl) {
      toast({
        title: "Sign in Required",
        description: "Please sign in to save your QR code",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('qr_codes')
        .insert({
          user_id: user.id,
          url: url,
          title: title || 'Untitled QR Code',
          qr_code_data: qrCodeUrl
        });

      if (error) throw error;

      toast({
        title: "QR Code Saved!",
        description: "Your QR code has been saved to your account"
      });
    } catch (error) {
      console.error('Error saving QR code:', error);
      toast({
        title: "Save Failed",
        description: "Failed to save QR code. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.download = `${title || 'qr-code'}.png`;
    link.href = qrCodeUrl;
    link.click();
  };

  const downloadCard = async () => {
    if (!cardRef.current || !qrCodeUrl) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#ffffff'
      });
      
      const link = document.createElement('a');
      link.download = `${title || 'qr-card'}.png`;
      link.href = canvas.toDataURL();
      link.click();

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [3.5, 2]
      });
      
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 3.5, 2);
      pdf.save(`${title || 'qr-card'}.pdf`);

      toast({
        title: "Card Downloaded!",
        description: "Your QR card has been saved as PNG and PDF"
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download card. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* QR Generator Section */}
      <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 rounded-lg shadow-[6px_6px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000] transform -rotate-1">
        <div className="mb-4 sm:mb-6">
          <h2 className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 border-2 sm:border-4 border-black flex items-center justify-center transform rotate-12 rounded-lg">
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
            </div>
            <span className="leading-tight">Generate QR Code</span>
          </h2>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Input
              type="url"
              placeholder="Enter your LinkedIn, portfolio, or any URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl font-bold border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] bg-white placeholder:text-black/70 rounded-lg"
            />
            <Button 
              onClick={generateQRCode} 
              disabled={isGenerating}
              className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl font-black bg-yellow-400 hover:bg-yellow-300 border-2 sm:border-4 border-black text-black rounded-lg shadow-[3px_3px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[3px_3px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <span className="hidden sm:inline">{isGenerating ? 'Generating...' : 'Generate QR'}</span>
              <span className="sm:hidden">{isGenerating ? 'Gen...' : 'Generate'}</span>
            </Button>
          </div>
          
          {qrCodeUrl && (
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 bg-yellow-400 border-2 sm:border-4 border-black p-4 sm:p-6 rounded-lg shadow-[3px_3px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000]">
              
              <div className="text-center">
                <p className="bg-white hover:bg-gray-100 border-2 sm:border-4 border-black text-black font-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-sm sm:text-base">Scan to connect</p>
              </div>
              
              <div className="bg-white border-2 sm:border-4 border-black p-2 sm:p-4 rounded-lg">
                <img src={qrCodeUrl} alt="Generated QR Code" className="border-2 border-black w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button 
                  onClick={downloadQRCode} 
                  className="bg-yellow-400 hover:bg-yellow-300 border-2 sm:border-4 border-black text-black font-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Download QR Code</span>
                  <span className="sm:hidden">Download QR</span>
                </Button>

                <Button 
                  onClick={downloadCard} 
                  className="bg-yellow-400 hover:bg-yellow-300 border-2 sm:border-4 border-black text-black font-black text-sm sm:text-base md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-[2px_2px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[3px_3px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Download Card (PNG & PDF)</span>
                  <span className="sm:hidden">Download Card</span>
                </Button>
                {user && (
                  <Button 
                    onClick={saveQRCode} 
                    disabled={isSaving}
                    className="bg-yellow-400 hover:bg-yellow-300 border-2 sm:border-4 border-black text-black font-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-[2px_2px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] sm:hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150 text-sm sm:text-base"
                  >
                    <Save className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">{isSaving ? 'Saving...' : 'Save to Account'}</span>
                    <span className="sm:hidden">{isSaving ? 'Save...' : 'Save'}</span>
                  </Button>
                )}
                
              </div>
              <div className="text-center sm:text-left px-4 sm:pr-8 sm:pl-4 pb-4">
                <p className="text-black text-sm sm:text-base md:text-lg font-bold">
                  Made in Madrid with love ❤️ by <a href="https://es.linkedin.com/in/valentin-mekhonoshina-073b02127" className="underline hover:no-underline">Valentin Mekhonoshina</a>
                </p>
              </div>
            </div>
      
          )}
        </div>
        
      </div>
      
      {/* Card Preview Section */}
      
    </div>
    
  );
};

export default QRGenerator;
