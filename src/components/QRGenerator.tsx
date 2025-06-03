
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000000] transform -rotate-1">
        <div className="mb-6">
          <h2 className="flex items-center gap-3 text-4xl font-black text-black mb-2">
            <div className="w-12 h-12 bg-blue-400 border-4 border-black flex items-center justify-center transform rotate-12">
              <QrCode className="w-6 h-6 text-black" />
            </div>
            Generate QR Code
          </h2>
        </div>
        <div className="space-y-6">
          <Input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-16 text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] bg-yellow-200 placeholder:text-black/70"
          />
          <div className="flex gap-4">
            <Input
              type="url"
              placeholder="Enter your LinkedIn, portfolio, or any URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-16 text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] bg-green-200 placeholder:text-black/70"
            />
            <Button 
              onClick={generateQRCode} 
              disabled={isGenerating}
              className="h-16 px-8 text-xl font-black bg-pink-500 hover:bg-pink-400 border-4 border-black text-white shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              {isGenerating ? 'Generating...' : 'Generate QR'}
            </Button>
          </div>
          
          {qrCodeUrl && (
            <div className="flex flex-col items-center space-y-6 bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000000]">
              <div className="bg-white border-4 border-black p-4">
                <img src={qrCodeUrl} alt="Generated QR Code" className="border-2 border-black" />
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                <Button 
                  onClick={downloadQRCode} 
                  className="bg-blue-400 hover:bg-blue-300 border-4 border-black text-black font-black px-6 py-3 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download QR Code
                </Button>
                {user && (
                  <Button 
                    onClick={saveQRCode} 
                    disabled={isSaving}
                    className="bg-green-400 hover:bg-green-300 border-4 border-black text-black font-black px-6 py-3 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {isSaving ? 'Saving...' : 'Save to Account'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Preview Section */}
      {qrCodeUrl && (
        <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000000] transform rotate-1">
          <div className="mb-6">
            <h2 className="text-4xl font-black text-black mb-4">Card Preview</h2>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div 
              ref={cardRef}
              className="w-[350px] h-[200px] bg-pink-300 border-4 border-black p-4 flex flex-col justify-between shadow-[8px_8px_0px_0px_#000000] transform -rotate-2"
              style={{ aspectRatio: '3.5/2' }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black text-black">
                    {user?.user_metadata?.full_name || 'Your Name'}
                  </h3>
                  {user?.email && (
                    <p className="text-lg font-bold text-black">{user.email}</p>
                  )}
                  {title && (
                    <p className="text-sm font-bold text-black mt-1 bg-yellow-300 px-2 py-1 border-2 border-black inline-block">{title}</p>
                  )}
                </div>
                <div className="text-sm font-black text-black bg-green-400 px-2 py-1 border-2 border-black">
                  LOGO
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white border-2 border-black p-2">
                  <img src={qrCodeUrl} alt="QR Code" className="w-16 h-16" />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm font-black text-black bg-red-400 px-3 py-1 border-2 border-black inline-block">Scan to connect</p>
              </div>
            </div>
            
            <Button 
              onClick={downloadCard} 
              className="bg-red-400 hover:bg-red-300 border-4 border-black text-black font-black text-xl px-8 py-4 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Card (PNG & PDF)
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
