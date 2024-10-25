/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import withModal from "../../withModal";
import Button from "../../../button";
import Input from "../../../input";

interface EditRateModalProps {
  onClose: () => void;
  onEditRate: (rateData: any) => void;
  initialRateData: {
    rateType: string;
    deal: string;
    price: string;
    availability: string;
  };
}

function EditRateModal({
  onClose,
  onEditRate,
  initialRateData = { rateType: "", deal: "", price: "", availability: "" },
}: EditRateModalProps) {
  const [rateType, setRateType] = useState(initialRateData.rateType || "");
  const [deal, setDeal] = useState(initialRateData.deal || "");
  const [price, setPrice] = useState(initialRateData.price || "");
  const [availability, setAvailability] = useState(
    initialRateData.availability || ""
  );

  useEffect(() => {
    if (initialRateData) {
      setRateType(initialRateData.rateType || "");
      setDeal(initialRateData.deal || "");
      setPrice(initialRateData.price || "");
      setAvailability(initialRateData.availability || "");
    }
  }, [initialRateData]);

  const handleSubmit = () => {
    if (!rateType || !deal || !price || !availability) {
      alert("Please fill in all fields.");
      return;
    }
    const updatedRateData = { rateType, deal, price, availability };
    onEditRate(updatedRateData);
    onClose();
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white.200">
        <ModalHeader>Edit Rate</ModalHeader>
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Rate Type</FormLabel>
            <Input
              value={rateType}
              onChange={(e) => setRateType(e.target.value)}
              placeHolder={""}
              inputType={"first"}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Deal</FormLabel>
            <Input
              value={deal}
              onChange={(e) => setDeal(e.target.value)}
              placeHolder={""}
              inputType={"first"}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Price</FormLabel>
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeHolder={""}
              inputType={"first"}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Availability</FormLabel>
            <Input
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeHolder={""}
              inputType={"first"}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            text={"Cancel"}
            buttonType={"cancelButton"}
          />
          <Button onClick={handleSubmit} text={"Add"} buttonType={"first"} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default withModal(EditRateModal, "Edit");
