const Input = ({ searchBooks }) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='type here...'
            autoComplete='off'
            className='input'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='btn'>
            search
          </button>
        </form>
      </div>
    );
  };
  export default Input;