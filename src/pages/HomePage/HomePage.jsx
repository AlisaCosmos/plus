import "./HomePage.scss";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import FiveSteps from "../../components/FiveSteps/FiveSteps";
import FactoringIs from "../../components/FactoringIs/FactoringIs";
import Interaction from "../../components/Interaction/Interaction";
import CasesWithDocuments from "../../components/CasesWithDocuments/CasesWithDocuments";
import Contacts from "../../components/Contacts/Contacts";
import CostOfFactoring from "../../components/CostOfFactoring/CostOfFactoring";
import Advantages from "../../components/Advantages/Advantages";
import ReverseFactoring from "../../components/ReverseFactoring/ReverseFactoring";
import FrequentQuestions from "../../components/FrequentQuestions/FrequentQuestions";

function HomePage({ handleCalculatorModal, handleRequestModal }) {

  return (
    <div className="homePage">
      <FirstScreen
        page="home"
        description="Все виды факторинга, все регионы России, получите выгодные условия на факторинг."
        buttonRequest={true}
        buttonCalculate={true}
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal}>
        Факторинг для поставщиков <br /> и покупателей
      </FirstScreen>
      <FiveSteps
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal} />
      <Advantages />
      <CostOfFactoring id="factoring" />
      <ReverseFactoring />
      {/* <FactoringIs id="factoring" /> */}
      <Interaction
        id="scheme"
        handleCalculatorModal={handleCalculatorModal}
        handleRequestModal={handleRequestModal} />
      <CasesWithDocuments />
      <FrequentQuestions />
      <Contacts id="contact-info" />
    </div>
  );
}

export default HomePage;
