import SideBar from './SideBar';
import Feed from './Feed';

export default function Content() {
  return (
    <div className="corpo">
      <Feed />
      <SideBar />
    </div>
  );
}
