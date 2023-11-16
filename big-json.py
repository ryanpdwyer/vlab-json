# Run this file using streamlit run load.py (from this directory)
# Install streamlit (https://streamlit.io) with pip install streamlit
import glob
import json
import pathlib
import io
from collections import abc



# Get the folder name for this file
current_folder = pathlib.Path(__file__).parent.absolute()

def load(fname):
    print(fname)
    with io.open(fname, 'r', encoding='utf-8-sig') as json_file:
        return json.load(json_file)

def filter_collection(d, level, filter_level, show_keys=False):
    if isinstance(d, abc.Mapping):
        if level < filter_level:
            return {key: filter_collection(val, level+1, filter_level, show_keys) for key,val in d.items()}
        else:
            if show_keys:
                return list(d.keys())
            else:
                return f"{len(d)} item object"
    if isinstance(d, list):
        if level < filter_level:
            return [filter_collection(x, level+1, filter_level, show_keys) for x in d]
        else:
            if show_keys:
                return [filter_collection(x, level+1, filter_level, show_keys) for x in d]
            else:
                return f"{len(d)} value array"
    else:
        return d



# Use pathlib to get all folders that contain json files (the folders could be several levels deep)
# Just return the folder, not the files
folders = sorted(set(x.parent for x in pathlib.Path(current_folder).glob("**/*.json"))) # Unique folders


folder_name_func = lambda x: str(x).replace(str(current_folder), "")


output_dictionary = {}
for folder in folders:
    files = [pathlib.Path(x) for x in folder.glob('*.json')]
    json_representation = {fname.parts[-1].replace(".json", ""): load(fname) for fname in files}
    output_dictionary[folder_name_func(folder)] = json_representation


# Write the output to JSON

with open('output.json', 'w') as outfile:
    json.dump(output_dictionary, outfile, indent=2)