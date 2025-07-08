import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaDownload, FaBook, FaFlask, FaUsers } from 'react-icons/fa';

interface ResearchProject {
    id: string;
    title: string;
    description: string;
    status: 'Active' | 'Completed' | 'On Hold';
    startDate: string;
    endDate: string;
    funding: string;
    collaborators: string[];
    type: 'Individual' | 'Collaborative' | 'Funded';
}

interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: string;
    type: 'Journal' | 'Conference' | 'Book Chapter';
    status: 'Published' | 'Under Review' | 'In Progress';
    doi?: string;
}

const Research: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'projects' | 'publications'>('projects');
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showPublicationForm, setShowPublicationForm] = useState(false);
    const [editProject, setEditProject] = useState<ResearchProject | null>(null);
    const [editPublication, setEditPublication] = useState<Publication | null>(null);
    const [projectForm, setProjectForm] = useState<Omit<ResearchProject, 'id' | 'type'>>({
        title: '', description: '', status: 'Active', startDate: '', endDate: '', funding: '', collaborators: []
    });
    const [publicationForm, setPublicationForm] = useState<Omit<Publication, 'id' | 'type'>>({
        title: '', authors: [], journal: '', year: '', status: 'Published', doi: ''
    });

    const [projects, setProjects] = useState<ResearchProject[]>([
        {
            id: '1',
            title: 'AI-Powered Educational Assessment',
            description: 'Developing an AI system for automated assessment of student assignments and providing personalized feedback.',
            status: 'Active',
            startDate: '2024-01-01',
            endDate: '2024-12-31',
            funding: '$50,000',
            collaborators: ['Dr. Sarah Wilson', 'Dr. John Doe', 'Prof. Jane Smith'],
            type: 'Funded'
        },
        {
            id: '2',
            title: 'Blockchain in Academic Records',
            description: 'Implementing blockchain technology for secure and transparent academic record management.',
            status: 'Active',
            startDate: '2024-03-01',
            endDate: '2025-02-28',
            funding: '$30,000',
            collaborators: ['Dr. Mike Johnson', 'Dr. Lisa Brown'],
            type: 'Collaborative'
        },
        {
            id: '3',
            title: 'Machine Learning in Student Performance Prediction',
            description: 'Using machine learning algorithms to predict student performance and identify at-risk students.',
            status: 'On Hold',
            startDate: '2023-09-01',
            endDate: '2024-08-31',
            funding: 'Self-funded',
            collaborators: ['Dr. Sarah Wilson'],
            type: 'Individual'
        }
    ]);

    const [publications, setPublications] = useState<Publication[]>([
        {
            id: '1',
            title: 'Artificial Intelligence in Education: A Comprehensive Review',
            authors: ['Sarah Wilson', 'John Doe', 'Jane Smith'],
            journal: 'International Journal of Educational Technology',
            year: '2024',
            type: 'Journal',
            status: 'Published',
            doi: '10.1234/ijed.2024.001'
        },
        {
            id: '2',
            title: 'Blockchain Technology for Academic Credentials',
            authors: ['Sarah Wilson', 'Mike Johnson'],
            journal: 'IEEE Education Conference 2024',
            year: '2024',
            type: 'Conference',
            status: 'Under Review'
        },
        {
            id: '3',
            title: 'Machine Learning Applications in Student Success',
            authors: ['Sarah Wilson'],
            journal: 'Handbook of Educational Technology',
            year: '2024',
            type: 'Book Chapter',
            status: 'In Progress'
        }
    ]);

    const [deleteTarget, setDeleteTarget] = useState<{ type: 'project' | 'publication', id: string } | null>(null);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
            case 'Published':
                return 'bg-[#C71585] text-white'; // Magenta bg, white text
            case 'Completed':
                return 'bg-[#F7C873] text-[#490548]'; // Gold bg, deep purple text
            case 'On Hold':
            case 'Under Review':
                return 'bg-[#E6A2FF] text-[#490548]'; // Light purple bg, deep purple text
            case 'In Progress':
                return 'bg-[#8D38A8] text-white'; // Deep purple bg, white text
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleView = (item: any) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Research Management</h1>
                <button className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8] flex items-center" onClick={() => activeTab === 'projects' ? setShowProjectForm(true) : setShowPublicationForm(true)}>
                    <FaPlus className="mr-2" />
                    {activeTab === 'projects' ? 'New Project' : 'New Publication'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'projects'
                        ? 'bg-[#C71585] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    onClick={() => setActiveTab('projects')}
                >
                    <FaFlask className="mr-2" />
                    Research Projects
                </button>
                <button
                    className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'publications'
                        ? 'bg-[#C71585] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    onClick={() => setActiveTab('publications')}
                >
                    <FaBook className="mr-2" />
                    Publications
                </button>
            </div>

            {/* Content */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {activeTab === 'projects' ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Project Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Duration
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Funding
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50">
                                        <td className="px-2 py-4">
                                            <div className="text-sm font-medium text-gray-900">{project.title}</div>
                                            <div className="text-sm text-gray-500 mt-1">{project.description}</div>
                                            <div className="flex items-center text-sm text-gray-500 mt-2">
                                                <FaUsers className="mr-1" />
                                                {project.collaborators.length} collaborators
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{project.startDate}</div>
                                            <div className="text-sm text-gray-500">to {project.endDate}</div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{project.funding}</div>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-3">
                                                <button onClick={() => handleView(project)} className="text-[#C71585] hover:text-[#8D38A8]">
                                                    <FaEye className="w-5 h-5" />
                                                </button>
                                                <button onClick={() => { setEditProject(project); setProjectForm({ ...project }); setShowProjectForm(true); }} className="text-[#F7C873] hover:text-[#C71585]">
                                                    <FaEdit className="w-5 h-5" />
                                                </button>
                                                <button onClick={() => setDeleteTarget({ type: 'project', id: project.id })} className="text-red-600 hover:text-red-900">
                                                    <FaTrash className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Publication Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {publications.map((publication) => (
                                    <tr key={publication.id} className="hover:bg-gray-50">
                                        <td className="px-2 py-4">
                                            <div className="text-sm font-medium text-gray-900">{publication.title}</div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                {publication.authors.join(', ')}
                                            </div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                {publication.journal} ({publication.year})
                                            </div>
                                            {publication.doi && (
                                                <div className="text-sm text-blue-600 mt-1">
                                                    DOI: {publication.doi}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(publication.status)}`}>
                                                {publication.status}
                                            </span>
                                        </td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-3">
                                                <button onClick={() => handleView(publication)} className="text-[#C71585] hover:text-[#8D38A8]">
                                                    <FaEye className="w-5 h-5" />
                                                </button>
                                                <button onClick={() => { setEditPublication(publication); setPublicationForm({ ...publication }); setShowPublicationForm(true); }} className="text-[#F7C873] hover:text-[#C71585]">
                                                    <FaEdit className="w-5 h-5" />
                                                </button>
                                                <button onClick={() => setDeleteTarget({ type: 'publication', id: publication.id })} className="text-red-600 hover:text-red-900">
                                                    <FaTrash className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* View Modal */}
            {showModal && selectedItem && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">
                                {activeTab === 'projects' ? 'Project Details' : 'Publication Details'}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            {activeTab === 'projects' ? (
                                <>
                                    <p><span className="font-medium">Title:</span> {selectedItem.title}</p>
                                    <p><span className="font-medium">Description:</span> {selectedItem.description}</p>
                                    <p><span className="font-medium">Status:</span> {selectedItem.status}</p>
                                    <p><span className="font-medium">Duration:</span> {selectedItem.startDate} to {selectedItem.endDate}</p>
                                    <p><span className="font-medium">Funding:</span> {selectedItem.funding}</p>
                                    <p><span className="font-medium">Collaborators:</span></p>
                                    <ul className="list-disc pl-5">
                                        {selectedItem.collaborators.map((collaborator: string, index: number) => (
                                            <li key={index}>{collaborator}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <p><span className="font-medium">Title:</span> {selectedItem.title}</p>
                                    <p><span className="font-medium">Authors:</span> {selectedItem.authors.join(', ')}</p>
                                    <p><span className="font-medium">Journal/Venue:</span> {selectedItem.journal}</p>
                                    <p><span className="font-medium">Year:</span> {selectedItem.year}</p>
                                    <p><span className="font-medium">Status:</span> {selectedItem.status}</p>
                                    {selectedItem.doi && (
                                        <p><span className="font-medium">DOI:</span> {selectedItem.doi}</p>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                            <button
                                className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8] flex items-center"
                                onClick={() => {
                                    let content = '';
                                    let filename = '';
                                    if (activeTab === 'projects') {
                                        content = `Project Title: ${selectedItem.title}\nDescription: ${selectedItem.description}\nStatus: ${selectedItem.status}\nDuration: ${selectedItem.startDate} to ${selectedItem.endDate}\nFunding: ${selectedItem.funding}\nCollaborators: ${selectedItem.collaborators.join(', ')}`;
                                        filename = `${selectedItem.title.replace(/\s+/g, '_')}_project.txt`;
                                    } else {
                                        content = `Publication Title: ${selectedItem.title}\nAuthors: ${selectedItem.authors.join(', ')}\nJournal/Venue: ${selectedItem.journal}\nYear: ${selectedItem.year}\nStatus: ${selectedItem.status}`;
                                        if (selectedItem.doi) content += `\nDOI: ${selectedItem.doi}`;
                                        filename = `${selectedItem.title.replace(/\s+/g, '_')}_publication.txt`;
                                    }
                                    const blob = new Blob([content], { type: 'text/plain' });
                                    const url = window.URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = filename;
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    window.URL.revokeObjectURL(url);
                                }}
                            >
                                <FaDownload className="mr-2" />
                                Download Report
                            </button>
                            <button onClick={() => setShowModal(false)} className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8]">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Project Form Modal */}
            {showProjectForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                        <h2 className="text-lg font-bold mb-4">{editProject ? 'Edit Project' : 'New Project'}</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (editProject) {
                                setProjects(projects.map(p => p.id === editProject.id ? { ...editProject, ...projectForm } : p));
                            } else {
                                setProjects([...projects, { id: (Math.random() * 100000).toFixed(0), ...projectForm, type: 'Individual' }]);
                            }
                            setShowProjectForm(false);
                            setEditProject(null);
                            setProjectForm({ title: '', description: '', status: 'Active', startDate: '', endDate: '', funding: '', collaborators: [] });
                        }} className="space-y-3">
                            <input className="w-full border rounded px-2 py-1" name="title" value={projectForm.title} onChange={e => setProjectForm(f => ({ ...f, title: e.target.value }))} placeholder="Title" required />
                            <textarea className="w-full border rounded px-2 py-1" name="description" value={projectForm.description} onChange={e => setProjectForm(f => ({ ...f, description: e.target.value }))} placeholder="Description" required />
                            <div className="flex space-x-2">
                                <input className="w-full border rounded px-2 py-1" type="date" name="startDate" value={projectForm.startDate} onChange={e => setProjectForm(f => ({ ...f, startDate: e.target.value }))} required />
                                <input className="w-full border rounded px-2 py-1" type="date" name="endDate" value={projectForm.endDate} onChange={e => setProjectForm(f => ({ ...f, endDate: e.target.value }))} required />
                            </div>
                            <input className="w-full border rounded px-2 py-1" name="funding" value={projectForm.funding} onChange={e => setProjectForm(f => ({ ...f, funding: e.target.value }))} placeholder="Funding" required />
                            <input className="w-full border rounded px-2 py-1" name="collaborators" value={projectForm.collaborators.join(', ')} onChange={e => setProjectForm(f => ({ ...f, collaborators: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} placeholder="Collaborators (comma separated)" />
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => { setShowProjectForm(false); setEditProject(null); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-[#C71585] text-white rounded hover:bg-[#8D38A8]">{editProject ? 'Save Changes' : 'Add Project'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Publication Form Modal */}
            {showPublicationForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                        <h2 className="text-lg font-bold mb-4">{editPublication ? 'Edit Publication' : 'New Publication'}</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (editPublication) {
                                setPublications(publications.map(p => p.id === editPublication.id ? { ...editPublication, ...publicationForm } : p));
                            } else {
                                setPublications([...publications, { id: (Math.random() * 100000).toFixed(0), ...publicationForm, type: 'Journal' }]);
                            }
                            setShowPublicationForm(false);
                            setEditPublication(null);
                            setPublicationForm({ title: '', authors: [], journal: '', year: '', status: 'Published', doi: '' });
                        }} className="space-y-3">
                            <input className="w-full border rounded px-2 py-1" name="title" value={publicationForm.title} onChange={e => setPublicationForm(f => ({ ...f, title: e.target.value }))} placeholder="Title" required />
                            <input className="w-full border rounded px-2 py-1" name="authors" value={publicationForm.authors.join(', ')} onChange={e => setPublicationForm(f => ({ ...f, authors: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} placeholder="Authors (comma separated)" required />
                            <input className="w-full border rounded px-2 py-1" name="journal" value={publicationForm.journal} onChange={e => setPublicationForm(f => ({ ...f, journal: e.target.value }))} placeholder="Journal/Venue" required />
                            <input className="w-full border rounded px-2 py-1" name="year" value={publicationForm.year} onChange={e => setPublicationForm(f => ({ ...f, year: e.target.value }))} placeholder="Year" required />
                            <input className="w-full border rounded px-2 py-1" name="doi" value={publicationForm.doi || ''} onChange={e => setPublicationForm(f => ({ ...f, doi: e.target.value }))} placeholder="DOI (optional)" />
                            <select className="w-full border rounded px-2 py-1" name="status" value={publicationForm.status} onChange={e => setPublicationForm(f => ({ ...f, status: e.target.value as Publication['status'] }))} required>
                                <option value="Published">Published</option>
                                <option value="Under Review">Under Review</option>
                                <option value="In Progress">In Progress</option>
                            </select>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => { setShowPublicationForm(false); setEditPublication(null); }} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-[#C71585] text-white rounded hover:bg-[#8D38A8]">{editPublication ? 'Save Changes' : 'Add Publication'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteTarget && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Confirm Delete</h2>
                        <p className="mb-4 text-gray-700">Are you sure you want to delete this {deleteTarget.type === 'project' ? 'project' : 'publication'}? This action cannot be undone.</p>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                onClick={() => setDeleteTarget(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={() => {
                                    if (deleteTarget.type === 'project') {
                                        setProjects(projects => projects.filter(p => p.id !== deleteTarget.id));
                                    } else {
                                        setPublications(publications => publications.filter(p => p.id !== deleteTarget.id));
                                    }
                                    setDeleteTarget(null);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;