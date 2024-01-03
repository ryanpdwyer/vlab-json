import json5
import toml
import yaml

# Import ex2.json
with open('ex2.json') as f:
    data = json5.load(f)

# Export to TOML format
toml_string = toml.dumps(data)

# Write to a file
with open('ex2.toml', 'w') as f:
    f.write(toml_string)

with open("ex2.yaml", "w") as f:
    yaml.dump(data, f)


