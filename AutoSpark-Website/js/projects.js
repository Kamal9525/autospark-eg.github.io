// Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initProjectFilters();
    initProjectModals();
    initProjectAnimations();
});

// Project Filter Functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });
}

// Project Modal Functionality
function initProjectModals() {
    const modal = document.getElementById('projectModal');
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Get project data based on ID
    const projectData = getProjectData(projectId);
    
    // Populate modal content
    modalContent.innerHTML = `
        <div class="modal-header" style="background: var(--gradient-primary); color: white; padding: 2rem; text-align: center;">
            <h2 style="margin: 0; font-size: 2rem;">${projectData.title}</h2>
            <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">${projectData.category}</p>
        </div>
        <div class="modal-body" style="padding: 2rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Project Overview</h4>
                    <p style="color: var(--text-light); line-height: 1.6;">${projectData.description}</p>
                </div>
                <div>
                    <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Project Details</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-light);">Duration:</span>
                            <span style="color: var(--text-dark); font-weight: 500;">${projectData.duration}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-light);">Client:</span>
                            <span style="color: var(--text-dark); font-weight: 500;">${projectData.client}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-light);">Status:</span>
                            <span style="color: var(--accent-color); font-weight: 500;">${projectData.status}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Technologies Used</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${projectData.technologies.map(tech => `<span style="background: var(--accent-color); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.875rem;">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--text-dark); margin-bottom: 1rem;">Key Achievements</h4>
                <ul style="color: var(--text-light); line-height: 1.6; padding-left: 1.5rem;">
                    ${projectData.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            
            <div style="text-align: center; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                <a href="Company Profile/Autosprk Company profile .pdf" class="btn btn-accent" download style="margin-right: 1rem;">
                    <i class="fas fa-download"></i> Download Full Profile
                </a>
                <a href="index.html#contact" class="btn btn-primary">
                    <i class="fas fa-envelope"></i> Contact Us
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Project Data
function getProjectData(projectId) {
    const projects = {
        'pg-project': {
            title: 'Procter & Gamble Partnership',
            category: 'Control Systems & Automation',
            description: 'Automation projects for Procter & Gamble optimized efficiency, reduced downtime, and minimized waste through advanced motion control and PLC programming, implemented globally and locally. This ongoing partnership involves continuous support, system upgrades, and implementation of new technologies to optimize production processes.',
            duration: 'Ongoing (2+ years)',
            client: 'Procter & Gamble Egypt',
            status: 'Active',
            technologies: ['Motion Control', 'PLC Programming', 'SCADA Systems', 'HMI Development', 'System Integration', 'Global Implementation'],
            achievements: [
                'Optimized efficiency and reduced downtime',
                'Minimized waste through advanced control',
                'Implemented globally and locally',
                'Successfully integrated multiple production lines',
                'Achieved 99.5% system reliability'
            ]
        },
        'bapteco-project': {
            title: 'BAPTECO SCADA System',
            category: 'SCADA Systems',
            description: 'A comprehensive SCADA system designed to monitor and control two compressors for Badr El-Din Petroleum Company. The system features real-time data visualization, efficient alarm management for over 1,000 alarms, and seamless communication via Modbus protocol, enhancing operational reliability.',
            duration: '8 months',
            client: 'BAPTECO (Badr El-Din Petroleum Co.)',
            status: 'Completed',
            technologies: ['SCADA Systems', 'Modbus Protocol', 'Alarm Management', 'Real-time Monitoring', 'Data Visualization'],
            achievements: [
                'Managed over 1,000 alarms efficiently',
                'Implemented real-time data visualization',
                'Enhanced operational reliability',
                'Seamless Modbus communication',
                'Comprehensive compressor monitoring'
            ]
        },
        'givaudan-project': {
            title: 'Givaudan Consulting',
            category: 'Consulting Services',
            description: 'Consulting projects for Givaudan focused on system upgrades and optimization. Responsibilities included conducting detailed needs assessments, preparing technical tenders, and developing comprehensive Bills of Materials, ensuring efficient and tailored solutions.',
            duration: '6 months',
            client: 'Givaudan',
            status: 'Completed',
            technologies: ['System Upgrades', 'Technical Consulting', 'Tender Preparation', 'BOM Development', 'Needs Assessment'],
            achievements: [
                'Conducted detailed needs assessments',
                'Prepared comprehensive technical tenders',
                'Developed detailed Bills of Materials',
                'Optimized existing systems',
                'Delivered tailored solutions'
            ]
        },
        'general-petroleum-project': {
            title: 'General Petroleum Fire Safety',
            category: 'Safety Systems',
            description: 'Development of a state-of-the-art firefighting control panel for the General Petroleum Company, incorporating SIL 2-rated PLCs, HMI, and SCADA systems. The solution enhanced safety through efficient control of foam and water valves, ensuring rapid and reliable response during emergencies.',
            duration: '4 months',
            client: 'General Petroleum Company',
            status: 'Completed',
            technologies: ['SIL 2 Safety', 'Fire Safety Systems', 'Emergency Response', 'Safety PLCs', 'HMI Development'],
            achievements: [
                'Implemented SIL 2-rated safety systems',
                'Enhanced emergency response capabilities',
                'Efficient foam and water valve control',
                'Rapid and reliable emergency response',
                'Comprehensive safety monitoring'
            ]
        },
        'pepsico-project': {
            title: 'Pepsico (Chipsy) Production Line',
            category: 'Production Automation',
            description: 'Installation of a TC production line for Chipsy, covering end-to-end implementation, including electrical and control system integration. Ensured seamless operation and adherence to quality and safety standards.',
            duration: '5 months',
            client: 'Pepsico (Chipsy)',
            status: 'Completed',
            technologies: ['Production Line', 'System Integration', 'Quality Standards', 'Food Industry', 'Electrical Integration'],
            achievements: [
                'End-to-end production line implementation',
                'Seamless electrical and control integration',
                'Adherence to quality standards',
                'Food industry compliance',
                'Optimized production efficiency'
            ]
        },
        'control-systems-project': {
            title: 'Advanced Control Solutions',
            category: 'Control Systems',
            description: 'Implementation of cutting-edge control systems for various industrial applications across Egypt. This project involved designing, programming, and commissioning PLC-based control systems for multiple manufacturing clients.',
            duration: '6 months',
            client: 'Multiple Industrial Clients',
            status: 'Completed',
            technologies: ['PLC Programming', 'HMI Development', 'System Design', 'Control Logic', 'Safety Systems'],
            achievements: [
                'Delivered 15+ control system implementations',
                'Achieved 100% client satisfaction',
                'Reduced commissioning time by 30%',
                'Implemented advanced safety protocols',
                'Created reusable control system templates'
            ]
        },
        'automation-project': {
            title: 'Process Automation Solutions',
            category: 'Industrial Automation',
            description: 'Complete automation solutions designed to optimize industrial processes, increase efficiency, and reduce operational costs for manufacturing clients. This project focused on end-to-end automation implementation.',
            duration: '4 months',
            client: 'Manufacturing Clients',
            status: 'Completed',
            technologies: ['Process Automation', 'Machine Integration', 'Data Acquisition', 'Performance Monitoring', 'SCADA Systems'],
            achievements: [
                'Automated 8 production processes',
                'Reduced manual labor by 60%',
                'Improved process consistency by 35%',
                'Implemented real-time monitoring',
                'Achieved 20% cost reduction'
            ]
        },
        'consulting-project': {
            title: 'Technical Analysis & Planning',
            category: 'Engineering Consulting',
            description: 'Expert engineering consultation and project management for complex industrial projects. This involved technical analysis, risk assessment, and implementation support for various engineering challenges.',
            duration: '3 months',
            client: 'Various Industries',
            status: 'Completed',
            technologies: ['Project Planning', 'Technical Analysis', 'Risk Assessment', 'Implementation Support', 'Documentation'],
            achievements: [
                'Completed 12 consulting projects',
                'Identified cost savings of $500K+',
                'Reduced project risks by 45%',
                'Improved project delivery times',
                'Created comprehensive documentation'
            ]
        },
        'maintenance-project': {
            title: '24/7 Support Services',
            category: 'Maintenance & Support',
            description: 'Comprehensive maintenance services and ongoing support for engineering systems, ensuring optimal performance and minimal downtime. This includes preventive maintenance, emergency support, and system upgrades.',
            duration: 'Ongoing',
            client: 'All Clients',
            status: 'Active',
            technologies: ['Preventive Maintenance', '24/7 Support', 'System Upgrades', 'Training Programs', 'Remote Monitoring'],
            achievements: [
                'Maintained 99.8% system uptime',
                'Reduced emergency calls by 50%',
                'Implemented predictive maintenance',
                'Trained 50+ client personnel',
                'Achieved 100% response time targets'
            ]
        },
        'tech-integration-project': {
            title: 'Cutting-edge Implementations',
            category: 'Technology Integration',
            description: 'Integration of latest technologies and systems to provide innovative solutions that meet modern industrial requirements and standards. This project focused on implementing next-generation technologies.',
            duration: '5 months',
            client: 'Tech-forward Clients',
            status: 'Completed',
            technologies: ['Technology Integration', 'Innovation', 'Modern Solutions', 'IoT Integration', 'Cloud Systems'],
            achievements: [
                'Integrated 10+ new technologies',
                'Improved system connectivity by 80%',
                'Implemented IoT monitoring',
                'Achieved future-ready architecture',
                'Reduced integration time by 40%'
            ]
        }
    };
    
    return projects[projectId] || projects['pg-project'];
}

// Project Animations
function initProjectAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
