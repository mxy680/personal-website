import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

export default function HeartDiseaseClassificationBlog() {
    return (
        <div className='blog-container'>        
            <h1 className="blog-title">Machine Learning for Heart Disease Classification: A Comprehensive Analysis</h1>
            
            {/* Introduction */}
            <div className='blog-section'> 
                <h2 className='section-header'>Introduction</h2>
                <p>
                    Heart diseases stand as one of the most significant health challenges across the globe, accounting for an estimated 17.9 million lives each year <a href='#references-2'>(World Health Organization, 2021)</a>. The timely and precise diagnosis of heart conditions is not just a medical challenge but a pivotal point that can dramatically alter the course of treatment and patient outcomes. With the advent of advanced analytics and machine learning, we stand on the cusp of a new era where artificial intelligence (AI) can play a crucial role in the early detection and classification of cardiac ailments.
                </p>
                <p>
                    This report delves into a cutting-edge approach to heart disease classification using neural networks. By harnessing a renowned dataset from the UCI Machine Learning Repository—celebrated for its extensive assemblage of datasets that have become benchmarks in the realm of data science—we aim to demonstrate the efficacy and precision of machine learning models in distinguishing between healthy and diseased heart states <a href='#references-1'>(Janosi, Steinbrunn, Pfisterer, & Detrano, 1988)</a>.
                </p>
            </div>
    
            {/* Methodology */}
            <div className='blog-section'>
                <h2 className='section-header'>Methodology</h2>
                <div className='table-of-contents'>
                    <ol>
                        <li>
                            <a href="#dataset-exploration">Dataset Exploration</a>
                            <ul>
                                <li><a href="#introduction-initialization">Loading the Data</a></li>
                                <li><a href="#introduction-dataset-anatomy">Analyzing Basic Features of the Data</a></li>
                                <li><a href="#introduction-data-background">Background of the Data</a></li>
                                <li><a href="#introduction-feature-significance">Exploring Feature Significance</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#data-visualization">Data Visualization</a>
                            <ul>
                                <li><a href="#data-visualization-importancen">Importance of Data Visualization</a></li>
                                <li><a href="#data-visualization-features">Visualizing Data Features</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#data-cleaning">Data Cleaning</a>
                            <ul>
                                <li><a href="#data-cleaning-missing-values">Filling in Missing Values</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#data-transformation">Data Transformation</a>
                            <ul>
                                <li><a href="#data-transformation-scaling">Normalizing/Standardizing Data</a></li>
                                <li><a href="#data-transformation-binary-mapping">Mapping Target Values to Binary</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#data-partitioning">Data Partitioning</a>
                            <ul>
                                <li><a href="#data-partitioning-why">Why Data Partition?</a></li>
                                <li><a href="#data-partitioning-splitting-data">Splitting the Data</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#model-selection">Model Selection</a>
                            <ul>
                                <li><a href="#model-selection-criteria">Criteria</a></li>
                                <li><a href="#model-selection-potential-models">Potential Models</a></li>
                                <li><a href="#model-selection-comparison-criteria">Model Comparison Criteria</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#logistic-regression-report">Logistic Regression Report</a>
                        </li>
                        <li>
                            <a href="#decision-tree-report">Decision Tree Report</a>
                        </li>
                        <li>
                            <a href="#random-forest-report">Random Forest Report</a>
                        </li>
                        <li>
                            <a href="#conclusion-methodology">Conclusion</a>
                        </li>
                        <li>
                            <a href="#references">References</a>
                        </li>
                    </ol>
                </div>
            </div>
    
            {/* Dataset Exploration */}
            <div className='blog-section'>
                <h2 id='dataset-exploration' className='section-header'>Dataset Exploration:</h2>
                <p>Our journey into machine learning for heart disease classification begins by setting the stage for our data analysis.</p>
                
                {/* Initialization */}
                <div className='blog-sub-section' id='introduction-initialization'>
                    <h3 className='sub-section-header'>Initialization</h3>
                    <p>
                        Initiating our exploration, we'll first set up our environment:
                    </p>
                    <code>
                        !pip install ucimlrepo pandas <br/>
                        import ucimlrepo <br/>
                        import pandas as pd
                    </code>
                
                    <p>
                        With the libraries in place, let's fetch the heart disease dataset with the ID 45 from UCI repository:
                    </p>
                    <code>
                    heart_disease = fetch_ucirepo(id=45)
                    </code>
                    
                    <p>
                        Once fetched, UCI library provides an efficient way to get the features and labels:
                    </p>
                    <code>
                    X = heart_disease.data.features <br/>
                    y = heart_disease.data.targets
                    </code>
                </div>
    
                {/* Dataset Anatomy */}
                <div className='blog-sub-section' id='introduction-dataset-anatomy'>
                    <h3 className='sub-section-header'>Dataset Anatomy</h3>
                    <p>
                        With the dataset ready, let's delve into its structure and details.
                    </p>
                    <code>
                        X, y = heart_disease.data.features, heart_disease.data.targets <br/> <br/>
                        
                        num_samples, num_features = X.shape <br/>
                        num_classes = y.nunique() <br/>
                        print(f"Number of samples: {'{num_samples}'}") <br/>
                        print(f"Number of features: {'{num_features}'}") <br/>
                        print(f"Number of unique classes: {'{num_classes}'}")                 
                    </code>
                    <output>
                        Number of samples: 303 <br/>
                        Number of features: 13 <br/>
                        Number of unique classes: 5 <br/>
                    </output>
                    <p>
                        This output reveals a dataset comprising 303 samples, each described by 13 features, and an indication of heart disease across 5 unique classes.
                    </p>
                    <p>
                        The value range from 0-4 represents the presence of heart disease in varying degrees. It is imperative to understand the relationship and patterns within these features to make accurate predictions.
                    </p>
                    <p>
                        Finally, a glimpse into the first few records can give us a tangible feel of the dataset:
                    </p>
                    <code>
                        X.head()
                    </code>
                    <table className="table-style table-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>age</th>
                                <th>sex</th>
                                <th>cp</th>
                                <th>testbps</th>
                                <th>chol</th>
                                <th>fbs</th>
                                <th>restecg</th>
                                <th>thalach</th>
                                <th>exang</th>
                                <th>oldpeak</th>
                                <th>slope</th>
                                <th>ca</th>
                                <th>thal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>63</td>
                                <td>1</td>
                                <td>1</td>
                                <td>145</td>
                                <td>233</td>
                                <td>1</td>
                                <td>2</td>
                                <td>150</td>
                                <td>0</td>
                                <td>2.3</td>
                                <td>3</td>
                                <td>0.0</td>
                                <td>6.0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>67</td>
                                <td>1</td>
                                <td>4</td>
                                <td>160</td>
                                <td>286</td>
                                <td>0</td>
                                <td>2</td>
                                <td>108</td>
                                <td>1</td>
                                <td>1.5</td>
                                <td>2</td>
                                <td>3.0</td>
                                <td>3.0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>67</td>
                                <td>1</td>
                                <td>4</td>
                                <td>120</td>
                                <td>229</td>
                                <td>0</td>
                                <td>2</td>
                                <td>129</td>
                                <td>1</td>
                                <td>2.6</td>
                                <td>2</td>
                                <td>2.0</td>
                                <td>7.0</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>37</td>
                                <td>1</td>
                                <td>3</td>
                                <td>130</td>
                                <td>250</td>
                                <td>0</td>
                                <td>0</td>
                                <td>187</td>
                                <td>0</td>
                                <td>3.5</td>
                                <td>3</td>
                                <td>0.0</td>
                                <td>3.0</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>41</td>
                                <td>0</td>
                                <td>2</td>
                                <td>130</td>
                                <td>204</td>
                                <td>0</td>
                                <td>2</td>
                                <td>172</td>
                                <td>0</td>
                                <td>1.4</td>
                                <td>1</td>
                                <td>0.0</td>
                                <td>3.0</td>
                            </tr>
                        </tbody>
                    </table>    
                    <p>
                        The dataset columns range from demographic data like age and sex to medical indicators including chest pain type, resting blood pressure, and cholesterol levels, painting a comprehensive picture of patient health. The table in the following section will describe these features more clearly.
                    </p>
                </div>
    
                {/* Data Background */}
                <div className='blog-sub-section' id='introduction-data-background'>
                    <h3 className='sub-section-header'>Data Background</h3>
                    <p>
                        This dataset, donated on 6/30/1988, encompasses 4 databases: Cleveland, Hungary, Switzerland, and the VA Long Beach. With a multivariate characteristic in the life science subject area, it's primarily used for classification tasks. It consists of both categorical and integer features, with a total of 303 instances and 13 major features out of 76 attributes.
                    </p>
                    <p>
                        The "goal" field in the database indicates the presence of heart disease in a patient. It's integer-valued, ranging from 0 (indicating no presence) to 4. Notably, the Cleveland database is the most utilized one by ML researchers, and studies have mostly focused on distinguishing the presence (values 1, 2, 3, 4) from the absence (value 0) of the disease.
                    </p>
                    <p>
                        For privacy reasons, identifiable information such as names and social security numbers have been replaced with dummy values.
                    </p>
                </div>
    
                {/* Feature Significance */}
                <div className='blog-sub-section' id='introduction-feature-significance'>
                    <h3 className='sub-section-header center-text'>Feature Signifiance</h3>
                    <table className="table-style table-center">
                        <thead>
                            <tr>
                                <th>Variable Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>age</td>
                                <td>Integer</td>
                                <td>Age of patient</td>
                                <td>years</td>
                            </tr>
                            <tr>
                                <td>sex</td>
                                <td>Categorical</td>
                                <td>1 = male; 0 = female</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>cp</td>
                                <td>Categorical</td>
                                <td>Chest pain type</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>trestbps</td>
                                <td>Integer</td>
                                <td>Resting blood pressure (on admission to the hospital)</td>
                                <td>mm Hg</td>
                            </tr>
                            <tr>
                                <td>chol</td>
                                <td>Integer</td>
                                <td>Serum cholesterol</td>
                                <td>mg/dl</td>
                            </tr>
                            <tr>
                                <td>fbs</td>
                                <td>Categorical</td>
                                <td>Fasting blood sugar {">"} 120 mg/dl</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>restecg</td>
                                <td>Categorical</td>
                                <td>Resting electrocardiographic results</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>thalach</td>
                                <td>Integer</td>
                                <td>Maximum heart rate achieved</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>exang</td>
                                <td>Categorical</td>
                                <td>Exercise induced angina</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>oldpeak</td>
                                <td>Integer</td>
                                <td>ST depression induced by exercise relative to rest</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>slope</td>
                                <td>Categorical</td>
                                <td>Slope of the peak exercise ST segment</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ca</td>
                                <td>Integer</td>
                                <td>Number of major vessels (0-3) colored by fluoroscopy</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>thal</td>
                                <td>Categorical</td>
                                <td>Thallium stress test result</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>num</td>
                                <td>Integer</td>
                                <td>Diagnosis of heart disease</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>For an exhaustive list of features and detailed attribute information, refer to the <a className='link-explore' href="https://archive.ics.uci.edu/dataset/45/heart+disease">UCI Machine Learning Repository's dataset page</a>.</p>
                </div>
            </div>
    
            {/* Data Visualization */}
            <div className='blog-section'>
                <h2 className='section-header'>Data Visualization</h2>
                <p>
                    Data visualization is a critical step in understanding the nature and structure of our dataset. Before diving into data cleaning and preprocessing, visualizing the data helps in identifying patterns, anomalies, and relationships among the data points.
                </p>
                
                {/* Importance of Data Visualization */}
                <div className='blog-sub-section' id='data-visualization-importance'>  
                    <h3 className='sub-section-header'>Importance of Data Visualization</h3>
                    <p>
                        Visual representations make it easier to interpret complex datasets, providing insights that might not be apparent from looking at raw data. It allows for:
                        <ul>
                            <li>Quick interpretation of data patterns</li>
                            <li>Identification of outliers and anomalies</li>
                            <li>Understanding relationships between variables</li>
                            <li>Communicating findings effectively to stakeholders</li>
                        </ul>
                    </p>
                </div>
    
                {/* Data Visualization - Features */}
                <div className='blog-sub-section' id='data-visualization-features'>
                    <h3 className='sub-section-header'>Visualizing our Data with Graphs</h3>
                    <p>
                        Below are histograms that provide insights into the distribution and spread of different features in our dataset.
                    </p>
                    <div className="image-grid">
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/1.png`} alt="Histogram of Feature 1" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/2.png`} alt="Histogram of Feature 2" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/3.png`} alt="Histogram of Feature 3" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/4.png`} alt="Histogram of Feature 4" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/5.png`} alt="Histogram of Feature 5" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/6.png`} alt="Histogram of Feature 6" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/7.png`} alt="Histogram of Feature 7" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/8.png`} alt="Histogram of Feature 8" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/9.png`} alt="Histogram of Feature 9" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/10.png`} alt="Histogram of Feature 10" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/11.png`} alt="Histogram of Feature 11" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/12.png`} alt="Histogram of Feature 12" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/13.png`} alt="Histogram of Feature 13" />
                    </div>
                    <h4>Graphical Analysis</h4>
                    <p>
                        The provided histograms offer a deep dive into the dataset's characteristics. A majority of the patients are middle-aged to early senior citizens, predominantly male, with chest pain type 4 being the most common. Resting blood pressure values are centered around 130-140 mm Hg, and serum cholesterol levels are mostly in the 200-300 mg/dl range. Notably, most patients have fasting blood sugar levels below 120 mg/dl, and the resting electrocardiographic results predominantly show categories 0 and 2. The majority achieve a heart rate between 140-170 beats per minute, with fewer experiencing exercise-induced angina. Many patients display smaller ST depression values and zero major vessels colored by fluoroscopy. The distribution and understanding of these patterns will be crucial for subsequent data processing and modeling in predicting heart disease.
                    </p>
                </div>
            </div>
    
            {/* Data Cleaning */}
            <div className='blog-section' id='data-cleaning'>
                <h2 className='section-header'>Data Cleaning:</h2>
                <p>
                    The integrity of a dataset is pivotal for drawing accurate inferences. Unclean datasets, often riddled with missing values, duplicities, or inconsistencies, can lead to skewed results, undermining the credibility of the analysis. A pristine dataset ensures the robustness and validity of the subsequent models and interpretations.
                </p>
            
                {/* Missing Values */}
                <div className='blog-sub-section' id='data-cleaning-missing-values'>
                    <p>
                        In data analysis, handling missing values is common. Using the mean for imputation is popular because it represents the data without biasing the distribution. This method assumes data omissions are random. If there's a pattern to the missing data, exploring other imputation techniques is essential.
                    </p>
                    <p>
                        Let's assess the extent of missing values:
                    </p>
                    <code>
                        missing_values = X.isnull().sum()
                    </code>
                    <p>
                        As we can see, only the ca and thal features have missing values. Let’s fill those values with the means of their columns.
                    </p>
                    <code>
                        X['ca'].fillna(X['ca'].mean(), inplace=True) <br/>
                        X['thal'].fillna(X['thal'].mean(), inplace=True)
                    </code>
                    <p>Now, let's check if it worked:</p>
                    <div className="table-container">
                        <table className="table-style table-center-left table-thin">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Missing Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>age</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>sex</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>cp</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>trestbps</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>chol</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>fbs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>restecg</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>thalach</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>exang</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>oldpeak</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>slope</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>ca</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>thal</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        <table className="table-style table-center-right table-thin">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Missing Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>age</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>sex</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>cp</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>trestbps</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>chol</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>fbs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>restecg</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>thalach</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>exang</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>oldpeak</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>slope</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>ca</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>thal</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        Great, it seemed to have worked. The missing values have been replaced with the mean of its column.
                    </p>
                </div>
            </div>
    
            {/* Data Transformation */}
            <div className='blog-section' id='data-transformation'>
                <h2 className='section-header'>Data Transformation</h2>
                <p>
                    Transforming data is a fundamental step in the preprocessing pipeline, particularly when different features have varying scales. This discrepancy in scales can lead to biased or prolonged training, especially in algorithms that rely on distances or gradients.
                </p>
                <p>
                    For the machine learning models in focus, namely logistic regression and decision trees/random forests, the choice of scaling method can influence the model's performance.
                </p>
                
                {/* Scaling Techniques */}
                <div className='blog-sub-section' id='data-transformation-scaling'>
                    <h3 className='sub-section-header'>Introducing Difference Scaling Techniques:</h3>
                    <h4>1. Normalization</h4>
                    <p>Normalization is the process of scaling numerical features to lie between a given minimum and maximum value, usually between zero and one.</p>
                    <code id="normalizing-data">
                        from sklearn.preprocessing import MinMaxScaler <br/> <br/>
    
                        # Create a scaler object <br/>
                        scaler = MinMaxScaler() <br/> <br/>
    
                        # Fit and transform the dataset <br/>
                        X_normalized = scaler.fit_transform(X) <br/> <br/>
    
                        # Convert the normalized features back to a dataframe <br/>
                        X_normalized_df = pd.DataFrame(X_normalized, columns=X.columns)
                    </code>
                    <p>Explanation: Normalization scales each input feature separately such that it's in the range between 0 and 1. It is useful for algorithms that assume features to be on the same scale, such as gradient descent and K-means clustering.</p>
                    <h4>2. Standardization</h4>
                    <p>Standardization involves shifting the distribution of each feature to have a mean of 0 and a standard deviation of 1 (unit variance).</p>
                    <code>
                        from sklearn.preprocessing import StandardScaler <br/> <br/>
                        
                        # Create a scaler object <br/>
                        std_scaler = StandardScaler() <br/> <br/>
                        
                        # Fit and transform the dataset <br/>
                        X_standardized = std_scaler.fit_transform(X) <br/> <br/>
                        
                        # Convert the standardized features back to a dataframe <br/>
                        X_standardized_df = pd.DataFrame(X_standardized, columns=X.columns)
                    </code>
                    <p>Explanation: Standardization transforms the data to have zero mean and unit variance. This assumes that your data has a Gaussian (bell curve) distribution, which is the case for many real-world scenarios. Algorithms such as Support Vector Machines (SVM) and deep learning models often require standardized data.</p>
                    <h3>Analysis of Scaling Techniques for Machine Learning Models:</h3>
                    <ul>
                        <li>
                            <h4>Logistic Regression</h4>
                            <p>
                                Logistic regression benefits from standardization, especially when features have different ranges. This is because logistic regression uses gradient descent to optimize its cost function. If one feature has broad ranges, the gradient might oscillate and take a longer time to find its best or might not converge at all.
                            </p>
                        </li>
                        <li>
                            <h4>Decision Trees/Random Forests</h4>
                            <p>
                                While these models can handle non-standardized data, standardization can still be beneficial, especially for interpretability.
                            </p>
                        </li>
                    </ul>
                    <p>
                        When working with datasets, especially in real-world scenarios, outliers are often encountered. These are values that are significantly different from the other observations in the dataset. Outliers can arise due to various reasons, such as measurement errors or genuine variations in the data. Depending on the nature and source of these outliers, they can have a substantial effect on the results of our analyses and predictions. Thankfully, upon inspecting the graphs from our data visualization section, our dataset appears to be largely free of significant outliers. This consistency simplifies our preprocessing efforts and offers a more straightforward path to accurate modeling and analysis.  
                    </p>
                </div>
    
                {/* Binary Mapping */}
                <div className='blog-sub-section' id='data-transformation-binary-mapping'>
                    <h3 className='sub-section-header'>Binary Mapping</h3>
                    <p>
                        To refine our model further, we transformed our multiclass classification problem into a binary classification problem by mapping the original four classes into two. This decision was based on the nature of the data and the analytical requirements.
                    </p>
                    <code>
                        {'y = y.map(lambda x: x if x < 1 else 1)'}
                    </code>
                    <div className="table-container">
                        <table className="table-style table-center-left table-thin">
                            <thead>
                                <tr>
                                    <th>index</th>
                                    <th>target</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>298</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>299</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>300</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>301</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>302</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>          
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        <table className="table-style table-center-right table-thin">
                            <thead>
                                <tr>
                                    <th>index</th>
                                    <th>target</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td>298</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>299</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>300</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>301</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>302</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>  
                    </div>
                    <p>
                        With this transformation, classes 0 and 1 are now represented as 0, and classes 2 and 3 are represented as 1. This allows us to focus on binary classification, which simplifies the problem and often leads to more accurate predictions, especially when using logistic regression or other binary classifiers.
                    </p>
                    <p>
                        In conclusion, using the right methods to process our data, combined with the fact that our data doesn't have any unusual values, gives us a strong foundation to build trustworthy and effective models. As we continue our analysis, we can be fairly confident that our data has been prepared carefully and correctly.
                    </p>
                </div>
            </div>
    
            {/* Data Partitioning */}
            <div className='blog-section' id='data-partitioning'>
                <h2 className='section-header'>Data Partitioning</h2>
                <p>Data partitioning refers to the process of splitting your dataset into distinct sets, primarily for training and testing purposes. By doing this, we can ensure that our model doesn't just memorize the data (overfitting) but can generalize well to unseen data.</p>
    
                {/* Why Data Partition? */}
                <div className='blog-sub-section' id='data-partitioning-why'>
                    <h3 className='sub-section-header'>Why Partitioning?</h3>
                    <ol>
                        <li><p><strong>Avoid Overfitting</strong>: Training a model on the entire dataset can lead to overfitting, meaning the model performs well on the known data but poorly on new, unseen data.</p></li>
                        <li><p><strong>Better Evaluation</strong>: By setting aside a portion of our data for testing, we can evaluate how well our model might perform in real-world scenarios.</p></li>
                        <li><p><strong>Validation Set</strong>: Sometimes, data is split into three parts: training, validation, and testing. The validation set is used to tune the model's hyperparameters. In our case, we will only split the data between a training set and a testing set due to the limited quantity of data.</p></li>
                    </ol>
                </div>
    
                {/* Splitting the Data */}
                <div className='blog-sub-section' id='data-partitioning-splitting-data'>
                    <h3 className='sub-section-header'>Splitting the Data</h3>
                    <p>
                        Python's Scikit-learn library provides a straightforward method to partition datasets. Here's how you can do it:
                    </p>
                    <code id="splitting-data">
                        from sklearn.model_selection import train_test_split <br/> <br/>
    
                        # Split the data into 70% training and 30% testing <br/>
                        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
                    </code>
                    <p>
                        Data partitioning is a crucial step in the machine learning pipeline. It not only provides a clear structure on which to train and evaluate but also ensures the model's reliability when faced with new data. As we delve deeper into model building and evaluation in subsequent sections, having a clear understanding of these partitions will be paramount.
                    </p>
                </div>
            </div>
    
            {/* Model Selection */}
            <div className='blog-section' id='model-selection'>
                <h2 className='section-header'>Model Selection</h2>
                <p>In the domain of machine learning, numerous models have been proposed, each with its unique strengths, intricacies, and applicability for diverse tasks. For our heart disease classification problem, the choice of model is of paramount importance as it can significantly impact the accuracy and interpretability of our results. Unlike deep learning architectures, traditional machine learning models can provide us with a different perspective and potentially clearer insights into our data.</p>
    
                {/* Criteria for Model Selection */}
                <div className='blog-sub-section' id='model-selection-criteria'>
                    <h3 className='sub-section-header'>Criteria for Model Selection</h3>
                    <p>When selecting a machine learning model, several factors need consideration:</p>
                    <ol>
                        <li><p><strong>Complexity</strong>: Striking a balance between a model that's too simplistic (potentially underfitting) and one that's overly intricate (prone to overfitting) is crucial. The chosen model should be robust enough to capture data patterns but not so detailed that it merely memorizes the training set.</p></li>
                        <li><p><strong>Computational Efficiency</strong>: Depending on our resources and the intended application, the selected model should be computationally viable.</p></li>
                        <li><p><strong>Interpretability</strong>: In medical applications, it's often essential to understand which features play significant roles in predictions. Some models offer clearer insights into this than others.</p></li>
                        <li><p><strong>Dataset Size</strong>: The volume of available data can influence the choice of model, as some models may require a larger dataset to be effective, while others can work well with smaller datasets. The size of our dataset is relatively small, which affects our model selection. While deep neural networks might overfit on limited data, simpler models like logistic regression or decision trees are more apt. These models efficiently capture patterns without overcomplicating, and decision trees, in particular, offer added interpretability.</p></li>
                    </ol>
                </div>
    
                {/* Potential Models */}
                <div className='blog-sub-section' id='model-selection-potential-models'>
                    <div className="ml-model-container">
                        <a href="#logistic-regression-report">
                            <div className="ml-model">
                                <h4>Logistic Regression</h4>
                                <p>Description: A linear model used for binary classification tasks.</p>
                                <p>Pros: Simple, interpretable, and requires less computational resources.</p>
                            </div>
                        </a>
                        <a href="#decision-tree-report">
                            <div className="ml-model">
                                <h4>Decision Trees</h4>
                                <p>Description: Uses a tree-like model of decisions and their possible outcomes.</p>
                                <p>Pros: Easily visualized and can handle both numerical and categorical data.</p>
                            </div>
                        </a>
                        <a href="#random-forest-report">
                            <div className="ml-model">
                                <h4>Random Forest</h4>
                                <p>Description: An ensemble of decision trees, often trained with the "bagging" method.</p>
                                <p>Pros: Reduces overfitting and provides feature importance scores.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    
            {/* Logistic Regression Report */}
            <div className='blog-section' id='logistic-regression-report'>
                <h2 className='section-header'>1. Logistic Regression Report</h2>
                <p>Logistic Regression is a statistical model used for binary classification. It predicts the probability that a given instance belongs to a particular category. In the world of deep learning and TensorFlow, this can be implemented using a simple neural network with one dense layer. Here's a deep dive into the approach:</p>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Importing Tensorflow:</h3>
                    <code>
                        !pip install tensorflow <br/>
                        import tensorflow as tf
                    </code>
                    <p>By using the above command, you're installing TensorFlow, which is a leading deep learning framework developed by Google.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Creation:</h3>
                    <code>
                        model = tf.keras.models.Sequential([ <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;tf.keras.layers.Dense(units=1, activation='sigmoid', input_shape=(X_train.shape[1],)) <br/>
                        ])
                    </code>
                    <p><strong>tf.keras.models.Sequential()</strong>: This initiates a linear stack of layers. A "sequential" model in Keras is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor.</p>
                    <p><strong>tf.keras.layers.Dense()</strong>: This adds a densely connected neural network layer. A dense layer means every neuron in this layer is connected to every neuron in the previous layer.</p>
                    <ul>
                        <li><p><strong>units=1</strong>: This denotes the number of neurons in the dense layer. For logistic regression, we only need a single neuron that will output a value between 0 and 1 representing the probability.</p></li>
                        <li><p><strong>activation='sigmoid'</strong>: The sigmoid activation function is used in binary classification to squash the output between 0 and 1.</p></li>
                        <li><p><strong>input_shape=(X_train.shape[1],)</strong>: This specifies the shape of the incoming data.</p></li>
                        <li><p><strong>X_train.shape[1]</strong>: gives the number of features in the training data.</p></li>
                    </ul>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Compilation:</h3>
                    <code>
                        model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001), <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loss='binary_crossentropy', <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics=['accuracy'])
                    </code>
                    <p><strong>model.compile()</strong>: This method configures the model for training. It requires an optimizer, a loss function, and a list of metrics.</p>
                    <ul>
                        <li><p><strong>optimizer=tf.keras.optimizers.Adam(learning_rate=0.001)</strong>: Here, the Adam optimizer is chosen. Adam is a popular optimization algorithm in deep learning. The learning rate of 0.001 is the step size the optimizer will take to adjust the weights in the model to minimize the loss.</p></li>
                        <li><p><strong>loss='binary_crossentropy'</strong>: Binary cross-entropy is a common choice for binary classification problems. It quantifies the difference between two probability distributions: the actual and the predicted.</p></li>
                        <li><p><strong>metrics=['accuracy']</strong>: This argument defines the metrics that the model will track. Accuracy is a common metric for classification problems and it gives the proportion of correctly predicted classifications.</p></li>
                    </ul>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Training:</h3>
                    <code>
                        history = model.fit(X_train, y_train, <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validation_data=(X_test, y_test), epochs=100, batch_size=16)
                    </code>
                    <p><strong>model.fit()</strong>: This method trains the model for a fixed number of epochs (iterations on a dataset).</p>
                    <ul>
                        <li><p><strong>X_train, y_train</strong>: The training data and the corresponding labels.</p></li>
                        <li><p><strong>validation_data=(X_test, y_test)</strong>: The data on which to evaluate the loss and any model metrics at the end of each epoch. It allows monitoring of the model's performance on an unseen data set.</p></li>
                        <li><p><strong>batch_size=16</strong>: This specifies the number of training examples utilized in one iteration. A batch size of 16 means that the weights and biases are updated after 16 training examples have been processed.</p></li>
                        <li><p><strong>epochs=100</strong>: This represents the number of times the learning algorithm will work through the entire training dataset.</p></li>
                    </ul>
                    <h4>Training Results:</h4>
                    <table border="1" className="table-style">
                        <thead>
                            <tr>
                                <th>Epoch</th>
                                <th>ms/Step</th>
                                <th>Loss</th>
                                <th>Accuracy</th>
                                <th>Validation Loss</th>
                                <th>Validation Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/100</td>
                                <td>10</td>
                                <td>0.7741</td>
                                <td>0.5662</td>
                                <td>0.6182</td>
                                <td>0.6452</td>
                            </tr>
                            <tr>
                                <td>2/100</td>
                                <td>3</td>
                                <td>0.7510</td>
                                <td>0.5919</td>
                                <td>0.5942</td>
                                <td>0.6452</td>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>99/100</td>
                                <td>4</td>
                                <td>0.3726</td>
                                <td>0.8419</td>
                                <td>0.2928</td>
                                <td>0.9032</td>
                            </tr>
                            <tr>
                                <td>100/100</td>
                                <td>3</td>
                                <td>0.3723</td>
                                <td>0.8419</td>
                                <td>0.2927</td>
                                <td>0.9032</td>
                            </tr>
                        </tbody>
                    </table>      
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Analysis of Training Results:</h3>
                    <p>The presented training results depict the progression of our logistic regression model across 100 epochs. Let's dissect these outcomes:</p>
                    <ol>
                        <li><p><strong>Total Epochs</strong>: The model was trained for a total of 100 epochs. Again, an epoch is one complete forward and backward pass of all the training examples. Typically, more epochs would imply more chances to tweak weights and biases to better fit the data. However, there is a trade-off, as training for too many epochs can lead to overfitting, where the model becomes too specific to the training data and performs poorly on unseen data.</p></li>
                        
                        <li><p><strong>Steps per Epoch</strong>: This measures the computational time taken for each epoch. The model began with a 10ms/step in the first epoch and then stabilized around 3-4ms/step in subsequent epochs. This improvement in speed might be due to various optimizations kicking in after the first epoch.</p></li>
                        
                        <li><p><strong>Loss & Validation Loss</strong></p>
                            <ul>
                                <li><p><strong>Loss</strong> (or training loss) represents how far off our predictions are from the actual labels. A decrease in this value suggests the model is learning and improving its predictive capability on the training data. We see the model's loss started at 0.7741 and eventually diminished to 0.3723 by the 100th epoch.</p></li>
                                <li><p><strong>Validation Loss</strong> gives us an idea of how well the model is generalizing to new, unseen data. The model's validation loss started at 0.6182 and declined to 0.2927. The consistent reduction in validation loss suggests that the model isn't just memorizing the training data but is also generalizing well to unseen data.</p></li>
                            </ul>
                        </li>
                        
                        <li><p><strong>Accuracy & Validation Accuracy</strong>:</p>
                            <ul>
                                <li><p><strong>Accuracy</strong> measures the fraction of predictions our model got right on the training data. Starting from 0.5662, the model's accuracy significantly improved to 0.8419 by the 99th epoch, indicating better predictive performance on the training data.</p></li>
                                <li><p><strong>Validation Accuracy</strong> reflects how often the model is correct on data it hasn't seen during training. Starting at 0.6452, it enhanced to an impressive 0.9032 by the 99th epoch. A high validation accuracy, paired with a high training accuracy, suggests that the model is robust and not overfitting.</p></li>
                            </ul>
                        </li>
                        
                        <li><p><strong>General Observation</strong>: The training and validation metrics are in close agreement throughout the progression, which is a good sign. It means the model is learning underlying patterns and not just noise or specificities from the training data.</p></li>
                    </ol>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Visualization of Training Results:</h3>
                    <p>To gain deeper insights into the model's performance during training, it's essential to visualize the metrics. This helps in identifying overfitting, understanding the model's convergence, and making informed decisions on further tuning.</p>
                    <p>We can extract the metrics from the history object that model.train returns using the following code:</p>
                    <code>
                        loss = history.history['loss'] <br/>
                        val_loss = history.history['val_loss'] <br/>
                        acc = history.history['accuracy'] <br/>
                        val_acc = history.history['val_accuracy']
                    </code>
                    <p>Now, let's plot two plots: training loss vs validation loss, and training accuracy vs validation accuracy:</p>
                    <code>
                        plt.figure(figsize=(10, 5)) <br/> <br/>
    
                        # Plotting Loss & Validation Loss  <br/>
                        plt.subplot(1, 2, 1)  <br/>
                        plt.plot(loss, label='Training Loss')  <br/>
                        plt.plot(val_loss, label='Validation Loss')  <br/>
                        plt.title('Training and Validation Loss')  <br/>
                        plt.xlabel('Epoch')  <br/>
                        plt.ylabel('Loss Value')  <br/>
                        plt.legend() <br/>  <br/>
    
                        # Plotting Accuracy & Validation Accuracy  <br/>
                        plt.subplot(1, 2, 2)  <br/>
                        plt.plot(acc, label='Training Accuracy')  <br/>
                        plt.plot(val_acc, label='Validation Accuracy')  <br/>
                        plt.title('Training and Validation Accuracy') <br/>
                        plt.xlabel('Epoch')  <br/>
                        plt.ylabel('Accuracy Value')  <br/>
                        plt.legend()  <br/> <br/>
    
                        plt.show()  <br/>
                    </code>
                    <div className="blog-double-image-container">
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/14.png`} alt="Loss Curves" />
                        <img src={`https://storage.cloud.google.com/personal-website-images/heart-disease-blog/15.png`} alt="Accuracy Curves" />
                    </div>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Interpretation:</h3>
                    <ul>
                        <li><p>The left graph showcases the comparison between training loss and validation loss.</p></li>
                        <li><p>The right graph contrasts training accuracy with validation accuracy.</p></li>
                        <li><p>Observing these plots helps in identifying if the model is overfitting. For instance, if training loss continues to decrease while validation loss rises, the model may be memorizing the training data and performing poorly on unseen data.</p></li>
                        <li><p>The curvature in the graphs reflects an exponential learning rate. Initially, the model starts with random or naive predictions, resulting in rapid improvements as it quickly corrects glaring errors. As the model becomes more optimized, the rate of improvement slows down, leading to a gradual curve as the adjustments become more nuanced and incremental.</p></li>
                        <li><p>The sharp fluctuations in the validation accuracy are attributed to the small size of the validation (test) set. With fewer data points, individual misclassifications can lead to significant percentage changes in accuracy, resulting in pronounced peaks and troughs in the validation accuracy curve.</p></li>
                    </ul>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Conclusion: </h3>
                    <p>
                        The Logistic Regression model offers a clear insight into binary classification using TensorFlow. By evaluating metrics like loss, validation loss, accuracy, and validation accuracy, we can gauge the model's performance and its generalization capability. The provided charts enhance our grasp of the model's behavior over time, highlighting potential issues like overfitting. The consistent performance on both training and validation data suggests our model is well-balanced, making it dependable for predictions on similar datasets.<br/> <br/>
    
                        Now that we understand Logistic Regression, let's explore another machine learning approach: Decision Trees, to see if it's a better match for our classification needs.
                    </p>  
                </div>
            </div>
    
            {/* Decision Tree Report */}
            <div className='blog-section' id='decision-tree-report'>
                <h2 className='section-header'>2. Decision Tree Report</h2>
                <p>Decision Trees are a type of supervised machine learning algorithm that is predominantly used in classification problems. It works for both continuous as well as categorical output variables. In this algorithm, we split the population into two or more homogeneous sets. This is done based on the most significant attribute(s) making the groups as distinct as possible. Here's a comprehensive guide on Decision Trees:</p>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Importing Necessary Libraries:</h3>
                    <code>
                        from sklearn.tree import DecisionTreeClassifier <br/>
                        from sklearn import metrics
                    </code>
                    <p>With the help of sklearn, one of the most widely used libraries for machine learning in Python, we are importing the necessary modules for our Decision Tree classifier.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Creation:</h3>
                    <code>
                        clf = DecisionTreeClassifier()
                    </code>
                    <p><strong>DecisionTreeClassifier()</strong>: This initiates the Decision Tree classifier. Various parameters like max_depth, criterion, and others can be adjusted to tune the tree, and we will use a technique called hyperparameter searching to get these values.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Training:</h3>
                    <code>
                        clf.fit(X_train, y_train)
                    </code>
                    <p><strong>clf.fit()</strong>: This method trains the model. The model learns to classify based on the features and labels provided in the training data.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Predictions:</h3>
                    <code>
                        y_pred = clf.predict(X_test)
                    </code>
                    <p>Once trained, the model can predict the labels of new, unseen data.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Evaluation:</h3>
                    <code>
                        accuracy = metrics.accuracy_score(y_test, y_pred)
                    </code>
                    <p>Accuracy is calculated by comparing the predicted labels against the actual labels in the test set.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Optimizing Decision Tree Hyperparamters:</h3>             
                    <p>The accuracy of a Decision Tree model can be significantly influenced by the hyperparameters used during its construction. To ensure we harness the full potential of the Decision Tree, we systematically iterate over various combinations of key hyperparameters to find the most optimal set.</p>       
                    <p>First, lets explore the functionality of these parameters:</p>
                    <ul>
                        <li><p><strong>max_depth</strong>: The maximum depth of the tree. It indicates how deep the tree can be. Deeper trees can capture more information about the data but can also lead to overfitting.</p></li>
                        <li><p><strong>min_samples_split</strong>: The minimum number of samples required to split an internal node. Adjusting this parameter can control the tree's granularity.</p></li>
                        <li><p><strong>max_leaf_nodes</strong>: The maximum number of leaf nodes a tree can have. It provides an explicit control on the number of nodes, ensuring the tree doesn't grow too complex.</p></li>
                    </ul>
                    <p>Now, lets perform a comprehensive search to discover the optimal parameters. Utilizing the power of loops, we can perform an exhaustive search over different combinations of these parameters to identify the combination that yields the highest accuracy.</p>
                    <code> 
                        # Values to iterate over <br/>
                        max_depth_values = [2, 4, 6, 8, 10] <br/>
                        min_samples_split_values = [2, 5, 10, 20] <br/>
                        max_leaf_nodes_values = [10, 20, 50, 100] <br/> <br/>
    
                        results = [] <br/> <br/>
    
                        for max_depth in max_depth_values: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;for min_samples_split in min_samples_split_values: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for max_leaf_nodes in max_leaf_nodes_values: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clf = DecisionTreeClassifier(max_depth=max_depth, <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_samples_split=min_samples_split, <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_leaf_nodes=max_leaf_nodes) <br/> <br/>
                                    
                        clf.fit(X_train, y_train) <br/>
                        y_pred = clf.predict(X_test) <br/>
                        accuracy = metrics.accuracy_score(y_test, y_pred) <br/> <br/>
                                    
                        results.append('max_depth': max_depth) <br/>
                        results.append('min_samples_split': min_samples_split) <br/>
                        results.append('max_leaf_nodes': max_leaf_nodes) <br/>
                        results.append('accuracy': accuracy) <br/> <br/>
    
                        # Sorting the results to identify top-performing combinations <br/>
                        df = pd.DataFrame(results) <br/>
                        df_sorted = df.sort_values(by="accuracy", ascending=False).head(10) 
                    </code>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Insights:</h3>
                    <p>By exploring various combinations, we're not only enhancing the model's accuracy but also gaining insights into the dataset's intricacies and how different parameters influence the model's learning capability. The sorted DataFrame, <strong>df_sorted</strong>, provides a clear view of the top 10 hyperparameter combinations that maximize the accuracy of our Decision Tree model.</p>
                    <h3 className="center-text">Hyperparameter Accuracy Results:</h3>
                    <div className="table-container">
                        <div className="table-wrapper">
                            <h4 className="table-title">Training Data</h4>
                            <table border="1" className="table-style table-right table-thin">
                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>max_depth</th>
                                        <th>min_samples_split</th>
                                        <th>max_leaf_nodes</th>
                                        <th>accuracy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>67</td>
                                        <td>10</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>1.000000</td>
                                    </tr>
                                    <tr>
                                        <td>66</td>
                                        <td>10</td>
                                        <td>2</td>
                                        <td>50</td>
                                        <td>1.000000</td>
                                    </tr>
                                    <tr>
                                        <td>51</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>0.991736</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>50</td>
                                        <td>0.991736</td>
                                    </tr>
                                    <tr>
                                        <td>71</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>100</td>
                                        <td>0.966942</td>
                                    </tr>
                                    <tr>
                                        <td>54</td>
                                        <td>8</td>
                                        <td>5</td>
                                        <td>50</td>
                                        <td>0.962810</td>
                                    </tr>
                                    <tr>
                                        <td>55</td>
                                        <td>8</td>
                                        <td>5</td>
                                        <td>100</td>
                                        <td>0.962810</td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>50</td>
                                        <td>0.962810</td>
                                    </tr>
                                    <tr>
                                        <td>34</td>
                                        <td>6</td>
                                        <td>2</td>
                                        <td>50</td>
                                        <td>0.958678</td>
                                    </tr>
                                    <tr>
                                        <td>35</td>
                                        <td>6</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>0.958678</td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>    
                        <div className="table-wrapper">
                            <h4 className="table-title">Test Data</h4>
                            <table border="1" className="table-style table-left table-thin">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>max_depth</th>
                                        <th>min_samples_split</th>
                                        <th>max_leaf_nodes</th>
                                        <th>accuracy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>57</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>65</td>
                                        <td>10</td>
                                        <td>2</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>28</td>
                                        <td>4</td>
                                        <td>20</td>
                                        <td>10</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>6</td>
                                        <td>5</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>41</td>
                                        <td>6</td>
                                        <td>10</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>44</td>
                                        <td>6</td>
                                        <td>20</td>
                                        <td>10</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>53</td>
                                        <td>8</td>
                                        <td>5</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>60</td>
                                        <td>8</td>
                                        <td>20</td>
                                        <td>10</td>
                                        <td>0.819672</td>
                                    </tr>
                                    <tr>
                                        <td>33</td>
                                        <td>6</td>
                                        <td>2</td>
                                        <td>20</td>
                                        <td>0.819672</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Understanding Hyperparameter Tuning Results</h3>
                    <p>As you dive deeper into the world of machine learning, you'll encounter the term "hyperparameter tuning" quite frequently. Hyperparameters are parameters that are set before the learning process begins, as opposed to model parameters that are learned during the training process. Adjusting hyperparameters can significantly impact the performance of your model, making it crucial to select the right ones. The tables provided illustrate the results of hyperparameter tuning for a specific decision tree classifier.</p>
                    <div className="table-container">
                        <div className="table-wrapper">
                            <h4 className="table-title">Training Data</h4>
                            <ol>
                                <li><p><strong>Max Depth</strong>: Models with a higher max depth (10) achieve a perfect accuracy score of 1.000000. This could indicate that the models are more complex and possibly fitting the training data very closely. However, it's crucial to note that a high depth might lead to overfitting, meaning the model will perform well on the training data but might not generalize well to unseen data.</p></li>
                                <li><p><strong>Min Samples Split</strong>: A lower value for the 'min_samples_split' (2) combined with a high 'max_depth' leads to higher accuracy on the training set.</p></li>
                                <li><p><strong>Max Leaf Nodes</strong>: The results suggest that as we increase the 'max_leaf_nodes', the model's accuracy tends to increase, with a max leaf node of 100 achieving the highest accuracy.</p></li>
                            </ol>
                        </div>
                        <div className="table-wrapper">
                            <h4 className="table-title">Test Data</h4>
                            <ol>
                                <li><p><strong>Benchmarking Accuracy</strong>: An accuracy of 0.819672, while seemingly decent, might indeed be low for the potential of the model, especially if we observe near-perfect accuracies on the training data. The limited test data might be causing the model to underperform or might not be capturing the model's true capabilities.</p></li>
                                <li><p><strong>Generalizing Concerns</strong>: A static accuracy score across various hyperparameters might suggest that the model, regardless of its complexity or configuration, generalizes in the same way to the limited test data available. It could be an indicator that the test data might not be challenging the model enough or providing a comprehensive evaluation landscape.</p></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Key Takeaways:</h3>
                    <ol>
                        <li><p><strong>Beware of Overfitting</strong>: High accuracy on the training data, especially a perfect score, can be a red flag. It could indicate that our model has memorized the training data, making it less effective on new, unseen data.</p></li>
                        <li><p><strong>Consistent Test Data Results</strong>: The consistent accuracy score on the test data, irrespective of the hyperparameters, is intriguing. This could be due to various reasons, including the nature of the test data, the model's resilience to different hyperparameter values, or the possibility that the model has reached its performance limit with the given features.</p></li>
                        <li><p><strong>Hyperparameter Interplay</strong>: Hyperparameters do not act in isolation. Their combined effects can sometimes be non-intuitive. It's always beneficial to test various combinations to understand their joint impact on the model's performance.</p></li>
                    </ol>   
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Conclusion</h3>
                    <p>Decision Trees, as a fundamental pillar of machine learning algorithms, offer an intuitive approach to classification problems. Their hierarchical structure, based on making decisions at every node, allows them to represent complex relationships within the data effectively. This report offered a comprehensive look into the Decision Tree classifier, walking through the entire process from model creation, training, prediction, to evaluation.</p>             
                    <p>A significant portion of our exploration revolved around hyperparameter tuning, emphasizing its importance in achieving optimal model performance. The results showcased the impact of different hyperparameters, individually and in combination, on the model's accuracy. We observed near-perfect results on the training data, a potential indicator of overfitting, compared against consistent results on the test data sparked curiosity.</p>
                    <p>In wrapping up our discussion on Decision Trees, it's apt to pave the way for a more advanced ensemble method that builds upon them: Random Forests. This technique harnesses the power of multiple decision trees to provide more robust predictions and tackle the overfitting problem. Let's delve deeper into Random Forests in the subsequent section.</p>    
                </div>
            </div>
    
            {/* Random Forest Report */}
            <div className='blog-section' id='random-forest-report'>
                <h2 className='section-header'>3. Random Forest Report</h2>
                <p>Random Forests are an ensemble learning method that constructs a multitude of decision trees at training time and outputs the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees. They provide a robust way of handling overfitting, which can be a common problem in decision trees. Let's delve into a comprehensive guide on Random Forests:</p>
    
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Importing Necessary Libraries:</h3>
                    <code>
                        from sklearn.ensemble import RandomForestClassifier <br/>
                        from sklearn import metrics
                    </code>
                    <p>Here, we're using the sklearn library to import the necessary modules for our Random Forest classifier.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Creation:</h3>
                    <code>
                        rfc = RandomForestClassifier()
                    </code>
                    <p><strong>RandomForestClassifier()</strong>: This initiates the Random Forest classifier. While there are several parameters that can be adjusted, for this instance, we're utilizing the default settings.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Training:</h3>
                    <code>
                        rfc.fit(X_train, y_train)
                    </code>
                    <p><strong>rfc.fit()</strong>: This method trains the Random Forest model. The model learns to classify based on the features and labels provided in the training data.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Predictions:</h3>
                    <code>
                        y_pred = rfc.predict(X_test)
                    </code>
                    <p>After training, the model can be used to predict the labels of new, unseen data.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Model Evaluation:</h3>
                    <code>
                        accuracy = metrics.accuracy_score(y_test, y_pred)
                    </code>
                    <p>Accuracy is assessed by contrasting the predicted labels against the true labels in the test set.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Utilizing Standard Random Forest Hyperparameters:</h3>
                    <p>Random Forests possess a myriad of hyperparameters that can potentially influence the model's accuracy. While it's often tempting to iteratively explore combinations of these hyperparameters in the quest for the optimal set, we've determined that such an approach might not be the most effective, especially for datasets of limited size.</p>
                    <p>Here's a brief overview of some key parameters:</p>
                    <ol>
                        <li><p><strong>n_estimators</strong>: Represents the number of trees in the forest. A larger number generally translates to a more powerful model, though it can significantly tax computational resources.</p></li>
                        <li><p><strong>max_depth</strong>: Denotes the maximum depth of each individual tree in the forest. As with decision trees, keeping an eye on this parameter is vital to stave off overfitting.</p></li>
                        <li><p><strong>min_samples_split</strong>: Specifies the minimum number of samples required to execute a split at a given node.</p></li>
                        <li><p><strong>max_features</strong>: Dictates the number of features taken into account when identifying the most advantageous split.</p></li>
                    </ol>
                    <p>In light of our findings from the previous section, we've determined that for smaller datasets, the pursuit of the "perfect" hyperparameters can be both challenging and pointless. Consequently, we've decided to employ the standard set of values for these parameters. This approach not only streamlines the modeling process but also circumvents potential pitfalls associated with over-optimization on limited data.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Defining Our Standard Set of Parameters:</h3>
                    <p>Given our approach to employ the default values for our Random Forest model, we will use the following set of hyperparameters:</p>
                    <ol>
                        <li><p><strong>n_estimators</strong>: Default is usually set to 100. This means our forest will consist of 100 trees.</p></li>
                        <li><p><strong>max_depth</strong>: We will keep this as None, which means nodes are expanded until all leaves are pure or until all leaves contain less than the minimum samples required to make a split.</p></li>
                        <li><p><strong>min_samples_split</strong>: The default value is 2, meaning the smallest number of samples required to split a node is 2.</p></li>
                        <li><p><strong>max_features</strong>: The default is set to 'auto', which is equivalent to 'sqrt'. This means the square root of the total number of features will be considered when determining the best split.</p></li>
                    </ol>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Code Implementation:</h3>
                    <p>Now, let's proceed with the Python code implementation using the RandomForestClassifier from sklearn.ensemble:</p>
                    <code>
                        from sklearn.ensemble import RandomForestClassifier <br/> <br/>
    
                        # Initialize the Random Forest model with default parameters <br/>
                        rf_classifier = RandomForestClassifier(random_state=42) <br/> <br/>
    
                        # Fitting the model on the training data <br/>
                        rf_classifier.fit(X_train, y_train) <br/> <br/>
    
                        # Predicting on the test data <br/>
                        y_pred = rf_classifier.predict(X_test) <br/> <br/>
                    </code>
                    <p>By relying on the standard parameters provided by sklearn, we avoid the complexities and uncertainties of hyperparameter tuning, particularly when dealing with a limited dataset. This straightforward approach allows us to harness the power of Random Forests without getting bogged down in extensive optimization procedures.</p>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Evaluating the Random Forest Model</h3>
                    <p>Evaluating machine learning models is crucial to understand their performance on unseen data. Various metrics and visualization techniques can help in this assessment.</p>
                    <ol>
                        <li><p><strong>Accuracy Score:</strong></p></li>
                        <p>The most straightforward metric, it represents the proportion of correct predictions in the total predictions made.</p>
                        <code>
                            from sklearn.metrics import accuracy_score <br/>
                            accuracy = accuracy_score(y_test, y_pred) <br/>
                            print(f"Accuracy: " + accuracy)
                        </code>
                        <output>
                            Accuracy: 0.89
                        </output>
    
                        <li><p><strong>Confusion Matrix:</strong></p></li>
                        <p>A table used to describe the performance of a classification model. It presents a clear picture of the true positive, true negative, false positive, and false negative predictions.</p>
                        <div className="code-output-image-container">
                            <code>
                                from sklearn.metrics import confusion_matrix <br/> <br/>
    
                                cm = confusion_matrix(y_test, y_pred) <br/> <br/>
    
                                plt.figure(figsize=(8, 6)) <br/>
                                sns.heatmap(cm, annot=True, fmt="d",  <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cmap="Blues", cbar=False) <br/>
                                plt.xlabel('Predicted') <br/>
                                plt.ylabel('Actual') <br/>
                                plt.title('Confusion Matrix') <br/>
                                plt.show()
                            </code>
                            <img src={'https://storage.cloud.google.com/personal-website-images/heart-disease-blog/16.png'} alt="Confusion Matrix" />
                        </div>
    
                        <li><p><strong>Feature Importance:</strong></p></li>
                        <p>Random Forest provides insight into the importance of different features in making predictions.</p>
                        <p>The displayed chart visualizes the importance of various features in a Random Forest classifier's prediction process. The feature age emerges as the most significant determinant, underlining its pivotal role in the decision-making. Similarly, cp (Chest Pain Type) and thalach (Maximum Heart Rate Achieved) also stand out due to their substantial importance scores, suggesting that factors such as the nature of chest pain and heart rate during stress testing are vital indicators for the predictions made by the model.</p>
                        <div className="code-output-image-container">
                            <code>
                                features = X_train.columns <br/>
                                importances = rf_classifier.feature_importances_ <br/> <br/>
    
                                plt.figure(figsize=(12, 8)) <br/>
                                sns.barplot(x=importances, y=features, palette="viridis") <br/>
                                plt.title('Feature Importances') <br/>
                                plt.xlabel('Importance') <br/>
                                plt.ylabel('Features') <br/>
                                plt.show()
                            </code>
                            <img src={'https://storage.cloud.google.com/personal-website-images/heart-disease-blog/17.png'} alt="Feature Importance" />
                        </div>
                    </ol>
                </div>
                <div className='blog-sub-section'>
                    <h3 className='sub-section-header'>Takeaways: </h3>
                    <p>The report provides a comprehensive analysis of the efficiency of the Random Forest algorithm in predicting heart disease. Random Forests, by their very nature, amalgamate the predictions of multiple decision trees to produce a more accurate and stable outcome. This inherent ensemble approach significantly reduces overfitting and offers higher accuracy, making them particularly well-suited for medical diagnostic applications such as heart disease prediction. The evaluation metrics further attest to the model's robustness. The Accuracy Score and the Confusion Matrix provides a snapshot of the model's overall accuracy, and the Feature Importance chart accentuates the significant features driving predictions. Together, these components not only validate the capabilities of Random Forests in this domain but also guide us towards potential refinements, ensuring the model remains at the forefront of precise and reliable heart disease prediction.</p>   
                </div>     
            </div>
    
            {/* Conclusion */}
            <div className='blog-section' id='conclusion'>
                <h2 className='section-header'>Conclusion</h2>
                <p>
                    The evolution of machine learning in the realm of medical diagnostics has ushered in a transformative era of precision and enhanced predictability. As outlined throughout this blog, various machine learning techniques, including logistic regression, decision trees, and random forests, have been instrumental in predicting heart disease with increasing accuracy. Reinforcing our findings, Rajdhan et al. substantiate the efficacy of machine learning approaches, highlighting the superiority of the Random Forest technique, which showcased an impressive accuracy rate of 90%, surpassing other machine learning methods in diagnosing heart conditions [Rajdhan et al., 2020]. The utilization of the UCI machine learning repository in their investigation further underscores the reliability of this dataset in heart disease prediction endeavors.
                </p>
                <p>
                    The confluence of these models not only signifies a leap in diagnostic accuracy but also heralds a new dawn for the medical field. The juxtaposition of traditional clinical approaches with advanced machine learning algorithms holds the potential to revolutionize patient care. The ability to predict heart disease with more than 88% accuracy, as evidenced by the research, is indicative of the boundless possibilities these models offer.
                </p>
                <p>
                    Within the framework of our exploration, while traditional machine learning models like Random Forest showcased notable efficiency, the realm of deep learning — specifically neural networks — presents an intriguing avenue yet to be fully treaded upon. Neural networks, recognized for their multi-layered architecture, excel in deciphering complex patterns from expansive datasets, potentially offering insights that might be overlooked by more conventional techniques. In the context of predicting heart diseases, were we to have access to even larger and more intricate datasets, deep learning could very well set new benchmarks in accuracy, building upon the groundwork laid by models like Random Forest. This underscores a pivotal direction for future research: leveraging the immense potential of deep learning to usher in a new era of medical diagnostics, bridging the gaps and enhancing the successes we've seen with traditional methods.
                </p>
                <p>
                    In summation, as we venture deeper into the age of digital medicine, the integration of machine learning models, particularly Random Forests, appears promising. Their proven accuracy and robustness could pave the way for more timely interventions, personalized treatment plans, and, ultimately, improved patient outcomes. With every advancement in this sphere, we move a step closer to a future where heart disease predictions are not just accurate but also actionable, ensuring a higher quality of life for countless individuals.
                </p>
            </div>
    
            {/* References */}
            <div className='blog-section' id='references'>
                <h2 className='section-header'>References</h2>
                <ul>
                    <li id='references-1'><p>
                        Janosi, A., Steinbrunn, W., Pfisterer, M., & Detrano, R. (1988). Heart Disease. UCI Machine Learning Repository. <a href="https://doi.org/10.24432/C52P4X</a>">https://doi.org/10.24432/C52P4X</a> <br/>
                    </p></li>
                    <li id='references-2'><p>
                        World Health Organization. (2021). Cardiovascular diseases (CVDs). <a href="https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)">https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)</a>
                    </p></li>
                </ul>
            </div>
        </div>
      )
}
