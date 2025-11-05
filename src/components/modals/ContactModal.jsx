import React from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const rows = [
  [
    'Account Management',
    '1. John Smith (john.smith@example.com)\n2. Alice Green (alice.g@example.com)\n3. Tom Wilson (tom.wilson@example.com)',
    'Account Management team is responsible for overseeing client accounts and ensuring optimal service delivery. Our primary focus includes account configuration, user permission management, and maintaining strong client relationships. We handle account lifecycle management from onboarding to offboarding, providing customized solutions based on client requirements. The team also monitors account performance metrics and implements improvement strategies to enhance user experience and satisfaction.'
  ],
  [
    'Website Management',
    '1. Sarah Johnson (sarah.j@example.com)\n2. Michael Brown (michael.b@example.com)\n3. Jessica Lee (jessica.lee@example.com)',
    'The Website Management team specializes in maintaining and optimizing our digital platforms. Our responsibilities include content updates, performance monitoring, security implementation, and user experience enhancements. We ensure website availability and functionality while implementing SEO best practices. The team collaborates with various departments to align web presence with organizational goals, utilizing analytics to drive data-informed decisions for continuous improvement of our online services and digital customer engagement strategies.'
  ],
  [
    'Creative Services',
    '1. Mike Davis (mike.davis@example.com)\n2. Sophia Chen (sophia.chen@example.com)\n3. Daniel Kim (daniel.kim@example.com)',
    'Creative Services provides comprehensive design and visual content solutions across all digital platforms. Our expertise spans graphic design, video production, branding development, and multimedia content creation. We work closely with marketing and product teams to deliver compelling visual narratives that enhance brand identity and user engagement. The team utilizes industry-standard tools and follows design thinking methodologies to create innovative solutions that meet both aesthetic standards and functional requirements for various projects and campaigns.'
  ],
  [
    'DMS',
    '1. Emily Wilson (emily.wilson@example.com)\n2. Robert Taylor (robert.t@example.com)\n3. Olivia Martinez (olivia.m@example.com)',
    'The Document Management System (DMS) team oversees the organization, storage, and retrieval of digital documents across the enterprise. We implement and maintain document workflow solutions, version control systems, and access management protocols. Our focus includes ensuring document security, compliance with data protection regulations, and optimizing search functionality. The team provides training and support for document management best practices, while continuously enhancing system capabilities to improve efficiency and collaboration among different departments and stakeholders.'
  ],
  [
    'I&A Messaging',
    '1. David Brown (david.b@example.com)\n2. Lisa Wang (lisa.wang@example.com)\n3. Kevin Zhang (kevin.zhang@example.com)',
    'Information & Announcement Messaging team manages internal and external communication channels and notification systems. We develop and maintain messaging platforms that facilitate real-time communication, alert dissemination, and information sharing. Our services include email systems, instant messaging solutions, push notifications, and broadcast messaging. The team ensures message delivery reliability, implements spam prevention measures, and provides analytics on communication effectiveness. We also develop integration solutions to connect messaging systems with other enterprise applications for seamless information flow.'
  ],
  [
    'Digital Solution',
    '1. Lisa Taylor (lisa.t@example.com)\n2. Andrew Clark (andrew.clark@example.com)\n3. Megan Harris (megan.harris@example.com)',
    'Digital Solutions team designs and implements technology-driven solutions to address business challenges and opportunities. We specialize in developing customized software applications, system integrations, and digital transformation initiatives. Our approach combines technical expertise with business acumen to deliver solutions that improve efficiency, enhance customer experiences, and drive innovation. The team follows agile methodologies and employs user-centered design principles to ensure solutions meet both functional requirements and user needs while maintaining scalability and maintainability for future growth and adaptation.'
  ],
  [
    'Digital Innovations',
    '1. Robert Lee (robert.lee@example.com)\n2. Natalie Scott (natalie.scott@example.com)\n3. Brian Adams (brian.adams@example.com)',
    'Digital Innovations team focuses on researching and implementing emerging technologies to maintain competitive advantage and drive future growth. We explore artificial intelligence, machine learning, blockchain, IoT, and other cutting-edge technologies to identify innovative applications for business improvement. The team conducts proof-of-concept projects, technology assessments, and innovation workshops to foster creative thinking and technological advancement. We collaborate with various departments to identify innovation opportunities and develop strategic roadmaps for technology adoption and digital transformation initiatives.'
  ],
  [
    'COS',
    '1. Jennifer White (jennifer.w@example.com)\n2. Steven Baker (steven.baker@example.com)\n3. Amanda Young (amanda.young@example.com)',
    'Customer Operations Support (COS) team provides comprehensive support services to ensure customer satisfaction and operational excellence. We handle customer inquiries, issue resolution, service requests, and feedback management. Our responsibilities include developing support protocols, training support staff, and implementing customer service best practices. The team utilizes CRM systems and support ticketing platforms to track and manage customer interactions, while continuously analyzing support metrics to identify improvement opportunities and enhance overall customer experience across all touchpoints and service channels.'
  ],
];

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Us" size="large">
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Team</th>
              <th>Contact point</th>
              <th>Brief information</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx}>
                <td>{r[0]}</td>
                <td>{r[1].split('\n').map((line, i) => (<div key={i}>{line}</div>))}</td>
                <td style={{whiteSpace: 'pre-wrap'}}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default ContactModal;


