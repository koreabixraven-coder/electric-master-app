const CACHE_NAME = 'electric-master-v1-32-article-batch-10-1000';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './questions.js',
  './theory.js',
  './sw.js',
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-192.png',
  './icon-512.png',
  './assets/electric_master_20060402_q007.png',
  './assets/electric_master_20060402_q021.png',
  './assets/electric_master_20060402_q024.png',
  './assets/electric_master_20060402_q026.png',
  './assets/electric_master_20060402_q027.png',
  './assets/electric_master_20060402_q037.png',
  './assets/electric_master_20060402_q050.png',
  './assets/electric_master_20060402_q057.png',
  './assets/electric_master_20060402_q059.png',
  './assets/electric_article_20030316_q001.png',
  './assets/electric_article_20030316_q002.png',
  './assets/electric_article_20030316_q006.png',
  './assets/electric_article_20030316_q008.png',
  './assets/electric_article_20030316_q009.png',
  './assets/electric_article_20030316_q011.png',
  './assets/electric_article_20030316_q012.png',
  './assets/electric_article_20030316_q014.png',
  './assets/electric_article_20030316_q017.png',
  './assets/electric_article_20030316_q018.png',
  './assets/electric_article_20030316_q020.png',
  './assets/electric_article_20030316_q021.png',
  './assets/electric_article_20030316_q029.png',
  './assets/electric_article_20030316_q036.png',
  './assets/electric_article_20030316_q052.png',
  './assets/electric_article_20030316_q064.png',
  './assets/electric_article_20030316_q065.png',
  './assets/electric_article_20030316_q066.png',
  './assets/electric_article_20030316_q069.png',
  './assets/electric_article_20030316_q072.png',
  './assets/electric_article_20030316_q073.png',
  './assets/electric_article_20030316_q074.png',
  './assets/electric_article_20030316_q075.png',
  './assets/electric_article_20030316_q077.png',
  './assets/electric_article_20030316_q078.png',
  './assets/electric_article_20030316_q080.png',
  './assets/electric_industrial_20020310_q002.png',
  './assets/electric_industrial_20020310_q003.png',
  './assets/electric_industrial_20020310_q008.png',
  './assets/electric_industrial_20020310_q010.png',
  './assets/electric_industrial_20020310_q011.png',
  './assets/electric_industrial_20020310_q014.png',
  './assets/electric_industrial_20020310_q016.png',
  './assets/electric_industrial_20020310_q017.png',
  './assets/electric_industrial_20020310_q021.png',
  './assets/electric_industrial_20020310_q027.png',
  './assets/electric_industrial_20020310_q028.png',
  './assets/electric_industrial_20020310_q037.png',
  './assets/electric_industrial_20020310_q043.png',
  './assets/electric_industrial_20020310_q048.png',
  './assets/electric_industrial_20020310_q061.png',
  './assets/electric_industrial_20020310_q062.png',
  './assets/electric_industrial_20020310_q063.png',
  './assets/electric_industrial_20020310_q064.png',
  './assets/electric_industrial_20020310_q065.png',
  './assets/electric_industrial_20020310_q066.png',
  './assets/electric_industrial_20020310_q070.png',
  './assets/electric_industrial_20020310_q071.png',
  './assets/electric_industrial_20020310_q072.png',
  './assets/electric_industrial_20020310_q073.png',
  './assets/electric_industrial_20020310_q075.png',
  './assets/electric_industrial_20020310_q079.png',
  './assets/electric_industrial_20020310_q090.png',
  './assets/electric_function_20020407_q006.png',
  './assets/electric_function_20020407_q009.png',
  './assets/electric_function_20020407_q018.png',
  './assets/electric_function_20020407_q033.png',
  './assets/electric_function_20020407_q045.png',
  './assets/electric_function_20020407_q053.png',
  './assets/electric_master_20060716_q005.png',
  './assets/electric_master_20060716_q006.png',
  './assets/electric_master_20060716_q008.png',
  './assets/electric_master_20060716_q009.png',
  './assets/electric_master_20060716_q036.png',
  './assets/electric_master_20060716_q047.png',
  './assets/electric_master_20060716_q058.png',
  './assets/electric_master_20070401_q004.png',
  './assets/electric_master_20070401_q009.png',
  './assets/electric_master_20070401_q010.png',
  './assets/electric_master_20070401_q012.png',
  './assets/electric_master_20070401_q017.png',
  './assets/electric_master_20070401_q024.png',
  './assets/electric_master_20070401_q030.png',
  './assets/electric_master_20070401_q033.png',
  './assets/electric_master_20070401_q037.png',
  './assets/electric_master_20070401_q052.png',
  './assets/electric_master_20070401_q056.png',
  './assets/electric_master_20070401_q057.png',
  './assets/electric_master_20070715_q003.png',
  './assets/electric_master_20070715_q005.png',
  './assets/electric_master_20070715_q007.png',
  './assets/electric_master_20070715_q009.png',
  './assets/electric_master_20070715_q012.png',
  './assets/electric_master_20070715_q025.png',
  './assets/electric_master_20070715_q030.png',
  './assets/electric_master_20070715_q032.png',
  './assets/electric_master_20070715_q037.png',
  './assets/electric_master_20080330_q041.png',
  './assets/electric_master_20080713_q018.png',
  './assets/electric_master_20080713_q020.png',
  './assets/electric_master_20080713_q021.png',
  './assets/electric_master_20080713_q028.png',
  './assets/electric_master_20080713_q029.png',
  './assets/electric_master_20080713_q031.png',
  './assets/electric_master_20080713_q032.png',
  './assets/electric_master_20080713_q034.png',
  './assets/electric_master_20080713_q038.png',
  './assets/electric_master_20080713_q043.png',
  './assets/electric_master_20080713_q057.png',
  './assets/electric_master_20090329_q002.png',
  './assets/electric_master_20090329_q012.png',
  './assets/electric_master_20090329_q028.png',
  './assets/electric_master_20090329_q032.png',
  './assets/electric_master_20090329_q040.png',
  './assets/electric_master_20090329_q044.png',
  './assets/electric_master_20090329_q052.png',
  './assets/electric_master_20090329_q053.png',
  './assets/electric_master_20090329_q055.png',
  './assets/electric_master_20090712_q006.png',
  './assets/electric_master_20090712_q013.png',
  './assets/electric_master_20090712_q019.png',
  './assets/electric_master_20090712_q025.png',
  './assets/electric_master_20100328_q003.png',
  './assets/electric_master_20100328_q009.png',
  './assets/electric_master_20100328_q035.png',
  './assets/electric_master_20100328_q050.png',
  './assets/electric_master_20100328_q056.png',
  './assets/electric_master_20100328_q058.png',
  './assets/electric_master_20100711_q004.png',
  './assets/electric_master_20100711_q010.png',
  './assets/electric_master_20100711_q019.png',
  './assets/electric_master_20100711_q029.png',
  './assets/electric_master_20100711_q034.png',
  './assets/electric_master_20100711_q035.png',
  './assets/electric_master_20100711_q045.png',
  './assets/electric_master_20100711_q053.png',
  './assets/electric_master_20110417_q011.png',
  './assets/electric_master_20110417_q026.png',
  './assets/electric_master_20110417_q034.png',
  './assets/electric_master_20110417_q055.png',
  './assets/electric_master_20110731_q001.png',
  './assets/electric_master_20110731_q003.png',
  './assets/electric_master_20110731_q006.png',
  './assets/electric_master_20110731_q010.png',
  './assets/electric_master_20110731_q011.png',
  './assets/electric_master_20110731_q012.png',
  './assets/electric_master_20110731_q015.png',
  './assets/electric_master_20110731_q023.png',
  './assets/electric_master_20110731_q030.png',
  './assets/electric_master_20110731_q035.png',
  './assets/electric_master_20110731_q038.png',
  './assets/electric_master_20110731_q039.png',
  './assets/electric_master_20110731_q049.png',
  './assets/electric_master_20110731_q052.png',
  './assets/electric_master_20120408_q007.png',
  './assets/electric_master_20120408_q009.png',
  './assets/electric_master_20120408_q012.png',
  './assets/electric_master_20120408_q024.png',
  './assets/electric_master_20120408_q028.png',
  './assets/electric_master_20120408_q049.png',
  './assets/electric_master_20120408_q056.png',
  './assets/electric_master_20120722_q004.png',
  './assets/electric_master_20120722_q009.png',
  './assets/electric_master_20120722_q010.png',
  './assets/electric_master_20120722_q013.png',
  './assets/electric_master_20120722_q014.png',
  './assets/electric_master_20120722_q024.png',
  './assets/electric_master_20120722_q027.png',
  './assets/electric_master_20120722_q029.png',
  './assets/electric_master_20120722_q036.png',
  './assets/electric_master_20120722_q039.png',
  './assets/electric_master_20120722_q044.png',
  './assets/electric_master_20120722_q049.png',
  './assets/electric_master_20120722_q052.png',
  './assets/electric_master_20130414_q008.png',
  './assets/electric_master_20130414_q012.png',
  './assets/electric_master_20130414_q018.png',
  './assets/electric_master_20130414_q023.png',
  './assets/electric_master_20130414_q027.png',
  './assets/electric_master_20130414_q028.png',
  './assets/electric_master_20130414_q030.png',
  './assets/electric_master_20130414_q037.png',
  './assets/electric_master_20130414_q040.png',
  './assets/electric_master_20130414_q049.png',
  './assets/electric_master_20130721_q004.png',
  './assets/electric_master_20130721_q010.png',
  './assets/electric_master_20130721_q015.png',
  './assets/electric_master_20130721_q016.png',
  './assets/electric_master_20130721_q024.png',
  './assets/electric_master_20130721_q027.png',
  './assets/electric_master_20130721_q036.png',
  './assets/electric_master_20140406_q002.png',
  './assets/electric_master_20140406_q007.png',
  './assets/electric_master_20140406_q010.png',
  './assets/electric_master_20140406_q014.png',
  './assets/electric_master_20140406_q018.png',
  './assets/electric_master_20140406_q020.png',
  './assets/electric_master_20140406_q021.png',
  './assets/electric_master_20140406_q023.png',
  './assets/electric_master_20140406_q031.png',
  './assets/electric_master_20140406_q043.png',
  './assets/electric_master_20140406_q044.png',
  './assets/electric_master_20140406_q046.png',
  './assets/electric_master_20140406_q049.png',
  './assets/electric_master_20140406_q057.png',
  './assets/electric_master_20140720_q003.png',
  './assets/electric_master_20140720_q007.png',
  './assets/electric_master_20140720_q010.png',
  './assets/electric_master_20140720_q013.png',
  './assets/electric_master_20140720_q014.png',
  './assets/electric_master_20140720_q017.png',
  './assets/electric_master_20140720_q019.png',
  './assets/electric_master_20140720_q021.png',
  './assets/electric_master_20140720_q025.png',
  './assets/electric_master_20140720_q033.png',
  './assets/electric_master_20140720_q043.png',
  './assets/electric_master_20140720_q047.png',
  './assets/electric_master_20140720_q056.png',
  './assets/electric_master_20140720_q057.png',
  './assets/electric_master_20150404_q011.png',
  './assets/electric_master_20150404_q016.png',
  './assets/electric_master_20150404_q021.png',
  './assets/electric_master_20150404_q028.png',
  './assets/electric_master_20150404_q029.png',
  './assets/electric_master_20150404_q030.png',
  './assets/electric_master_20150404_q034.png',
  './assets/electric_master_20150404_q035.png',
  './assets/electric_master_20150404_q048.png',
  './assets/electric_master_20150404_q049.png',
  './assets/electric_master_20150404_q054.png',
  './assets/electric_master_20150404_q059.png',
  './assets/electric_master_20150719_q002.png',
  './assets/electric_master_20150719_q004.png',
  './assets/electric_master_20150719_q005.png',
  './assets/electric_master_20150719_q012.png',
  './assets/electric_master_20150719_q018.png',
  './assets/electric_master_20150719_q022.png',
  './assets/electric_master_20150719_q027.png',
  './assets/electric_master_20150719_q030.png',
  './assets/electric_master_20150719_q035.png',
  './assets/electric_master_20150719_q038.png',
  './assets/electric_master_20150719_q049.png',
  './assets/electric_master_20160402_q003.png',
  './assets/electric_master_20160402_q009.png',
  './assets/electric_master_20160402_q012.png',
  './assets/electric_master_20160402_q013.png',
  './assets/electric_master_20160402_q017.png',
  './assets/electric_master_20160402_q021.png',
  './assets/electric_master_20160402_q022.png',
  './assets/electric_master_20160402_q036.png',
  './assets/electric_master_20160402_q038.png',
  './assets/electric_master_20160402_q039.png',
  './assets/electric_master_20160402_q041.png',
  './assets/electric_master_20160710_q008.png',
  './assets/electric_master_20160710_q011.png',
  './assets/electric_master_20160710_q013.png',
  './assets/electric_master_20160710_q018.png',
  './assets/electric_master_20160710_q023.png',
  './assets/electric_master_20160710_q027.png',
  './assets/electric_master_20160710_q029.png',
  './assets/electric_master_20160710_q038.png',
  './assets/electric_master_20160710_q039.png',
  './assets/electric_master_20160710_q044.png',
  './assets/electric_master_20160710_q047.png',
  './assets/electric_master_20160710_q051.png',
  './assets/electric_master_20160710_q055.png',
  './assets/electric_master_20160710_q056.png',
  './assets/electric_master_20160710_q058.png',
  './assets/electric_master_20160710_q060.png',
  './assets/electric_master_20170305_q004.png',
  './assets/electric_master_20170305_q006.png',
  './assets/electric_master_20170305_q017.png',
  './assets/electric_master_20170305_q022.png',
  './assets/electric_master_20170305_q027.png',
  './assets/electric_master_20170305_q031.png',
  './assets/electric_master_20170305_q033.png',
  './assets/electric_master_20170305_q040.png',
  './assets/electric_master_20170305_q053.png',
  './assets/electric_master_20170708_q002.png',
  './assets/electric_master_20170708_q013.png',
  './assets/electric_master_20170708_q020.png',
  './assets/electric_master_20170708_q021.png',
  './assets/electric_master_20170708_q025.png',
  './assets/electric_master_20170708_q027.png',
  './assets/electric_master_20170708_q033.png',
  './assets/electric_master_20170708_q034.png',
  './assets/electric_master_20170708_q044.png',
  './assets/electric_master_20170708_q047.png',
  './assets/electric_master_20170708_q058.png',
  './assets/electric_master_20170708_q059.png',
  './assets/electric_master_20180331_q002.png',
  './assets/electric_master_20180331_q005.png',
  './assets/electric_master_20180331_q006.png',
  './assets/electric_master_20180331_q007.png',
  './assets/electric_master_20180331_q009.png',
  './assets/electric_master_20180331_q010.png',
  './assets/electric_master_20180331_q016.png',
  './assets/electric_master_20180331_q020.png',
  './assets/electric_master_20180331_q027.png',
  './assets/electric_master_20180331_q031.png',
  './assets/electric_master_20180331_q032.png',
  './assets/electric_master_20180331_q039.png',
  './assets/electric_master_20180331_q056.png',
  './assets/electric_master_20180331_q002.png',
  './assets/electric_master_20180331_q005.png',
  './assets/electric_master_20180331_q006.png',
  './assets/electric_master_20180331_q007.png',
  './assets/electric_master_20180331_q009.png',
  './assets/electric_master_20180331_q010.png',
  './assets/electric_master_20180331_q016.png',
  './assets/electric_master_20180331_q020.png',
  './assets/electric_master_20180331_q027.png',
  './assets/electric_master_20180331_q031.png',
  './assets/electric_master_20180331_q032.png',
  './assets/electric_master_20180331_q039.png',
  './assets/electric_master_20180331_q056.png',
  './assets/electric_article_20030525_q002.png',
  './assets/electric_article_20030525_q003.png',
  './assets/electric_article_20030525_q004.png',
  './assets/electric_article_20030525_q005.png',
  './assets/electric_article_20030525_q006.png',
  './assets/electric_article_20030525_q008.png',
  './assets/electric_article_20030525_q009.png',
  './assets/electric_article_20030525_q011.png',
  './assets/electric_article_20030525_q012.png',
  './assets/electric_article_20030525_q013.png',
  './assets/electric_article_20030525_q014.png',
  './assets/electric_article_20030525_q017.png',
  './assets/electric_article_20030525_q019.png',
  './assets/electric_article_20030525_q025.png',
  './assets/electric_article_20030525_q026.png',
  './assets/electric_article_20030525_q033.png',
  './assets/electric_article_20030525_q035.png',
  './assets/electric_article_20030525_q042.png',
  './assets/electric_article_20030525_q047.png',
  './assets/electric_article_20030525_q052.png',
  './assets/electric_article_20030525_q054.png',
  './assets/electric_article_20030525_q061.png',
  './assets/electric_article_20030525_q062.png',
  './assets/electric_article_20030525_q063.png',
  './assets/electric_article_20030525_q068.png',
  './assets/electric_article_20030525_q069.png',
  './assets/electric_article_20030525_q070.png',
  './assets/electric_article_20030525_q071.png',
  './assets/electric_article_20030525_q072.png',
  './assets/electric_article_20030525_q073.png',
  './assets/electric_article_20030525_q074.png',
  './assets/electric_article_20030525_q075.png',
  './assets/electric_article_20030525_q076.png',
  './assets/electric_article_20030525_q077.png',
  './assets/electric_article_20030525_q078.png',
  './assets/electric_article_20030525_q080.png',
  './assets/electric_article_20030525_q082.png',
  './assets/electric_article_20030525_q090.png',
  './assets/electric_article_20030525_q091.png',
  './assets/electric_article_20030525_q095.png',
  './assets/electric_article_20030525_q096.png',
  './assets/electric_article_20030525_q097.png',
  './assets/electric_article_20030810_q002.png',
  './assets/electric_article_20030810_q003.png',
  './assets/electric_article_20030810_q004.png',
  './assets/electric_article_20030810_q006.png',
  './assets/electric_article_20030810_q008.png',
  './assets/electric_article_20030810_q009.png',
  './assets/electric_article_20030810_q010.png',
  './assets/electric_article_20030810_q013.png',
  './assets/electric_article_20030810_q014.png',
  './assets/electric_article_20030810_q015.png',
  './assets/electric_article_20030810_q016.png',
  './assets/electric_article_20030810_q017.png',
  './assets/electric_article_20030810_q018.png',
  './assets/electric_article_20030810_q019.png',
  './assets/electric_article_20030810_q020.png',
  './assets/electric_article_20030810_q021.png',
  './assets/electric_article_20030810_q029.png',
  './assets/electric_article_20030810_q034.png',
  './assets/electric_article_20030810_q035.png',
  './assets/electric_article_20030810_q038.png',
  './assets/electric_article_20030810_q039.png',
  './assets/electric_article_20030810_q041.png',
  './assets/electric_article_20030810_q042.png',
  './assets/electric_article_20030810_q047.png',
  './assets/electric_article_20030810_q049.png',
  './assets/electric_article_20030810_q055.png',
  './assets/electric_article_20030810_q057.png',
  './assets/electric_article_20030810_q058.png',
  './assets/electric_article_20030810_q061.png',
  './assets/electric_article_20030810_q062.png',
  './assets/electric_article_20030810_q063.png',
  './assets/electric_article_20030810_q064.png',
  './assets/electric_article_20030810_q066.png',
  './assets/electric_article_20030810_q067.png',
  './assets/electric_article_20030810_q068.png',
  './assets/electric_article_20030810_q069.png',
  './assets/electric_article_20030810_q070.png',
  './assets/electric_article_20030810_q073.png',
  './assets/electric_article_20030810_q074.png',
  './assets/electric_article_20030810_q075.png',
  './assets/electric_article_20030810_q077.png',
  './assets/electric_article_20030810_q078.png',
  './assets/electric_article_20030810_q079.png',
  './assets/electric_article_20030810_q082.png',
  './assets/electric_article_20030810_q084.png',
  './assets/electric_article_20030810_q086.png',
  './assets/electric_article_20030810_q089.png',
  './assets/electric_article_20030810_q095.png',
  './assets/electric_article_20030810_q096.png',
  './assets/electric_article_20040307_q001.png',
  './assets/electric_article_20040307_q002.png',
  './assets/electric_article_20040307_q005.png',
  './assets/electric_article_20040307_q006.png',
  './assets/electric_article_20040307_q007.png',
  './assets/electric_article_20040307_q008.png',
  './assets/electric_article_20040307_q009.png',
  './assets/electric_article_20040307_q010.png',
  './assets/electric_article_20040307_q013.png',
  './assets/electric_article_20040307_q014.png',
  './assets/electric_article_20040307_q015.png',
  './assets/electric_article_20040307_q016.png',
  './assets/electric_article_20040307_q017.png',
  './assets/electric_article_20040307_q018.png',
  './assets/electric_article_20040307_q022.png',
  './assets/electric_article_20040307_q025.png',
  './assets/electric_article_20040307_q029.png',
  './assets/electric_article_20040307_q032.png',
  './assets/electric_article_20040307_q039.png',
  './assets/electric_article_20040307_q045.png',
  './assets/electric_article_20040307_q046.png',
  './assets/electric_article_20040307_q057.png',
  './assets/electric_article_20040307_q061.png',
  './assets/electric_article_20040307_q062.png',
  './assets/electric_article_20040307_q064.png',
  './assets/electric_article_20040307_q065.png',
  './assets/electric_article_20040307_q066.png',
  './assets/electric_article_20040307_q068.png',
  './assets/electric_article_20040307_q069.png',
  './assets/electric_article_20040307_q070.png',
  './assets/electric_article_20040307_q071.png',
  './assets/electric_article_20040307_q072.png',
  './assets/electric_article_20040307_q073.png',
  './assets/electric_article_20040307_q075.png',
  './assets/electric_article_20040307_q076.png',
  './assets/electric_article_20040307_q077.png',
  './assets/electric_article_20040307_q078.png',
  './assets/electric_article_20040307_q081.png',
  './assets/electric_article_20040307_q087.png',
  './assets/electric_article_20040307_q090.png',
  './assets/electric_article_20040523_q001.png',
  './assets/electric_article_20040523_q002.png',
  './assets/electric_article_20040523_q004.png',
  './assets/electric_article_20040523_q005.png',
  './assets/electric_article_20040523_q006.png',
  './assets/electric_article_20040523_q007.png',
  './assets/electric_article_20040523_q008.png',
  './assets/electric_article_20040523_q009.png',
  './assets/electric_article_20040523_q010.png',
  './assets/electric_article_20040523_q013.png',
  './assets/electric_article_20040523_q014.png',
  './assets/electric_article_20040523_q015.png',
  './assets/electric_article_20040523_q016.png',
  './assets/electric_article_20040523_q017.png',
  './assets/electric_article_20040523_q018.png',
  './assets/electric_article_20040523_q020.png',
  './assets/electric_article_20040523_q024.png',
  './assets/electric_article_20040523_q028.png',
  './assets/electric_article_20040523_q031.png',
  './assets/electric_article_20040523_q032.png',
  './assets/electric_article_20040523_q033.png',
  './assets/electric_article_20040523_q036.png',
  './assets/electric_article_20040523_q038.png',
  './assets/electric_article_20040523_q044.png',
  './assets/electric_article_20040523_q045.png',
  './assets/electric_article_20040523_q053.png',
  './assets/electric_article_20040523_q060.png',
  './assets/electric_article_20040523_q061.png',
  './assets/electric_article_20040523_q063.png',
  './assets/electric_article_20040523_q064.png',
  './assets/electric_article_20040523_q065.png',
  './assets/electric_article_20040523_q066.png',
  './assets/electric_article_20040523_q067.png',
  './assets/electric_article_20040523_q068.png',
  './assets/electric_article_20040523_q071.png',
  './assets/electric_article_20040523_q072.png',
  './assets/electric_article_20040523_q073.png',
  './assets/electric_article_20040523_q074.png',
  './assets/electric_article_20040523_q075.png',
  './assets/electric_article_20040523_q076.png',
  './assets/electric_article_20040523_q079.png',
  './assets/electric_article_20040523_q080.png',
  './assets/electric_article_20040523_q083.png',
  './assets/electric_article_20040523_q085.png',
  './assets/electric_article_20040523_q086.png',
  './assets/electric_article_20040523_q089.png',
  './assets/electric_article_20040523_q090.png',
  './assets/electric_article_20040808_q001.png',
  './assets/electric_article_20040808_q002.png',
  './assets/electric_article_20040808_q003.png',
  './assets/electric_article_20040808_q005.png',
  './assets/electric_article_20040808_q006.png',
  './assets/electric_article_20040808_q008.png',
  './assets/electric_article_20040808_q009.png',
  './assets/electric_article_20040808_q010.png',
  './assets/electric_article_20040808_q012.png',
  './assets/electric_article_20040808_q013.png',
  './assets/electric_article_20040808_q015.png',
  './assets/electric_article_20040808_q016.png',
  './assets/electric_article_20040808_q017.png',
  './assets/electric_article_20040808_q018.png',
  './assets/electric_article_20040808_q020.png',
  './assets/electric_article_20040808_q026.png',
  './assets/electric_article_20040808_q029.png',
  './assets/electric_article_20040808_q030.png',
  './assets/electric_article_20040808_q032.png',
  './assets/electric_article_20040808_q035.png',
  './assets/electric_article_20040808_q037.png',
  './assets/electric_article_20040808_q044.png',
  './assets/electric_article_20040808_q045.png',
  './assets/electric_article_20040808_q058.png',
  './assets/electric_article_20040808_q059.png',
  './assets/electric_article_20040808_q061.png',
  './assets/electric_article_20040808_q062.png',
  './assets/electric_article_20040808_q063.png',
  './assets/electric_article_20040808_q064.png',
  './assets/electric_article_20040808_q065.png',
  './assets/electric_article_20040808_q066.png',
  './assets/electric_article_20040808_q067.png',
  './assets/electric_article_20040808_q068.png',
  './assets/electric_article_20040808_q069.png',
  './assets/electric_article_20040808_q071.png',
  './assets/electric_article_20040808_q072.png',
  './assets/electric_article_20040808_q074.png',
  './assets/electric_article_20040808_q075.png',
  './assets/electric_article_20040808_q076.png',
  './assets/electric_article_20040808_q077.png',
  './assets/electric_article_20040808_q078.png',
  './assets/electric_article_20040808_q079.png',
  './assets/electric_article_20040808_q080.png',
  './assets/electric_article_20040808_q081.png',
  './assets/electric_article_20040808_q082.png',
  './assets/electric_article_20040808_q090.png',
  './assets/electric_article_20040808_q092.png',
  './assets/electric_article_20040808_q095.png',
  './assets/electric_article_20040808_q098.png',
  './assets/electric_article_20040808_q100.png',
  './assets/electric_article_20050306_q002.png',
  './assets/electric_article_20050306_q003.png',
  './assets/electric_article_20050306_q004.png',
  './assets/electric_article_20050306_q005.png',
  './assets/electric_article_20050306_q006.png',
  './assets/electric_article_20050306_q008.png',
  './assets/electric_article_20050306_q009.png',
  './assets/electric_article_20050306_q012.png',
  './assets/electric_article_20050306_q014.png',
  './assets/electric_article_20050306_q015.png',
  './assets/electric_article_20050306_q016.png',
  './assets/electric_article_20050306_q017.png',
  './assets/electric_article_20050306_q018.png',
  './assets/electric_article_20050306_q020.png',
  './assets/electric_article_20050306_q021.png',
  './assets/electric_article_20050306_q022.png',
  './assets/electric_article_20050306_q024.png',
  './assets/electric_article_20050306_q027.png',
  './assets/electric_article_20050306_q034.png',
  './assets/electric_article_20050306_q035.png',
  './assets/electric_article_20050306_q037.png',
  './assets/electric_article_20050306_q040.png',
  './assets/electric_article_20050306_q042.png',
  './assets/electric_article_20050306_q043.png',
  './assets/electric_article_20050306_q050.png',
  './assets/electric_article_20050306_q061.png',
  './assets/electric_article_20050306_q062.png',
  './assets/electric_article_20050306_q065.png',
  './assets/electric_article_20050306_q067.png',
  './assets/electric_article_20050306_q068.png',
  './assets/electric_article_20050306_q069.png',
  './assets/electric_article_20050306_q070.png',
  './assets/electric_article_20050306_q071.png',
  './assets/electric_article_20050306_q072.png',
  './assets/electric_article_20050306_q074.png',
  './assets/electric_article_20050306_q075.png',
  './assets/electric_article_20050306_q076.png',
  './assets/electric_article_20050306_q078.png',
  './assets/electric_article_20050306_q079.png',
  './assets/electric_article_20050306_q080.png',
  './assets/electric_article_20050306_q081.png',
  './assets/electric_article_20050306_q082.png',
  './assets/electric_article_20050306_q090.png',
  './assets/electric_article_20050306_q094.png',
  './assets/electric_article_20050306_q096.png',
  './assets/electric_article_20050306_q097.png',
  './assets/electric_article_20050529_q003.png',
  './assets/electric_article_20050529_q004.png',
  './assets/electric_article_20050529_q006.png',
  './assets/electric_article_20050529_q008.png',
  './assets/electric_article_20050529_q009.png',
  './assets/electric_article_20050529_q011.png',
  './assets/electric_article_20050529_q012.png',
  './assets/electric_article_20050529_q013.png',
  './assets/electric_article_20050529_q014.png',
  './assets/electric_article_20050529_q015.png',
  './assets/electric_article_20050529_q016.png',
  './assets/electric_article_20050529_q017.png',
  './assets/electric_article_20050529_q018.png',
  './assets/electric_article_20050529_q019.png',
  './assets/electric_article_20050529_q020.png',
  './assets/electric_article_20050529_q026.png',
  './assets/electric_article_20050529_q032.png',
  './assets/electric_article_20050529_q034.png',
  './assets/electric_article_20050529_q039.png',
  './assets/electric_article_20050529_q040.png',
  './assets/electric_article_20050529_q047.png',
  './assets/electric_article_20050529_q052.png',
  './assets/electric_article_20050529_q053.png',
  './assets/electric_article_20050529_q055.png',
  './assets/electric_article_20050529_q061.png',
  './assets/electric_article_20050529_q062.png',
  './assets/electric_article_20050529_q063.png',
  './assets/electric_article_20050529_q064.png',
  './assets/electric_article_20050529_q065.png',
  './assets/electric_article_20050529_q068.png',
  './assets/electric_article_20050529_q069.png',
  './assets/electric_article_20050529_q070.png',
  './assets/electric_article_20050529_q071.png',
  './assets/electric_article_20050529_q075.png',
  './assets/electric_article_20050529_q076.png',
  './assets/electric_article_20050529_q077.png',
  './assets/electric_article_20050529_q079.png',
  './assets/electric_article_20050529_q093.png',
  './assets/electric_article_20050529_q097.png',
  './assets/electric_article_20050807_q001.png',
  './assets/electric_article_20050807_q004.png',
  './assets/electric_article_20050807_q007.png',
  './assets/electric_article_20050807_q009.png',
  './assets/electric_article_20050807_q013.png',
  './assets/electric_article_20050807_q014.png',
  './assets/electric_article_20050807_q016.png',
  './assets/electric_article_20050807_q019.png',
  './assets/electric_article_20050807_q020.png',
  './assets/electric_article_20050807_q021.png',
  './assets/electric_article_20050807_q030.png',
  './assets/electric_article_20050807_q041.png',
  './assets/electric_article_20050807_q048.png',
  './assets/electric_article_20050807_q049.png',
  './assets/electric_article_20050807_q051.png',
  './assets/electric_article_20050807_q060.png',
  './assets/electric_article_20050807_q063.png',
  './assets/electric_article_20050807_q065.png',
  './assets/electric_article_20050807_q066.png',
  './assets/electric_article_20050807_q067.png',
  './assets/electric_article_20050807_q068.png',
  './assets/electric_article_20050807_q069.png',
  './assets/electric_article_20050807_q070.png',
  './assets/electric_article_20050807_q071.png',
  './assets/electric_article_20050807_q072.png',
  './assets/electric_article_20050807_q074.png',
  './assets/electric_article_20050807_q075.png',
  './assets/electric_article_20050807_q078.png',
  './assets/electric_article_20050807_q079.png',
  './assets/electric_article_20050807_q080.png',
  './assets/electric_article_20050807_q086.png',
  './assets/electric_article_20050807_q087.png',
  './assets/electric_article_20050807_q090.png',
  './assets/electric_article_20050807_q092.png',
  './assets/electric_article_20050807_q094.png',
  './assets/electric_article_20050807_q096.png',
  './assets/electric_article_20060305_q003.png',
  './assets/electric_article_20060305_q005.png',
  './assets/electric_article_20060305_q006.png',
  './assets/electric_article_20060305_q007.png',
  './assets/electric_article_20060305_q009.png',
  './assets/electric_article_20060305_q012.png',
  './assets/electric_article_20060305_q013.png',
  './assets/electric_article_20060305_q014.png',
  './assets/electric_article_20060305_q015.png',
  './assets/electric_article_20060305_q017.png',
  './assets/electric_article_20060305_q018.png',
  './assets/electric_article_20060305_q019.png',
  './assets/electric_article_20060305_q020.png',
  './assets/electric_article_20060305_q021.png',
  './assets/electric_article_20060305_q028.png',
  './assets/electric_article_20060305_q029.png',
  './assets/electric_article_20060305_q034.png',
  './assets/electric_article_20060305_q035.png',
  './assets/electric_article_20060305_q038.png',
  './assets/electric_article_20060305_q040.png',
  './assets/electric_article_20060305_q041.png',
  './assets/electric_article_20060305_q043.png',
  './assets/electric_article_20060305_q044.png',
  './assets/electric_article_20060305_q049.png',
  './assets/electric_article_20060305_q053.png',
  './assets/electric_article_20060305_q055.png',
  './assets/electric_article_20060305_q057.png',
  './assets/electric_article_20060305_q058.png',
  './assets/electric_article_20060305_q059.png',
  './assets/electric_article_20060305_q061.png',
  './assets/electric_article_20060305_q062.png',
  './assets/electric_article_20060305_q063.png',
  './assets/electric_article_20060305_q064.png',
  './assets/electric_article_20060305_q066.png',
  './assets/electric_article_20060305_q067.png',
  './assets/electric_article_20060305_q068.png',
  './assets/electric_article_20060305_q069.png',
  './assets/electric_article_20060305_q071.png',
  './assets/electric_article_20060305_q073.png',
  './assets/electric_article_20060305_q074.png',
  './assets/electric_article_20060305_q076.png',
  './assets/electric_article_20060305_q078.png',
  './assets/electric_article_20060305_q079.png',
  './assets/electric_article_20060305_q080.png',
  './assets/electric_article_20060305_q087.png',
  './assets/electric_article_20060305_q090.png',
  './assets/electric_article_20060305_q091.png',
  './assets/electric_article_20060514_q001.png',
  './assets/electric_article_20060514_q002.png',
  './assets/electric_article_20060514_q004.png',
  './assets/electric_article_20060514_q005.png',
  './assets/electric_article_20060514_q006.png',
  './assets/electric_article_20060514_q008.png',
  './assets/electric_article_20060514_q010.png',
  './assets/electric_article_20060514_q011.png',
  './assets/electric_article_20060514_q012.png',
  './assets/electric_article_20060514_q015.png',
  './assets/electric_article_20060514_q016.png',
  './assets/electric_article_20060514_q018.png',
  './assets/electric_article_20060514_q019.png',
  './assets/electric_article_20060514_q020.png',
  './assets/electric_article_20060514_q023.png',
  './assets/electric_article_20060514_q028.png',
  './assets/electric_article_20060514_q029.png',
  './assets/electric_article_20060514_q048.png',
  './assets/electric_article_20060514_q049.png',
  './assets/electric_article_20060514_q051.png',
  './assets/electric_article_20060514_q057.png',
  './assets/electric_article_20060514_q061.png',
  './assets/electric_article_20060514_q062.png',
  './assets/electric_article_20060514_q063.png',
  './assets/electric_article_20060514_q064.png',
  './assets/electric_article_20060514_q065.png',
  './assets/electric_article_20060514_q066.png',
  './assets/electric_article_20060514_q067.png',
  './assets/electric_article_20060514_q068.png',
  './assets/electric_article_20060514_q069.png',
  './assets/electric_article_20060514_q071.png',
  './assets/electric_article_20060514_q072.png',
  './assets/electric_article_20060514_q073.png',
  './assets/electric_article_20060514_q074.png',
  './assets/electric_article_20060514_q075.png',
  './assets/electric_article_20060514_q076.png',
  './assets/electric_article_20060514_q077.png',
  './assets/electric_article_20060514_q078.png',
  './assets/electric_article_20060514_q080.png',
  './assets/electric_article_20060514_q088.png',
  './assets/electric_article_20060514_q090.png',
  './assets/electric_article_20060514_q094.png',
  './assets/electric_article_20060514_q095.png',
  './assets/electric_article_20060514_q098.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null)
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_NAME && (k.startsWith('electric-master') || k.includes('electric-master')))
        .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

