"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
import * as XLSX from "xlsx";
import CustomButton from "../components/ui/button";
import CustomInput from "../components/ui/input";

const initialState = {
    agreementPlace: "[City Name]",
    agreementdate: "[Day Number]",
    agreementMonth: "[Month Name]",
    agreementYear: "[Year]",
    ownerName: "[Owner Full Name]",
    fatherName: "[Father's/Director's Name]", 
    ownerAddress: "[Complete Address]",
    ownerPAN: "[PAN Number]",
    plotNumber: "[Plot/Khasra Number]",
    plotAddress: "[Complete Plot Address]", 
    projectType: "Residential House",
    contractorName: "THIKEDAAR DOT COM PRIVATE LIMITED",
    contractorAddress: "107, DLF Star Mall, NH-8, Block A, Sec-30, Gurugram, Haryana",
    constructionRate: "[Rate in numbers]",
    constructionRateInWords: "[Rate in words]",
    contractPrice: "[Total Contract Price]",
    startDate: "[Start Date]",
    completionDate: "[Completion Date]",
    state: "Haryana",
    projectDurationMonths: "[Number of Months]",
    ownerDelayPenalty: "[Penalty Amount]", 
    ownerDelayPenaltyInWords: "[Penalty in words]",
    minSlabArea: "[Minimum Area]",
    authorisedSignatory: "[Signatory Name]",
    authorisedDesignation: "[Designation]",
    witness1Name: "[Witness 1 Name]",
    witness1Address: "[Witness 1 Address]", 
    witness2Name: "[Witness 2 Name]",
    witness2Address: "[Witness 2 Address]",
    earlyTerminationProgress: "[Progress Percentage]",
    ownerTerminationPenaltyRate: "[Penalty Rate]",
    ownerDelayBeyond7DaysPenalty: "[Penalty Amount]"
};

const GeneralSpecificationTable = () => {
    return (
        <div className="specification-table mt-6 p-4 bg-gray-50 border rounded">
            <h2 className="text-center font-bold text-lg bg-yellow-100 py-2 mb-2">
                GENERAL SPECIFICATION FOR RESIDENTIAL BUILDINGS
            </h2>
            <p className="text-center bg-yellow-100 mb-4">(Location: NCR)</p>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="p-2 border">S.No.</th>
                        <th className="p-2 border">Particulars</th>
                        <th className="p-2 border">Specifications</th>
                        <th className="p-2 border">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Row 1 - Cement */}
                    <tr>
                        <td className="p-2 border">1</td>
                        <td className="p-2 border">Cement</td>
                        <td className="p-2 border">
                            Brand: As Per Annexure A<br/>
                            Grade: 43 PPC
                        </td>
                        <td className="p-2 border">Alternative brands of similar quality may be used</td>
                    </tr>
                    
                    {/* Row 2 - Bricks */}
                    <tr>
                        <td className="p-2 border">2</td>
                        <td className="p-2 border">Bricks</td>
                        <td className="p-2 border">First quality local bricks</td>
                        <td className="p-2 border">2nd/3rd quality for PCC</td>
                    </tr>
                    
                    {/* Continue with other rows... */}
                </tbody>
            </table>
        </div>
    );
};

