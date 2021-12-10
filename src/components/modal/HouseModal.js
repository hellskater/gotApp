// STYLESHEET
import "./HouseModal.css";

function HouseModal({ Modal, house }) {
  return (
    <div>
      <Modal>
        <div className="modal">
          {/* Only if the data is available then we show the fields in the modal */}
          {house.name && (
            <>
              <h1>{house.name}</h1>
              <p className="header">Region:</p>
              <p className="answer">{house.region}</p>
              <p className="header">Titles:</p>
              <p className="answer">{house.titles}</p>
              <p className="header">Founded:</p>
              <p className="answer">{house.founded}</p>
              <p className="header">Words:</p>
              <p className="answer">{house.words}</p>
              <p className="header">Coat Of Arms:</p>
              <p className="answer">{house.coatOfArms}</p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default HouseModal;
