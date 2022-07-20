import classes from './Top.module.css';

const InformationHeader = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>Name</li>
        <li>Avatar</li>
        <li>Origin</li>
        <li>Episodes</li>
        <li>Status</li>
      </ul>
    </div>
  );
};

export default InformationHeader;
