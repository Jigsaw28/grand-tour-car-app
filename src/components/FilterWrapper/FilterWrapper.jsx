import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchMakes } from "../../api/fetchAdvert";
import { BtnSearch, ContainerFilter, Label } from "./FilterWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCar } from "../../redux/carSlice";

export const FilterWrapper = () => {
  const dispatch = useDispatch();
  const { allAdverts, items } = useSelector((state) => state.cars);
  const [makes, setMakes] = useState([]);
  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState("");
  

  useEffect(() => {
    fetchMakes().then((data) => setMakes(data));
  }, []);


  let options = [];
  const priceOptions = [];

  makes.map((item) => options.push({ value: item, label: item }));

  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: i });
  }

  const onChangeCarBrand = (e) => {
    setCarBrand(e.value);
  };

  const onChangeCarPrice = (e) => {
    setPrice(e.value);
  };
  
  const onClickSearch = () => {
    if (carBrand && price) {
      const findCar = allAdverts.filter((item) => (item.make === carBrand) && (item.rentalPrice.slice(1, item.rentalPrice.length) <= price))
      dispatch(setFilterCar(findCar));
    } else if (carBrand) {
      const findCar = allAdverts.filter((item) => item.make === carBrand)
      dispatch(setFilterCar(findCar));
    } else if (price) {
      const findCar = allAdverts.filter((item) => item.rentalPrice.slice(1, item.rentalPrice.length) <= price)
      dispatch(setFilterCar(findCar));
    }
  };

  return (
    <ContainerFilter>
      <Label>
        Car brand
        <Select
          options={options}
          // value={carBrand}
          onChange={onChangeCarBrand}
          placeholder="Enter the text"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "224px",
              height: "48px",
              borderRadius: "14px",
              background: "#F7F7FB",
              padding: "14px 18px",
            }),
            indicatorSeparator: (baseStyles) => ({
              display: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              color: "#121417",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "1.11",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: "0",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "20px",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              padding: "0",
            }),
            dropdownIndicator: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              padding: "0",
              color: isFocused ? "#3470FF" : "#121417",
              transform: isFocused && "rotate(180deg)",
            }),
            menu: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              width: "224px",
            }),
            option: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              color: isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
              fontFamily: "ManropeMedium",
            }),
          }}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          options={priceOptions}
          onChange={onChangeCarPrice}
          placeholder="To $"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "125px",
              height: "48px",
              borderRadius: "14px",
              background: "#F7F7FB",
              padding: "14px 18px",
            }),
            indicatorSeparator: (baseStyles) => ({
              display: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              color: "#121417",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "1.11",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: "0",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "20px",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              padding: "0",
            }),
            dropdownIndicator: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              padding: "0",
              color: isFocused ? "#3470FF" : "#121417",
              transform: isFocused && "rotate(180deg)",
            }),
            menu: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              width: "224px",
            }),
            option: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              color: isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
              fontFamily: "ManropeMedium",
            }),
          }}
        />
      </Label>
      <BtnSearch onClick={onClickSearch}>Search</BtnSearch>
    </ContainerFilter>
  );
};
