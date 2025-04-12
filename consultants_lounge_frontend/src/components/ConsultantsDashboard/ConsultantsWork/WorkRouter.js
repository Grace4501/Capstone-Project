import { useParams } from 'react-router-dom';
import WorkInvites from './WorkInvites.js';
import CurrentProjects from './WorkProjects.js';
import NewProjects from './WorkNewProjects.js';
import Reviews from './WorkReviews.js';
import Invoices from './WorkInvoices.js';
import ProjectHistory from './WorkHistory.js';

export default function WorkRouter() {
  const { tab } = useParams();

  switch (tab) {
    case 'current':
      return <CurrentProjects />;
    case 'new':
      return <NewProjects />;
    case 'reviews':
      return <Reviews />;
    case 'invoices':
      return <Invoices />;
    case 'history':
      return <ProjectHistory />;
    case 'invites':
    default:
      return <WorkInvites />;
  }
}
