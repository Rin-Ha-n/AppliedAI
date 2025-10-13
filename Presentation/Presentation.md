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

* Aaron Ricca
    * Eletrical and computer engineering
    * Ex professional skier
    * Climber


* Derya Özsoy
    * Informatik
    * Kickboxing

<!-- Start Aaron -> Derya -->

---

# How does **Apex** work?
* Input every data available
* Outputs personalized training plans
<!-- Feedback from Aaron: would expand a lil more on the slide-->
<!-- Description how the App works-->
<!-- Derya -->

---

# What's the problem ?
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

# Description of the possible solution
# 
* Functionalities 🔧
  * Data entry by the End User
  * Data from Internet
  * The End user receives a personalized training plan.
<!-- Feedback from Aaron: ISNT@ THIS A REPETITION FROM SLIDE 4?? It looks the same, but it's not the same XD in hier, i will describe what the Functionality is, what date we got and where-->
<!--Derya this actually -->
---
# Methods, tools and Algorithms // Noch anpassen -> would add some other algorithm, see next slide to get inspiration/

<!---functionalities (insert data and receive a personalized training plan, etc.)
#Supervised Learning--->
  * Supervised Learning
    * Classification
    * Regression
  * Unsupervised Learning
    * Clustering
    * Association
    * Generalization 
  * K-Nearest Neighbors (KNN)
<!-- machine learning many would be used and then assembled together -->
  * Random Forests

<!--Description and justification of the methods, tools, and algorithms used
- Random Forest: data structure (date from End User)
  provides robust and interpretable results
- KNN: Simple implementation, good results are achieved with similar user types. 
-->
<!-- Derya -->
---

# Methods, tools and Algorithms

<div class="columns">
<div>

### Classification 🎯
* **K-Nearest Neighbors (KNN)**
  * Find similar user profiles
  * Recommend based on comparable cases
* **Random Forests**
  * Robust decision-making
  * Handles complex non-linear relationships

</div>
<div>

---

### Regression 📈
* **Linear Regression**
  * Predict improvement percentages
  * Estimate workout outcomes
* **Gradient Boosting**
  * Iterative error minimization
  * High accuracy predictions

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
* Incomplete data can lead to incorrect results.
<!-- Hier beispiel machen wie, dass ein User ein falsches Resultat erhalten könnte, weil es gewisse daten fehlen-->
  * can lead to injuries due to incorrect training suggestions
* Requires a lot of time and resources.
  * high costs und delays
  * Data must always be updated and maintained.
* Data breach and Data loss
<!--Description of the risks associated with an 
introduction/implementation of the solution-->
<!--Description of possible barriers and obstacles to the introduction/implementation of the solution
-->

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

<!-- ![QR Code](qrcode.png){width=400px} -->

![QR Code w:500](qrcode.png)