function isAppCoreRequest(req){
  const url = new URL(req.url);
  return req.mode === 'navigate'
    || url.pathname.endsWith('/index.html')
    || url.pathname.endsWith('/theory.js')
    || url.pathname.endsWith('/questions.js')
    || url.pathname.endsWith('/sw.js')
    || url.pathname.endsWith('/manifest.json');
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  if (isAppCoreRequest(e.request)) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone)).catch(() => null);
        return res;
      }).catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone)).catch(() => null);
        return res;
      });
    }).catch(() => caches.match('./index.html'))
  );
});

// v31.06: Galaxy Tab TTS rate slider sync fix added on v31.05; data, TTS unit symbol read fix, and question jump list retained

// v31.07: 2007-41회 10번 정답 ④ 및 해설 사용자 제공 원본 사진 기준 교정

// v31.08: 2007-41회 53번 정답 ①, 2007-42회 4번 정답 ② 및 해설 교정

// v31.09: 2025-1회 CBT 복원문제 60문항 원본 사진 및 HTML 대조 반영, ★ 표시

// v31.10: 기출회차41회~63회 탑재 데이터 기준 반복·유사 출제 표시 기능 추가

// v31.11: 문제 번호 이동창 1~60 번호판에 반복출제 뱃지(예: 🔁2, 🔁3)를 표시. 문제/보기/정답/해설 데이터 변경 없음


