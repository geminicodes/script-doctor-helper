
import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, QrCode, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QRGeneratorProps {
  userName?: string;
  userEmail?: string;
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ userName = "Your Name", userEmail }) => {
  const [url, setUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.download = 'qr-code.png';
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
      
      // Download as PNG
      const link = document.createElement('a');
      link.download = 'qr-card.png';
      link.href = canvas.toDataURL();
      link.click();

      // Also create PDF version
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [3.5, 2]
      });
      
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 3.5, 2);
      pdf.save('qr-card.pdf');

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
      <Card className="border-2 border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            <QrCode className="w-6 h-6" />
            Generate QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Enter your LinkedIn, portfolio, or any URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 text-lg"
            />
            <Button 
              onClick={generateQRCode} 
              disabled={isGenerating}
              className="h-12 px-6"
            >
              {isGenerating ? 'Generating...' : 'Generate QR'}
            </Button>
          </div>
          
          {qrCodeUrl && (
            <div className="flex flex-col items-center space-y-4">
              <img src={qrCodeUrl} alt="Generated QR Code" className="border rounded-lg" />
              <Button onClick={downloadQRCode} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download QR Code
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Card Preview Section */}
      {qrCodeUrl && (
        <Card className="border-2 border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Card Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <div 
                ref={cardRef}
                className="w-[350px] h-[200px] bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-between shadow-lg"
                style={{ aspectRatio: '3.5/2' }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{userName}</h3>
                    {userEmail && (
                      <p className="text-sm text-gray-600">{userEmail}</p>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    Logo
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <img src={qrCodeUrl} alt="QR Code" className="w-20 h-20" />
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Scan to connect</p>
                </div>
              </div>
              
              <Button onClick={downloadCard} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Card (PNG & PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QRGenerator;
