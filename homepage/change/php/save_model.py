# Pickleによるモデル保存
import pandas as pd
from sklearn import model_selection
from sklearn.neural_network import MLPClassifier
import pickle

def save(X_train,Y_train):
    # モデルをトレーニングする
    model = MLPClassifier(solver="sgd",random_state=0,max_iter=10000)
    model.fit(X_train, Y_train)

    # モデルを保存する
    filename = '/Users/shoda/labo/change/php/finalized_model.sav'
    pickle.dump(model, open(filename, 'wb'))

    
if __name__ == '__main__':
    df = pd.read_csv("/Users/shoda/labo/learning/data/loading/binary.csv",index_col=0) # バイナリ
    X = df.drop('result', axis=1)
    Y = df["result"]
    save(X,Y)