// v31.13: 태블릿 가로모드 문제풀이 화면 1행 로고/조작아이콘 고정, 2행 본문 독립 스크롤 영역 적용.

// v31.14: 2025년 배관기능장 CBT 필기시험 복원문제(2) 60문항 원본대조 추가.
// v31.15: 기출복원문제에도 반복출제 뱃지와 암기완료 청취 제외 기능 적용.

// v31.16: 기출복원문제 반복출제 뱃지 미표시 방지용 런타임 보정 및 questions.js 캐시버스터 갱신.

// v31.17: 기출복원문제 번호이동창 반복뱃지가 DB 메타데이터뿐 아니라 index 내 복원 반복참조표를 직접 참조하도록 보정.

// v31.18: 문제번호 이동창에서 암기완료 문제를 녹색 테두리와 ✓암기 뱃지로 더 명확히 표시.

// v31.20: 버그 수정 및 데드코드 정리.
//   BUG: 재생아이콘 자동갱신 .active→.show 클래스 오타 수정 (4019행).
//   BUG: 기출63회 DB 미존재 — QUIZ_GROUPS에서 제거.
//   중복: synth.onvoiceschanged + tryLoadV() 2중 호출 삭제.
//   데드코드: 빈 stub 함수 6개, 미사용 유틸 함수 10개, ttsStop 별칭 삭제.

