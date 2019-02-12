from os import walk

f = []
for (dirpath, dirnames, filenames) in walk('gallery'):
    f.extend(  filenames)
    break

f = map( lambda x : 'static/img/gallery/' + x  , f )
i = 0
items = range(1 , len(f)+1)
items = map(lambda x : "#item" + str(x) , items)
for i in range(len(f)):
    a = f[i]
    b = items[i]
    s = '<li><a href="%s"><img src="%s" alt=""></a></li>' %( b,a )
    # print s

items = range(1 , len(f)+1)
items = map(lambda x : "item" + str(x) , items)
for i in range(len(f)):
    a = f[i]
    b = items[i]
    d = '<div id="%s" class="port"><div id="top"><a href="#" class="close"></a></div><div class="row"><img class="img-responsive" src="%s" alt=""></div></div>' % (b,a)
    print d

