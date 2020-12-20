export interface PayloadProps {
  value: any;
}

export interface ActionProps {
  type: string;
  payload: PayloadProps;
}

export interface InitialValueProps {
  user?: any;
}

export const initialValue: InitialValueProps = {
  user: null,
}

function Reducer(
  state: InitialValueProps = initialValue,
  action: ActionProps
): InitialValueProps {
  switch (action.type) {
    case "SET_USER": {
      const { value } = action.payload;

      return {
        ...state,
        user: value
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

export default Reducer;
