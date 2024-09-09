import React, { useState, useEffect } from "react";
import Sidenav from "../Components/Sidenav";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'accountNumber', headerName: 'Account Number', width: 130 },
  { field: 'ifsc', headerName: 'IFSC', width: 130 },
  { field: 'beneficiaryName', headerName: 'Beneficiary Name', width: 160 },
];

const Addcase = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    // Fetch beneficiaries from API
    axios.get('https://ominous-guacamole-64697grv4jq25xx5-5000.app.github.dev/api/v1/beneficery/getAll')
      .then(response => {
        // Assuming each beneficiary object has `_id` as the unique identifier
        const formattedBeneficiaries = response.data.map((beneficiary, index) => ({
          ...beneficiary,
          id: index + 1 // You can use `_id` from your API response if available
        }));
        setBeneficiaries(formattedBeneficiaries);
        toast.success('Beneficiaries loaded successfully!');
      })
      .catch(error => {
        console.error('Error fetching beneficiaries:', error);
        toast.error('Failed to load beneficiaries');
      });
  }, []);

  const handleAddBeneficiary = () => {
    const newBeneficiary = {
      accountNumber,
      ifsc,
      beneficiaryName
    };

    // Add beneficiary
    axios.post('https://ominous-guacamole-64697grv4jq25xx5-5000.app.github.dev/api/v1/beneficery/add', newBeneficiary)
      .then(response => {
        const addedBeneficiary = {
          ...response.data,
          id: beneficiaries.length + 1 // Assuming new beneficiary's id based on current length
        };
        setBeneficiaries([...beneficiaries, addedBeneficiary]);
        setAccountNumber('');
        setIfsc('');
        setBeneficiaryName('');
        toast.success('Beneficiary added successfully!');
      })
      .catch(error => {
        console.error('Error adding beneficiary:', error);
        toast.error('Failed to add beneficiary');
      });
  };

  return (
    <div className="testbox">
      <Sidenav/>
      <div className="boxone">
        <h1>my case</h1>
        <h3>CaseID</h3>
        <TextField 
          id="outlined-basic" 
          label="CaseID" 
          variant="outlined"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <h3>Name</h3>
        <TextField 
          id="outlined-basic" 
          label="Name" 
          variant="outlined"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
        />
        <h3>ContactNumber</h3>
        <TextField 
          id="outlined-basic" 
          label="ContactNumber" 
          variant="outlined"
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
        />
        <p>payee will add in 30 mins</p>
        <Button variant="contained" onClick={handleAddBeneficiary}>ADD</Button>
      </div>
   
     
    </div>
  );
};

export default Addcase;