const Page = () => {
    const [formData, setFormData] = useState(initialState);
    const [showDropDown, setShowDropDown] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const generateWord = () => {
        const doc = new Document({
            sections: [{
                children: [
                    new Paragraph({
                        children: [new TextRun({
                            text: "BUILDING CONSTRUCTION AGREEMENT",
                            bold: true,
                            size: 36
                        })]
                    }),
                    
                    new Paragraph(`This Agreement made on ${formData.agreementdate || "[dd]"} ${formData.agreementMonth || "[Month]"} ${formData.agreementYear || "[yyyy]"}`),
                    
                    new Paragraph("BETWEEN:"),
                    new Paragraph(`1. ${formData.contractorName}, ${formData.contractorAddress}`),
                    new Paragraph(`2. ${formData.ownerName || "[Owner Name]"}, ${formData.ownerAddress || "[Owner Address]"} (PAN: ${formData.ownerPAN || "[PAN]"})`),
                    
                    new Paragraph("TERMS:"),
                    new Paragraph(`Project: ${formData.projectType || "[Project Type]"} at ${formData.plotNumber || "[Plot No.]"}, ${formData.plotAddress || "[Plot Address]"}`),
                    new Paragraph(`Construction Rate: ₹${formData.constructionRate || "[X]"} (${formData.constructionRateInWords || "[X in words] only]}) per sq.ft`),
                    new Paragraph(`Contract Price: ₹${formData.contractPrice || "[Total Price]"}`),
                    new Paragraph(`Duration: ${formData.projectDurationMonths || "[X]"} months`),
                    new Paragraph(`Delay Penalty: ₹${formData.ownerDelayPenalty || "[X]"} per day`),
                    
                    new Paragraph({
                        children: [new TextRun({
                            text: "Signatures:",
                            bold: true
                        })]
                    }),
                    new Paragraph(`For ${formData.contractorName}:`),
                    new Paragraph(`${formData.authorisedSignatory || "[Signatory]"}, ${formData.authorisedDesignation || "[Designation]"}`),
                    new Paragraph("Owner:"),
                    new Paragraph(`${formData.ownerName || "[Owner]"}`),
                    new Paragraph("Witnesses:"),
                    new Paragraph(`1. ${formData.witness1Name || "[Name]"}`),
                    new Paragraph(`2. ${formData.witness2Name || "[Name]"}`)
                ]
            }]
        });

        Packer.toBlob(doc).then((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Agreement_${formData.ownerName.replace(/\s+/g, "_") || "Construction"}.docx`;
            a.click();
            URL.revokeObjectURL(url);
        });
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet([
            ["Owner Name", "Contract Price", "Project Type", "Start Date"],
            [
                formData.ownerName || "[Owner Name]",
                formData.contractPrice || "[Contract Price]",
                formData.projectType || "[Project Type]",
                formData.startDate || "[Start Date]"
            ]
        ]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "ConstructionData");
        XLSX.writeFile(wb, `Construction_Agreement_${formData.ownerName.replace(/\s+/g, "_") || "Data"}.xlsx`);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-yellow-600 mb-2">THIKEDAAR.COM</h1>
                <h2 className="text-xl text-yellow-600">Construction Agreement Editor</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Agreement Details</h2>
                    
                    <div className="space-y-4">
                        {/* Basic Information */}
                        <div className="grid grid-cols-2 gap-4">
                            <CustomInput
                                name="agreementPlace"
                                label="Agreement Place"
                                value={formData.agreementPlace}
                                onChange={handleChange}
                                placeholder="e.g., Gurugram"
                            />
                            <CustomInput
                                name="agreementdate"
                                label="Agreement Day"
                                value={formData.agreementdate}
                                onChange={handleChange}
                                placeholder="e.g., 15"
                            />
                            <CustomInput
                                name="agreementMonth"
                                label="Agreement Month"
                                value={formData.agreementMonth}
                                onChange={handleChange}
                                placeholder="e.g., January"
                            />
                            <CustomInput
                                name="agreementYear"
                                label="Agreement Year"
                                value={formData.agreementYear}
                                onChange={handleChange}
                                placeholder="e.g., 2023"
                            />
                        </div>

                        {/* Owner Information */}
                        <div className="border-t pt-4">
                            <h3 className="font-medium mb-2">Owner Information</h3>
                            <CustomInput
                                name="ownerName"
                                label="Owner Name"
                                value={formData.ownerName}
                                onChange={handleChange}
                                placeholder="Full name as per PAN"
                            />
                            <CustomInput
                                name="fatherName"
                                label="Father/Director Name"
                                value={formData.fatherName}
                                onChange={handleChange}
                                placeholder="Father's or Director's name"
                            />
                            <CustomInput
                                name="ownerAddress"
                                label="Owner Address"
                                value={formData.ownerAddress}
                                onChange={handleChange}
                                placeholder="Complete postal address"
                            />
                            <CustomInput
                                name="ownerPAN"
                                label="PAN Number"
                                value={formData.ownerPAN}
                                onChange={handleChange}
                                placeholder="ABCDE1234F"
                            />
                        </div>

                        {/* Project Details */}
                        <div className="border-t pt-4">
                            <h3 className="font-medium mb-2">Project Details</h3>
                            <CustomInput
                                name="plotNumber"
                                label="Plot/Khasra Number"
                                value={formData.plotNumber}
                                onChange={handleChange}
                                placeholder="e.g., 1234 or ABCD123"
                            />
                            <CustomInput
                                name="plotAddress"
                                label="Plot Address"
                                value={formData.plotAddress}
                                onChange={handleChange}
                                placeholder="Full construction site address"
                            />
                            <CustomInput
                                name="projectType"
                                label="Project Type"
                                value={formData.projectType}
                                onChange={handleChange}
                                placeholder="e.g., Residential House"
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <CustomInput
                                    name="constructionRate"
                                    label="Construction Rate (₹/sq.ft)"
                                    value={formData.constructionRate}
                                    onChange={handleChange}
                                    placeholder="e.g., 1800"
                                />
                                <CustomInput
                                    name="constructionRateInWords"
                                    label="Rate in Words"
                                    value={formData.constructionRateInWords}
                                    onChange={handleChange}
                                    placeholder="e.g., One Thousand Eight Hundred"
                                />
                            </div>
                            
                            <CustomInput
                                name="contractPrice"
                                label="Total Contract Price"
                                value={formData.contractPrice}
                                onChange={handleChange}
                                placeholder="Total amount in numbers"
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <CustomInput
                                    name="startDate"
                                    label="Start Date"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    placeholder="DD/MM/YYYY"
                                />
                                <CustomInput
                                    name="completionDate"
                                    label="Completion Date"
                                    value={formData.completionDate}
                                    onChange={handleChange}
                                    placeholder="DD/MM/YYYY"
                                />
                            </div>
                            
                            <CustomInput
                                name="projectDurationMonths"
                                label="Duration (Months)"
                                value={formData.projectDurationMonths}
                                onChange={handleChange}
                                placeholder="e.g., 12"
                            />
                        </div>

                        {/* Terms and Signatures */}
                        <div className="border-t pt-4">
                            <h3 className="font-medium mb-2">Terms & Signatures</h3>
                            <CustomInput
                                name="ownerDelayPenalty"
                                label="Delay Penalty (₹/day)"
                                value={formData.ownerDelayPenalty}
                                onChange={handleChange}
                                placeholder="e.g., 5000"
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                                <CustomInput
                                    name="authorisedSignatory"
                                    label="Company Signatory"
                                    value={formData.authorisedSignatory}
                                    onChange={handleChange}
                                    placeholder="Company representative name"
                                />
                                <CustomInput
                                    name="authorisedDesignation"
                                    label="Designation"
                                    value={formData.authorisedDesignation}
                                    onChange={handleChange}
                                    placeholder="e.g., Director"
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <CustomInput
                                    name="witness1Name"
                                    label="Witness 1 Name"
                                    value={formData.witness1Name}
                                    onChange={handleChange}
                                    placeholder="First witness name"
                                />
                                <CustomInput
                                    name="witness2Name"
                                    label="Witness 2 Name"
                                    value={formData.witness2Name}
                                    onChange={handleChange}
                                    placeholder="Second witness name"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 space-x-3">
                            <CustomButton
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={generateWord}
                                name="Generate DOCX"
                            />
                            <CustomButton
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                onClick={exportToExcel}
                                name="Export Excel"
                            />
                        </div>
                    </div>
                </div>

                {/* Preview Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Agreement Preview</h2>
                        <button 
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                            onClick={() => setShowDropDown(!showDropDown)}
                        >
                            Download ▼
                        </button>
                    </div>

                    <div className="border rounded p-4 bg-gray-50">
                        <h2 className="text-xl font-bold text-center mb-4">BUILDING CONSTRUCTION AGREEMENT</h2>
                        
                        <p className="mb-4"><strong>This Agreement</strong> is made on {formData.agreementdate || "[dd]"} {formData.agreementMonth || "[Month]"} {formData.agreementYear || "[yyyy]"} at {formData.agreementPlace || "[City]"}, {formData.state || "[State]"}.</p>
                        
                        <div className="mb-4">
                            <p><strong>BETWEEN:</strong></p>
                            <p>1. <strong>{formData.contractorName}</strong>, {formData.contractorAddress}</p>
                            <p>2. <strong>{formData.ownerName || "[Owner Name]"}</strong>, residing at {formData.ownerAddress || "[Owner Address]"}</p>
                        </div>
                        
                        <div className="mb-4">
                            <p><strong>WHEREAS:</strong></p>
                            <p>A. Owner is the absolute owner of plot no. {formData.plotNumber || "[Plot No.]"} situated at {formData.plotAddress || "[Plot Address]"}</p>
                            <p>B. Owner desires to construct a {formData.projectType || "[Project Type]"} on said plot</p>
                        </div>
                        
                        <div className="mb-4">
                            <p><strong>CONSTRUCTION TERMS:</strong></p>
                            <p>• Rate: ₹{formData.constructionRate || "[X]"} per sq.ft ({formData.constructionRateInWords || "[X in words]"})</p>
                            <p>• Total Contract Price: ₹{formData.contractPrice || "[Total Price]"}</p>
                            <p>• Duration: {formData.projectDurationMonths || "[X]"} months</p>
                            <p>• Start Date: {formData.startDate || "[Start Date]"}</p>
                            <p>• Completion Date: {formData.completionDate || "[Completion Date]"}</p>
                        </div>
                        
                        <div className="mb-4">
                            <p><strong>SIGNATURES:</strong></p>
                            <p>For {formData.contractorName}:</p>
                            <p>{formData.authorisedSignatory || "[Signatory]"}, {formData.authorisedDesignation || "[Designation]"}</p>
                            <p>Owner:</p>
                            <p>{formData.ownerName || "[Owner Name]"}</p>
                            <p>Witnesses:</p>
                            <p>1. {formData.witness1Name || "[Witness 1]"}</p>
                            <p>2. {formData.witness2Name || "[Witness 2]"}</p>
                        </div>

                        {/* General Specifications Table */}
                        <GeneralSpecificationTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;