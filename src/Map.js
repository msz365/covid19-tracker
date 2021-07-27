import React from 'react'
import './Map.css'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { showDataOnMap } from './util'

function Map({countries, casesType, center, zoom, scrollWheelZoom}) {

    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>

    
    )
}

export default Map;
