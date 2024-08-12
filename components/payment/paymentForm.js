import React, { useState } from "react";
import {
  Flex,
  Box,
  Link,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  border,
} from "@chakra-ui/react";

const PaymentInfoForm = ({ setSeatSelectionEnabled, seatSelectionEnabled }) => {
  const [numCheckedBags, setNumCheckedBags] = useState(1);
  const [emergencyContactSame, setEmergencyContactSame] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dob: "",
    email: "",
    phone: "",
    redressNumber: "",
    knownTravellerNumber: "",
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyEmail: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    validateField(id, value);
  };
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Check if all required fields are filled
    for (const [key, value] of Object.entries(formData)) {
      if (
        [
          "firstName",
          "lastName",
          "dob",
          "email",
          "phone",
          "knownTravellerNumber",
        ].includes(key)
      ) {
        if (!value) {
          newErrors[key] = "This field is required";
          isValid = false;
        } else if (key === "email" && !/\S+@\S+\.\S+/.test(value)) {
          newErrors[key] = "Email address is invalid";
          isValid = false;
        } else if (key === "phone" && !/^\d{11}$/.test(value)) {
          newErrors[key] = "Phone number is invalid";
          isValid = false;
        }
      }
    }

    // Update errors and form validity state
    setErrors(newErrors);
    setFormValid(isValid);
    return isValid;
  };

  const validateField = (id, value) => {
    let newErrors = { ...errors };

    switch (id) {
      case "firstName":
      case "lastName":
      case "dob":
      case "email":
      case "phone":
      case "knownTravellerNumber":
        newErrors[id] = value ? "" : "This field is required";
        break;
      case "email":
        newErrors[id] = /\S+@\S+\.\S+/.test(value)
          ? ""
          : "Email address is invalid";
        break;
      case "phone":
        // newErrors[id] = /^\d{11}$/.test(value) ? '' : 'Phone number is invalid';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    setFormValid(Object.values(newErrors).every((error) => error === ""));
  };

 

  const handleSave = (e) => {
    e.preventDefault();
    console.log("check validation");
    console.log(validateForm());
    console.log(`seatSelectionEnabled:${seatSelectionEnabled}`);
    if (validateForm()) {
      // Save form data to localStorage
      localStorage.setItem("PaymentInfo", JSON.stringify(formData));
      setSeatSelectionEnabled(true); // Enable the button

      console.log("save done");
    }
  };

  return (
    <Flex direction="column" p={4} mr={80}>
      <Box mb={20}>
        <h2>Payment Information</h2>
        <p>
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
      </Box>

      <Box mb={20}>
        <h3>Payment 1 (Adult)</h3>
        <Flex direction="row" wrap="wrap" gap={2}>
          <FormControl
            id="firstName"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.firstName}
          >
            <FormLabel>First name*</FormLabel>
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="middleName" mb={4} flex="1">
            <FormLabel>Middle</FormLabel>
            <Input
              placeholder="Middle name"
              value={formData.middleName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl
            id="lastName"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.lastName}
          >
            <FormLabel>Last name*</FormLabel>
            <Input
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
        <Flex direction="row" wrap="wrap" gap={2}>
          <FormControl id="suffix" mb={4} flex="1">
            <FormLabel>Suffix</FormLabel>
            <Input
              placeholder="Suffix"
              value={formData.suffix}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl
            id="dob"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.dob}
          >
            <FormLabel>Date of birth*</FormLabel>
            <Input type="date" value={formData.dob} onChange={handleChange} />
            {errors.dob && <FormErrorMessage>{errors.dob}</FormErrorMessage>}
          </FormControl>
          <FormControl mb={4} isRequired flex="1"></FormControl>
        </Flex>
        <Flex direction="row" wrap="wrap" gap={2}>
          <FormControl
            id="email"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.email}
          >
            <FormLabel>Email address*</FormLabel>
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            id="phone"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.phone}
          >
            <FormLabel>Phone number*</FormLabel>
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <FormErrorMessage>{errors.phone}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={4} isRequired flex="1"></FormControl>
        </Flex>
        <Flex direction="row" wrap="wrap" gap={2}>
          <FormControl id="redressNumber" mb={4} flex="1">
            <FormLabel>Redress number</FormLabel>
            <Input
              placeholder="Redress number"
              value={formData.redressNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl
            id="knownTravellerNumber"
            mb={4}
            isRequired
            flex="1"
            isInvalid={errors.knownTravellerNumber}
          >
            <FormLabel>Known traveller number*</FormLabel>
            <Input
              placeholder="Known traveller number"
              value={formData.knownTravellerNumber}
              onChange={handleChange}
            />
            {errors.knownTravellerNumber && (
              <FormErrorMessage>{errors.knownTravellerNumber}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mb={4} isRequired flex="1"></FormControl>
        </Flex>
        
      </Box>

      <Box mb={6}>
        <h3>Bag Information</h3>
        <p>
          Each Payment is allowed one free carry-on bag and one personal item.
          First checked bag for each Payment is also free. Second bag check fees
          are waived for loyalty program members. See the full bag policy.
        </p>
        <FormControl id="checked-bags" mb={4}>
          <FormLabel>Payment 1 Checked bags</FormLabel>
          <Flex align="center" gap={2}>
            <Button
              onClick={() => setNumCheckedBags((prev) => Math.max(prev - 1, 0))}
            >
              -
            </Button>
            <NumberInput
              value={numCheckedBags}
              onChange={(value) => setNumCheckedBags(Number(value))}
              min={0}
              max={10} // Adjust max value as needed
              size="md"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button onClick={() => setNumCheckedBags((prev) => prev + 1)}>
              +
            </Button>
          </Flex>
        </FormControl>
      </Box>

      <Flex
        justify="flex-end"
        margin={10}
        direction="row" // Change direction to column to stack items vertically
        align="flex-end" // Align items to the end
        gap={20} // Add some gap between items
      >
        <Button
          borderColor="#605DEC"
          bg="white"
          color="#605DEC"
          _hover={{ bg: "#f8f9fa" }}
          _active={{ bg: "#e2e6ea", borderColor: "#ccc" }}
          _focus={{ boxShadow: "none", borderColor: "#ddd" }}
          size="md"
          px="24px"
          py="14px"
          borderRadius="0.25rem"
          borderWidth="1px"
          cursor={"pointer"}
          onClick={handleSave}
        >
          Save and close
        </Button>
        <Button
          style={{ border: "1px solid #605DEC" }}
          bg={seatSelectionEnabled ? "#605DEC" : "white"}
          color={seatSelectionEnabled ? "white" : "#605DEC"}
          _hover={{
            bg: seatSelectionEnabled ? "#4a4ac4" : "#e2e6ea",
            borderColor: seatSelectionEnabled ? "#4a4ac4" : "#605DEC",
            color: seatSelectionEnabled ? "white" : "#605DEC",
          }}
          _active={{
            bg: seatSelectionEnabled ? "#3737a1" : "#c2c2c2",
            borderColor: seatSelectionEnabled ? "#3737a1" : "#605DEC",
            color: seatSelectionEnabled ? "white" : "#605DEC",
          }}
          _focus={{
            boxShadow: "0 0 0 2px rgba(96, 93, 236, 0.5)",
            borderColor: seatSelectionEnabled ? "#3737a1" : "#605DEC",
          }}
          size="md"
          px="24px"
          py="14px"
          borderRadius="0.25rem"
          as="a"
          href={seatSelectionEnabled ? "/select-seat" : undefined}
          isDisabled={!seatSelectionEnabled}
          textDecoration="none"
          cursor={seatSelectionEnabled ? "pointer" : "not-allowed"}
        >
          Select seats
        </Button>
      </Flex>
    </Flex>
  );
};

export default PaymentInfoForm;
