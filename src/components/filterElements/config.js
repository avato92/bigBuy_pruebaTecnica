export const SX_BOX = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 1,
  m: 1,
  bgcolor: 'background.paper',
  borderRadius: 1,
};

export const SX_BOX_INSIDE = {
  width: 300, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
};

export const SX_INPUT = {
  maxWidth: 200,
  borderRight: '1px solid black',
  borderLeft: '1px solid black',
  borderTop: '1px solid black',
  pl: 1,
  boxShadow: '0px 3px 10px 0px #D8D8D899',
  borderRadius: '4px',
};

export const SX_BUTTON = {
  maxWidth: '37px', backgroundColor: '#0090FF',
};

export const SX_BUTTON_ADD = {
  backgroundColor: '#FFCE33', m: 2, color: 'black', maxHeight: '38px',
};

export const SX_SPAN = {
  textTransform: 'lowercase',
};

export const SX_SLIDER = {
  width: 300, mt: 1,
};

export const SX_P = {
  marginLeft: '9px',
};

export const SX_ICON = {
  mr: 1,
};

export const MAX_SLIDER = 5000;

export const CONFIG_FORM = [
  {
    label: 'Nombre', id: 'inputName', valueName: 'name', type: 'text', childId: 0,
  },
  {
    label: 'Email', id: 'inputEmail', valueName: 'email', type: 'text', childId: 1,
  },
  {
    label: 'Edad', id: 'inputAge', valueName: 'age', type: 'number', childId: 2,
  },
  {
    label: 'Salario', id: 'inputSalary', valueName: 'salary', type: 'number', childId: 3,
  },
];
