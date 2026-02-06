import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function GlobalMapSection() {
  return (
    <section className="grid bg-[#F3F3F3] md:grid-cols-2 gap-16 items-center">
      {/* LEFT TEXT */}
      <div>
        <h2 className="text-[42px] font-bold text-[#6B8E23] leading-tight">
          Global
          <br />
          Project Map
        </h2>

        <p className="text-gray-600 mt-6 max-w-md text-[20px]">
          This map highlights real initiatives working on the ground in Gaza.
          Every marker tells a story of need, action, and resilience. Click to
          learn more.
        </p>
      </div>

      {/* MAP */}
      <div className="h-[320px] rounded-2xl overflow-hidden shadow-xl">
        <MapContainer
          center={[31.5, 34.47]}
          zoom={11}
          className="h-full w-full"
          attributionControl={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[31.5, 34.47]}>
            <Popup>Rebuild Project</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
