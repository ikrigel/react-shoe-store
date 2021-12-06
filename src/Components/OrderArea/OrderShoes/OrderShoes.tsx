import { MailOutline } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ThumbUp, Cancel } from "@mui/icons-material";

import "./OrderShoes.css";
import React from "react";

const shoesBrand = [
  {
    brand: "Nike",
    size: 45,
    color: "Blue",
  },
  {
    brand: "Croks",
    size: 44,
    color: "Green",
  },
  {
    brand: "NB",
    size: 42,
    color: "Black",
  },
  {
    brand: "Adidas",
    size: 41,
    color: "White",
  },
];
const shoesColor = [
    {
      brand: "Nike",
      size: 45,
      color: "Blue",
    },
    {
      brand: "Croks",
      size: 44,
      color: "Green",
    },
    {
      brand: "NB",
      size: 42,
      color: "Black",
    },
    {
      brand: "Adidas",
      size: 41,
      color: "White",
    },
];
const shoesSize = [
    {
      brand: "Nike",
      size: "45",
      color: "Blue",
    },
    {
      brand: "Croks",
      size: "44",
      color: "Green",
    },
    {
      brand: "NB",
      size: "42",
      color: "Black",
    },
    {
      brand: "Adidas",
      size: "41",
      color: "White",
    },
  ];

function OrderShoes(): JSX.Element {
    const [shoeBrand, setShoes1] = React.useState("Nike");
    const [shoeColor, setShoes2] = React.useState("White");
    const [shoeSize, setShoes3] = React.useState("41");

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShoes1(event.target.value);
    }
      const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
          setShoes2(event.target.value);
      }
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoes3(event.target.value);
  };
  return (
    <div className="OrderShoes Box">
      <Typography variant="h3" className="Header">
        <MailOutline />
        Order Shoes
      </Typography>

      <form>
        <TextField
          className="TextBox"
          id="outlined-select-brand-native"
          label="Brand"
          select
          value={shoeBrand}
          onChange={handleChange1}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your brand"
        >
          {shoesBrand.map((option) => (
            <option key={option.brand} value={option.brand}>
              {option.brand}
            </option>
          ))}
        </TextField>

        <TextField
          className="TextBox"
          variant="outlined"
          label="Color"
          type="text"
          select
          value={shoeColor}
          onChange={handleChange2}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your color"
        >
          {shoesColor.map((option) => (
            <option key={option.color} value={option.color}>
              {option.color}
            </option>
          ))}
        </TextField>

        <TextField
          label="Size"
          variant="outlined"
          className="TextBox"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          select
          value={shoeSize}
          onChange={handleChange3}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your size"
        >
          {shoesSize.map((option) => (
            <option key={option.size} value={option.size}>
              {option.size}
            </option>
          ))}
        </TextField>

        <FormControlLabel
          label="Send me promotional emails"
          control={<Checkbox />}
        />

        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" startIcon={<ThumbUp />}>
            Approve
          </Button>
          <Button color="secondary" startIcon={<Cancel />}>
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default OrderShoes;
