import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, ExternalLink, Navigation, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import 'leaflet/dist/leaflet.css';

// Custom marker icon for better visibility
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        background: linear-gradient(135deg, #8B4513, #A0522D);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid #F5DEB3;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        position: relative;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #8B4513;
        "></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

interface MapComponentProps {
  position: [number, number];
  zoom?: number;
  className?: string;
  popupText?: string;
  showActions?: boolean;
}

const MapComponent = ({
  position,
  zoom = 15,
  className = '',
  popupText = 'PK Conversions Workshop',
  showActions = true
}: MapComponentProps) => {
  const [copied, setCopied] = useState(false);
  const [customIcon] = useState(createCustomIcon());

  // Ensure window is defined (for Next.js/SSR)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This is a workaround for Next.js/SSR
      delete (window as any).L;
    }
  }, []);

  const handleCopyCoordinates = async () => {
    const coords = `${position[0]}, ${position[1]}`;
    try {
      await navigator.clipboard.writeText(coords);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy coordinates:', err);
    }
  };

  const handleViewLargerMap = () => {
    const url = `https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}&zoom=${zoom}`;
    window.open(url, '_blank');
  };

  const handleGetDirections = () => {
    const url = `https://www.openstreetmap.org/directions?from=&to=${position[0]},${position[1]}`;
    window.open(url, '_blank');
  };

  if (typeof window === 'undefined') {
    return (
      <Card className={`${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-safari-brown" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
            <p className="text-muted-foreground">Map loading...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-safari-brown" />
          Find Us on Ruai Eastern By-pass St Joseph stage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
          <MapContainer
            center={position}
            zoom={zoom}
            scrollWheelZoom={false}
            className="h-80 w-full z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="font-sans text-sm text-center">
                  <strong className="text-safari-brown">{popupText}</strong>
                  <p className="mt-1 text-muted-foreground">Eastern Bypass, Nairobi, Kenya</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Coordinates: {position[0].toFixed(6)}, {position[1].toFixed(6)}
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {showActions && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-safari-cream"
                onClick={handleViewLargerMap}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Larger Map
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-safari-gold text-safari-brown hover:bg-safari-gold hover:text-safari-brown"
                onClick={handleGetDirections}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-safari-brown text-safari-brown hover:bg-safari-brown hover:text-safari-cream"
                onClick={handleCopyCoordinates}
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy Coords'}
              </Button>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Landmark:</strong> Ruai Eastern By-pass, St Joseph stage
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapComponent;
