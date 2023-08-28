import pickle
import subprocess
import make_learning_data
import pandas as pd
import json


def load(X_test,model_file):
    # 保存したモデルをロードする
    loaded_model = pickle.load(open(model_file, 'rb'))
    result = loaded_model.predict(X_test)
    proba = loaded_model.predict_proba(X_test)[0]
    return result,proba
    
def get_test_data():#testデータをcsv形式にして取得
    #data.jsonの最終行を取得
    with open('/Users/shoda/labo/change/data.json', 'r') as f:
        last_line = f.readlines()[-1]
    print(last_line)
    #取得したdata.jsonの最終行だけでjsonファイルを作成
    with open('/Users/shoda/labo/change/last.json', mode='w') as f:
        f.write(last_line)
    #ConvertJsonToCsv.pyをsubprocessで実行することによりlast.jsonをexcelファイルに変換する
    command = ["/usr/local/bin/python3","/Users/shoda/labo/change/php/ConvertJsonToCsv.py","last.json","/Users/shoda/labo/change/php/data.xlsx"]
    proc = subprocess.run(command)
    
    #作成したexcelファイルをcsv化してtestデータとして扱う
    x_test = pd.read_excel("/Users/shoda/labo/change/php/data.xlsx",skiprows=1)
    x_test = make_learning_data.binary_data(x_test)

    return x_test
    

if __name__ == '__main__':
    model_file = "/Users/shoda/labo/change/php/finalized_model.sav"
    x_test = get_test_data()
    result = load(x_test,model_file)
    if result[0][0] == 0:
        print("狭心症でない可能性が高い")
    elif result[0][0] == 1:
        print("狭心症の可能性が高い")
    print("陽性率:",result[1][1])