import FormWrapper from "./FormWrapper/FormWrapper";

type UserData = {
  street: string;
  city: string;
  province: string;
  postalCode: string;
};

type AccountFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddressForm = ({
  street,
  city,
  province,
  postalCode,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Province</label>
      <input
        required
        type="text"
        value={province}
        onChange={(e) => updateFields({ province: e.target.value })}
      />
      <label>Postal Code</label>
      <input
        required
        type="text"
        value={postalCode}
        onChange={(e) => updateFields({ postalCode: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
