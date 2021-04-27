const rawData = [
    {
      "Generic Name": "acetaminophen and codeine",
      "Brand Name": "Tylenol with Codeine",
      "Indication": "Pain Treatment",
      "Medication Class": "Analgesic",
      "DEA": "III"
    },
    {
      "Generic Name": "albuterol aerosol",
      "Brand Name": "Proair Proventil",
      "Indication": "Asthma",
      "Medication Class": "Beta2-agonist",
      "DEA": "VI"
    },
    {
      "Generic Name": "albuterol HFA",
      "Brand Name": "Accuneb: Proventil",
      "Indication": "Asthma;Chronic Bronchitis",
      "Medication Class": "Bronchodilator",
      "DEA": "VI"
    },
    {
      "Generic Name": "alendronate",
      "Brand Name": "Fosamax",
      "Indication": "Osteoporosis",
      "Medication Class": "Bisphosphonate",
      "DEA": "VI"
    },
    {
      "Generic Name": "allopurinol",
      "Brand Name": "Zyloprim",
      "Indication": "Gout",
      "Medication Class": "Xanthinine Oxidase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "alprazolam",
      "Brand Name": "Xanax",
      "Indication": "Anxiety",
      "Medication Class": "Benzodiazepine",
      "DEA": "IV"
    },
    {
      "Generic Name": "amitriptyline",
      "Brand Name": "Elavil",
      "Indication": "Depression",
      "Medication Class": "Tricyclic Antidepressant",
      "DEA": "VI"
    },
    {
      "Generic Name": "amoxicillin",
      "Brand Name": "Amoxil: Trimox",
      "Indication": "Antibiotic",
      "Medication Class": "Penicillin",
      "DEA": "IV"
    },
    {
      "Generic Name": "amoxicillin and clavulanate K+",
      "Brand Name": "Augmentin",
      "Indication": "Antibiotic",
      "Medication Class": "Penicillin",
      "DEA": "VI"
    },
    {
      "Generic Name": "amphetamine and dextroamphetamine XR",
      "Brand Name": "Adderall XR",
      "Indication": "Stimulant",
      "Medication Class": "Attention Deficit Hyperactivity Disorder (ADHD) control",
      "DEA": "II"
    },
    {
      "Generic Name": "atenolol",
      "Brand Name": "Tenormin",
      "Indication": "High Blood Pressure Treatment;Chest Pain Treatment",
      "Medication Class": "Beta-Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "atorvastatin",
      "Brand Name": "Lipitor",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "HMG-CoA reductase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "azithromycin",
      "Brand Name": "Zithromax;Z-Pak",
      "Indication": "Antibiotic",
      "Medication Class": "Macrolide",
      "DEA": "VI"
    },
    {
      "Generic Name": "benazepril and amlodipine",
      "Brand Name": "Lotrel",
      "Indication": "High Blood Pressure Treatment",
      "Medication Class": "Combination Med;ACE Inhibitor;Calcium Channel Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "carisoprodol",
      "Brand Name": "Soma",
      "Indication": "Muscle Spasm Treatment",
      "Medication Class": "Muscle Relaxant",
      "DEA": "VI"
    },
    {
      "Generic Name": "carvedilol",
      "Brand Name": "Coreg",
      "Indication": "High Blood Pressure/Heart Failure Treatment",
      "Medication Class": "Beta-Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "cefdinir",
      "Brand Name": "Omnicef",
      "Indication": "Antibiotic",
      "Medication Class": "Cephalosporin",
      "DEA": "VI"
    },
    {
      "Generic Name": "celecoxib",
      "Brand Name": "Celebrex",
      "Indication": "Pain;Inflammation",
      "Medication Class": "Cox-2 Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "cephalexin",
      "Brand Name": "Keflex",
      "Indication": "Antibiotic",
      "Medication Class": "Cephalosporin",
      "DEA": "VI"
    },
    {
      "Generic Name": "ciprofloxacin",
      "Brand Name": "Cipro",
      "Indication": "Antibiotic",
      "Medication Class": "Quinolone",
      "DEA": "VI"
    },
    {
      "Generic Name": "citalopram",
      "Brand Name": "Celexa",
      "Indication": "Depression or Anxiety Treatment",
      "Medication Class": "Selective Seratonin Receptor Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "clonazepam",
      "Brand Name": "Klonopin",
      "Indication": "Anxiety",
      "Medication Class": "Benzodiazepine",
      "DEA": "IV"
    },
    {
      "Generic Name": "clonidine HCl",
      "Brand Name": "Catapres",
      "Indication": "High Blood Pressure Treatment",
      "Medication Class": "Alpha 2 Agonist",
      "DEA": "VI"
    },
    {
      "Generic Name": "clopidogrel",
      "Brand Name": "Plavix",
      "Indication": "Blood Clot Prevention",
      "Medication Class": "Antiplatelet Agent",
      "DEA": "VI"
    },
    {
      "Generic Name": "Premarin (conjugated estrogens)",
      "Brand Name": "Premarin",
      "Indication": "Menopausal Symptom Treatment",
      "Medication Class": "Estrogen Derivative",
      "DEA": "VI"
    },
    {
      "Generic Name": "cyclobenzaprine",
      "Brand Name": "Flexeril",
      "Indication": "Muscle Spasm Treatment",
      "Medication Class": "Skeletal Muscle Relaxant",
      "DEA": "VI"
    },
    {
      "Generic Name": "diazepam",
      "Brand Name": "Valium",
      "Indication": "Anxiety",
      "Medication Class": "Benzodiazepine",
      "DEA": "IV"
    },
    {
      "Generic Name": "diclofenac sodium",
      "Brand Name": "Voltaren",
      "Indication": "Pain, Inflammation",
      "Medication Class": "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      "DEA": "VI"
    },
    {
      "Generic Name": "Yaz (drospirenone and ethinyl estradiol)",
      "Brand Name": "Yaz",
      "Indication": "Birth Control",
      "Medication Class": "Oral Contraceptive",
      "DEA": "VI"
    },
    {
      "Generic Name": "Duloxetine",
      "Brand Name": "Cymbalta",
      "Indication": "Depression;Diabetic Neuropathic Pain Treatment",
      "Medication Class": "Serotonin/Norephinephrine Reuptake Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "doxycycline hyclate",
      "Brand Name": "Vibramycin",
      "Indication": "Antibiotic",
      "Medication Class": "Tetracycline",
      "DEA": "VI"
    },
    {
      "Generic Name": "enalapril",
      "Brand Name": "Vasotec",
      "Indication": "High Blood Pressure;Heart Failure Treatment",
      "Medication Class": "ACE-Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "escitalopram",
      "Brand Name": "Lexapro",
      "Indication": "Depression or Anxiety Treatment",
      "Medication Class": "Selective Seratonin Receptor Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "esomeprazole",
      "Brand Name": "Nexium",
      "Indication": "Ulcers;GERD Treatment",
      "Medication Class": "Proton Pump Inhibitor",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "ezetimibe",
      "Brand Name": "Zetia",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "2-Azetidinone",
      "DEA": "VI"
    },
    {
      "Generic Name": "fenofibrate",
      "Brand Name": "Tricor",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "Cholesterol Lowering Agent",
      "DEA": "VI"
    },
    {
      "Generic Name": "fexofenadine",
      "Brand Name": "Allegra",
      "Indication": "Allergy Treatment/Prevention",
      "Medication Class": "Antihistamine",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "fluconozole",
      "Brand Name": "Diflucan",
      "Indication": "Fungal Infection Treatment",
      "Medication Class": "Antifungal",
      "DEA": "VI"
    },
    {
      "Generic Name": "fluoxetine HCl",
      "Brand Name": "Prozac",
      "Indication": "Depression or Anxiety Treatment",
      "Medication Class": "Selective Seratonin Receptor Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "fluticasone and salmeterol inhaler",
      "Brand Name": "Advair",
      "Indication": "Asthma Treatment/Prevention",
      "Medication Class": "Combination Med;Oral Corticosteroid;Long Acting Beta2-agonist",
      "DEA": "VI"
    },
    {
      "Generic Name": "fluticasone nasal spray",
      "Brand Name": "Flonase",
      "Indication": "Asthma and/or Allergy Treatment/Prevention",
      "Medication Class": "Nasal Corticosteroid",
      "DEA": "OTC"
    },
    {
      "Generic Name": "folic acid",
      "Brand Name": "Folic Acid",
      "Indication": "Anemia Treatment/Prevention",
      "Medication Class": "Vitamin",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "furosemide",
      "Brand Name": "Lasix",
      "Indication": "Edema;Hypertension Treatment",
      "Medication Class": "Loop Diuretic",
      "DEA": "VI"
    },
    {
      "Generic Name": "gabapentin",
      "Brand Name": "Neurontin",
      "Indication": "Seizure Control;Neuralgia Treatment",
      "Medication Class": "Anticonvulsant",
      "DEA": "V"
    },
    {
      "Generic Name": "glimepiride",
      "Brand Name": "Amaryl",
      "Indication": "Type 2 Diabetes Mellitus",
      "Medication Class": "Anti-Diabetic",
      "DEA": "VI"
    },
    {
      "Generic Name": "glyburide",
      "Brand Name": "Diabeta",
      "Indication": "Glycemic Control Improvement",
      "Medication Class": "Sulfonylurea",
      "DEA": "VI"
    },
    {
      "Generic Name": "glipizide",
      "Brand Name": "Glucotrol",
      "Indication": "Glycemic Control Improvement",
      "Medication Class": "Sulfonylurea",
      "DEA": "VI"
    },
    {
      "Generic Name": "hydrochlorothiazide",
      "Brand Name": "Microzide",
      "Indication": "High Blood Pressure Treatment",
      "Medication Class": "Diuretic",
      "DEA": "VI"
    },
    {
      "Generic Name": "hydrocodone and acetaminophen",
      "Brand Name": "Lortab;Lorcet;Norco;Vicodin",
      "Indication": "Pain Treatment",
      "Medication Class": "Narcotic Analgesic",
      "DEA": "II"
    },
    {
      "Generic Name": "ibuprophen",
      "Brand Name": "Motrin",
      "Indication": "Pain Treatment",
      "Medication Class": "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "lantus (insulin glargine)",
      "Brand Name": "Lantus",
      "Indication": "Glycemic Control Improvement",
      "Medication Class": "Insulin",
      "DEA": "VI"
    },
    {
      "Generic Name": "isosorbide mononitrate",
      "Brand Name": "Imdur",
      "Indication": "Chest Pain (Angina) Prevention",
      "Medication Class": "Vasiodilator",
      "DEA": "VI"
    },
    {
      "Generic Name": "lansoprazole",
      "Brand Name": "Prevacid",
      "Indication": "Ulcers;GERD Treatment",
      "Medication Class": "Proton Pump Inhibitor",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "levofloxacin",
      "Brand Name": "Levaquin",
      "Indication": "Antibiotic",
      "Medication Class": "Quinolone",
      "DEA": "VI"
    },
    {
      "Generic Name": "levothyroxine sodium",
      "Brand Name": "Synthroid;Levoxl",
      "Indication": "Thyroid Hormone Deficiency Therapy",
      "Medication Class": "Thyroid Hormone Replacement",
      "DEA": "VI"
    },
    {
      "Generic Name": "synthroid (levothyroxine sodium)",
      "Brand Name": "Synthroid",
      "Indication": "Thyroid Hormone Deficiency Therapy",
      "Medication Class": "Thyroid Hormone Replacement",
      "DEA": "VI"
    },
    {
      "Generic Name": "lisinopril and hydrochlorothiazide",
      "Brand Name": "Prinizide;Zestoretic",
      "Indication": "High Blood Pressure/Heart Failure Treatment",
      "Medication Class": "Combination Med;ACE Inhibitor;Diuretic",
      "DEA": "VI"
    },
    {
      "Generic Name": "lisinopril",
      "Brand Name": "Prinivil;Zestril",
      "Indication": "High Blood Pressure/Heart Failure Treatment",
      "Medication Class": "ACE-Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "lorazepam",
      "Brand Name": "Ativan",
      "Indication": "Anxiety",
      "Medication Class": "Benzodiazepine",
      "DEA": "IV"
    },
    {
      "Generic Name": "losartan",
      "Brand Name": "Cozaar",
      "Indication": "High Blood Pressure/Heart Failure Treatment",
      "Medication Class": "Angiotensin Receptor Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "lovastatin",
      "Brand Name": "Mevacor",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "HMG-CoA reductase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "meloxicam",
      "Brand Name": "Mobic",
      "Indication": "Arthritis Treatment",
      "Medication Class": "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      "DEA": "VI"
    },
    {
      "Generic Name": "metformin HCl",
      "Brand Name": "Glucophage",
      "Indication": "Glycemic Control Improvement",
      "Medication Class": "Biguanide",
      "DEA": "VI"
    },
    {
      "Generic Name": "methylprednisone",
      "Brand Name": "Medrol",
      "Indication": "Pain, Inflammation",
      "Medication Class": "Corticosteroid",
      "DEA": "VI"
    },
    {
      "Generic Name": "metoprolol succinate XL",
      "Brand Name": "Toprol",
      "Indication": "High Blood Pressure/Heart Failure Treatment;Irregular Heartbeat Treatment",
      "Medication Class": "Beta-Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "metoprolol tartrate",
      "Brand Name": "Lopressor",
      "Indication": "High Blood Pressure Treatment",
      "Medication Class": "Beta-Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "mometasone",
      "Brand Name": "Nasonex",
      "Indication": "Allergy Treatment/Prevention",
      "Medication Class": "Corticosteroid",
      "DEA": "VI"
    },
    {
      "Generic Name": "montelukast",
      "Brand Name": "Singulair",
      "Indication": "Asthma and/or Allergy Treatment/Prevention",
      "Medication Class": "Leukotriene Receptor Antagonist",
      "DEA": "VI"
    },
    {
      "Generic Name": "naproxen",
      "Brand Name": "Naprosyn",
      "Indication": "Pain Treatment",
      "Medication Class": "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "omeprazole",
      "Brand Name": "Prilosec",
      "Indication": "Ulcers;GERD Treatment",
      "Medication Class": "Proton Pump Inhibitor",
      "DEA": "VI;OTC"
    },
    {
      "Generic Name": "oxycodone and acetaminophen",
      "Brand Name": "Percocet;Tylox;Roxicet;Endocet",
      "Indication": "Pain Treatment",
      "Medication Class": "Narcotic Analgesic",
      "DEA": "II"
    },
    {
      "Generic Name": "pantoprazole",
      "Brand Name": "Protonix",
      "Indication": "Ulcers;GERD Treatment",
      "Medication Class": "Proton Pump Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "paroxetine",
      "Brand Name": "Paxil",
      "Indication": "Depression;Anxiety",
      "Medication Class": "Selective Serotonin Receptor Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "pioglitazone",
      "Brand Name": "Actos",
      "Indication": "Glycemic Control Improvement",
      "Medication Class": "Thiazolidinedione",
      "DEA": "VI"
    },
    {
      "Generic Name": "potassium Chloride",
      "Brand Name": "Klor-Con",
      "Indication": "Potassium Deficiency Treatment",
      "Medication Class": "Electrolyte Supplement",
      "DEA": "VI"
    },
    {
      "Generic Name": "pravastatin",
      "Brand Name": "Pravachol",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "HMG-CoA reductase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "prednisone",
      "Brand Name": "Deltasone",
      "Indication": "Accute Allergy;Inflammation;Asthma",
      "Medication Class": "Oral Corticosteroid",
      "DEA": "VI"
    },
    {
      "Generic Name": "pregabalin",
      "Brand Name": "Lyrica",
      "Indication": "Diabetic Neuropathic Pain",
      "Medication Class": "Gamma Aminobutyric Acid",
      "DEA": "V"
    },
    {
      "Generic Name": "promethazine",
      "Brand Name": "Phenergan",
      "Indication": "Nausea Control",
      "Medication Class": "Antiemetic",
      "DEA": "VI"
    },
    {
      "Generic Name": "quetiapine",
      "Brand Name": "Seroquel",
      "Indication": "Schizophrenia Treatment",
      "Medication Class": "Antipsychotic",
      "DEA": "VI"
    },
    {
      "Generic Name": "ranitidine",
      "Brand Name": "Zantac",
      "Indication": "Ulcers;GERD Treatment",
      "Medication Class": "H2-antagonist",
      "DEA": "VI"
    },
    {
      "Generic Name": "rosuvastatin",
      "Brand Name": "Crestor",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "HMG-CoA reductase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "sertraline HCl",
      "Brand Name": "Zoloft",
      "Indication": "Depression;Anxiety",
      "Medication Class": "Selective Serotonin Receptor Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "viagra (sildenafil HCl)",
      "Brand Name": "Viagra",
      "Indication": "Erectile Dysfunction Treatment",
      "Medication Class": "Phophodiesterase-5 Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "simvastatin and ezetimibe",
      "Brand Name": "Vytorin",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "Combo Med;HMG-CoA Reductase Inhibitor and 2-azetidinone",
      "DEA": "VI"
    },
    {
      "Generic Name": "simvastatin",
      "Brand Name": "Zocor",
      "Indication": "High Cholesterol Treatment",
      "Medication Class": "HMG-CoA reductase Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "spironolactone",
      "Brand Name": "Aldactone",
      "Indication": "Edema;Hypertension Treatment",
      "Medication Class": "Diuretic",
      "DEA": "VI"
    },
    {
      "Generic Name": "sulfamethoxazole and trimethoprim DS",
      "Brand Name": "Bactrim DS;Septra DS",
      "Indication": "Antibiotic",
      "Medication Class": "Combo Med;Sulfonamide and Trimethoprim",
      "DEA": "VI"
    },
    {
      "Generic Name": "tamsulosin",
      "Brand Name": "Flomax",
      "Indication": "Urinary/Prostate Disorder Treatment",
      "Medication Class": "Alpha1-Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "temezepam",
      "Brand Name": "Restoril",
      "Indication": "Anxiety;Insomnia Treatment",
      "Medication Class": "Benzodiazepine",
      "DEA": "IV"
    },
    {
      "Generic Name": "topiramate",
      "Brand Name": "Topamax",
      "Indication": "Seizure Control",
      "Medication Class": "Anti-Convulsant",
      "DEA": "VI"
    },
    {
      "Generic Name": "tramadol",
      "Brand Name": "Ultram",
      "Indication": "Pain Treatment",
      "Medication Class": "Non-Narcotic Analgesic",
      "DEA": "IV"
    },
    {
      "Generic Name": "triamcinolone Ace topical",
      "Brand Name": "Aristocort;Cinalog;Kenalog;Triderm",
      "Indication": "Skin Inflammation and Irritation",
      "Medication Class": "Topical Corticosteroid",
      "DEA": "VI"
    },
    {
      "Generic Name": "trazodone HCl",
      "Brand Name": "Desyrel",
      "Indication": "Depression Treatment",
      "Medication Class": "Serotonin Reuptake Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "triamterene and hydrochlorothiazide",
      "Brand Name": "Dyazide;Maxzide",
      "Indication": "High Blood Pressure Treatment",
      "Medication Class": "Combo Med;Thiazide and Potassium Sparing Diuretic",
      "DEA": "VI"
    },
    {
      "Generic Name": "valaciclovir",
      "Brand Name": "Valtrex",
      "Indication": "Viral Infection Treatment",
      "Medication Class": "Antiviral",
      "DEA": "VI"
    },
    {
      "Generic Name": "valsartan",
      "Brand Name": "Diovan",
      "Indication": "High Blood Pressure;Heart Failure Treatment",
      "Medication Class": "Angiotensin Receptor Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "venlafaxine XR",
      "Brand Name": "Effexor XR",
      "Indication": "Depression or Anxiety Treatment",
      "Medication Class": "Serotonin/Norepinephrine Reuptake Inhibitor",
      "DEA": "VI"
    },
    {
      "Generic Name": "verapamil SR",
      "Brand Name": "Calan SR;Verelan PM",
      "Indication": "High Blood Pressure;Chest Pain;Irregular Heartbeat Treatment",
      "Medication Class": "Calcium Channel Blocker",
      "DEA": "VI"
    },
    {
      "Generic Name": "zolpidem",
      "Brand Name": "Ambien",
      "Indication": "Insomnia",
      "Medication Class": "",
      "DEA": ""
    }
   ]

export var aww = []  
for(var i = 0; i < rawData.length; i++) {
    var obj = rawData[i];
    aww.push(obj["Generic Name"])
    aww.push(obj['Brand Name'])
}