import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js/React
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

// Set the default icon
L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
  position: [number, number];
  zoom?: number;
  className?: string;
  popupText?: string;
}

const MapComponent = ({
  position,
  zoom = 13,
  className = '',
  popupText = 'Our Location'
}: MapComponentProps) => {
  // Ensure window is defined (for Next.js/SSR)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This is a workaround for Next.js/SSR
      delete (window as any).L;
    }
  }, []);

  if (typeof window === 'undefined') {
    return <div className={`bg-gray-100 rounded-xl ${className}`} style={{ height: '400px' }} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
        style={{ minHeight: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="font-sans text-sm">
              <strong>Safari Cruiser Conversions</strong>
              <p className="mt-1">{popupText}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
