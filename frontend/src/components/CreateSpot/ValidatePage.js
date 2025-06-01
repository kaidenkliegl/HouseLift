//Validation errors for form



export const validatePage1 = ({ country, address, city, state }) => {
  const errors = {};

  if (!address.trim()) errors.address = "An address is required.";
  if (!city.trim()) errors.city = "Valid city required.";
  if (!state.trim()) errors.state = "Valid state required.";
  if (!country.trim()) errors.country = "Valid country required.";

  return errors;
};

export const validatePage2 = ({ name, description, price }) => {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  } else if (name.length > 50) {
    errors.name = "Name must not exceed 50 characters.";
  }

  if (!description.trim()) {
    errors.description = "Description is required.";
  } else if (description.length < 30) {
    errors.description = "Description must be at least 30 characters.";
  }

  if (!price || isNaN(price) || Number(price) < 0.1) {
    errors.price = "Price must be a positive number.";
  }

  return errors;
};

export const validatePage3 = (images) => {
  const errors = {};
  let hasPreview = false;
  images.forEach((img, index) => {
    if (!img.url.trim()) {
      errors[`image-${index}`] = `Image URL is required.`;
    }
    if (img.preview) {
      hasPreview = true;
    }
  });


  

  if (!hasPreview) {
    errors.preview = "Please select one image as the preview.";
  }

  return errors;
};
