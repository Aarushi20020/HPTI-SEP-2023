"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as XLSX from "xlsx";
// Dynamic import for html2pdf to avoid SSR issues
import CustomButton from "../components/ui/button";
import CustomInput from "../components/ui/input";

const initialState = {
    agreementPlace: '',
    agreementdate: '',
    agreementMonth: '',
    agreementYear: '',
    ownerName: '',
    fatherName: '',
    ownerAddress: '',
    ownerPAN: '',
    plotNumber: '',
    plotAddress: '',
    projectType: '',
    contractorName: '',
    contractorAddress: '',
    constructionRate: '',
    constructionRateInWords: '',
    contractPrice: '',
    startDate: '',
    completionDate: '',
    state: '',
    projectDurationMonths: '',
    ownerDelayPenalty: '',
    ownerDelayPenaltyInWords: '',
    minSlabArea: '',
    earlyTerminationProgress: '',
    ownerTerminationPenaltyRate: '',
    ownerDelayBeyond7DaysPenalty: '',
    authorisedSignatory: '',
    authorisedDesignation: '',
    witness1Name: '',
    witness1Address: '',
    witness2Name: '',
    witness2Address: '',
    effectiveDate: '',
    companyName: ''
};

const GeneralSpecificationTable = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', backgroundColor: '#FFD700', padding: '10px', fontWeight: 'bold' }}>
        GENERAL SPECIFICATION FOR RESIDENTIAL BUILDINGS
      </h2>
      <p style={{ textAlign: 'center',backgroundColor: '#FFD700', marginBottom: '10px' }}>(Location: NCR)</p>

      <table border={1} cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#000', color: '#fff' }}>
            <th>S.No.</th>
            <th>Particulars of Items</th>
            <th>Specifications/Details</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cement</td>
            <td>
              Brand: As Per Annexure A (Non-trade) PPC<br />
              Grade: 43 PPC
            </td>
            <td>In case of non-availability of cement of these makes, then makes of similar quality shall be used.</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Bricks</td>
            <td>First quality of Local bricks for Partition Walls</td>
            <td>2nd/3rd Quality for other Work like PCC, support etc.</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Fine Sand</td>
            <td>First quality of fine dust/sand will be used.</td>
            <td></td>
          </tr>

          <tr>
            <td>4</td>
            <td>Stone Aggregate</td>
            <td>First quality of Aggregate/Chips</td>
            <td></td>
          </tr>

          <tr>
            <td>5</td>
            <td>Iron/Steel</td>
            <td>
              Brand: As Per Annexure A<br />
              Grade: FE500 or FE550 D, as per availability<br /><br />
              Sizes to be used:
              <ul>
                <li>Columns and Beams: 16mm/12mm</li>
                <li>Web/Column: 8mm/10mm</li>
                <li>Rings: 8mm</li>
                <li>Pile: 5-12mm or 6-10mm</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td rowSpan={2}>6</td>
            <td rowSpan={2}>Mixing Ratio<br />(Cement: Dust: Rodi)</td>
            <td>
              <strong>Ratio:</strong><br />
              a. Columns/beams: 1:1.5:3<br />
              b. Slab: 1:1.5:3<br />
              c. Raft/Footing: 1:1.5:3<br />
              d. 5&quot; Wall<br />
              e. 10&quot; Wall<br />
              f. Plinth level: 1:6<br />
              g. Plaster external wall/ceiling (Cement: Sand): 1:4<br />
              h. Plaster internal wall (Cement: Sand): 1:5<br />
              i. Ceiling Plaster to be provided only on Beams (1:5)<br />
              j. Lean Concrete: 1:4:8 (PCC)
            </td>
            <td rowSpan={2} style={{ textAlign: 'center', fontWeight: 'bold' }}>
              As per drawings of the structural engineer<br />
              Maximum up to 3.5Kg/Sq.ft
            </td>
          </tr>
          
          <tr>
            <td>7</td>
            <td>Main Structure</td>
            <td>
              Earthquake-resistant structure with columns & beams with RCC lacing formed structure from foundation to top RCC slab.<br /><br />
              Anti-termite treatment (Spray) is to be given on the entire foundation floor.<br /><br />
              Waterproofing treatment with Sikka/Dr. Fixit URP compound to be done on plinth level, terrace and sunken area of the bathrooms/kitchen.
            </td>
            <td></td>
          </tr>

          <tr>
            <td>8</td>
            <td>Sanitary/Other Works</td>
            <td>
              Sanitary Pipes/Fittings (CPVC)<br />
              Brand: As Per Annexure A<br />
              Including all traps and mainline connection<br /><br />

              Sewerage Pipes/Fittings (PVC)<br />
              Brand: As Per Selection<br /><br />

              Drainage Pipes/Fittings: 4&quot;<br />
              Rain Water Pipes: 4&quot; & 3&quot;<br /><br />

              Provision for Water Purifier near sink in main kitchen<br />
              Provision for Washing Machine (One inlet and one outlet)<br /><br />

              Submersible Pump (Not Added)<br />
              Water lifting motors (Not Added)<br />
              Brand: Crompton (1.5HP) (exclusive of quotation/chargeable extra)<br /><br />

              Elementary Bathroom Fittings<br />
              Brand: Esco/ Hindware (As Per Price Cap)<br />
              Samples of Bathroom Fittings<br />
              Brand: As Per Price Cap (<a href="#">Click the link to view the sample</a>)
            </td>
            <td>
              Price Capping INR 21000 for each Toilet (All Sanitary and CP fittings).<br /><br />
              Basin, Faucets: INR 3000<br />
              Counter Top: 2000<br />
              WC/Comode with Flush and Jet: INR 9000<br />
              Shower with Diverter/Mixers/Taps: INR 7000
            </td>
          </tr>

          <tr>
            <td>9</td>
            <td>Electrical</td>
            <td>
              <strong>Wires</strong><br />
              Brand: As Per Annexure A (Fire Resistant)<br /><br />

              <strong>Mainline</strong><br />
              Length: 6mm<br /><br />

              <strong>Power points</strong><br />
              Length: 6mm/4mm/2.5mm inch<br /><br />

              <strong>Light points</strong><br />
              Length: 1.5mm/1mm inch<br /><br />

              <strong>Earthing</strong><br />
              1/18 (One for the whole building & one for lift shall be provided if paid separately)<br /><br />

              <strong>Electric conduit PVC pipes</strong><br />
              Brand: Durga/Malhotra/Anchor/Precision/AKG<br /><br />

              <strong>M.S. Boxes</strong><br />
              18 gauges/Modular Boxes for switches and Fan Box<br /><br />

              <strong>MCB</strong><br />
              Brand: Legrand/Havells (As Per Company)<br /><br />

              <strong>Basic Modular Switches & Plates</strong><br />
              (Anchor Roma Range)<br />
              Brand: As Per Annexure A<br /><br />

              <strong>Samples of switches</strong><br />
              Brand: Anchor (<a href="#">Click the link to view the sample</a>)
            </td>
            <td>
              TV points in One Hall and Master Bedrooms only.<br /><br />
              Provision for an Exhaust Fan and geyser in Toilet.<br /><br />
              A separate electrical panel board for each floor<br /><br />
              Inverter Points To be paid separately.<br /><br />
              Any wiring, switches for False Ceiling lights, etc., shall be charged separately<br /><br />
              CCTV, Wifi, Dish, Intercom Connection shall be charged separately<br /><br />
              Power Connection for Lift, Heatpump, Pressure Pump, Geyser and Solar Panel shall be charged separately
            </td>
          </tr>

          <tr>
            <td>10</td>
            <td>Door & Door Frames (Chowkhat)</td>
            <td>
              <strong>Door Frames (Chowkhat)</strong><br />
              Malaysian Sal/Sal wood of Section 6&quot; X 2.5&quot; and 7&apos; height.<br /><br />

              <strong>Doors</strong><br />
              a. Flush Doors: 32mm thickness, Heavy Quality, ISI Marked<br />
              b. Bathroom Doors: Width-30&quot;<br />
              c. Bedroom Doors: Width-36&quot;<br />
              d. Door Skin<br /><br />

              <strong>Brand</strong>: As Per Price Cap<br /><br />

              <strong>Fittings</strong><br />
              Door handles & Lock Set: Round Knob<br />
              Entrance door Lock (Night Latch): Dorset<br />
              Entrance Door: Eye Glass<br />
              Brand: Century Ply
            </td>
            <td>
              <strong>Price Capping:</strong><br />
              Each Door With All Frame and Fitting: INR 8000<br />
              Main Flat Door With All Frame and Fittings: INR 10500<br />
              Toilet Doors with All Frame and Fittings: INR 6500
            </td>
          </tr>

          <tr>
            <td>11</td>
            <td>Railings & Gates</td>
            <td>
              <strong>Front balcony railing:</strong><br />
              S.S. (304 grade) with 10 mm Toughened Glass as per drawing (To be paid separately)<br /><br />

              <strong>Main Gate:</strong><br />
              Stainless Steel (304 grade) as per drawing to be charged separately as per actual<br /><br />

              Internal railing<br />
              Brick Railing
            </td>
            <td>
              Except Brick Railing, All Railing shall be charged separately.
            </td>
          </tr>

          <tr>
            <td>12</td>
            <td>Windows</td>
            <td>
              All the windows would be sliding windows with powder-coated aluminium profiles and glazed glass.
            </td>
            <td>
              Any Grill Work Not Added in Quotation.<br />
              Avg Price cap of Window: 400/Sqft of window area.
            </td>
          </tr>

          <tr>
            <td>14</td>
            <td>Flooring/Wall Tiles</td>
            <td>
              <strong>Flooring:</strong><br />
              Tiles as Per Price Cap, including GST. If Price not mentioned anywhere then INR 30/Sqft will be Price Cap.<br /><br />
              <strong>Samples of Tiles:</strong><br />
              Brand: Kajaria polished Vitrified Tiles (<a href="#" target="_blank">Click the link to view the sample</a>)
            </td>
            <td>
              Brand: Any, As Per Price Cap
            </td>
          </tr>

          <tr>
            <td>15</td>
            <td>Other Amenities</td>
            <td>
              a. Provision for lift<br />
              b. Water tank<br />
              c. SS/MS railings for the staircase<br />
              d. Waterproofing with Chemical<br />
              e. Any Glass work/railing, etc.<br />
              f. Any Wardrobe, Chajja, Racks, Reworks<br />
              g. Septic Tank<br />
              h. Boundary and Boundary Gate<br />
              i. Mumty Ladder/MS or Any Ladder
            </td>
            <td>
              <strong>To be paid separately.</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Page() {
    const [formData, setFormData] = useState(initialState);
    const [showSpecificationTable, setShowSpecificationTable] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const generateWord = () => {
        console.log(formData); 
        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "BUILDING CONSTRUCTION AND PROJECT MANAGEMENT AGREEMENT",
                                    bold: true,
                                    size: 48,
                                    break: 2,
                                }),
                            ],
                        }),

                        // Agreement Intro
                        new Paragraph({ 
                            text: `This Building Construction and Project Management Agreement ("Agreement") is made and entered into at ${formData.agreementPlace || '[Place]'} on this ${formData.effectiveDate || '[Date]'}`, 
                            spacing: { after: 200 }
                        }),
                        
                        new Paragraph("BY AND BETWEEN:"),
                        
                        new Paragraph({ 
                            text: `1. ${formData.companyName || '[Company Name]'}, a company incorporated under the provisions of the Companies Act, 2013, having its corporate office at 107, DLF Star Mall, NH-8, Block A, Sec-30, Gurugram, Haryana, and carrying on the business of construction of residential houses and commercial buildings, and providing project management services (hereinafter referred to as the "Company" or "Contractor", which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns).`
                        }),
                        
                        new Paragraph({ 
                            text: `2. ${formData.ownerName || '[Plot Owner Name]'}, [Son/Daughter of / Partner of / represented by] ${formData.fatherName || '[Father\'s Name/Director\'s Name]'}, residing at ${formData.ownerAddress || '[Plot Owner\'s Full Address]'}, and holding PAN: ${formData.ownerPAN || '[PAN]'} (hereinafter referred to as the "Owner", which expression shall, unless repugnant to the context or meaning thereof, include his/her/its heirs, executors, administrators, and permitted assigns).`
                        }),
                        
                        new Paragraph(`(The Company and the Owner are hereinafter collectively referred to as "the Parties" and individually as "Party").`),

                        // WHEREAS Section
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "WHEREAS:",
                                    bold: true,
                                }),
                            ],
                        }),
                        
                        new Paragraph(`A. The Owner is the absolute owner of the plot of land bearing ${formData.plotNumber || '[Plot Number]'}, situated at ${formData.plotAddress || '[Full Plot Address]'} (hereinafter referred to as the "Plot").`),
                        
                        new Paragraph(`B. The Owner desires to undertake the construction of a ${formData.projectType || '[Residential House / Commercial Building / Specify Type]'} on the Plot (hereinafter referred to as the "Project").`),
                        
                        new Paragraph("C. The Company is recognized as a Start-up by the DPIIT and has represented to the Owner that it possesses the necessary expertise and resources."),
                        
                        new Paragraph("D. The Owner has approached the Company to undertake the construction of the Project."),
                        
                        new Paragraph("E. The Parties desire to set forth the terms and conditions governing the execution of the Project."),
                        
                        new Paragraph(""),

                        // NOW, THEREFORE
                        new Paragraph({
                            text: "NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the Parties hereby agree as follows:",
                            spacing: { after: 300 },
                        }),

                        // CLAUSE 1 - DEFINITIONS
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "1. DEFINITIONS AND INTERPRETATION",
                                    bold: true,
                                }),
                            ],
                        }),
                        
                        new Paragraph({ 
                            text: '1.1. "Agreement" shall mean this Building Construction and Project Management Agreement, including all its Annexures, and any mutually agreed-upon amendments hereto.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.2. "Completion Stages" shall mean the specific milestones of construction as detailed in Annexure B.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.3. "Construction Price" shall mean the total consideration payable by the Owner to the Company for the Scope of Work, as calculated and detailed in Annexure B.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.4. "Drawing(s)" shall mean the architectural, structural, and other drawings for the Project provided by the Owner/Company and mutually agreed upon.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.5. "Specifications" shall mean the detailed specifications for materials and construction quality provided by the Owner and mutually agreed upon as detailed in Annexure A.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.6. "Approvals" It will be the sole duty/obligation of the Owner to obtain mandatory permission and approval from the Municipal Corporation or any other Government/Private department to carry out the construction work.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.7. "Effective Date" shall be the later of the following dates: a. The date of deposit of the full site initiation amount by the Owner as stipulated in Annexure B; b. The date of successful establishment of the temporary electricity connection at the Project Site; c. The date of completion of all necessary demolition work at the Project Site; d. The date of providing water connection at the Project Site; e. Final Sets of Drawings approved by them.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.8. "Due Date" shall mean the date on which a particular milestone is completed, as mentioned in Annexure B.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.9. "Project Commencement Date" shall be 30 days from the effective date.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.10. "Change Order" As defined and conditions mentioned in clause 7.' 
                        }),
                        
                        new Paragraph({ 
                            text: '1.11. "Slab Area" shall be the building outer line, including all ducts, stairs, cutouts, double height etc.' 
                        }),

                        // CLAUSE 2 - SCOPE OF WORK
                        new Paragraph({ 
                            text: "", 
                            spacing: { after: 200 } 
                        }),
                        
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "2. SCOPE OF WORK",
                                    bold: true,
                                }),
                            ],
                        }),
                        
                        new Paragraph({ 
                            text: '2.1. The Company shall undertake the construction of the [Residential House / Commercial Building] on the Plot strictly in accordance with the Plans, Drawings provided by the Owner & Specifications as mutually agreed by both the parties as per Annexure A.' 
                        }),
                        
                        new Paragraph({ 
                            text: '2.2. The Company shall also provide comprehensive project management services for the Project, including but not limited to site supervision, labor management, coordination with material suppliers, and quality control.' 
                        }),
                        
                        new Paragraph({ 
                            text: '2.3. The Company shall ensure that all workmanship is of good quality and adheres to accepted local practices and the Specifications.' 
                        }),
                        
                        new Paragraph({ 
                            text: '2.4. Any work not explicitly mentioned in this Agreement, the Drawings, or Specifications shall be deemed excluded from the Scope of Work unless agreed upon through a formal Change Order.' 
                        }),
                    ]
                }
            ]
        });

        // Generate and download the document
        Packer.toBlob(doc).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Construction_Agreement.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
    };

    const generateExcel = () => {
        const ws = XLSX.utils.json_to_sheet([formData]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Agreement Data");
        XLSX.writeFile(wb, "construction_agreement_data.xlsx");
    };

    const generatePDF = async () => {
        const element = document.getElementById('agreement-content');
        if (!element) {
            console.error('Could not find agreement content element');
            return;
        }
        
        try {
            const html2pdf = (await import('html2pdf.js')).default;
            const opt = {
                margin: 1,
                filename: 'construction_agreement.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error('Error loading html2pdf library:', error);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Building Construction Agreement Generator</h1>
            
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700">Agreement Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomInput
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="agreementPlace"
                        placeholder="Agreement Place"
                        value={formData.agreementPlace}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="effectiveDate"
                        placeholder="Effective Date"
                        value={formData.effectiveDate}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="ownerName"
                        placeholder="Owner Name"
                        value={formData.ownerName}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="fatherName"
                        placeholder="Father's Name"
                        value={formData.fatherName}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="ownerAddress"
                        placeholder="Owner Address"
                        value={formData.ownerAddress}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="ownerPAN"
                        placeholder="Owner PAN"
                        value={formData.ownerPAN}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="plotNumber"
                        placeholder="Plot Number"
                        value={formData.plotNumber}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="plotAddress"
                        placeholder="Plot Address"
                        value={formData.plotAddress}
                        onChange={handleChange}
                    />
                    <CustomInput
                        name="projectType"
                        placeholder="Project Type"
                        value={formData.projectType}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                <CustomButton onClick={generateWord} className="bg-green-600 hover:bg-green-700">
                    📄 Generate Word Document
                </CustomButton>
                <CustomButton onClick={generateExcel} className="bg-blue-600 hover:bg-blue-700">
                    📊 Export to Excel
                </CustomButton>
                <CustomButton onClick={generatePDF} className="bg-red-600 hover:bg-red-700">
                    📑 Generate PDF
                </CustomButton>
                <CustomButton 
                    onClick={() => setShowSpecificationTable(!showSpecificationTable)}
                    className="bg-purple-600 hover:bg-purple-700"
                >
                    📋 {showSpecificationTable ? 'Hide' : 'Show'} Specifications
                </CustomButton>
            </div>

            {/* Specification Table */}
            {showSpecificationTable && (
                <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
                    <GeneralSpecificationTable />
                </div>
            )}

            {/* Agreement Preview */}
            <div id="agreement-content" className="bg-white p-8 border rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    BUILDING CONSTRUCTION AND PROJECT MANAGEMENT AGREEMENT
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        This Building Construction and Project Management Agreement (&quot;Agreement&quot;) is made and entered into at <span className="font-semibold text-blue-600">{formData.agreementPlace || '[Place]'}</span> on this <span className="font-semibold text-blue-600">{formData.effectiveDate || '[Date]'}</span>
                    </p>
                    
                    <p className="font-bold text-lg text-gray-800">BY AND BETWEEN:</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="mb-4">
                            <span className="font-semibold">1.</span> <span className="font-semibold text-blue-600">{formData.companyName || '[Company Name]'}</span>, a company incorporated under the provisions of the Companies Act, 2013, having its corporate office at 107, DLF Star Mall, NH-8, Block A, Sec-30, Gurugram, Haryana, and carrying on the business of construction of residential houses and commercial buildings, and providing project management services (hereinafter referred to as the &quot;Company&quot; or &quot;Contractor&quot;, which expression shall, unless repugnant to the context or meaning thereof, include its successors and permitted assigns).
                        </p>
                        
                        <p className="mb-4">
                            <span className="font-semibold">2.</span> <span className="font-semibold text-blue-600">{formData.ownerName || '[Plot Owner Name]'}</span>, [Son/Daughter of / Partner of / represented by] <span className="font-semibold text-blue-600">{formData.fatherName || '[Father\'s Name/Director\'s Name]'}</span>, residing at <span className="font-semibold text-blue-600">{formData.ownerAddress || '[Plot Owner\'s Full Address]'}</span>, and holding PAN: <span className="font-semibold text-blue-600">{formData.ownerPAN || '[PAN]'}</span> (hereinafter referred to as the &quot;Owner&quot;, which expression shall, unless repugnant to the context or meaning thereof, include his/her/its heirs, executors, administrators, and permitted assigns).
                        </p>
                    </div>
                    
                    <p className="italic text-center py-4">
                        (The Company and the Owner are hereinafter collectively referred to as &quot;the Parties&quot; and individually as &quot;Party&quot;).
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-3 text-blue-800">WHEREAS:</h3>
                        <ul className="space-y-2">
                            <li><strong>A.</strong> The Owner is the absolute owner of the plot of land bearing <span className="font-semibold text-blue-600">{formData.plotNumber || '[Plot Number]'}</span>, situated at <span className="font-semibold text-blue-600">{formData.plotAddress || '[Full Plot Address]'}</span> (hereinafter referred to as the &quot;Plot&quot;).</li>
                            <li><strong>B.</strong> The Owner desires to undertake the construction of a <span className="font-semibold text-blue-600">{formData.projectType || '[Residential House / Commercial Building / Specify Type]'}</span> on the Plot (hereinafter referred to as the &quot;Project&quot;).</li>
                            <li><strong>C.</strong> The Company is recognized as a Start-up by the DPIIT and has represented to the Owner that it possesses the necessary expertise and resources.</li>
                            <li><strong>D.</strong> The Owner has approached the Company to undertake the construction of the Project.</li>
                            <li><strong>E.</strong> The Parties desire to set forth the terms and conditions governing the execution of the Project.</li>
                        </ul>
                    </div>
                    
                    <div className="text-center py-6">
                        <p className="text-lg font-semibold text-gray-800">
                            NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the Parties hereby agree as follows:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
