import React, { useState, useEffect } from "react";
import Sidenav from "../Components/Sidenav";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const columns = [
  { field: 'CaseID', headerName: 'CaseID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'ContactNumber', headerName: 'ContactNumber', width: 130 },
  { field: 'Amount', headerName: 'Amount', width: 160 },
];

const Caselist = () => {
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
      <h1>Case List</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={beneficiaries}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Caselist;