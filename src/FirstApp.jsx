import PropTypes from 'prop-types'
const name = {
  name: 'Yasiel',
  apellidos: 'Valdes',
};

export const FirstApp = ({title}) => {
  return (
    <>
      <h1>{name.name}</h1>
      <p> Messi {title}</p>
    </>
  );
};
