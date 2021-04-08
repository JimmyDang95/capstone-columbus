import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import "@reach/combobox/styles.css";
import React from "react";


export default function Search({panTo}) {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions,} = usePlacesAutocomplete({
        requestOptions: {
            // search center point
            // convert to arrow functions to return its value
            location: {
                lat: () => 53.136719,
                lng: () => 8.216540,
            },
            // 300km radius search expansion range
            radius: 300 * 1000,
        },
        debounce: 500,
    });

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log('error: ', error);
        }
    };

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput value={value}
                               onChange={handleInput}
                               disabled={!ready}
                               placeholder={"Enter a location"}
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

