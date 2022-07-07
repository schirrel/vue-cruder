const fieldValidator = {
  required: {
    createProps: () => {
      return { required: true };
    },
  },
  empty: {
    createProps: () => {
      return { required: true };
    },
    validator: (value: string | null | undefined) => {
      return (
        (value && value?.toString?.().length > 0) ||
        value != null ||
        value != undefined ||
        (value && value != "")
      );
    },
  },
  maxvalue: {
    createProps: (value: string) => {
      return { max: value };
    },
  },
  minvalue: {
    createProps: (value: string) => {
      return { min: value };
    },
  },
  maxlength: {
    createProps: (value: string) => {
      return { maxlength: value };
    },
  },
  minlength: {
    createProps: (value: string) => {
      return { minlength: value };
    },
  },
};

export const buildValidations = (validations: string[]): any => {
  const validationProps: any[] = [];

  validations.forEach((validation) => {
    const validator = fieldValidator as any;
    const parts = validation.split(":");
    const validationName: string = parts[0];
    const value = parts[1];

    if (validator[validationName]) {
      validationProps.push(validator[validationName].createProps(value));
    }
  });


  const mapped = validationProps.map(item => item);
  const finalValidation = Object.assign({}, ...mapped);
  return finalValidation;
};
