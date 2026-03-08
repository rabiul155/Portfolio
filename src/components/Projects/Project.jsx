import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaProjectDiagram } from "react-icons/fa";

export default function ProjectTimeline() {
  return (
    <div id="project" className="py-8">
      <h2 className="text-2xl font-bold text-center py-8 text-brand">
        Featured Projects
      </h2>

      <VerticalTimeline>
        {/* Healthcare Management System */}
        <VerticalTimelineElement
          icon={<FaProjectDiagram />}
          iconStyle={{ background: "#2563eb", color: "#fff" }}
          date="Backend Project"
        >
          <h3 className="font-bold text-lg">Healthcare Management System</h3>

          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>
              Developed a modular healthcare backend architecture (Admin, Auth,
              Doctor, Specialties, User)
            </li>
            <li>
              Implemented JWT-based authentication and role-based access control
              (RBAC)
            </li>
            <li>
              Designed RESTful APIs for managing users, doctors, and medical
              specialties
            </li>
          </ul>

          <p className="mt-3 text-sm">
            <strong>Tech:</strong> Express.js, PostgreSQL, Prisma
          </p>

          <a
            href="https://github.com/rabiul155/health-care-server"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm mt-2 inline-block"
          >
            GitHub (Server)
          </a>
        </VerticalTimelineElement>

        {/* E_Trade */}
        <VerticalTimelineElement
          icon={<FaProjectDiagram />}
          iconStyle={{ background: "#16a34a", color: "#fff" }}
          date="Full Stack Project"
        >
          <img
            src="/projects/e-trade.png"
            alt="E Trade"
            className="rounded-lg mb-4"
          />

          <h3 className="font-bold text-lg">
            E_Trade – Full Stack E-commerce Platform
          </h3>

          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Implemented a responsive and modern UI</li>
            <li>Implemented role-based access control for Admin and User</li>
            <li>Integrated Redux for centralized state management</li>
          </ul>

          <p className="mt-3 text-sm">
            <strong>Tech:</strong> Next.js, Redux, Express.js, MongoDB
          </p>

          <div className="flex gap-3 mt-2 text-sm">
            <a
              href="https://e-trade-e-commerce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Live
            </a>
            <a
              href="https://github.com/rabiul155/e-Trade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Client
            </a>
            <a
              href="https://github.com/rabiul155/e-Trade-server-mongoose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Server
            </a>
          </div>
        </VerticalTimelineElement>

        {/* Car Doctor */}
        <VerticalTimelineElement
          icon={<FaProjectDiagram />}
          iconStyle={{ background: "#9333ea", color: "#fff" }}
          date="Full Stack Project"
        >
          <img
            src="/projects/car-doctor.png"
            alt="Car Doctor"
            className="rounded-lg mb-4"
          />

          <h3 className="font-bold text-lg">
            Car Doctor – Car Service Management Platform
          </h3>

          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Built web application with Redux global state management</li>
            <li>Implemented JWT authentication and secure authorization</li>
            <li>Added cart system with pagination, sorting and search</li>
          </ul>

          <p className="mt-3 text-sm">
            <strong>Tech:</strong> React.js, Redux, Express.js, MongoDB
          </p>

          <div className="flex gap-3 mt-2 text-sm">
            <a
              href="https://car-wash-client-plum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Live
            </a>
            <a
              href="https://github.com/rabiul155/car-wash-client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Client
            </a>
            <a
              href="https://github.com/rabiul155/car-wash-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Server
            </a>
          </div>
        </VerticalTimelineElement>

        {/* Best Sell BD */}
        <VerticalTimelineElement
          icon={<FaProjectDiagram />}
          iconStyle={{ background: "#f59e0b", color: "#fff" }}
          date="Marketplace Project"
        >
          <img
            src="/projects/best-sale.png"
            alt="Best Sell BD"
            className="rounded-lg mb-4"
          />

          <h3 className="font-bold text-lg">
            Best Sell BD – Second-Hand Marketplace
          </h3>

          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Built dashboards for Buyers, Sellers, and Admins</li>
            <li>Implemented Firebase + JWT authentication</li>
            <li>Integrated secure payment gateway</li>
          </ul>

          <p className="mt-3 text-sm">
            <strong>Tech:</strong> React.js, Tailwind, Express.js, MongoDB,
            Firebase
          </p>

          <div className="flex gap-3 mt-2 text-sm">
            <a
              href="https://laptop-resale.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Live
            </a>
            <a
              href="https://github.com/rabiul155/Best-Sell-BD-client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Client
            </a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
