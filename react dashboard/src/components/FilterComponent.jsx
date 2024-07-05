// src/components/FilterComponent.jsx
import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
    const [endYear, setEndYear] = useState('');
    const [topic, setTopic] = useState('');
    const [sector, setSector] = useState('');
    const [region, setRegion] = useState('');
    const [pestle, setPestle] = useState('');
    const [source, setSource] = useState('');
    const [swot, setSwot] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const handleFilter = () => {
        onFilter({ endYear, topic, sector, region, pestle, source, swot, country, city });
    };

    // Example data for dropdowns (replace with actual data)
    const years = ['2020', '2021', '2022', '2023'];
    const topics = ['Economy', 'Environment', 'Technology'];
    const sectors = ['Energy', 'Finance', 'Healthcare', 'Technology'];
    const regions = ['Northern America', 'Europe', 'Asia', 'Africa'];
    const pestles = ['Political', 'Economic', 'Social', 'Technological'];
    const sources = ['Government', 'NGO', 'Private', 'Research'];
    const swots = ['Strength', 'Weakness', 'Opportunity', 'Threat'];
    const countries = ['United States', 'Germany', 'China', 'India'];
    const cities = ['New York', 'Berlin', 'Beijing', 'Mumbai'];

    return (
        <div className="filter-container">
            <label>
                End Year:
                <select value={endYear} onChange={(e) => setEndYear(e.target.value)}>
                    <option value="">All</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </label>
            <label>
                Topic:
                <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="">All</option>
                    {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                </select>
            </label>
            <label>
                Sector:
                <select value={sector} onChange={(e) => setSector(e.target.value)}>
                    <option value="">All</option>
                    {sectors.map(sector => <option key={sector} value={sector}>{sector}</option>)}
                </select>
            </label>
            <label>
                Region:
                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="">All</option>
                    {regions.map(region => <option key={region} value={region}>{region}</option>)}
                </select>
            </label>
            <label>
                PEST:
                <select value={pestle} onChange={(e) => setPestle(e.target.value)}>
                    <option value="">All</option>
                    {pestles.map(pestle => <option key={pestle} value={pestle}>{pestle}</option>)}
                </select>
            </label>
            <label>
                Source:
                <select value={source} onChange={(e) => setSource(e.target.value)}>
                    <option value="">All</option>
                    {sources.map(source => <option key={source} value={source}>{source}</option>)}
                </select>
            </label>
            <label>
                SWOT:
                <select value={swot} onChange={(e) => setSwot(e.target.value)}>
                    <option value="">All</option>
                    {swots.map(swot => <option key={swot} value={swot}>{swot}</option>)}
                </select>
            </label>
            <label>
                Country:
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">All</option>
                    {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
            </label>
            <label>
                City:
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">All</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
            </label>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default FilterComponent;
