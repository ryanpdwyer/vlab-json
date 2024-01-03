const data = { "solutions": {
    "FILESYSTEM": {
      "DIRECTORY": [
        {
          "name": "stockroom",
          "SOLUTION": [
            {
              "name": "Distilled H<sub>2</sub>O",
              "description": "Distilled Water",
              "volume": "3.0",
              "vessel": "3LCarboy",
              "species": [
                {
                  "id": "0",
                }
              ]
            },
           {
                    "name": "3M NH<sub>3</sub>",
                    "description": "3 Molar Ammonia",
                    "volume": "0.1",
                    "species": [
                      {
                        "id": "0"
                      },
                      {
                        "id": "33",
                        "amount": "0.3"
                      }
                    ]
                  },
            {
                    "name": "5 M NaOH",
                    "description": "5 M Sodium Hydroxide",
                    "volume": "0.1",
                    "species": [
                      {
                        "id": "0"
                      },
                      {
                        "id": "8",
                        "amount": "0.05"
                      },
                      {
                        "id": "2",
                        "amount": "0.05"
                      }
                    ]
                  },
            
            
            
            
            
            {
                "name": "Cu<sup>2+</sup> solution",
                "description": "Copper(II) Sulfate Solution",
                "volume": "0.1",
                "species": [
                  {
                    "id": "0"
                  },
                  {
                    "id": "300",
                    "amount": ".01"
                  },
                  {
                    "id": "30",
                    "amount": ".01"
                  }
                ]
              },

            
           {
                    "name": "3M H<sub>2</sub>SO<sub>4</sub>",
                    "description": "3 Molar Sulfuric Acid",
                    "volume": "0.1",
                    "species": [
                      {
                        "id": "0"
                      },
                      {
                        "id": "29",
                        "amount": "0.3"
                      },
                      {
                        "id": "1",
                        "amount": "0.3"
                      }
                    ]
                  },
            
            
            
          ]
        }
      ]
    }
  },
 "species": {
    "SPECIES_LIST": {
      "SPECIES": [
        {
          "entropy": "69.91",
          "name": "H<sub>2</sub>O",
          "state": "l",
          "enthalpy": "-285.83",
          "density": "1.000",
          "specificHeat": "1.000",
          "molecularWeight": "18.01534",
          "id": "0"
        },
        
        
        
        {
          "entropy": "0.0",
          "name": "H<sup>+</sup>",
          "enthalpy": "0.0",
          "id": "1"
        },
        {
          "entropy": "-10.75",
          "name": "OH<sup>-</sup>",
          "enthalpy": "-229.99",
          "id": "2"
        },
        
 {
            "id": 6,
            "name": "NH<sub>4</sub><sup>+</sup>",
            "simpleName": "NH4^+",
            "state": "aq",
            "enthalpy": -133.26,
            "entropy": 111.17
          },
        {
          "id": "8",
          "name": "Na<sup>+</sup>",
          "enthalpy": "-240.1",
          "molecularWeight": "22.99",
          "entropy": "59.0",
          "density": "0.971"
        },
        {
            "id": "9",
            "name": "Cl<sup>-</sup>",
            "enthalpy": "-167.16",
            "entropy": "56.5",
            "molecularWeight": "35.453"
          },
        {
            "id": "29",
            "name": "HSO<sub>4</sub><sup>-</sup>",
            "enthalpy": "-885.75",
            "entropy": "126.86",
            "molecularWeight": "97.078"
          },
          {
            "id": "30",
            "name": "SO<sub>4</sub><sup>2-</sup>",
            "enthalpy": "-907.51",
            "entropy": "17.15",
            "molecularWeight": "96.07"
          },
        {
            "id": "33",
            "name": "NH<sub>3</sub>",
            "enthalpy": "-80.29",
            "entropy": "111.42",
            "molecularWeight": "17.034"
          },
        {
            "id": "300",
            "name": "M<sup>+2</sup>",
            "enthalpy": "0",
            "entropy": "0",
            "hue": "160",
            "saturation": "88",
            "value": "100",
            "colorConcentration": ".08"
          },

          {
            "id": "302",
            "name": "CuCl<sub>2</sub>",
            "enthalpy": "-264.9",
            "entropy": "100",
            "state": "s",
            "molecularWeight": "99",
            "hue": "130",
            "saturation": "88",
            "value": "100",
            "colorConcentration": ".3"
          },
        {
            "id": "304",
            "name": "M(OH)<sub>4</sub><sup>2-</sup>",
            "enthalpy": "-969.96",
            "entropy": "-123.857",
            "molecularWeight": "131.6670",
            "hue": "242",
            "saturation": "86",
            "value": "70",
            "colorConcentration": ".017" 
          },
      ]
    }
 },
  "spectra": {
    "SPECTRA_LIST": {
      "SPECIES": []
    }
  },
  "reactions": {
    "REACTIONS": {
      "REACTION": [
        {
          "SPECIES_REF": [
            {
              "id": "0",
              "coefficient": "-1"
            },
            {
              "id": "1",
              "coefficient": "1"
            },
            {
              "id": "2",
              "coefficient": "1"
            }
          ]
        },
        
        
        
        {
            "SPECIES_REF": [
              {
                "id": "9",
                "coefficient": "-2"
              },
              {
                "id": "300",
                "coefficient": "-1"
              },
              {
                "id": "302",
                "coefficient": "1"
              }
            ]
          },

        
        {
            "SPECIES_REF": [
              {
                "id": "6",
                "coefficient": "-1"
              },
              {
                "id": "1",
                "coefficient": "1"
              },
              {
                "id": "33",
                "coefficient": "1"
              }
            ]
          },

        
        {
"SPECIES_REF": [
              {
                "id": "300",
                "coefficient": "-1"
              },
              {
                "id": "2",
                "coefficient": "-4"
              },
              {
                "id": "304",
                "coefficient": "1"
              },

            ]
          },

        {
            "SPECIES_REF": [
              {
                "id": "30",
                "coefficient": "1"
              },
              {
                "id": "1",
                "coefficient": "1"
              },
              {
                "id": "29",
                "coefficient": "-1"
              }
            ]
          },
        
        
      
      ]
    }
},
 "assignment": {
    "assignmentText": "<em>LeChatlier's Principle:</em> <p><p><b>Objective:</b>    Use the virural lab to gain an understanding of LeChatlier's principle by observing the effects of induced perturbations on the equilibrium distribution of the Copper (II) reaction. <p><p><b>Assignment:</b> Consider the reaction scheme below:<p align=\"center\">2 MnO<sub><font size=\"-2\">4</font></sub><sup>-</ font></sup>(aq) + 5 C<sub><font size=\"-2\">2</font></sub>O<sub><font size=\"-2\">4</font></sub><sup>2-</ font></sup>(aq) + 16 H<sup><font size=\"-2\">+</font></sup>(aq) ⇌ 2 Mn<sup><font size=\"-2\">2+</font></sup>(aq) + 10 CO<sub><font size=\"-2\">2</font></sub>(g) + 8 H<sub><font size=\"-2\">2</font></sub>O(l)</p> <p><p><b>NOTE:</b>  The MnO<sub><font size=\"-2\">4</font></sub><sup>-</ font></sup> ion is purple. The Mn<sup><font size=\"-2\">2+</font></sup> ion is pink. All of the other substances are colorless. <p><p><b>1.</b> What is the equilibrium constant expression (K) for the permanganate redox reaction? <p><p><b>2.</b> To the system at equilibrium, remove the gas from the system. <b>What is being removed from the system? Is it a reactant or product? What happens to the color of the solution? State the Le Chatelier response to the stress (shift left / right), and use the Le Chatelier response to explain the experimental observations</b> <p><p><b>3.</b> In another equilibrated vessle, add NaOH to the system.<b>What happens to the color of the solution? State the Le Chatelier response to the stress (shift left / right), and use the Le Chatelier response to explain the experimental observations</b> <p><p><b>4.</b> In another equilibrated vessle, add H<sub>2</sub>SO<sub>4</sub> to the system. <b>What happens to the color of the solution? State the Le Chatelier response to the stress (shift left / right), and use the Le Chatelier response to explain the experimental observations</b>"
  },
  "configuration": {
    "title": "Copper (II) Equilibrium and LeChatlier's Principle ",
    "solutionViewers": [
      {
        "id": "solutionProperties",
        "displayDefault": true,
        "args": {
          "honorSignificantFigures": false
        }
      },
      {
        "id": "aqueous",
        "displayDefault": true,
        "args": {
          "unitsToggleEnabled": true
        }
      },
      {
        "id": "solid",
        "displayDefault": true,
        "args": {
          "unitsToggleEnabled": true
        }
      },
      {
        "id": "spectrometer",
        "displayDefault": false
      },
      {
        "id": "particleView",
        "displayDefault": false
      },
      {
        "id": "thermometer",
        "displayDefault": true
      },
      {
        "id": "pH",
        "displayDefault": true
      },
      {
        "id": "vesselTrackingControl",
        "displayDefault": false
      }
    ],
    "transfer": [
      "precise",
      "significantFigures",
      "realistic"
    ]
  }
}

