import CersCards from "./cers-cards/CersCards";
import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";

interface HomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Home({ showForm, setShowForm }: HomeProps) {
  return (
    <div>
      <Welcome showForm={showForm} setShowForm={setShowForm} />
      {!showForm && (
        <>
          <NetworkInfo />
          <CersCards />
        </>
      )}
    </div>
  );
}
