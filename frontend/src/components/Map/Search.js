import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import "@reach/combobox/styles.css";
import React from "react";


export default function Search({panTo}) {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            //search center point
            location: {
                lat: () => 53.136719,
                lng: () => 8.216540
            },
            // 300km radius search expansion range
            radius: 300 * 1000,
        },
    });

    return (
        <div className="search">
            <Combobox
                onselect={async (address) => {
                 // get selected address without fetching new data from google Api
                setValue(address, false);

                // close results-list
                clearSuggestions();

                // first: get a list of results -> second: get lang,lang of first result -> map center to this position
                try {
                    const results = await getGeocode({address});
                    const {lat, lng} = await getLatLng(results[0]);
                    panTo({lat, lng});
                } catch (error) {
                    console.log("error loading Geocode")
                }
            }}>
                <ComboboxInput value={value}
                               onChange={(event) => {
                                   setValue(event.target.value);
                               }}
                               disabled={!ready}
                               placeholder={"Search for location"}
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({id, description}) => (
                            <ComboboxOption key={id} value={description}/>
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}