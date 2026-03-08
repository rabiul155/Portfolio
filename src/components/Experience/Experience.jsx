import { FaCity, FaWordpress } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div className="pt-6" id="experience">
      <h2 className=" text-2xl text-brand font-bold text-center py-8">
        Professional Experience
      </h2>

      <VerticalTimeline>
        {/* GreenBud */}
        <VerticalTimelineElement
          icon={<FaCity />}
          date="Jan 2024 – Present"
          iconStyle={{ background: "#2563eb", color: "#fff" }}
        >
          <h3 className="font-bold text-lg">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">GreenBud</h4>

          <ul className="list-disc ml-5 mt-3 space-y-1">
            <li>
              Developed multi-level dynamic forms with complex validation and
              nested structures
            </li>
            <li>
              Built interactive charts to visualize ESG metrics and
              sustainability performance
            </li>
            <li>
              Implemented complex state management using React Context and
              Zustand
            </li>
            <li>
              Utilized TanStack Query with Axios for API handling including
              caching and error handling
            </li>
            <li>
              Collaborated with product teams to translate ESG compliance logic
              into intuitive UI workflows
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Repliq */}
        <VerticalTimelineElement
          icon={<FaCity />}
          date="May 2023 – Dec 2023"
          iconStyle={{ background: "#16a34a", color: "#fff" }}
        >
          <h3 className="font-bold text-lg">Software Developer (Frontend)</h3>
          <h4 className="vertical-timeline-element-subtitle">Repliq Limited</h4>

          <ul className="list-disc ml-5 mt-3 space-y-1">
            <li>
              Built and validated forms using Formik and Yup for efficient state
              management
            </li>
            <li>
              Implemented API fetching using Axios with proper error handling
              and data integration
            </li>
            <li>
              Practiced building clean, responsive UIs and structured reusable
              components
            </li>
            <li>
              Learned and practiced Git and GitHub workflows including branching
              and pull requests
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
