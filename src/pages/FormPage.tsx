import React, { useState } from 'react';
import { FormCountrySelect, FormDatePicker } from 'livingston-npm-components';

export const FormPage = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    return (
        <div className="form-page">
            <h1>Form Submission</h1>
            <FormDatePicker
                label="Select Date"
                id="date-picker"
                date={selectedDate}
                setDate={setSelectedDate}
                errorMessages={{ invalidDate: 'Invalid date', required: 'Date is required' }}
            />
            <FormCountrySelect
                label="Select Country"
                id="country-select"
                value={selectedCountry}
                onChange={setSelectedCountry}
                errorMessage="Country is required"
            />
        </div>
    );
}

export default FormPage;
