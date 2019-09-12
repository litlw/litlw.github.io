import pandas as pd
import operator

term_frequency = {}
desired_terms = ['3d', 'old', 'new', 'nintendo', 'computer', 'windows', 'apple', 'why', 'how', 'me', 'we', 'anyone']
count = 1
if __name__ == '__main__':

    for term in desired_terms:
        term_frequency[term] = [0, {}]

    # print(csv_filtered)

    import glob, os
    os.chdir("../data/Analysis")
    writer = pd.ExcelWriter('data-analyzed.xlsx')
    os.chdir("../data")
    for file in glob.glob("*.csv"):
        count += 1
        #csv = pd.read_csv('../data/' + file)
        csv = pd.read_csv(file)
        csv_parsed = file.split('.')
        csv_target = csv_parsed[0]
        for title in csv.iterrows():
            csv_Series = title[1].loc['title']
            csv_Series.replace('/', '').replace('.', '').replace('[', '').replace(']', '')
            #replace all the stuff i dont want, and then split it into individual words.
            csv_split = csv_Series.lower().split()

            for word in csv_split:
                if word in term_frequency:
                    term_frequency[word][0] += 1
                    if csv_target in term_frequency[word][1]:
                        term_frequency[word][1][csv_target] += 1
                    else:
                        term_frequency[word][1][csv_target] = 1
        print(count)

    os.chdir("../Analysis")
    for word in term_frequency:
        tf = pd.DataFrame.from_dict(term_frequency[word][1], orient="index")
        tf.to_excel(writer, sheet_name=word)

writer.close()
            # term_frequency={}
            # print(file)