// Use the species data to print out the properties of each reaction
function reaction_thermodynamics(reaction, species) {
    reaction_list = reaction["SPECIES_REF"]
    var enthalpy = 0;
    var entropy = 0;
    var temperature = 298;
    var reactant_string = "";
    var product_string = "";
    reaction_list.forEach(s => {
        var species_id = s["id"];
        var coefficient = s["coefficient"];
        var species_data = species["SPECIES_LIST"]["SPECIES"][species_id];
        var species_enthalpy = species_data["enthalpy"];
        var species_entropy = species_data["entropy"];
        var species_name = species_data["name"];
        var s_state = species_data["state"] || "aq";
        enthalpy += coefficient * species_enthalpy;
        entropy += coefficient * species_entropy;
        if (coefficient < 0) {
            reactant_string += species_name + "(" + s_state + ") ";
        }
        else {
            product_string += species_name + "(" + s_state + ") ";
        }
    });

    var gibbs = enthalpy - temperature * entropy/1000;
    var K = Math.exp(-gibbs / (0.008314 * temperature));
    return {enthalpy, entropy, gibbs, K, reactant_string, product_string};
}

const species = data['species'];
const reactions = data['reactions']["REACTIONS"]["REACTION"];
reactions.forEach(r => {
    var thermodynamics = reaction_thermodynamics(r, species);
    console.log(thermodynamics);
})