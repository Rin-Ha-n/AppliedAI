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
  
  section.centered-fit h1,
  section.centered-fit h2 {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Hide bullet points before h3 headings */
  li > h3 {
    list-style: none;
    margin-left: -1.5em;
  }
  
  li:has(> h3) {
    list-style: none;
  }

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

<!-- Derya -->

---

<div class="columns">
<div>

# Our AI: **Apex**
![w:220](data/apex-logo.svg)

</div>
<div>

* **Aaron Ricca**
    * Eletrical and computer engineering
    * Ex professional skier
    * Climber


* **Derya Özsoy**
    * Informatik
    * Kickboxing

<!-- Start Aaron -> Derya -->

---

# How does **Apex** work?
* the End User enters his **data** <!--(Bithyday, Age, wight, Bodysize, etc....) -->
* Apex learns withe the collected **User data** and **data** from Internet and trys to find common similarities.
* At the end the User receives a personalized trainingsplan
<!-- Derya -->

---

# What's the problem ? <!-- maybe it should be the 2 slid?-->
* training is far from optimized
* hard to find good exercises
* time is always too little
![bg right:50% w:500](data/image.png)
<!-- Derya -->
---

# Data time !
<div class="columns">
<div>

## Input attributes:
* Objective [categorical]
* Available time [categorical]
* Favorite exercises [categorical]
* Biological attributes (Height, body fat%, medical condition, etc.)
* Alimentation (Diet type, enhancing substances, etc.)

</div>
<div>

## Output attributes:
* Training periodization
* List of exercises
* Alimentation improvement tips
* Corresponding improvement % [Continuous]

<!-- Aaron -->
---

# Data Sources 📊

<div class="columns">
<div>

* ### Research & Literature 📚

  * Scientific papers
  * Studies & publications
  * Medical research

* ### Real-World Data 💪

  * Gyms & fitness centers
  * Professional coaches
  * Testers & athletes

</div>
<div>

* ### User-Generated 📱

  * Surveys & questionnaires
  * Smartwatch data
  * Fitness app tracking

* ### Continuous Growth 🔄

  * Data collected from **Apex** users
  * Feedback loops improve recommendations
  * Always learning, always improving

</div>
</div>

<!-- Aaron -->

---

# Data Preprocessing 🔧

* Convert different units & scales to comparable values
  * Height (cm), Weight (kg), Age (years) → same scale

* **Standardization** → for classification algorithms (KNN, Random Forest)
* **Normalization** → for regression algorithms

✅ Enables AI to find hidden correlations between attributes

<!-- Aaron -->
---


<!-- _class: centered-fit -->

# <!--fit--> Few data?
# <!--fit--> -> More data!
## <!--fit--> 🧪 Synthetic data!

<!-- Aaron -->
---

# SMOTE  
### Synthetic Minority Oversampling Technique  

* Used when we have **imbalanced datasets**  
  → e.g., 90% fit people and only 10% overweight  
* Problem: ML models may **ignore the minority class**  
* SMOTE helps by **creating new synthetic examples** of the minority class instead of just copying them

<!--Aaron-->
---

# How SMOTE Works

**Real scenario:** You have only 10% overweight users in your data

SMOTE finds two **similar overweight users** and creates a new realistic profile between them:

* **User A:** Age 35, Weight 95kg, Beginner level  
* **User B:** Age 40, Weight 100kg, Beginner level  
* **New synthetic user:** Age 37, Weight 97kg, Beginner level ✨

✅ This makes the minority class **denser and more balanced**(27%)

<!--Aaron-->
---
# What are we using for **Apex**

* **Supervised Learning**
  * trained using labeled training data
  * learns to recognize patterns in order to make predictions for new, unknown and similar data 
  * All Datas are structured
      * Classification
      * Regression

<!-- Derya -->
---
# Tools

<!-- <div class="columns">
<div> --> 

### Classification 🎯
focuses on sorting observations into specific class
-> exp: We catagorise some Data "*sick*" an "*healthy*" so that the user receives a training plan that does not harm his health
![bg right top w:200](data/classification.png)
### Regression 🎯
Based on making prediction or identification of trends
-> exp: predict a good Trainingsplan for the User
![bg right bottom w:200](data/regression.png)

</div>
<div>

---

### Algorithms 📈
* **Linear Regression**
  * Predict improvement percentages
  * Estimate workout outcomes
* **K-Nearest Neighbors (KNN)**
  * Find similar user profiles
  * Recommend based on comparable cases
* **Random Forests**
  * Robust decision-making
  * Handles complex non-linear relationships
</div>
</div>

---

### Data Processing 🔧
* **SMOTE** - Balance underrepresented groups
* **Cross-Validation** - Ensure model generalization
* **Feature Engineering** - Extract domain-specific patterns

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
  * can lead to injuries due to incorrect training suggestions
* **Requires a lot of time and resources.**
  * high costs und delays
  * Data must always be updated and maintained.
* **Data breach and Data loss.**
<!--zu grosse daten, kann das system, die App überlasten (App stürzt ab)-->

<!-- Derya -->
---

# Ethical Considerations
* **Privacy & GDPR compliance** - Sensitive biometric and health data
* **Labor market impact** - Potential displacement of personal trainers
* **Economic effects** - Reduced gym memberships
* **Algorithmic bias** - Training data skewed toward young, fit males
  * Risk: Inappropriate recommendations for underrepresented groups
  * Can lead to injuries in elderly or different body types
* **Dual-use concerns** - Technology repurposed beyond original intent
  * Example: Facial recognition → military drone targeting

<!-- Both -->

---

# Sources

--- 

<!-- _class: centered-fit -->
![QR Code w:500](qrcode.png)
