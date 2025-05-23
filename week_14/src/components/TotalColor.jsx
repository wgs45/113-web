const TotalColor = ({ array }) => {
  return (
    <>
      <h2>All selected colors: </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {array.map((value, index) => {
          return (
            <span
              key={index}
              style={{
                backgroundColor: value,
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '8px',
                minWidth: '60px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {value}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TotalColor;