// v31.21: 교차회차 암기완료 제외 버그 수정.
//   isMemorizedQuestion()가 직접키만 확인 → _repeatRefs 교차참조도 확인하도록 보강.
//   "현재 문제 암기완료"만 눌러도 다른 회차의 동일문제가 재생에서 제외됨.
//   설정에 "해설 낭독 제외 (정답만 듣기)" 토글 추가. ON이면 정답+보기만 낭독하고 해설 건너뜀.
//   중복출제 핵심문제 탭 추가 (기출회차+기출복원 반복문제 클러스터 취합).
//   모의고사 점수(scoreData) localStorage 영속 저장 추가 (pipe_master_score_v31_21).
//   가로모드 문제풀이 2분할: 문제 상단고정 + 보기/해설 하단독립스크롤. quizTtsFocus 스크롤 대상 분리.

// v1.03: 전기기능장 2006년 04월 02일 필기 60문제 적용.
 // 기능검증용 샘플 문제 전부 제거, 그림·표·공식 9개 이미지 캐시 추가.
 // 기존 레이아웃·이론·문제풀이·TTS·오답·암기완료 로직 유지.

// v1.04: 전기기사 2003년 03월 16일 필기 100문제 추가.
// 본문 정답표시와 마지막 1~100 정답표 전수 대조, 불일치 0건.
// 기존 전기기능장 60문제·이론·레이아웃·TTS·오답·암기완료 로직 유지.


