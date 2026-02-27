import NetworkInfo from "./network-info/NetworkInfo";
import Welcome from "./welcome-page/Welcome";

interface HomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function Home({
  showForm,
  setShowForm,
  showFlow,
  setShowFlow,
}: HomeProps) {
  if (showFlow[0]) {
    return (
      <div>
        <CersCards showFlow={showFlow} setShowFlow={setShowFlow} />
      </div>
    );
  }
  return (
    <div>
      <Welcome showForm={showForm} setShowForm={setShowForm} />
      {!showForm && (
        <>
          <NetworkInfo showFlow={showFlow} setShowFlow={setShowFlow} />
        </>
      )}
    </div>
  );
}
