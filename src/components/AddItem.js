import Navigation from './Navigation';

const AddItem = () => (
  <>
    <div className="flex flex-row h-[100dvh] justify-center md:w-[100dvw] md:flex md:flex-row">
      <div className="md:flex md:w-[15%]">
        <Navigation />
      </div>
      <div className="flex flex-col md:w-[85%] w-[100%] bg-white justify-center items-center ">
        <h1>Add Doctor</h1>
      </div>
    </div>
  </>
);

export default AddItem;
