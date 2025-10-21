---
marp: true
theme: gradient
paginate: true
footer: '![image w:50 h:50](https://avatars.githubusercontent.com/u/48515106?s=200&v=4)Ricca Aaron & Derya Özsoy, Applied AI'
transition: fade

style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  
  section.centered-narrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  section.centered-narrow h1:not([data-auto-scaling]) {
    font-size: 3rem;
    width: 100%;
  }
  
  section.centered-narrow h2 {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  
  section.centered-fit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  section.centered-fit h3 {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  
  section.equalize-fit h3 {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.6rem;
  }
  
  /* Hide bullet points for no-bullet class */
  li.no-bullet {
    list-style: none;
    margin-left: 0;
  }
  
  /* Hide bullets for no-bullets section */
  section.no-bullets li {
    list-style: none;
    margin-left: 0;
  }
  
  /* Hide bullet points before h3 headings */
  li > h3 {
    list-style: none;
    margin-left: -1.5em;
  }
  
  li:has(> h3) {
    list-style: none;
  }

  /* Compact styling for dense sources slides */
  section.sources-compact {
    font-size: 1.4em;
    line-height: 1.2;
  }
  section.sources-compact h1:not([data-auto-scaling]) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  section.sources-compact li {
    margin: 0.15rem 0;
  }

---
<!-- _class: centered-narrow -->
# Welcome!
--- 

<!-- _class: centered-narrow -->
# Have you ever felt
# like your training
# wasn't producing results?
<!-- Derya -->
<!-- Here we should ask the audience to involve it, maybe just with a hand raise -->

---

<!-- _class: centered-narrow -->


# If yes! Meet **Apex** ![w:220 center](data/apex-logo.svg)
## Your AI-powered personal trainer

<!-- Aaron -->

---

<div class="columns">
<div>

# **Apex**, maximizing
# your training
![w:220](data/apex-logo.svg)

</div>
<div>

* **Aaron Ricca**
    * Electrical and computer engineering
    * Ex professional skier
    * Climber


* **Derya Özsoy**
    * Informatik
    * Kickboxing

<!-- Start Aaron -> Derya -->
<!-- AI personal trainer which Helps maximizing training results -->


---

# What's the problem ? 

* training is far from optimized
* hard to find good exercises
* time is always too little
![bg right:50% w:500](data/image.png)
<!-- Derya -->

---

# How does **Apex** work?
* the End User enters his **data**
* Apex learns with the collected **User data** and **data** from Internet and tries to find common patterns.
* At the end the User receives a personalized training plan
<!-- Derya -->
---
# Data time !
<div class="columns">
<div>

* ### Input attributes:
* Objective
* Available time
* Favorite exercises
* Biological attributes (Height, body fat%, medical condition, etc.)
* Alimentation (Cuisine, Diet type, enhancing substances, etc.)

</div>
<div>

* ### Output attributes:
* Training periodization
* List of exercises
* Alimentation improvement tips
* Corresponding improvement % [Continuous]

<!-- Aaron -->
<!-- corresponding improvement % -> diminishing returns-->
---

# Data Sources 📊

<div class="columns">
<div>

* ### Research & Literature 📚

  - Scientific papers
  * Studies & publications
  * Medical research

* ### Real-World Data 💪

  - Gyms & fitness centers
  * Professional coaches
  * Testers & athletes

</div>
<div>

* ### User-Generated 📱

  - Surveys & questionnaires
  * Smartwatch data
  * Fitness app tracking

* ### Continuous Growth 🔄

  -  Data collected from users

</div>
</div>

<!-- Aaron -->

---

# Data Preprocessing 🔧

* Convert different units & scales to SI units
  * Height (feet -> cm), Weight (lb -> kg), etc.

* **Standardization** → for classification algorithms (KNN, Random Forest)
* **Normalization** → for regression algorithms

<!-- Aaron -->

---


<!-- _class: centered-fit equalize-fit -->

### Few data?
* ### -> More data?
* ### 🧪 Synthetic data!

<!-- Aaron -->
---

# *SMOTE* 
### *S*ynthetic *M*inority *O*versampling *Te*chnique  

* Used for **imbalanced datasets**  
  → e.g., 90% fit people and 10% overweight  
* Problem: ML models **bias the majority class**  
* SMOTE **creates new synthetic data** of the minority class

<!--Aaron-->
---

# How SMOTE Works

<!-- _class: no-bullets -->

**Our scenario:** 10% overweight, 90% fit

* - -**User A:** Age 35, Weight 95kg, Beginner level
* - -**User B:** Age 40, Weight 100kg, Beginner level

* SMOTE finds two **similar overweight users** and creates a new realistic profile:

*  - -**Synthetic user C:** Age 37, Weight 97kg, Beginner level ✨

* ✅ Makes the minority class **denser and more balanced** (27%)
<!--Aaron-->
---
# What methods are there and what are we using for **Apex**?

<div class="columns">
<div>

**Unsupervised Learning**
✖️ No labeled data
* inherent similarities and differences

**Semi-supervised Learning** 
* between supervised and unsupervised Learning
* has unlabeled labeled data. 
</div>
<div>

**Supervised Learning**
✔️ labeled data needed
* learns from patterns and relationships 
* recognize patterns to make predictions 

</div>
</div>

<!-- Derya -->

---
# Tools for Supervised Learning 🎯
### Classification
* predict an outcome or event
* outcome can take two possible values 
![bg right top w:400](data/classification.png)

---

### Regression 
* predict continuous values
![bg right bottom w:400](data/regression.png)

---
# Unsupervised Learning Methods

## Clustering
identifies patterns, segment data, and simplify complex datasets by grouping similar items together.

![bg right bottom w:500](data/clustering.png)

---
## Association rules
used to discover interesting relationships and dependencies between items in large datasets.
The rules are expressed as "if-then" statements, such as X ->  Y

---
## Dimensionality reduction
Reduces high dimensions to fewer features.
Helps avoid the “curse of dimensionality” 

![bg right bottom w:500](data/dimensionality_reducation.png)

---
## Supervised Learning Algorithms📈
<div class="columns">
<div>

**Linear Regression**
* Prediction of continuous values <!--(e.g., weight based on height).-->
* Uses a linear relationship between input and target variables.
* Corresponds to the “line of best fit.”
</div>
<div>

**Logistic Regression**
* The target variable is binary <!-- (e.g., yes/no, 1/0). -->
* Uses the logit function to predict probabilities.
* Ideal for classification problems.
</div>
<div>

--- 
<div class="columns">
<div>

**Decision Tree**
* Makes decisions using a tree-like structure.
* Each leaf represents a decision or prediction.
* Easy to interpret and visually understandable.
</div>
<div>

**K Nearest Neighbor**
* Categorizes data based on proximity to other points.
* The new point is assigned to the class of its nearest neighbors.
* Simple, but computationally intensive for large data sets.
</div>
<div>

---
<div class="columns">
<div>

**Random Forest**
* Combination of many decision trees (ensemble method).
* Provides more accurate and stable results.
* Can be used for classification and regression.
</div>
<div>

**Neural Networks**
* Inspired by the human brain.
* Consist of layers of neurons (input, hidden layers, output).
* Learn by adjusting weights based on errors (backpropagation).
* Can recognize complex patterns and nonlinear relationships.
</div>
<div>

**Naive Bayes**
* Based on Bayes' theorem (probabilities).
* Assumption: Features are independent (naive).
* Fast, efficient, particularly useful for text classification.
</div>
<div>

---

### Data Processing 🔧
* **SMOTE** - Balance underrepresented groups
* **Cross-Validation** - Ensure model generalization
* **PCA (Principal component analysis)** - Reduce the data dimensionality

---

# Why is **Apex** better?
* **Open source** - Transparent algorithms, community improvements
* **Data-driven optimization** - Personalized vs generic programs
* **Lower injury risk** - Biomechanical constraints and progressive overload
* **First of its kind** - Novel ML-based personal training approach
* **Continuous learning** - Improves with more user data

<!-- Aaron -->
---
# Possible risks, barriers and obstacles
* **Incomplete data can lead to incorrect results.**
* **Time and resources.**
* **Data breach.**

<!-- Derya -->
---

# Ethical Considerations
* **Privacy & GDPR compliance** - Sensitive biometric and health data
* **Labor market impact** - Potential displacement of personal trainers
* **Economic effects** - Reduced gym memberships
* **Algorithmic bias** - Training data skewed toward young, fit persons
  * Risk: Inappropriate recommendations for underrepresented groups
  * Can lead to injuries in elderly or different body types
* **Dual-use concerns** - Technology repurposed beyond original intent
  * Example: Military training

<!-- Both -->

---

<!-- _class: sources-compact -->
# Sources (1/2)
<div class="columns">
<div>

- Mainly class lectures
- Brownlee, Jason. ‘SMOTE for Imbalanced Classification with Python’. MachineLearningMastery.Com, 16 January 2020. https://www.machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/.
- ChatGPT. ‘ChatGPT’. Accessed 26 September 2025. https://chatgpt.com/?locale=en-US.
- Dorogush, Anna Veronika, Vasily Ershov, and Andrey Gulin. ‘CatBoost: Gradient Boosting with Categorical Features Support’. arXiv:1810.11363. Preprint, arXiv, 24 October 2018. https://doi.org/10.48550/arXiv.1810.11363.

</div>
<div>

- ‘Explainable Boosting Machine — InterpretML Documentation’. Accessed 26 September 2025. https://interpret.ml/docs/ebm.html?utm_source=chatgpt.com.
- ‘Gradient Boosting Trees vs. Random Forests | Baeldung on Computer Science’. 25 February 2022. https://www.baeldung.com/cs/gradient-boosting-trees-vs-random-forests.

</div>
</div>

---

<!-- _class: sources-compact -->
# Sources (2/2)
<div class="columns">
<div>

- Moronta, Sendoa. ‘Generating, Comparing and Evaluating Synthetic Tabular Data with SDV’. Medium, 18 September 2025. https://medium.com/@sendoamoronta/generating-comparing-and-evaluating-synthetic-tabular-data-with-sdv-1198e97c8603.
- Ph.D, Davide Gazzè-. ‘SDV: Generate Synthetic Data Using GAN and Python’. Medium, 30 March 2023. https://medium.datadriveninvestor.com/sdv-generate-synthetic-data-using-gan-and-python-4c26a1e4b3c2.

</div>
<div>

- Step By Step Data Science. ‘LightFM Tutorial for Creating Recommendations in Python’. Accessed 26 September 2025. https://www.stepbystepdatascience.com/hybrid-recommender-lightfm-python.
- Wikipedia. ‘Cross-validation (statistics)’. 30 September 2025. https://en.wikipedia.org/w/index.php?title=Cross-validation_(statistics)&oldid=1314208627.
- Wikipedia. ‘Synthetic minority oversampling technique’. 22 August 2025. https://en.wikipedia.org/w/index.php?title=Synthetic_minority_oversampling_technique&oldid=1307265510.

</div>
</div>


--- 

<div class="columns">
<div style="text-align: center; display: flex; flex-direction: column; justify-content: center;">

![w:220 center](data/apex-logo.svg)

# Apex: Any questions?

We're happy to dive deeper.

</div>
<div style="text-align: center; display: flex; flex-direction: column; justify-content: center;">

"https://github.com/Rin-Ha-n/AppliedAI/blob/development/Presentation/Presentation.pdf"

![QR Code w:300 center](data/qrcode.png)

</div>
</div>