// v1.05: 전기산업기사 2002년 03월 10일 필기 100문제 추가.
// 본문 정답표시와 마지막 1~100 정답표 전수 대조, 불일치 0건.
// 기존 전기기능장 60문제·전기기사 100문제·이론·레이아웃·TTS·오답·암기완료 로직 유지.


// v1.06: 전기기능사 2002년 04월 07일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 260문제·이론·레이아웃·TTS·오답·암기완료 로직 유지.


// v1.07: 전기기능장 2006년 07월 16일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 320문제·이론·레이아웃·TTS·오답·암기완료 로직 유지.


// v1.08: 전기기능장 2007년 04월 01일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 380문제·이론·레이아웃·TTS·오답·암기완료 로직 유지.


// v1.09: 전기기능장 2007년 07월 15일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 440문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.10: 전기기능장 2008년 03월 30일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 500문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.11: 전기기능장 2008년 07월 13일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 560문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.12: 전기기능장 2009년 03월 29일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 620문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.13: 전기기능장 2009년 07월 12일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 680문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.14: 전기기능장 2010년 03월 28일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 740문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.15: 전기기능장 2010년 07월 11일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 800문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.16: 전기기능장 2011년 04월 17일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 860문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.17: 전기기능장 2011년 07월 31일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 920문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.18: 전기기능장 2012년 04월 08일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 980문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.19: 전기기능장 2012년 07월 22일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1040문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.20: 전기기능장 2013년 04월 14일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1100문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.23: 전기기능장 2014년 07월 20일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1280문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.24: 전기기능장 2015년 04월 04일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1340문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.25: 전기기능장 2015년 07월 19일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1400문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.26: 전기기능장 2016년 04월 02일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1460문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.27: 전기기능장 2016년 07월 10일 필기 60문제 추가.
// 본문 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1520문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.28: 전기기능장 2017년 03월 05일 필기 60문제 추가.
// 본문 검은 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1580문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.29: 전기기능장 2017년 07월 08일 필기 60문제 추가.
// 본문 검은 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1640문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.30: 전기기능장 2018년 03월 31일 필기 60문제 추가.
// 본문 검은 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1700문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.30: 전기기능장 2018년 03월 31일 필기 60문제 추가.
// 본문 검은 정답표시와 마지막 1~60 정답표 전수 대조, 불일치 0건.
// 기존 1700문제·이론·레이아웃·TTS·오답·암기 로직 유지.


// v1.31: 심화학습 기능장 중복 대표 173문제 추가.
// 신규 이미지 없음. 기존 캐시 자산과 강제 업데이트 로직 유지.


// v1.32: 전기기사 10개 회차 1000문제 일괄 추가.
// 신규 원본 그림·수식 이미지 캐시 등록. 기존 캐시 삭제·skipWaiting·clients.claim 유지.
