/*! dev.app.js || Version: 5.1.128045 || Generated: Mon Mar 14 2022 09:43:50 GMT+0000 (Western European Standard Time) */
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "3929304bb1cfd1a04334";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "app";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/app.js")(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/index.scss */ "./src/components/index.scss");

//Import all JS files
const requireAll = r => r.keys().forEach(r);
requireAll(__webpack_require__("./src/components sync recursive \\.js$"));


/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./00-settings/config.js": "./src/components/00-settings/config.js",
	"./05-components/layout/layout-base.js": "./src/components/05-components/layout/layout-base.js",
	"./05-components/layout/layout-blank.js": "./src/components/05-components/layout/layout-blank.js",
	"./05-components/layout/layout-emergency.js": "./src/components/05-components/layout/layout-emergency.js",
	"./05-components/layout/layout-popup.js": "./src/components/05-components/layout/layout-popup.js",
	"./05-components/layout/subLayoutLeft.js": "./src/components/05-components/layout/subLayoutLeft.js",
	"./05-components/v3-pat/actions-menu/scripts.js": "./src/components/05-components/v3-pat/actions-menu/scripts.js",
	"./05-components/v3-pat/button-link/scripts.js": "./src/components/05-components/v3-pat/button-link/scripts.js",
	"./05-components/v3-pat/card-charts/scripts.js": "./src/components/05-components/v3-pat/card-charts/scripts.js",
	"./05-components/v3-pat/collapsible-side-panel/scripts.js": "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js",
	"./05-components/v3-pat/comp-line/scripts.js": "./src/components/05-components/v3-pat/comp-line/scripts.js",
	"./05-components/v3-pat/country-phone/scripts.js": "./src/components/05-components/v3-pat/country-phone/scripts.js",
	"./05-components/v3-pat/data-tables/scripts.js": "./src/components/05-components/v3-pat/data-tables/scripts.js",
	"./05-components/v3-pat/datetime-range-picker/scripts.js": "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js",
	"./05-components/v3-pat/drag-drop/scripts.js": "./src/components/05-components/v3-pat/drag-drop/scripts.js",
	"./05-components/v3-pat/dropdown-categories/scripts.js": "./src/components/05-components/v3-pat/dropdown-categories/scripts.js",
	"./05-components/v3-pat/dropzone/dropzone.js": "./src/components/05-components/v3-pat/dropzone/dropzone.js",
	"./05-components/v3-pat/expandable-link/scripts.js": "./src/components/05-components/v3-pat/expandable-link/scripts.js",
	"./05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js": "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js",
	"./05-components/v3-pat/generic-card/scripts.js": "./src/components/05-components/v3-pat/generic-card/scripts.js",
	"./05-components/v3-pat/generic-gallery/scripts.js": "./src/components/05-components/v3-pat/generic-gallery/scripts.js",
	"./05-components/v3-pat/generic-grid/scripts.js": "./src/components/05-components/v3-pat/generic-grid/scripts.js",
	"./05-components/v3-pat/horizontal-toolbar/scripts.js": "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js",
	"./05-components/v3-pat/hour-picker/scripts.js": "./src/components/05-components/v3-pat/hour-picker/scripts.js",
	"./05-components/v3-pat/input-lasa/scripts.js": "./src/components/05-components/v3-pat/input-lasa/scripts.js",
	"./05-components/v3-pat/input-with-clear/scripts.js": "./src/components/05-components/v3-pat/input-with-clear/scripts.js",
	"./05-components/v3-pat/input-with-list/scripts.js": "./src/components/05-components/v3-pat/input-with-list/scripts.js",
	"./05-components/v3-pat/line-add/scripts.js": "./src/components/05-components/v3-pat/line-add/scripts.js",
	"./05-components/v3-pat/line-details-expand-box/script.js": "./src/components/05-components/v3-pat/line-details-expand-box/script.js",
	"./05-components/v3-pat/location-box/scripts.js": "./src/components/05-components/v3-pat/location-box/scripts.js",
	"./05-components/v3-pat/main-interactive-card/scripts.js": "./src/components/05-components/v3-pat/main-interactive-card/scripts.js",
	"./05-components/v3-pat/menu-bar/scripts.js": "./src/components/05-components/v3-pat/menu-bar/scripts.js",
	"./05-components/v3-pat/multiple-selection-button/scripts.js": "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js",
	"./05-components/v3-pat/panel/confirmation-panel.js": "./src/components/05-components/v3-pat/panel/confirmation-panel.js",
	"./05-components/v3-pat/panel/confirmation-popup.js": "./src/components/05-components/v3-pat/panel/confirmation-popup.js",
	"./05-components/v3-pat/panel/modal-popup.js": "./src/components/05-components/v3-pat/panel/modal-popup.js",
	"./05-components/v3-pat/panel/panel-by-id-notify.js": "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js",
	"./05-components/v3-pat/panel/panel-by-id.js": "./src/components/05-components/v3-pat/panel/panel-by-id.js",
	"./05-components/v3-pat/panel/popup-menu.js": "./src/components/05-components/v3-pat/panel/popup-menu.js",
	"./05-components/v3-pat/panel/sapphire-panel.js": "./src/components/05-components/v3-pat/panel/sapphire-panel.js",
	"./05-components/v3-pat/panel/scripts.js": "./src/components/05-components/v3-pat/panel/scripts.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js",
	"./05-components/v3-pat/patient-call-cancel/patient-call-cancel.js": "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js",
	"./05-components/v3-pat/prescription-card/scripts.js": "./src/components/05-components/v3-pat/prescription-card/scripts.js",
	"./05-components/v3-pat/prescription-expandable/scripts.js": "./src/components/05-components/v3-pat/prescription-expandable/scripts.js",
	"./05-components/v3-pat/sapphire-header/scripts.js": "./src/components/05-components/v3-pat/sapphire-header/scripts.js",
	"./05-components/v3-pat/sapphire-popup/scripts.js": "./src/components/05-components/v3-pat/sapphire-popup/scripts.js",
	"./05-components/v3-pat/sapphire-radio-button/scripts.js": "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js",
	"./05-components/v3-pat/scales/scale-main-structure.js": "./src/components/05-components/v3-pat/scales/scale-main-structure.js",
	"./05-components/v3-pat/scales/toggle-item-control.js": "./src/components/05-components/v3-pat/scales/toggle-item-control.js",
	"./05-components/v3-pat/search-and-select/select-ssd.js": "./src/components/05-components/v3-pat/search-and-select/select-ssd.js",
	"./05-components/v3-pat/search-and-select/ssd-search.js": "./src/components/05-components/v3-pat/search-and-select/ssd-search.js",
	"./05-components/v3-pat/searchable-client-side/scripts.js": "./src/components/05-components/v3-pat/searchable-client-side/scripts.js",
	"./05-components/v3-pat/section-expandable-custom/scripts.js": "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js",
	"./05-components/v3-pat/section-expandable-inside/scripts.js": "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js",
	"./05-components/v3-pat/select-system/scripts.js": "./src/components/05-components/v3-pat/select-system/scripts.js",
	"./05-components/v3-pat/shift-container/scripts.js": "./src/components/05-components/v3-pat/shift-container/scripts.js",
	"./05-components/v3-pat/shift-table/shiftTable.js": "./src/components/05-components/v3-pat/shift-table/shiftTable.js",
	"./05-components/v3-pat/shift-table/shiftTableCard.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js",
	"./05-components/v3-pat/shift-table/shiftTableCardProgress.js": "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js",
	"./05-components/v3-pat/shift-table/shiftTableHover.js": "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js",
	"./05-components/v3-pat/side-menu/scripts.js": "./src/components/05-components/v3-pat/side-menu/scripts.js",
	"./05-components/v3-pat/sidebar/sidebar-structure.js": "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js",
	"./05-components/v3-pat/small-box-selectable/scripts.js": "./src/components/05-components/v3-pat/small-box-selectable/scripts.js",
	"./05-components/v3-pat/spinner-horizontal/scripts.js": "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js",
	"./05-components/v3-pat/spinner-vertical/scripts.js": "./src/components/05-components/v3-pat/spinner-vertical/scripts.js",
	"./05-components/v3-pat/split-button/scripts.js": "./src/components/05-components/v3-pat/split-button/scripts.js",
	"./05-components/v3-pat/ssd-component-block/scripts.js": "./src/components/05-components/v3-pat/ssd-component-block/scripts.js",
	"./05-components/v3-pat/ssd-list-line/scripts.js": "./src/components/05-components/v3-pat/ssd-list-line/scripts.js",
	"./05-components/v3-pat/table-form/scripts.js": "./src/components/05-components/v3-pat/table-form/scripts.js",
	"./05-components/v3-pat/tabs-extended/scripts.js": "./src/components/05-components/v3-pat/tabs-extended/scripts.js",
	"./05-components/v3-pat/tabular-list/scripts.js": "./src/components/05-components/v3-pat/tabular-list/scripts.js",
	"./05-components/v3-pat/tabular-scroll/scripts.js": "./src/components/05-components/v3-pat/tabular-scroll/scripts.js",
	"./05-components/v3-pat/timeline/scripts.js": "./src/components/05-components/v3-pat/timeline/scripts.js",
	"./05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js": "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js",
	"./05-components/v3-pat/truncated-content/scripts.js": "./src/components/05-components/v3-pat/truncated-content/scripts.js",
	"./08-pages/clinicianWorkArea.js": "./src/components/08-pages/clinicianWorkArea.js",
	"./08-pages/eSignature.js": "./src/components/08-pages/eSignature.js",
	"./08-pages/remoteAppointment.js": "./src/components/08-pages/remoteAppointment.js",
	"./globals.js": "./src/components/globals.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components sync recursive \\.js$";

/***/ }),

/***/ "./src/components/00-settings/config.js":
/*!**********************************************!*\
  !*** ./src/components/00-settings/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};


/***/ }),

/***/ "./src/components/05-components/layout/layout-base.js":
/*!************************************************************!*\
  !*** ./src/components/05-components/layout/layout-base.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBase */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new LayoutBase(config);
		SapphireWidgets.LayoutBase.widgetId = config.widgetId;
	};

	var openSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].openSidebarIframe(duration);
	};

	var closeSidebarIframe = function(duration) {
		window[SapphireWidgets.LayoutBase.widgetId].closeSidebarIframe(duration);
	};

	var scrollToElement = function($element, offset = 0) {
		var $targetElement = $element;

		if (!!$targetElement.length) {
			var scrollToOffsetInterval;

			scrollToOffsetInterval = setInterval(function() {
				if (window[SapphireWidgets.LayoutBase.widgetId].getThresholds().secondaryThreshold > 0) {
					clearInterval(scrollToOffsetInterval);

					let targetElementOffsetTop = $targetElement.offset().top;

					const isFixed = $('.LayoutBase-secondary').hasClass('isFixed');
					const isEmergency = !!$('.LayoutBase-emergency').text();

					const headerHeight = $('.SapphireHeader').height();
					const secondaryHeight = $('.LayoutBase-secondary').outerHeight();
					const emergencyHeight = isEmergency ? $('.LayoutBase-emergency').height() : 0;

					//const secondaryFixed = isFixed ? secondaryHeight : secondaryHeight - 26;
					targetElementOffsetTop = targetElementOffsetTop - (headerHeight + secondaryHeight + emergencyHeight);

					$('body, html').scrollTop(targetElementOffsetTop - 16);
				}
			}, 250);
		}
	};

	var LayoutBase = function(config) {
		var _this = this;
		this.layoutBaseRedrawTimer = 0;
		this.hasHeader = config.hasHeader;
		this.isExpandable = config.isExpandable;
		this.isTopWindow = window.top === window.self ? true : false;
		this.$widget = $('#' + config.widgetId);
		this.$wrapper = this.$widget.find('.LayoutBase-Wrapper');
		this.$spacer = this.$widget.find('.LayoutBase-spacer');
		this.$mainMenu = this.$widget.find('.LayoutBase-MainMenu');
		this.$header = this.$widget.find('.LayoutBase-header');
		this.$headerBody = this.$widget.find('.SapphireHeader-body');
		this.$primaryMenu = this.$widget.find('.LayoutBase-primary-menu');
		this.$emergency = this.$widget.find('.LayoutBase-emergency');
		this.$secondary = this.$widget.find('.LayoutBase-secondary');
		this.$secondaryMenu = this.$widget.find('.LayoutBase-secondary-menu');
		this.$iframeSidebar = this.$widget.find('.LayoutBase-iframesidebar');
		this.$headerAdditionalContent = this.$widget.find('.SapphireHeader-additional-content');
		this.$topfixedContent = this.$widget.find('.LayoutBase-topfixedcontent');
		this.$bottomfixedContent = this.$widget.find('.LayoutBase-bottomfixedcontent');
		this.$mainContent = this.$widget.find('.LayoutBase-MainContent');
		this.extraPaddingEmergency = 0;
		this.extraPaddingSecondary = 0;
		this.setupWindowEvents();
		this.$iframeSidebar.append('<div class="lds-ring 1"><div></div><div></div><div></div><div></div></div>');

		$(function() {
			$('body').addClass('LayoutBase');
			if (_this.isTopWindow) {
				$('body').css('overflow-y', 'scroll');
			}
		});

		$(window).load(function() {
			$('body').click();
			$(window).scroll();

			_this.$iframeSidebar.find('.lds-ring').fadeOut();
		});
	};

	LayoutBase.prototype.setupWindowEvents = function() {
		var _this = this;
		var cursorPositon = 0;

		$(window).resize(function() {
			_this.updateThresholds();
			_this.handleOptionalContainers();
			_this.handleLayoutTopPadding();
			_this.handleLayoutBottomPadding();
		});

		$(window).scroll(function() {
			var newPosition = $(window).scrollTop();

			window.clearTimeout(_this.layoutBaseRedrawTimer);
			_this.layoutBaseRedrawTimer = window.setTimeout(function() {
				_this.updateThresholds();
				_this.handleOptionalContainers();
				_this.handleLayoutTopPadding();
				_this.handleLayoutBottomPadding();
				_this.handleManageQueueCard(cursorPositon, newPosition);
				cursorPositon = newPosition;
			}, 100);
		});
	};

	LayoutBase.prototype.handleOptionalContainers = function() {
		/*const scrollTop = $(window).scrollTop();
		const isEmergency = !!$('.LayoutBase-emergency').text();*/
	};

	LayoutBase.prototype.handleLayoutTopPadding = function() {
		var paddingTop = this.contentThreshold + this.extraPaddingEmergency + this.extraPaddingSecondary;
		this.$spacer.stop().animate(
			{
				height: paddingTop,
			},
			0,
			'linear'
		);
		if (this.$topfixedContent.length === 1) {
			this.$topfixedContent.css({
				width: $('.LayoutBase-MainContent').width(),
				top: this.topfixedContentThreshold + 'px',
			});
		}
	};

	LayoutBase.prototype.handleLayoutBottomPadding = function() {
		if (this.$bottomfixedContent.length === 1) {
			if ($('body')[0].scrollHeight > $('body').height()) {
				var bottomFixedHeight = this.$bottomfixedContent.outerHeight(true);
				this.$wrapper.addClass('hasFixedBottom').css('padding-bottom', bottomFixedHeight + 'px');
				this.$bottomfixedContent.css({
					width: $('.LayoutBase-MainContent').outerWidth(true),
				});
			} else {
				this.$wrapper.removeClass('hasFixedBottom').css('padding-bottom', '');
				this.$bottomfixedContent.css({
					width: '',
				});
			}
		}
	};

	LayoutBase.prototype.updateThresholds = function() {
		var mainMenuHeight = this.$mainMenu.outerHeight(true) || 0;
		var headerBodyHeight = this.$headerBody.outerHeight(true) || this.$header.outerHeight(true) || 0;
		var topfixedContentHeight = this.$topfixedContent.outerHeight(true) || 0;
		var primaryMenuHeight = this.$primaryMenu.outerHeight(true) || 0;
		var emergencyHeight = this.$emergency.outerHeight(true) || 0;
		this.topfixedContentThreshold = mainMenuHeight + headerBodyHeight;
		this.contentThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight;
		this.emergencyThreshold = mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight;
		this.secondaryThreshold =
			mainMenuHeight + headerBodyHeight + topfixedContentHeight + primaryMenuHeight + emergencyHeight;
	};

	LayoutBase.prototype.getThresholds = function() {
		return {
			topfixedContentThreshold: this.topfixedContentThreshold,
			contentThreshold: this.contentThreshold,
			emergencyThreshold: this.emergencyThreshold,
			secondaryThreshold: this.secondaryThreshold,
		};
	};

	LayoutBase.prototype.openSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		this.$iframeSidebar.animate(
			{
				width: '100%',
			},
			duration
		);
		$('body')
			.css('overflow-y', 'scroll')
			.click();
	};

	LayoutBase.prototype.closeSidebarIframe = function(duration_in) {
		var duration = duration_in >= 0 ? duration_in : 100;
		var targetWidth = this.isExpandable ? 40 : 262;
		this.$iframeSidebar.animate(
			{
				width: targetWidth,
			},
			duration
		);
		$('body').css('overflow-y', 'scroll');
	};

	LayoutBase.prototype.handleManageQueueCard = function(cursorPositon, newPosition) {
		const $manageQueue = $('.ManageQueueContainer');

		if ($manageQueue.length) {
			if (newPosition > cursorPositon) {
				$manageQueue.addClass('ManageQueueContainer--closed');
			} else if (newPosition < cursorPositon) {
				$manageQueue.removeClass('ManageQueueContainer--closed');
			}
		}
	};

	SapphireWidgets.LayoutBase = {
		create,
		closeSidebarIframe,
		openSidebarIframe,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-blank.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-blank.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutBlank */
$(function () {
	if (window.frameElement) {
		if (!!$(this.frameElement).closest('.MainInteractiveCard').length) {
			$('.LayoutBlank.Page').addClass('MainInteractiveCard');
		}
	}
});

/***/ }),

/***/ "./src/components/05-components/layout/layout-emergency.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/layout/layout-emergency.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, document, SapphireWidgets) {
	const ForwardPatientComponent = () => {
		const $allOptions = $('.ForwardLocationsContent');
		const $multiple = $('.ForwardLocationsDiv');
		const $single = $('.SingleLocation');

		$('body').mouseup(function(e) {
			const notClickInAllOptions = !$allOptions.is(e.target) && $allOptions.has(e.target).length === 0;
			const notClickInMultiple = !$multiple.is(e.target) && $multiple.has(e.target).length === 0;
			const notClickInSingle = !$single.is(e.target) && $single.has(e.target).length === 0;
			const isOpen = $multiple.is(':visible');

			if (notClickInAllOptions && notClickInMultiple && notClickInSingle && isOpen) {
				$multiple.click();
			}
		});
	};

	SapphireWidgets.LayoutEmergency = {
		ForwardPatientComponent,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/layout/layout-popup.js":
/*!*************************************************************!*\
  !*** ./src/components/05-components/layout/layout-popup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LayoutPopup */
(function($, window, document, SapphireWidgets) {
	var popupWidth;
	var popupMinWidth;
	var popupHeight;
	var popupMinHeight;
	var popupMaxHeight;
	var popupWidthPercentage;
	var layoutPopupResizeTimer;

	var $popup = $('.LayoutPopup');
	var $osPopup = window.parent.$('.os-internal-Popup.os-internal-ui-dialog');
	var $osPopupContent = window.parent.$('.os-internal-ui-dialog-content.os-internal-ui-widget-content');
	var $overlay = window.parent.$('.os-internal-ui-widget-overlay');
	var popupSize;
	var paddingBody;

	const BODY_PADDING_TOP_BOTTOM = 32;

	const create = function(config) {
		SapphireWidgets.LayoutPopup.config = config;
		popupSize = SapphireWidgets.LayoutPopup.config.PopupSize;
		paddingBody = config.noContentPadding ? 0 : BODY_PADDING_TOP_BOTTOM;

		$(function() {
			$('body').addClass('LayoutPopup'); // because datetimerangepicker is attached to body

			if (SapphireWidgets.LayoutPopup.config.isTouch) {
				$popup.addClass('isTouch');
				$('body').addClass('isTouch'); // because select2 is attached to body
			}

			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation, index) {
					// Avoid to redraw the dialog if it is one the following popups
					if (
						SapphireWidgets.PopupsToAvoidMutations &&
						SapphireWidgets.PopupsToAvoidMutations.some(e => $(`.${e}`).length)
					) {
						return false;
					}

					redrawDialogWindow();
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
			});

			$('body').css('visibility', 'hidden');
		});

		$(window).load(function() {
			$(this.frameElement).css({
				width: '100%',
				height: '100%',
			});

			setTimeout(function() {
				resizeDialog();
				resizeContent();
				$('body').css('visibility', 'visible');
			}, 150);

			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.LayoutPopup.redrawDialogWindow);
		});

		$(window.parent)
			.off('resize.LayoutPopup')
			.on('resize.LayoutPopup', function() {
				redrawDialogWindow();
			});
	};

	const redrawDialogWindow = function() {
		clearTimeout(layoutPopupResizeTimer);
		layoutPopupResizeTimer = setTimeout(function() {
			resizeDialog();
			resizeContent();
			$('body').css('visibility', 'visible');
		}, 300);
	};

	const resizeDialog = function() {
		if (SapphireWidgets.LayoutPopup.config.hasClose) {
			window.parent.$('.os-internal-ui-dialog-titlebar').show();

			if (window.top._iframePopup != undefined || false) {
				const $closeButton = window.parent.$('.os-internal-ui-dialog-titlebar-close');

				$closeButton.removeAttr('href');
				$closeButton.off('click').on('click', () => window.top._iframePopup.SapphireWidgets.SapphirePopup.close());
			}
		}

		if (window.top.$('body').hasClass('LayoutBase')) {
			window.top.$('body').css({
				overflowY: 'hidden',
			});
		}

		$overlay.width('100%');

		calcWidthPercentage(popupSize, $osPopupContent);

		$osPopup.css({
			left: 'unset',
			top: 'unset',
			height: 'auto',
			minWidth: popupMinWidth + 'px',
			width: popupWidth + 'px',
		});
	};

	const resizeContent = function() {
		var $body = $('.LayoutPopup__body__content');
		var contentScrollTop = $body.scrollTop();

		if (popupSize === 'Small' && $('.daterangepicker:visible').length > 0) {
			// skip the reset of .LayoutPopup__body__content
		} else {
			$body.css({
				height: 'auto',
			});
		}

		let bodyContent = paddingBody
			? $('.LayoutPopup__body__content')[0].scrollHeight
			: $('.LayoutPopup__body__content').height();

		var headerHeight = $('.LayoutPopup__header').innerHeight() || 0;
		var introHeight = $('.LayoutPopup__intro').innerHeight() || 0;
		var bodyHeight = bodyContent || 0;
		var footerHeight = $('.LayoutPopup__footer').innerHeight() || 0;
		var contentHeight = headerHeight + introHeight + bodyHeight + footerHeight + paddingBody;
		var dialogHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();
		const windowHeight = $(window.parent).height();

		if (popupSize === 'Small') {
			var parentHeight = $(window.parent).height();

			if (contentHeight > parentHeight) {
				$osPopupContent.height(parentHeight - 70);
				$body.height($osPopupContent.height() - paddingBody);
			} else {
				$osPopupContent.height(contentHeight);
			}
		} else {
			if (contentHeight < dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight < dialogHeight) {
				$osPopupContent.height(contentHeight);
				if (contentHeight < popupMinHeight) {
					var diference = popupMinHeight - contentHeight;
					$body.height(bodyHeight + diference);
				}
			} else if (contentHeight >= dialogHeight && SapphireWidgets.LayoutPopup.config.isFixedHeight) {
				var forcedBodyHeight = dialogHeight - headerHeight - introHeight - footerHeight - paddingBody;
				$body.height(forcedBodyHeight);
			} else if (contentHeight >= dialogHeight) {
				if (contentHeight > popupMaxHeight) {
					$osPopupContent.height(popupMaxHeight);
					var forcedBodyHeight = popupMaxHeight - headerHeight - introHeight - footerHeight - paddingBody;
					$body.height(forcedBodyHeight);
				} else {
					$osPopupContent.height(contentHeight);
				}
			} else {
				console.warn('Unexpected combination...');
			}
		}

		// Handle when DateTimeRangePicker is opened
		var dateRangePicker = $('.daterangepicker:visible');
		if (dateRangePicker.length === 1) {
			if (dateRangePicker[0].getBoundingClientRect().bottom > dialogHeight) {
				var difference = dateRangePicker[0].getBoundingClientRect().bottom - dialogHeight;
				var bodyHeight = $('.LayoutPopup__body__content').outerHeight(true);

				$('.LayoutPopup__body__content').height(bodyHeight + difference + paddingBody);
				$osPopupContent.height($('body')[0].scrollHeight);

				const popupTotalHeight = $osPopupContent.height();
				const newContentHeight = $('.LayoutPopup__body').outerHeight(true) + headerHeight + introHeight + footerHeight;

				if (windowHeight < 720) {
					const coords = dateRangePicker[0].getBoundingClientRect();
					var point = window.parent.scrollY + coords.top - coords.height;
					dateRangePicker.addClass('drop-up').css('top', point);
				} else if (windowHeight < 980 && newContentHeight > popupTotalHeight) {
					$osPopupContent.css({
						maxHeight: newContentHeight + 'px',
					});
				}
			}
		}

		$body.scrollTop(contentScrollTop);
	};

	const increaseHeight = function(diference) {
		$osPopupContent.height($osPopupContent.height() + diference);
	};

	const scrollToElement = function($element) {
		var $targetElement = $element;
		if (!!$targetElement.length) {
			var scrollToOffsetInterval;
			scrollToOffsetInterval = setInterval(function() {
				clearInterval(scrollToOffsetInterval);
				var headerHeight = $('.LayoutPopup__header').outerHeight(true) || 0;
				var introHeight = $('.LayoutPopup__intro').outerHeight(true) || 0;
				var currentBodyScroll = $('.LayoutPopup__body__content')[0].scrollTop || 0;
				var targetElementOffsetTop = $targetElement.offset().top - headerHeight - introHeight + currentBodyScroll - 20;
				$('.LayoutPopup__body__content').scrollTop(targetElementOffsetTop);
			}, 250);
		}
	};

	const calcWidthPercentage = () => {
		const windowHeight = $(window.parent).height();
		const windowWidth = $(window.parent).width();

		if (popupSize === 'Small') {
			let percentage = 0.33;

			if (windowWidth <= 1024) percentage = 0.5;
			else if (windowWidth > 1024 && windowWidth <= 1440) percentage = 0.4;

			popupWidth = parseInt(windowWidth * percentage);
			popupMinWidth = 400;
		} else if (popupSize === 'Medium') {
			if (windowWidth <= 1024) popupWidthPercentage = 0.8;
			else {
				switch (SapphireWidgets.LayoutPopup.config.PopupWidth) {
					case 'XSmall':
						popupMinWidth = 200;
						popupWidthPercentage = 0.2;
						break;
					case 'Small':
						popupMinWidth = 300;
						popupWidthPercentage = 0.3;
						break;
					case 'Medium':
						popupMinWidth = 700;
						popupWidthPercentage = 0.6;
						break;
					default:
						popupMinWidth = 700;
						popupWidthPercentage = 0.7;
				}

				popupWidthPercentage = SapphireWidgets.LayoutPopup.config.isTouch ? 0.8 : popupWidthPercentage;
			}

			popupWidth = parseInt(windowWidth * popupWidthPercentage);
			popupMinHeight = 100;
			popupMaxHeight = SapphireWidgets.LayoutPopup.config.isTouch
				? parseInt(windowHeight * 0.9)
				: parseInt(windowHeight * 0.7);

			if (SapphireWidgets.LayoutPopup.config.isFixedHeight) popupHeight = popupMaxHeight;
			else popupHeight = window.parent.$('.os-internal-Popup.os-internal-ui-dialog').outerHeight();

			$osPopupContent.css({
				maxHeight: popupMaxHeight + 'px',
				minHeight: popupMinHeight + 'px',
				height: popupHeight + 'px',
			});
		} else if (popupSize === 'Large') {
			popupMinWidth = parseInt(windowWidth * 0.8);
			popupMaxHeight = parseInt(windowHeight * 0.9);
		} else if (popupSize === 'Fixed') {
			popupWidth = SapphireWidgets.SapphirePopup.popupWidth;
			popupMinWidth = SapphireWidgets.SapphirePopup.popupWidth;
		}
	};

	SapphireWidgets.LayoutPopup = {
		create,
		resizeDialog,
		resizeContent,
		increaseHeight,
		redrawDialogWindow,
		scrollToElement,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).unload(function() {
	if (!!$('.LayoutPopup').length) {
		window.top.$('body').css({
			overflowY: 'scroll',
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/layout/subLayoutLeft.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/layout/subLayoutLeft.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SubLayoutLeft */
(function($, window, document, SapphireWidgets) {
	const create = function() {};

	SapphireWidgets.SubLayoutLeft = {
		create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/actions-menu/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/actions-menu/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ActionsMenu */
(function($, window, SapphireWidgets) {
	var create = function(config) {
		var $triggerElement = $('#' + config.triggerElement);
		var $contentElement = $('#' + config.contentElement);

		if ($contentElement.text().length < 1) {
			$triggerElement.hide();
		}

		$(function() {
			// inside a document ready due to sapphire popup binded events
			window.setTimeout(function() {
				var position = config.position;
				if (config.locale === 'AR') {
					switch (config.position) {
						case 'right':
							position = 'left';
							break;
						case 'left':
							position = 'right';
							break;
						case 'bottom-left':
							position = 'bottom-right';
							break;
						case 'bottom-right':
							position = 'bottom-left';
							break;
						case 'top-left':
							position = 'top-right';
							break;
						case 'top-right':
							position = 'top-left';
							break;
					}
				}
				$triggerElement.tooltipster({
					content: $('<section/>').append($contentElement.clone(true, true)),
					trigger: config.triggerEvent,
					position: position,
					maxWidth: config.maxWidth,
					theme:
						'tooltipster-location--' +
						config.location +
						' ActionsMenu-tooltip Padding--' +
						config.padding +
						' Border--' +
						config.border,
				});
				$contentElement.remove();
			}, 500);
		});
	};

	SapphireWidgets.ActionsMenu = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/button-link/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/button-link/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ButtonLink */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			const $widget = $(`#${config.widgetId} .ButtonClick`);

			$widget.off('click').on('click', function(e) {
				const _target = $(e.target);

				if (_target.closest('.ButtonClick.click').length == 0) {
					$('.ButtonClick.click').removeClass('click');
					$(this).addClass('click');
				}
			});
		});
	};

	SapphireWidgets.ButtonLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/card-charts/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/card-charts/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CardCharts */
SapphireWidgets.CardChartsPopup = () => {
	$(document).ready(function() {
		window['CardChartsScroll'] = {};
		const isInsideIframe = window.frameElement != undefined || false;

		let $component = $('.CardCharts');
		let $header = $component.find('.CardCharts__Header');
		let $content = $component.find('.CardCharts__Content');
		let $properties = $component.find('.CardCharts__Properties');
		let $headerDiv = $component.find('.CardCharts__HeaderChart > div');
		let $fakeColumns = $('.FakeColumns');
		let $bodyContent = $('.LayoutPopup__body');

		if (isInsideIframe && !$fakeColumns.length) {
			$headerDiv.append(`<div class='FakeColumns'></div>`);
		}

		if (isInsideIframe) {
			$fakeColumns = $('.FakeColumns');

			$content.on('scroll', () => {
				clearTimeout(window['CardChartsScroll'].scrollFinished);
				window['CardChartsScroll'].scrollFinished = setTimeout(function() {
					if ($content.scrollTop() > 0) $header.addClass('ShadowMedium');
					else $header.removeClass('ShadowMedium');
				}, 50);
			});
		}

		$(window).resize(function() {
			$component = $('.CardCharts');
			$header = $component.find('.CardCharts__Header');
			$content = $component.find('.CardCharts__Content');
			$properties = $component.find('.CardCharts__Properties');
			$fakeColumns = $('.FakeColumns');
			$bodyContent = $('.LayoutPopup__body');

			let headerTitleHeight = 63;
			const headerPropertiesHeight = 56;

			const $charts = $content.find('.CardCharts__Charts .OSChart');

			$charts.each(function() {
				const $chart = $(this);

				const newWidth = $content.width() - $properties.width() + 40;
				$chart.highcharts().setSize(newWidth, $chart.height());
			});

			if (isInsideIframe) {
				const timeoutHeight = setTimeout(() => {
					const $headerTitle = $component.find('.CardCharts__HeaderTitle');

					headerTitleHeight = $headerTitle.length ? $headerTitle.outerHeight() : headerTitleHeight - 6;

					const newHeight = $(window.frameElement).height() - headerTitleHeight;

					$fakeColumns.css('height', `${newHeight + headerPropertiesHeight}px`);
					$content.css('height', `${newHeight - headerPropertiesHeight}px`);

					clearTimeout(timeoutHeight);
				}, 500);
			}
		});

		// See MutationObserver (LayoutPopup)
		SapphireWidgets.PopupsToAvoidMutations = ['ChartsPopup'];
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/collapsible-side-panel/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CollapsibleSidePanel */
(function($, window, SapphireWidgets) {
	class CollapsibleSidePanel {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		openCloseSidePanel(toOpen) {
			if (toOpen) {
				this.$content.css('display', 'grid');

				setTimeout(() => {
					this.$component.addClass('CollapsibleSidePanel--open');
				}, 50);
			} else {
				this.$component.removeClass('CollapsibleSidePanel--open');

				setTimeout(() => {
					$('.CollapsibleSidePanel__Content').css('display', 'none');
				}, 350);
			}
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$header = this.$component.find('.CollapsibleSidePanel__Header');
			this.$content = this.$component.find('.CollapsibleSidePanel__Content');
			this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
			this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
			this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
			this.$close = this.$component.find('.CollapsibleSidePanel__PanelHeader .icon');
			this.$closeEventLink = this.$component.find('.CollapsibleSidePanel__PanelHeader .PanelCloseButton');

			this.$header.on('click', () => this.openCloseSidePanel(true));
			this.$close.on('click', () => {
				this.openCloseSidePanel(false);

				this.$closeEventLink.click();

				if ($('.PanelContentEmpty').length) {
					SapphireWidgets.CollapsibleSidePanel.close(this.options.widgetId, true);
				}
			});

			if (this.options.isAutoCounter) {
				calculateCounter(this.$panelContent, this.$counter1, this.$counter2);

				this.$counter1.removeClass('Hidden');
				this.$counter2.removeClass('Hidden');
			}

			const hasEmptyMessage = this.$panelContent.find('.CollapsibleEmptyMessage');
			const contentToVerify = hasEmptyMessage.length ? this.$panelContent.find('>:first-child') : this.$panelContent;

			if (this.options.hideWhenEmpty && !contentToVerify.text()) {
				this.$component.hide();
			}

			//Diogo Ribeiro - it seems we only need margins when we show the header
			if(!this.options.hideHeader) {
				$(document).ready(function() {
					$('.CollapsibleSidePanel:visible').addClass('MultiMarginTopSmall');
					$('.CollapsibleSidePanel:visible:first').addClass('MultiMarginTopLarge');
				});
			}
			
		}
	}

	const calculateCounter = (panelContent, counter1, counter2) => {
		let total = 0;
		const counters = panelContent.find('.ExapandablePlaceholder.Counter');

		counters.each(function() {
			total += +$(this).text();
		});

		counter1.text(total);
		counter2.text(total);

		if (total === 0) counter2.addClass('ColorLightGreyBG');
	};

	const updateCounter = (widgetId, counter) => {
		this.$component = $(`#${widgetId}`);
		this.counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');

		this.counter1.text(counter);
		this.counter2.text(counter);

		if (+counter === 0) this.counter2.addClass('ColorLightGreyBG');
	};

	const close = (widgetId, hideHeader, updateCounter) => {
		this.$component = $(`#${widgetId}`);

		if (!this.$component.hasClass('CollapsibleSidePanel')) {
			this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		}

		if (hideHeader) {
			this.$component.addClass('CollapsibleSidePanel--headerHidden');
		}

		this.$component.removeClass('CollapsibleSidePanel--open');

		$('.CollapsibleSidePanel:visible').removeClass('MultiMarginTopSmall');
		$('.CollapsibleSidePanel:visible:first').removeClass('MultiMarginTopLarge');
	};

	const checkEmpty = widgetId => {
		this.$component = $(`#${widgetId}`).find('.CollapsibleSidePanel');
		this.$panelContent = this.$component.find('.CollapsibleSidePanel__PanelContent');
		this.$counter1 = this.$component.find('.CollapsibleSidePanel__Title span.Counter');
		this.$counter2 = this.$component.find('.CollapsibleSidePanel__PanelTitle span.Counter');
		this.$emptyMessage = this.$component.find('.CollapsibleEmptyMessage');

		this.$emptyMessage.show();

		calculateCounter(this.$panelContent, this.$counter1, this.$counter2);
	};

	const create = config => (window[config.widgetId] = new CollapsibleSidePanel(config));

	SapphireWidgets.CollapsibleSidePanel = { create, close, updateCounter, checkEmpty };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/comp-line/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/comp-line/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CompLine */
(function($, window, SapphireWidgets) {
	function SectionCompline() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var holder = $(ob).closest('.CompLine');
			var Section = $(ob).closest('.CompLineExpandable');
			var SectionContent = Section.children('.CompLine_Expand');

			// get id
			var id = holder.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}

				if (holder.hasClass('notRenderInteractions')) {
					holder.find('.CompLine-toggle-interactions').trigger('click');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.CompLine_headLine').off();

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// each all sections
			$('.CompLineExpandable').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] == null
				) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (
					curState !=
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server']
				) {
					// curstate
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['client'] = curState;
					previewstat[
						$(this)
							.closest('.CompLine')
							.attr('id')
					]['server'] = curState;
				} else {
					// has class expanded
					if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == false &&
						$(this).hasClass('expanded')
					) {
						$(this).removeClass('expanded');
						$(this)
							.children('.CompLine_Expand')
							.height(0);
					} else if (
						previewstat[
							$(this)
								.closest('.CompLine')
								.attr('id')
						]['client'] == true &&
						!$(this).hasClass('expanded')
					) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.CompLineExpandable').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[
					$(this)
						.closest('.CompLine')
						.attr('id')
				] = {
					client: stat,
					server: stat,
				};
			});

			// add click events
			$('.CompLine__expandIcon').unbind('click');
			$('.CompLine__expandIcon').on('click', function() {
				clickEvents(this.parentElement);
			});

			// add stop prepagation
			$('.CompLine_headLine input, .CompLine_headLine select, .CompLine_headLine a').click(function(event) {
				event.stopPropagation();
			});

			// remove unecessary behaviors

			// event ajax
			osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionCompline();

		expandable.init();
	};

	SapphireWidgets.CompLine = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/country-phone/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/data-tables/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/data-tables/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class DataTables {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$table = this.$widget.find('table');
			this.$table.addClass('cell-border compact');
			this.onInit();
		}

		onInit() {
			this.options = {
				...this.config,
				fixedColumns: true,
				info: false,
				ordering: false,
				paging: false,
				scrollCollapse: true,
				scrollX: true,
				searching: false,
			};

			$(() => {
				this.$table.DataTable(this.options);
			});
		}
	}

	const create = config => (window[config.widgetId] = new DataTables(config));

	SapphireWidgets.DataTables = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/datetime-range-picker/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DateTimeRangePicker */
(function($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function(config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function(config) {
		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.currentLocale === 'AR' && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, at]';

		if (config.timePicker) {
			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' HH:mm'
					: 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText
					? 'D MMM YYYY' + stringConnection + ' hh:mm A'
					: 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			if (!this.config.attachToInput) this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText
			? 'ddd[, ]' + this.config.formatLabel
			: this.config.formatLabel;

		options.locale = {
			direction: config.currentLocale === 'AR' ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: 'Cancel',
			applyLabel: 'Apply',
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some(i => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some(i => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some(i => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function(date) {
				return disabledWeekDays.includes(
					moment(date)
						.day()
						.toString()
				);
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function(startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function() {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function() {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function(event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after(
						'<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' +
							_this.config.goTodayLabel +
							'</td></tr>'
					);
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function() {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function(event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function(event, picker) {
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function(event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function(event, picker) {});

		this.$input.on('timechanged.daterangepicker', function(event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function(event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function(event, picker) {
			_this.$clear.removeClass('disabled');
			_this.updateLabeling();
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function() {
		var _this = this;
		this.$label.off('click').on('click', function(event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function(event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function() {
			if (_this.config.timePicker24Hour) {
				_this.$calendar
					.find('.hourselect')
					.val('0')
					.trigger('change');
			} else {
				_this.$calendar
					.find('.hourselect')
					.val('12')
					.trigger('change');
			}
			_this.$calendar
				.find('.minuteselect')
				.val('0')
				.trigger('change');
			_this.$calendar
				.find('.ampmselect')
				.val('AM')
				.trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function() {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function() {
				window.setTimeout(function() {
					_this.updateParentIframe();
				}, 50);
			});
		}

		this.$input.on('blur', function(evt) {
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.updateLabeling = function() {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if(this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
						
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function() {
		if (
			window.frameElement &&
			($(window.frameElement.parentElement).hasClass('tooltipster-content') ||
				$(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))
		) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar
					.removeClass('drop-up')
					.addClass('drop-down')
					.css('top', point);
			} else if (
				!this.$calendar.hasClass('drop-up') &&
				this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)
			) {
				var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
				this.$calendar.addClass('drop-up').css('top', point);
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function() {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return (
			bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5)
		);
	};

	DateTimeRangePicker.prototype.clear = function(sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function() {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function() {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function() {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function(sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(
					this.config.dateTimeRangePickerFakeNotifyId,
					this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour
				);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour
					);
				} else {
					OsNotifyWidget(
						this.config.dateTimeRangePickerFakeNotifyId,
						this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour
					);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function() {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function() {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/drag-drop/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/drag-drop/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DragDropArea */
(function($, window, document, SapphireWidgets) {
	var dragDropAreaWidget;

	var create = function(config) {
		window[config.dragDropAreaId] = new DragDropArea(config);
		dragDropAreaWidget = window[config.dragDropAreaId];

		$(window).load(function() {
			osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.DragDropArea.refreshDragDrop);
		});
	};

	var refreshDragDrop = function() {
		try {
			dragDropAreaWidget.setupDraggable();
			dragDropAreaWidget.setupDroppable();
		} catch (error) {
			console.error(error);
		}
	};

	var DragDropArea = function(config) {
		var _this = this;
		this.config = config;
		this.$area = $('#' + config.dragDropAreaId);
		this.$area.css('display', 'block');
		this.skin = config.skin;
		this.fakeNotifyWidgetId = config.fakeNotifyWidgetId;
		this.setupDroppable();
		if (config.sortable) {
			this.setupSortable();
		}
		this.setupDraggable();
		this.attachEvents();
		this.$area.find('.DragDrop-droppable').each(function() {
			_this.handleDroppable($(this));
		});
	};

	DragDropArea.prototype.setupDraggable = function() {
		var _this = this;

		this.$area.find('.DragDrop-draggable').draggable({
			disabled: this.config.disabled,
			containment: this.$area,
			scope: this.config.dragDropAreaId,
			delay: 0,
			scroll: true,
			revert: 'invalid',
			revertDuration: 0,
			connectToSortable: '.DragDrop-droppable',
			stop: function(event, ui) {
				if (ui.helper.hasClass('ui-draggable-dragging')) {
					const $target = _this.$area.find('.ui-droppable.ui-sortable');

					if (_this.skin === 'Teams') {
						//$(ui.helper).hide();
						OsNotifyWidget($target.data('fakenotify'), ui.helper.data('itemtype') + '|' + ui.helper.data('itemid'));
					} else {
						OsNotifyWidget(
							$target.data('fakenotify'),
							_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.helper.data('itemid')
						);
					}
				}
			},
		});
	};

	DragDropArea.prototype.setupDroppable = function() {
		var _this = this;
		this.$area.find('.DragDrop-droppable').droppable({
			hoverClass: 'hovered',
			addClasses: true,
			disabled: this.config.disabled,
			scope: this.config.dragDropAreaId,
			tolerance: 'pointer',
			drop: function(event, ui) {
				if (_this.skin === 'Teams') {
					$(ui.draggable).hide();
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						ui.draggable.data('itemtype') + '|' + ui.draggable.data('itemid')
					);
				} else {
					OsNotifyWidget(
						$(event.target).data('fakenotify'),
						_this.$area.find('.DragDrop-draggable-placeholder').index() + '|' + ui.draggable.data('itemid')
					);
				}
			},
		});
	};

	DragDropArea.prototype.setupSortable = function() {
		this.$area.find('.DragDrop-droppable').sortable({
			disabled: this.config.disabled,
			forcePlaceholderSize: true,
			containment: this.$area,
			tolerance: 'pointer',
			revert: 200,
			items: '.DragDrop-droppable-items .DragDrop-draggable',
			placeholder: 'DragDrop-draggable-placeholder',
		});
	};

	DragDropArea.prototype.attachEvents = function() {
		var _this = this;
		this.$area.on('click', '.DragDrop-draggable input', function(evt) {
			evt.stopPropagation();

			const $checkbox = $(evt.currentTarget);
			const $droppable = $checkbox.closest('.DragDrop-droppable');
			const $draggable = $checkbox.closest('.DragDrop-draggable');
			const $action = $draggable.find('.DragDrop-draggable-select-action a');

			$action.trigger('click');

			if ($droppable.hasClass('allowMultiple')) {
				if ($checkbox.prop('checked')) {
					//$checkbox.prop('checked', false);
					$draggable.addClass('selected');
				} else {
					//$checkbox.prop('checked', true);
					$draggable.removeClass('selected');
				}

				//_this.handleDroppable($droppable);
			}
		});

		this.$area.on('click', '.DragDrop-draggable-select-action a', function(evt) {
			evt.stopPropagation();
		});
	};

	DragDropArea.prototype.handleDroppable = function($droppable) {
		if ($droppable.hasClass('allowMultiple')) {
			var $actions = $droppable.find('.DragDrop-droppable-intro');
			var chkSelected = $droppable.find('input[type="checkbox"]:checked').length;
			if (chkSelected > 0) {
				$actions.find('a, button').attr('disabled', false);
			} else {
				$actions.find('a, button').attr('disabled', true);
			}
		} else {
			$droppable.find('input[type="checkbox"]').prop('disabled', true);
		}
	};

	SapphireWidgets.DragDropArea = {
		create: create,
		refreshDragDrop: refreshDragDrop,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropdown-categories/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropdown-categories/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component DropdownCategories */
(function ($, window, SapphireWidgets) {
	function optGroupSetValue(selectId, inputBoxId, buttonId) {
		var v = document.getElementById(selectId).value;
		$('#' + inputBoxId).val(v);
		$('#' + selectId + ' option[selected]').removeAttr('selected');

		if (v > -1) {
			$('#' + selectId + ' option[value="' + v + '"]').attr('selected', 'selected');
		}

		$('#' + buttonId).click();
		$('#s2id_' + selectId).removeClass('select2-container-active');
	}

	function OsCustomValidatorOptGroup(a, b) {
		var _e = $('#' + a.controltovalidate);
		var isValid = _e.find('option[selected]').length;
		var hasSibling_MandatorySelect2 = _e.prev('div.select2-container.Mandatory').length;

		if (hasSibling_MandatorySelect2) {
			if (isValid) {
				_e.prev('div.select2-container.Mandatory').removeClass('Not_Valid');
			} else {
				_e.prev('div.select2-container.Mandatory').addClass('Not_Valid');
			}
		}

		return isValid;
	}

	function addOptGroupValidator(optGroupElementId) {
		OsPage_Validators.push({
			controltovalidate: optGroupElementId,
			enabled: true,
			errormessage: 'Required field!',
			evaluationfunction: 'SapphireWidgets.DropdownCategories.OsCustomValidatorOptGroup',
			initialvalue: '',
			isvalid: true,
		});
	}

	SapphireWidgets.DropdownCategories = {
		optGroupSetValue,
		OsCustomValidatorOptGroup,
		addOptGroupValidator,
	};
})(jQuery, window, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/dropzone/dropzone.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component Dropzone */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function() {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function() {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function() {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function(file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val(responseText);
						$notifyInput.change();
					});

					this.on('error', function(file, responseText) {
						prevFile = file;

						$notifyInput.val(responseText);
						$notifyInput.change();
					});
				},
			});
		});
	};

	const bindEvents = function(config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/expandable-link/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/expandable-link/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ExpandableLink */
(function($, window, SapphireWidgets) {
	const create = widgetID => {
		const $elementWrapper = $(`#${widgetID}`);

		if ($elementWrapper.parent('.ExpandableList').hasClass('HideWhenEmpty')) {
			const text = $elementWrapper.find('.ExpandableLink__Content').text();

			if (text.length === 0) $elementWrapper.parent('.ExpandableList').hide();
		}

		bindEvents(widgetID);
	};

	const bindEvents = widgetID => {
		$(`#${widgetID} .ExpandableLink__Header`).click(() => openClose(`#${widgetID}`));
	};

	const openClose = elementID => {
		// When the expandables are inside a container with class ExpandableLinkGroup, will act like a expandable group
		const $linkGroup = $(elementID).closest('.ExpandableLinkGroup');

		if ($linkGroup.length) {
			const $expandables = $linkGroup.find('.ExpandableLink--expanded').not(elementID);

			$expandables.removeClass('ExpandableLink--expanded');
		}

		$(elementID).toggleClass('ExpandableLink--expanded');

		if (SapphireWidgets.ResizeParentIframe) {
			SapphireWidgets.ResizeParentIframe.resize();
		}
	};

	SapphireWidgets.ExpandableLink = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/fullscreen-tabs-wrapper/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component FullScreenTabsWrapper */
SapphireWidgets.FullScreenTabsWrapper = () => {
	$(document).ready(function() {
		$('.TabWrapper').click(function() {
			const $wrapper = $(this).closest('.FullScreenTabsWrapper__Tabs');
			$wrapper.find('*').removeClass('Active');

			$(this).addClass('Active');
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-card/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-card/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PersonCard */
$(document).ready(function() {
	var PersonCardEvent = function() {
		$('.IsExpandable .PersonCard__headerLeftInfo, .IsExpandable .PersonCard__content')
			.off('click')
			.on('click', function() {
				const $header = $(this).closest('.PersonCard_header');
				const $onCardOpenLink = $header.find('.PersonCard__OnCardOpenLink');
				const $onCardCloseLink = $header.find('.PersonCard__OnCardCloseClick');
				const $content = $header.next();

				const $card = $(this).closest('.PersonCard');

				$content.removeClass('IsExpanded');

				if ($card.hasClass('IsOpen')) {
					$onCardCloseLink.triggerHandler('click');
					$card.removeClass('IsOpen');
				} else {
					$onCardOpenLink.triggerHandler('click');

					$content.addClass('IsExpanded');

					$card.addClass('IsOpen');
				}
			});
	};

	$('.StopPropagation').click(function(event) {
		event.stopPropagation();
	});

	PersonCardEvent();

	osAjaxBackend.BindAfterAjaxRequest(PersonCardEvent);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-gallery/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-gallery/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGallery */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new GenericGallery(config);
	};

	var GenericGallery = function(config) {
		this.config = config;
		this.$widget = $('#' + this.config.widgetId).css('display', 'block');
		this.equalHeight = this.config.equalHeight;
		if (
			this.$widget.find('> .GenericGallery-content > span').length === 1 &&
			this.$widget.find('.GenericGallery-content > span').hasClass('ListRecords')
		) {
			this.$gallery = this.$widget.find('> .GenericGallery-content > span.ListRecords');
		} else {
			this.$gallery = this.$widget.find('> .GenericGallery-content');
		}

		let templateColumn = 'repeat(' + this.config.columnSizing + ', minmax(' + this.config.columnMinWidth + ', 1fr))';

		if (this.config.maxItemsRow > 0) {
			templateColumn = `repeat(${this.config.columnSizing}, minmax(max(${this.config.columnMinWidth}, (100% - (${this.config.maxItemsRow} - 1) * ${this.config.gapColumn}px) / ${this.config.maxItemsRow}), 1fr))`;
		}

		this.$gallery.css({
			display: 'grid',
			gridTemplateColumns: templateColumn,
		});

		this.$galleryItems = this.$gallery.children();
		this.$galleryItems.each(function() {
			if (!$(this).hasClass('GenericGallery-item')) {
				$(this).wrap('<div class="GenericGallery-item"></div>');
			}
		});
	};

	SapphireWidgets.GenericGallery = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/generic-grid/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/generic-grid/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component GenericGrid */
(function ($, window, document, SapphireWidgets) {
	var allGenericGrids = [];

	var create = function (config) {
		window[config.widgetId] = new GenericGrid(config);
		allGenericGrids.push(window[config.widgetId]);
	};

	var GenericGrid = function (config) {
		var _this = this;
		this.config = config;
		console.log(this.config);
	};

	SapphireWidgets.GenericGrid = {
		create: create,
	};

})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/horizontal-toolbar/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HorizontalToolbar */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $widget = $('#' + config.widgetId);

		$(document).ready(() => init($widget, config));

		if (config.isArrowNavigation) {
			$(window).load(() => {
				const $itemWrapper = $widget.find('.MenuItemWrapper.Active');
				if ($itemWrapper.length) {
					$itemWrapper[0].scrollIntoView({
						behavior: 'auto',
						block: 'end',
					});
				}
			});
		}
	};

	const init = ($widget, config) => {
		if (config.isArrowNavigation) {
			handleArrows($widget);

			const $toolbarItems = $widget.find('.Toolbar__Items');
			const $listItems = $widget.find('.Toolbar__Items .ListRecords');
			const $btnRight = $widget.find('.Toolbar__rightBtn');
			const $btnLeft = $widget.find('.Toolbar__leftBtn');

			$toolbarItems.scroll(() => handleArrows($widget));

			$btnRight.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll + 50);

				if (currentScroll == sideWidth) $btnRight.addClass('Disabled');
				if (currentScroll != 50) $btnLeft.removeClass('Disabled');
			});

			$btnLeft.click(function() {
				var currentScroll = $toolbarItems.scrollLeft();
				var maxScrolll = $listItems.width() - $toolbarItems.width();
				var sideWidth = maxScrolll - 50;
				$toolbarItems.scrollLeft(currentScroll - 50);

				if (currentScroll != sideWidth) $btnRight.removeClass('Disabled');
				if (currentScroll == 50) $btnLeft.addClass('Disabled');
			});

			$(window).on('resize.toolbar', () => handleArrows($widget));
		} else {
			handleResize($widget);
			bindEventsClick($widget);

			$(window).on('resize.toolbar', () => handleResize($widget));

			window.addEventListener('ToolbarFixed', () => handleResize($widget), false);
		}
	};

	handleArrows = $widget => {
		const $toolbarItems = $widget.find('.Toolbar__Items');
		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		const $btnRight = $widget.find('.Toolbar__rightBtn');
		const $btnLeft = $widget.find('.Toolbar__leftBtn');

		let currentScroll = $toolbarItems.scrollLeft();
		let menuWidth = $listItems.width();
		let externalWidth = $toolbarItems.width();
		var maxScrolll = menuWidth - externalWidth;

		if (externalWidth > menuWidth) {
			$btnLeft.hide();
			$btnRight.hide();

			$widget.find('.Toolbar_container').addClass('Toolbar_container--noarrows');
		} else {
			$btnLeft.show();
			$btnRight.show();

			$widget.find('.Toolbar_container').removeClass('Toolbar_container--noarrows');
		}

		if (currentScroll === 0) $btnLeft.addClass('Disabled');
		else $btnLeft.removeClass('Disabled');

		if (currentScroll >= maxScrolll) $btnRight.addClass('Disabled');
		else $btnRight.removeClass('Disabled');
	};

	handleResize = $widget => {
		let itemsTotal = 0;
		let hasItemsHidden = false;

		const $listItems = $widget.find('.Toolbar__Items .ListRecords');
		$listItems.find('> a[ui]').css('display', 'none');

		const menuWidth = $widget.find('.Toolbar__Items').outerWidth(true);

		$listItems.find('a[ui]').each(function() {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			if (itemsTotal + 90 < menuWidth) {
				$(this).css('display', 'block');
			} else {
				hasItemsHidden = true;

				return false;
			}
		});

		if (hasItemsHidden && !$listItems.find('.Toolbar__MoreOptions').length) {
			$widget
				.find('.Toolbar__MoreOptions')
				.clone()
				.css('display', 'block')
				.appendTo($listItems);

			hasItemsHidden = false;
		}

		const $optionsList = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsList');

		$listItems.find('.Toolbar__MoreOptions').css('display', $optionsList.length ? 'block' : 'none');

		const $hiddenItems = $listItems.find('> a[ui]').filter(function() {
			return $(this).css('display') == 'none';
		});

		$optionsList.empty();

		const hasNotificationHidden = $hiddenItems.find('.MenuItemWrapper_Badge:not(:empty)').length !== 0;
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');

		if (hasNotificationHidden) $trigger.addClass('Toolbar__MoreOptionsIcon--notification');
		else $trigger.removeClass('Toolbar__MoreOptionsIcon--notification');

		$hiddenItems
			.clone()
			.css('display', 'block')
			.appendTo($optionsList);
	};

	bindEventsClick = $widget => {
		const $moreOptions = $widget.find('.Toolbar__Items .Toolbar__MoreOptions');
		const $trigger = $widget.find('.Toolbar__Items .Toolbar__MoreOptionsIcon');
		const $optionsList = $widget.find('.Toolbar__MoreOptionsList');

		$trigger.on('click', event => {
			$moreOptions.toggleClass('Toolbar__MoreOptions--open');
			event.stopPropagation();
		});

		$optionsList.on('mousewheel', event => {
			event.stopPropagation();
		});

		$('body').on('mouseup', event => {
			const $target = $(event.target).parents();

			if (!$target.andSelf().is($moreOptions)) {
				$moreOptions.removeClass('Toolbar__MoreOptions--open');
			}
		});
	};

	SapphireWidgets.HorizontalToolbar = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/*!********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/hour-picker/scripts.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-lasa/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-lasa/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component InputLASA */
(function() {
	var setupInput = function(config) {
		$('body').off('click', '#' + config.labelId);
		$('body').off('blur change input', '#' + config.inputId);

		$('#' + config.inputId).css('width', '100%');
		$('#' + config.labelId).css('width', '100%');

		$('#' + config.inputId).hide();
		$('#' + config.labelId).show();

		SapphireWidgets.MarkWordsFromList.handlePrompt(config);

		$('body').on('click', '#' + config.labelId, function() {
			$('#' + config.labelId).hide();
			$('#' + config.inputId).show();
			$('#' + config.inputId).focus();
		});

		$('body').on('blur', '#' + config.inputId, function() {
			SapphireWidgets.MarkWordsFromList.handlePrompt(config);
			$('#' + config.inputId).hide();
			$('#' + config.labelId).show();
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.handlePrompt(config);
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: config.labelId });
			}, 250);
		});

		$('body').on('change input', '#' + config.inputId, function() {
			$('#' + config.labelId).text($('#' + config.inputId).val());
			window.setTimeout(function() {
				SapphireWidgets.MarkWordsFromList.applyMarking({ target: 'page' });
			}, 250);
		});
	};

	var handlePrompt = function(config) {
		if (!$('#' + config.inputId).val().length) {
			$('#' + config.labelId)
				.text($('#' + config.inputId).prop('placeholder'))
				.css('color', '#999');
		} else {
			$('#' + config.labelId)
				.text($('#' + config.inputId).val())
				.css('color', '');
		}
	};

	SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList = SapphireWidgets.MarkWordsFromList || {};
	SapphireWidgets.MarkWordsFromList.setupInput = setupInput;
	SapphireWidgets.MarkWordsFromList.handlePrompt = handlePrompt;
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-clear/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-clear/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithClear {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$clear = this.$widget.find('.InputWithClear-clear');
			this.$notifyLink = this.$widget.find('.InputWithClear-notify-link');
			this.$widgetShield = this.$widget.find('.InputWithClear--shield');
			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				if (this.$input.val() !== '') this.$clear.show();
				else this.$clear.show();
			});

			this.$input.on('blur', () => {
				if (this.$input.val() === '') {
					window.setTimeout(() => {
						if ($('.daterangepicker:visible').length === 1) {
							return false;
						}
						this.$clear.hide();
						this.$notifyLink.trigger('click');
					}, 100);
				}
			});
			this.$clear.on('click', () => {
				this.$input.val('');
				this.$clear.hide();
				this.$notifyLink.trigger('click');
			});
			if (this.config.hasShield) {
				window.setTimeout(() => {
					this.$widgetShield.hide();
				}, this.config.shieldTimeout);
				if (this.config.shieldTimeout > 0) {
					this.$widgetShield.on('click', () => {
						this.$clear.hide();
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new InputWithClear(config));

	SapphireWidgets.InputWithClear = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/input-with-list/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/input-with-list/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
	class InputWithList {
		constructor(config) {
			this.config = config;
			this.$widget = $(`#${config.widgetId}`);
			this.$input = this.$widget.find('input[type]');
			this.$list = this.$widget.find('.InputWithList__List');

			this.$input.val('');

			this.onInit();
		}

		onInit() {
			this.$input.on('keyup', e => {
				// Getting elements again in order to work when this component is cloned (e.g. when using inside ActionsMenu)
				this.$widget = $(`#${this.config.widgetId}`);
				const $input = this.$widget.find('input[type]');
				const $list = this.$widget.find('.InputWithList__List');
				this.$hiddenInput = this.$widget.find('.InputWithList__HiddenInput input');

				if ($input.val().trim() !== '') {
					$list.empty();

					$list.append(`<div><b>Create:</b> ${$input.val()}</div>`);

					if (!$list.is(':visible')) $list.show();
				} else {
					$list.hide();
				}
			});

			this.$list.on('click', e => {
				const $linkNotify = this.$widget.find('.InputWithList-notify-link');
				const $list = this.$widget.find('.InputWithList__List');
				const $input = this.$widget.find('input[type]');

				this.$hiddenInput.val($input.val());
				this.$hiddenInput.change();

				$linkNotify.click();
				$list.hide();
			});
		}
	}

	const create = config => (window[config.widgetId] = new InputWithList(config));

	SapphireWidgets.InputWithList = {
		create,
	};
})();


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-add/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-add/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineAdd */
(function($, window, SapphireWidgets) {
	const create = function(config) {
		$(window).load(function() {
			setWidth(config.widgetId);
			SapphireWidgets.LineAdd.widgetId = config.widgetId;

			osAjaxBackend.BindAfterAjaxRequest(() => setWidth(config.widgetId));
		});

		$(window).on('resize.LineAdd', () => setWidth(config.widgetId));
	};

	const setWidth = function(widgetId) {
		window.setTimeout(function() {
			const $widget = $(`#${widgetId || SapphireWidgets.LineAdd.widgetId}`);
			const widths = [];

			for (i = 1; i < 8; i++) {
				let maxWidthContent = Math.max.apply(
					null,
					$widget
						.find('.lacol' + i)
						.map(function() {
							return $(this).width();
						})
						.get()
				);

				widths.push(maxWidthContent);
				$widget.find('.lacol' + i).width(maxWidthContent);
			}
		}, 100);
	};

	SapphireWidgets.LineAdd = { create, setWidth };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/line-details-expand-box/script.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/line-details-expand-box/script.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LineDetailsExpandBox */
(function($, window, SapphireWidgets) {
	const init = config => {
		$(`#${config.widgetId} + .LineDetailsExpandBox_action`).click(event => {
			event.stopPropagation();
		});
	};

	const create = config => $(document).ready(() => init(config));

	SapphireWidgets.LineDetailsExpandBox = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/location-box/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/location-box/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component LocationBox */
SapphireWidgets.LocationBox = function(widgetId) {
	const $component = $(`#${widgetId}`);

	if ($component.hasClass('On')) {
		$('.DisableRoom').each(function() {
			$(this)
				.removeClass('Off')
				.removeClass('On');
			$(this)
				.parent('.RoomBox')
				.css({
					opacity: '1',
				})
				.removeClass('Selected');
		});
	} else {
		$component
			.addClass('On')
			.removeClass('Off')
			.parent('.RoomBox')
			.css({
				opacity: '1',
			})
			.addClass('Selected');

		$('.DisableRoom:not(#' + widgetId + ')').each(function() {
			$(this).addClass('Off');
			$(this).removeClass('On');
		});

		$('.DisableRoom.Off')
			.parent('.RoomBox')
			.css({
				opacity: '0.50',
			})
			.removeClass('Selected');
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/main-interactive-card/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/main-interactive-card/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MainInteractiveCard */
(function($, window, document, SapphireWidgets) {
	var allMainInteractiveCards = [];
	var defaultDuration = 300;

	var create = function(config) {
		for (var i = 0; i < allMainInteractiveCards.length; i++) {
			if (allMainInteractiveCards[i].config.widgetId === config.widgetId) {
				allMainInteractiveCards.splice(i, 1);
			}
		}
		window[config.widgetId] = new MainInteractiveCard(config);
		allMainInteractiveCards.push(window[config.widgetId]);

		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded && !!osAjaxBackend) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	};

	var MainInteractiveCard = function(config) {
		var _this = this;
		this.config = config;
		this.isLockedOnClose = false;
		this.isOpen = config.isOpen;
		this.isEnabled = config.isEnabled;
		this.isSelectable = config.isSelectable;
		this.allowOpening = config.allowOpening;
		this.allowMultipleOpen = config.allowMultipleOpen;
		this.emitNotifyOnOpen = config.emitNotifyOnOpen;
		this.hideActionsOnOpen = config.hideActionsOnOpen;
		this.hideCaptionOnOpen = config.hideCaptionOnOpen;
		this.hideTitleOnOpen = config.hideTitleOnOpen;
		this.hideSubTitleOnOpen = config.hideSubTitleOnOpen;
		this.headerHeightWhenOpen = config.headerHeightWhenOpen;
		this.MainInteractiveCardFakeNotifyId = config.mainInteractiveCardFakeNotifyId;

		this.$widget = $('#' + config.widgetId);
		this.$widget.css('display', 'block');
		this.$card = this.$widget.find('> .MainInteractiveCard');
		this.$header = this.$widget.find('> .MainInteractiveCard > .MainInteractiveCard-header');
		this.$headerText = this.$header.find('.MainInteractiveCard-header-text');
		this.$expandIcon = this.$header.find('.MainInteractiveCard-expand-icon');
		this.$body = this.$widget.find('> .MainInteractiveCard > div > .MainInteractiveCard-body');
		this.$actions = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-actions'
		);
		this.$caption = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-caption'
		);
		this.$title = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-title'
		);
		this.$subTitle = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-text-subtitle'
		);
		this.$selectTrigger = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header > .MainInteractiveCard-header-selectable > .MainInteractiveCard-header-selectable-trigger'
		);
		this.$selectPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header .MainInteractiveCard-header-selectable-placeholder'
		);
		this.$triggerPlaceholder = this.$widget.find(
			'> .MainInteractiveCard > .MainInteractiveCard-header-triggerAction-placeholder'
		);

		if (this.$triggerPlaceholder.find('a').length === 1) {
			this.$trigger = this.$triggerPlaceholder.find('a');
		}

		if (this.isOpen) {
			this.open(false, -1);
			this.$card.addClass('forceOpen');
		}

		this.$card.addClass(this.headerHeightWhenOpen + 'Header');

		if (this.allowOpening) {
			this.$card.addClass('allowOpening');
		}

		this.attachEvents();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation, index) {
				_this.handleHeaderWithAbsoluteButtons();
			});
		});

		observer.observe(document.getElementById(config.widgetId), {
			childList: true,
			subtree: true,
			attributes: false,
		});
	};

	MainInteractiveCard.prototype.handleHeaderWithAbsoluteButtons = function() {
		var _this = this;
		if (!!this.$body.find('> div .MainInteractiveCard-absolute-actions').length && this.isOpen) {
			var absoluteActionsWidth = Math.max.apply(
				Math,
				this.$body
					.find('> div .MainInteractiveCard-absolute-actions')
					.map(function() {
						return $(this).outerWidth(true);
					})
					.get()
			);
			var headerMaxWidth = this.$header.width() - absoluteActionsWidth;
			if (headerMaxWidth > 10) {
				this.$headerText.css({
					maxWidth: headerMaxWidth + 'px',
				});
			}
			this.$body
				.find('> div .MainInteractiveCard-absolute-actions .MainInteractiveCard--close')
				.off('click')
				.on('click', function(e) {
					e.preventDefault();
					_this.close();
				});
		}
	};

	MainInteractiveCard.prototype.attachEvents = function() {
		var _this = this;
		this.$header
			.find('.MainInteractiveCard--open:not([disabled])')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.open(true);
			});
		this.$header
			.find('.MainInteractiveCard--close')
			.off('click')
			.on('click', function(e) {
				e.preventDefault();
				_this.close();
			});
		if (this.allowOpening) {
			const clickAction = function(evt) {
				if ($(evt.target).hasClass('Button')) {
					// the user clicked on a Button inside the header, nothing to do here
				} else {
					if (_this.isOpen) {
						if (
							_this.$widget.find('iframe').length === 1 &&
							!_this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')
						) {
							// do not close when and iframe exists
						} else if (
							_this.$actions.find('a').length > 0 &&
							_this.$actions.find('.MainInteractiveCard--close').length > 0
						) {
							// do not close when the card has actions
						} else {
							_this.close();
						}
					} else {
						_this.open(true);
					}
				}
			};

			this.$headerText.off('click').on('click', function(e) {
				clickAction(e);
			});
			this.$expandIcon.off('click').on('click', function(e) {
				clickAction(e);
			});
		}
		if (this.isSelectable) {
			this.$selectTrigger.off('click').on('click', function(e) {
				if (_this.$selectPlaceholder.find('a').length === 1) {
					_this.$selectPlaceholder.find('a').click();
				} else {
					console.warn('You need 1 link in this placeholder.');
				}
			});
		}
	};

	MainInteractiveCard.prototype.open = function(sendNotify, duration) {
		var duration = duration || defaultDuration;
		this.isOpen = true;
		this.$card.addClass('isOpen');
		if (this.hideActionsOnOpen) {
			this.$actions.css('display', 'none');
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'none');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'none');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'none');
		}
		if (this.emitNotifyOnOpen) {
			if (sendNotify) {
				OsNotifyWidget(this.MainInteractiveCardFakeNotifyId, 'open');
			}
			this.$body.css('display', 'block');
		} else if (this.$trigger) {
			this.$trigger.click();
			this.$body.css('display', 'block');
		} else {
			if (duration > 0) {
				this.$body.slideDown(duration);
			} else {
				this.$body.css('display', 'block');
			}
		}
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			var iframeContents = this.$widget.find('iframe').contents();
			iframeContents.find('.MainInteractiveCard-iframe-actions').css('visibility', 'visible');
		} else {
			this.handleHeaderWithAbsoluteButtons();
		}
		if (!this.allowMultipleOpen) {
			allMainInteractiveCards.forEach(item => (item !== this && item.allowOpening ? item.close(duration) : null));
		}
	};

	MainInteractiveCard.prototype.close = function(duration) {
		var self = this;
		var duration = duration || defaultDuration;
		this.isOpen = false;
		this.$card.removeClass('isOpen');
		if (this.$widget.find('iframe').length === 1 && !this.$widget.find('iframe').hasClass('cke_wysiwyg_frame')) {
			this.$widget
				.find('iframe')
				.find('.MainInteractiveCard-iframe-actions')
				.css('visibility', 'hidden');
		}
		this.$body.slideUp(duration, function() {
			if (self.$card.hasClass('forceOpen')) {
				self.$card.removeClass('forceOpen');
			}
		});
		if (this.hideActionsOnOpen) {
			this.$actions.show();
		}
		if (this.hideTitleOnOpen) {
			this.$title.css('display', 'block');
		}
		if (this.hideSubTitleOnOpen) {
			this.$subTitle.css('display', 'block');
		}
		if (this.hideCaptionOnOpen) {
			this.$caption.css('display', 'block');
		}

		if (this.$header.width() - this.$actions.width() > 10) {
			this.$headerText.css({
				maxWidth: this.$header.width() - this.$actions.width() + 'px',
			});
		}
	};

	MainInteractiveCard.prototype.isOpen = function() {
		return this.isOpen;
	};

	SapphireWidgets.MainInteractiveCard = {
		create: create,
		all: function() {
			return allMainInteractiveCards;
		},
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!$('.MainInteractiveCard').length) {
		if (!!!SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded) {
			osAjaxBackend.BindAfterAjaxRequest(function() {
				var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
				allMainInteractiveCards.forEach(function(element) {
					element.handleHeaderWithAbsoluteButtons();
				});
			});
			SapphireWidgets.MainInteractiveCard.afterAjaxRequestBinded = true;
		}
	}

	setTimeout(function() {
		var allMainInteractiveCards = SapphireWidgets.MainInteractiveCard.all();
		allMainInteractiveCards.forEach(function(element) {
			element.handleHeaderWithAbsoluteButtons();
		});
	}, 1000);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/menu-bar/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/menu-bar/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MenuBar */
SapphireWidgets.MenuBar = function(config) {
	$(function() {
		var $menuWidget = $('#' + config.menuWidget);

		var menuResider = function() {
			var navWidth = 0;
			var availabeEspace = $menuWidget.find('.Menubar_item').width();

			$menuWidget.find('.Menubar_item .MenuItem').each(function() {
				navWidth += $(this).outerWidth(true);
			});

			if (navWidth > availabeEspace) {
				var lastItem = $menuWidget.find('.Menubar_item .MenuItem').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($menuWidget.find('.Menubar__extraContainer'));
				menuResider();
			} else {
				var firstMoreElement = $menuWidget.find('.Menubar__extraContainer .MenuItem').first();
				if (navWidth + firstMoreElement.data('width') < availabeEspace) {
					firstMoreElement.insertAfter($menuWidget.find('.Menubar_item .MenuItem').last());
					menuResider();
				}
			}

			if (!$menuWidget.find('.Menubar__extraContainer').is(':empty')) {
				$menuWidget.find('.Menubar_extraItem').addClass('show');
			} else {
				$menuWidget.find('.Menubar_extraItem').removeClass('show');
			}
		};

		$menuWidget.find('.MenuItem').click(function() {
			if (
				!$(this)
					.parent()
					.hasClass('Menubar__extraContainer')
			) {
				if (!$(this).hasClass('active') && !$(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$menuWidget.find('.activeIndicator').addClass('shadow');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				} else if (!$(this).hasClass('active') && $(this).hasClass('activeIndicator')) {
					$(this).addClass('active');
					$(this)
						.find('.MenuItem_subItems')
						.toggleClass('show');
				}
			} else {
				$(this)
					.find('.MenuItem_subItems')
					.toggleClass('show');
			}
		});

		$menuWidget.find('.Menubar_extraItem .icon').click(function() {
			$menuWidget.find('.Menubar__extraContainer ').toggleClass('show');
		});

		$(document).mouseup(e => {
			var $menu = $menuWidget.find('.MenuItem.active');
			var $moreOptions = $menuWidget.find('.Menubar_extraItem');

			// if the target of the click isn't the menu or a descendant of the menu
			if ($menu.length > 0) {
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
					$menu.find('.MenuItem_subItems').removeClass('show');
					$('.activeIndicator').removeClass('shadow');
					$menuWidget.find('.MenuItem.active').removeClass('active');
				}
			}

			if (!$moreOptions.is(e.target) && $moreOptions.has(e.target).length === 0) {
				$moreOptions.find('.Menubar__extraContainer').removeClass('show');
				$('.activeIndicator').removeClass('shadow');
			}
		});

		$(window).on('resize load', function() {
			menuResider();
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/multiple-selection-button/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/multiple-selection-button/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component MultipleSelectionButton */
SapphireWidgets.MultipleSelectionButton = function(WrapperId) {
	const $widget = $(WrapperId);
	const $control = $widget.find('input[type="checkbox"]');

	if ($(WrapperId + ' input[type="checkbox"]').is(':disabled')) {
		$widget.addClass('disabled');
	} else {
		$widget.removeClass('disabled');
	}

	if ($(WrapperId + ' input[type="checkbox"]').is(':checked')) {
		$widget.addClass('active');
	} else {
		$widget.removeClass('active');
	}

	$widget.find('input[type="checkbox"]').change(function() {
		const $parent = $(this).parent();

		if ($(this).is(':checked')) $parent.parent().addClass('active');
		else $parent.parent().removeClass('active');
	});

	$widget.find('.MultipleSelectionButton-label').click(function() {
		$control[0].click();

		setTimeout(function() {
			if ($control.is(':checked')) $widget.addClass('active');
			else $widget.removeClass('active');
		}, 10);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-panel.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-panel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPanel3Options ConfirmationPanel same javascript code*/

SapphireWidgets.ConfirmationPanel = {
	isAnyPanelOpened: function() {
		return $('body').hasClass('PanelOpened') && $('.PanelContainer:visible').length;
	},

	togglePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) return;

		if (!SapphireWidgets.ConfirmationPanel.isAnyPanelOpened()) {
			$('body').addClass('PanelOpened');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.PanelContainer')
					.slideToggle(150);
			}, 100);

			if (window.frameElement) {
				SapphireWidgets.RemoteAppointment.setModalMinimized();
			}
		}
	},

	closePanel: function(PanelId) {
		$('body').removeClass('PanelOpened');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.PanelContainer')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[confirmation-panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('confirmation-panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPanel.togglePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.ConfirmationPanel.setPanelBehavior();
	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ConfirmationPanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/confirmation-popup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/modal-popup.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/modal-popup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Component ModalPopup */

var _isInIframe = window.frameElement != undefined || false;

SapphireWidgets.ModalPopup = {
	create: function(widgetId) {
		$(document).ready(function() {
			// Use this code to append the component to the root body
			// window.frameElement && $(window.frameElement).closest('.MainInteractiveCard-body').length > 0
			if (false) {} else {
				const $widget = $(`#${widgetId}`);
				const $btnClose = $widget.find('.modalPopup_close');

				if (window.frameElement) {
					const $modalRemoteAppt = window.top.$('.RemoteAppointment');

					if ($modalRemoteAppt.length) {
						const $minimizeModal = $modalRemoteAppt.find('.Minimize');
						$minimizeModal.click();
					}
				}

				$btnClose.click(function() {
					$widget.removeClass('Open');
					$widget.removeClass('showclose');
				});
			}
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id-notify.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id-notify.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByIDNotify */
var panelNotifyWidget;
SapphireWidgets.PanelByIdNotify = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},
	togglePanelByNotify: function(Id) {
		if (!isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeIn(140);

			try {
				if (justDragged == false) {
					$('.PanelContainer')
						.css('margin-left', panelMarginLeft)
						.css('left', panelLeft)
						.addClass(panelArrowClass);
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideDown(150);
			}, 100);
		} else {
			$('body').removeClass('PanelOpened');
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.fadeOut(140);
			setTimeout(function() {
				$('#' + Id)
					.parents('.ToggleButton')
					.parent()
					.children('.Panel')
					.children('.PanelContainer')
					.slideUp(150);
			}, 100);
		}
	},
	togglePanelNotifyById: function(Id) {
		$('body').toggleClass('PanelOpened');
		$('#' + Id)
			.parents('.ToggleButton')
			.parent()
			.children('.Panel')
			.fadeToggle(140);

		panelNotifyWidget = $('#' + Id)
			.parents('.ToggleButton')
			.attr('NotifyId');

		setTimeout(function() {
			$('#' + Id)
				.parents('.ToggleButton')
				.parent()
				.children('.Panel')
				.children('.PanelContainer')
				.slideToggle(150);
		}, 100);
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/panel-by-id.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/popup-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/popup-menu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PopUpMenu */
SapphireWidgets.PopUpMenu = {
	menuPosition: function(id, Context, Locale) {
		/* Hide any other menus on page and set button as collapsed. */
		$('.popup-menu:visible').hide();

		//var _this = $(this);
		var _this = $('#' + id);
		var Xx = 0;
		var Yy = 0;
		var Ww = 0;
		var Hh = 0;

		//_this.children('.button-expand:visible').hide();

		/* Get the menu element. */
		var _el = _this.next('.popup-menu');

		/* Display the menu. */
		_el.show();

		/* Set button collapse. */
		_this.children('.button-collapse').show();

		/* Get the dimensions of the button. */
		buttonHh = _this.outerHeight();
		buttonWw = _this.outerWidth();

		var buttonY = _this.position().top + buttonHh + 10;
		var buttonX = _this.offset().left;
		//var buttonX = _this.position().left;

		/* Get the distance of menu button and the parent element */
		var popupParentXx = _this.offset().left - _this.position().left;

		var popupXx = _el.offset().left;
		var popupWw = _el.outerWidth();

		Xx = Math.abs(buttonX - $('body').scrollLeft() - popupParentXx);
		Yy = Math.abs(buttonHh - buttonY - $('body').scrollTop());

		if (Locale != 'AR') {
			/* Check if clicked position plus the popup width exceed the window width. */
			if (buttonX + popupWw - $('body').scrollLeft() > $(Context).width()) {
				Xx = buttonX - popupWw - $('body').scrollLeft() - popupParentXx + buttonWw;
				//Xx = ($(window).width() - popupWw) - $('body').scrollLeft();
			}
		}

		/* Set menu position. */
		_el.css({
			left: Xx + 'px',
			top: buttonY + 'px',
		});

		/* Refresh value */
		popupXx = _el.offset().left;

		var _balloonEl = _el.children('.popup-menu-balloon');

		var _balloonXx = _balloonEl.offset().left;
		var _balloonWw = _balloonEl.outerWidth();
		var _balloonPosXx = Math.abs(buttonX - Xx - popupParentXx);

		/* Is the balloon icon positioned out of the popup menu? */
		if (_balloonPosXx + Xx + _balloonWw > Xx + popupWw) {
			_balloonPosXx = _balloonPosXx - _balloonWw;
		}

		/* Set position of the balloon effect. */
		_balloonEl.css('left', _balloonPosXx + 'px');
	},
	menuEvents: function(Context, Locale) {
		$('.popup-button')
			.off('click')
			.on('click', function(e) {
				var id = $(this).attr('id');
				SapphireWidgets.PopUpMenu.menuPosition(id, Context, Locale);

				/*e.stopPropagation();*/

				/* Prevent link submission */
				return false;
			});

		/* v *** Hide popup when click outside *** v */
		function PMClickOutside(event) {
			if (event.hasOwnProperty('target')) {
				var target = $(event.target);
				/*if ((target.parents().index($('a[sapphirehospital], .HospitalPopUp')) == -1)) {}*/
				if (
					!$(event.target).closest(
						'.popup-button, .popup-menu, .os-internal-ui-autocomplete, .os-internal-ui-menu-item, .os-internal-ui-corner-all, ui-autocomplete-item'
					).length
				) {
					$('.popup-menu:visible').hide();
					$('.button-collapse:visible').hide();
					//$('.button-expand').show();
				}
			}
		}

		var _PMIsDrag = false;
		var _PMIsClick = false;
		$(document).on('touchstart', function(event) {
			_PMIsDrag = false;
			_PMIsClick = true;
		});
		$(document).on('touchmove', function(event) {
			_PMIsDrag = true;
		});
		$(document).on('click', function(event) {
			PMClickOutside(event);
			_PMIsDrag = false;
			_PMIsClick = false;
		});
		$(document).on('touchend', function(event) {
			if (!_PMIsDrag && _PMIsClick) {
				PMClickOutside(event);
			}
			_PMIsDrag = false;
			_PMIsClick = false;
		});

		$('.button-collapse').on('click', function(event) {
			$('body').trigger('click');
			return false;
		});
		/* ^ *** Hide popup when click outside *** ^ */
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/sapphire-panel.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/sapphire-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePanel */
SapphireWidgets.SapphirePanel = {
	checkOpenPanel: function() {
		return $('body').hasClass('SapphirePanelOpen') && $('.SapphirePanel_Container:visible').length;
	},

	toggleSapphirePanel: function(PanelId) {
		if (!OsValidatorOnSubmit()) {
			return;
		}

		if (!SapphireWidgets.SapphirePanel.checkOpenPanel()) {
			$('body').addClass('SapphirePanelOpen');
			$('#' + PanelId).fadeIn(140);

			setTimeout(function() {
				$('#' + PanelId)
					.find('.SapphirePanel_Container')
					.slideToggle(150);
			}, 100);
		}
	},

	closeSapphirePanel: function(PanelId) {
		$('body').removeClass('SapphirePanelOpen');
		$('#' + PanelId).fadeOut(140);

		setTimeout(function() {
			$('#' + PanelId)
				.find('.SapphirePanel_Container')
				.slideUp(150);
		}, 100);
	},

	setPanelBehavior: function() {
		$('.Panel[panel-trigger-elementid]').each(function() {
			var this_panel = $(this);
			$('#' + this_panel.attr('panel-trigger-elementid') + '')
				.off('click')
				.on('click', function() {
					SapphireWidgets.SapphirePanel.toggleSapphirePanel(this_panel.attr('id'));
					return false;
				});
		});
	},
};

$(document).ready(function() {
	SapphireWidgets.SapphirePanel.setPanelBehavior();

	if (osAjaxBackend.EventHandlers.AfterAjaxRequest.toString().indexOf('setPanelBehavior') == -1) {
		osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.SapphirePanel.setPanelBehavior);
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/scripts.js":
/*!**************************************************************!*\
  !*** ./src/components/05-components/v3-pat/panel/scripts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./confirmation-panel */ "./src/components/05-components/v3-pat/panel/confirmation-panel.js");
__webpack_require__(/*! ./modal-popup */ "./src/components/05-components/v3-pat/panel/modal-popup.js");
__webpack_require__(/*! ./panel-by-id */ "./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__(/*! ./popup-menu */ "./src/components/05-components/v3-pat/panel/popup-menu.js");
__webpack_require__(/*! ./sapphire-panel */ "./src/components/05-components/v3-pat/panel/sapphire-panel.js");


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel-structure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancelStructure */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId).find('.PatientCallCancelStructure');
		const $listQueueWrapper = $widget.find('.PatientCallCancelStructure__ListQueues');
		const $dropdown = $listQueueWrapper.find('.InlineDropdown_label');

		$listQueueWrapper.on('click', event => {
			if (!$dropdown.length) return;
			event.stopPropagation();

			$widget.toggleClass('PatientCallCancelStructure--active');

			$(document).on('click.PatientCallCancelStructure', () => {
				$widget.removeClass('PatientCallCancelStructure--active');
				$(document).off('click.PatientCallCancelStructure');
			});

			$dropdown.trigger('click');
			event.preventDefault();
		});
	};

	SapphireWidgets.PatientCallCancelStructure = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js":
/*!****************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/patient-call-cancel/patient-call-cancel.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PatientCallCancel */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		const $widget = $('#' + config.widgetId);
		const $countdown = $widget.find('[ui=data-counter]');
		let $callButton = $widget.find('[ui=data-button-call]');
		let $cancelButton = $widget.find('[ui=data-button-cancel]');
		const $otherContent = $widget.find('.PatientCallCancel__Other');

		let interval;
		let timeCounter;

		const callPatient = function($widget) {
			toggleCallingState();

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + config.timeToCancel);
			else $countdown.text(config.txtCallingIn);

			startCounter();
		};

		const toggleCallingState = () => {
			$widget.toggleClass('CallingPatient');
			$countdown.text(config.txtCallPatient);
		};

		const setInitialState = () => {
			$widget.removeClass('CallingPatient');
			$callButton.show();
			$otherContent.show();
		};

		const startCounter = () => {
			timeCounter = config.timeToCancel;
			interval = window.setInterval(updateCounter, 1000);
		};

		const updateCounter = () => {
			timeCounter--;

			if (timeCounter === 0) {
				clearInterval(interval);
				OsNotifyWidget(config.patientCallFakeNotifyId, '');

				setInitialState();
			}

			if (config.showCountdown) $countdown.text(config.txtCallingIn + ' ' + timeCounter);
			else $countdown.text(config.txtCallingIn);
		};

		if (config.startCounting) callPatient($widget);

		$callButton.on('click', () => {
			if ($widget.hasClass('CallingPatient')) return;

			callPatient($widget);

			$callButton.hide();
			$otherContent.hide();
		});

		$cancelButton.on('click', event => {
			timeCounter = config.timeToCancel;
			$countdown.text(timeCounter);
			clearInterval(interval);

			toggleCallingState();

			$callButton.show();
			$otherContent.show();
		});
	};

	SapphireWidgets.PatientCallCancel = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-card/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-card/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionCard */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $component = $(`#${config.widgetId} .PrescriptionCard`);

		if (config.isExpandable) {
			const $expandLink = $component.find('.PrescriptionCard__ExpandIcon');

			$expandLink.click(() => {
				$component.toggleClass('PrescriptionCard--expanded');
			});
		}
	};

	SapphireWidgets.PrescriptionCard = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/prescription-expandable/scripts.js":
/*!********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/prescription-expandable/scripts.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component PrescriptionExpandable */
(function($, window, SapphireWidgets) {
	const PrescriptionExpandable = function(config) {
		const widgetId = config.widgetId;
		const previewstat = [];

		const $elementWrapper = $(`#${config.widgetId}`);

		const clickEvents = ob => {
			if ($(ob).hasClass('PrescriptionExpandable_header__LinksDiv')) {
				var Section = $(ob)
					.parent()
					.parent()
					.parent();
			} else {
				var Section = $(ob).parent();
			}

			var SectionContent = Section.children('.PrescriptionExpandable_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		};

		this.init = () => {
			const $header = $elementWrapper.find('.PrescriptionExpandable_header');
			const $links = $header.find('.PrescriptionExpandable_header__LinksDiv');

			// Create array stat
			$('.SectionPrescriptionExpandableArea').each(() => {
				const stat = $header.hasClass('expanded') ? true : false;
				previewstat[widgetId] = { client: stat, server: stat };
			});

			if ($header.hasClass('NotExpandable')) {
				$header.on('click', e => e.preventDefault());
			} else if ($header.hasClass('isLinkEpandableClick')) {
				$links.on('click', e => clickEvents($links));
			} else {
				$header.on('click', e => clickEvents($header));
			}

			const elements =
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a';
			$(elements).click(function(event) {
				event.stopPropagation();
			});

			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(ajaxRefresh);
		};

		const ajaxRefresh = function(event) {
			// remove click events
			//$('.PrescriptionExpandable_header').off();

			// add stop prepagation
			$(
				'.PrescriptionExpandable_header input, .PrescriptionExpandable_header select, .PrescriptionExpandable_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// each all sections
			$('.SectionPrescriptionExpandableArea').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.PrescriptionExpandable_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};
	};

	const create = config => {
		const expandable = new PrescriptionExpandable(config);

		expandable.init();
	};

	SapphireWidgets.PrescriptionExpandable = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-header/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-header/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireHeader */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SapphireHeader(config);
		SapphireWidgets.SapphireHeader.widgetId = config.widgetId;
	};

	var handleDemographics = function() {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	};

	var SapphireHeader = function(config) {
		var _this = this;
		this.config = config;
		this.isConfidential = config.isConfidential;
		this.$widget = $('#' + config.widgetId);
		this.$widget.css({
			display: 'block',
		});
		this.$header = this.$widget.find('.SapphireHeader');
		this.$navigation = this.$widget.find('.SapphireHeader-navigation');
		this.$identification = this.$widget.find('.SapphireHeader-identification');
		this.$demographic = this.$widget.find('.SapphireHeader-demographics');
		this.$information = this.$widget.find('.SapphireHeader-information');
		this.$actions = this.$widget.find('.SapphireHeader-actions');
		this.$additionalTrigger = this.$widget.find('.SapphireHeader-additional-trigger');
		this.$additionalContent = this.$widget.find('.SapphireHeader-additional-content');

		this.handleResize();
		this.attachEvents();

		if (this.$information.text() === '') {
			this.$information.hide();
		}
	};

	SapphireHeader.prototype.getConfig = function() {
		return this.config;
	};

	SapphireHeader.prototype.handleResize = function() {
		var _this = this;
		$(window).resize(function() {
			_this.handleDemographics();
		});
	};

	SapphireHeader.prototype.attachEvents = function() {
		var _this = this;
		this.$additionalTrigger.on('click', function() {
			if (_this.$header.hasClass('isOpen')) {
				_this.$header.removeClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 2);
			} else {
				_this.$header.addClass('isOpen');
				//$('.LayoutBase-header').css('z-index', 3);
			}
		});
	};

	SapphireHeader.prototype.handleDemographics = function() {
		const _this = this;
		this.$demographic.find('.Demographic-item').css('display', 'none');

		this.$additionalTrigger.hide();
		this.$additionalContent.empty();

		const demographicWidth = this.$demographic.outerWidth(true);
		let itemsTotal = 0;

		const componentWidth = this.$widget.outerWidth(true);
		const navigationWidth = this.$navigation.width();
		const identificationWidth = this.$identification.width();
		const demographicsWidth = this.$demographic.width();
		const informationWidth = this.$information.width();
		const actionsWidth = this.$actions.width();

		this.$demographic.find('.Demographic-item').each(function(index) {
			itemsTotal += parseInt($(this).outerWidth(true), 10);

			// 64 -> margins and 99 -> More Info button
			if (itemsTotal + 64 + 110 < demographicWidth) {
				$(this).css('display', 'inline-block');
			} else {
				$(this)
					.clone()
					.css('display', 'inline-block')
					.appendTo(_this.$additionalContent);
				_this.$additionalTrigger.show();
			}
		});

		if (this.$additionalContent.find('.Demographic-item').length === 0) {
			this.$header.removeClass('isOpen');
		}
	};

	SapphireHeader.prototype.showAdditional = function() {
		return this.$header.addClass('isOpen');
	};

	SapphireHeader.prototype.hideAdditional = function() {
		return this.$header.removeClass('isOpen');
	};

	SapphireWidgets.SapphireHeader = {
		create: create,
		handleDemographics: handleDemographics,
	};
})(jQuery, window, document, SapphireWidgets);

$(window).load(function() {
	if (!!SapphireWidgets.SapphireHeader.widgetId) {
		window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
	}
	if (!!$('.SapphireHeader-demographics').length) {
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				window[SapphireWidgets.SapphireHeader.widgetId].handleDemographics();
			});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-popup/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) {}

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) {}

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function(event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function() {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function(popupDiv) {
						popupDiv.find('iframe').load(function() {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			} else {
				//when explicitly setting the height
				if (sameOrigin) innerDoc.body.style.height = 'auto';
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function() {
				setTimeout(function() {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {
		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) {}

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function() {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function() {
				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function() {
					_dialog.find('iframe').empty();
					_dialog.empty();
				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js":
/*!******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sapphire-radio-button/scripts.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SapphireRadioButton */
SapphireWidgets.SapphireRadioButton = widgetId => {
	const $widget = $(`#${widgetId}`);
	const $input = $widget.find('input[type="radio"]');
	const $label = $widget.find('.ButtonRadioInp_radioText');
	const name = $input.prop('name');

	const addRemoveClass = ($el, toAdd) => {
		if (toAdd) $el.addClass('active');
		else $el.removeClass('active');
	};

	const isChecked = $el => {
		if ($el.is(':checked')) addRemoveClass($widget, true);
		else addRemoveClass($widget, false);
	};

	$input.click(function() {
		$widget.removeClass('active');

		$(`input[type="radio"][name="${name}"]`).each(function() {
			addRemoveClass($(this).closest('.ButtonRadioInp'), $(this).is(':checked'));
		});
	});

	$input.on('change', function() {
		isChecked($(this));
	});

	$label.click(function() {
		const $closestElement = $(this).closest('.ButtonRadioInp');

		if ($closestElement.hasClass('disabled')) return false;

		$input[0].click();
		//isChecked($input);
	});

	isChecked($input);
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/scale-main-structure.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/scale-main-structure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ScaleMainStructure */
(function($, window, SapphireWidgets) {
	const create = config => {
		$(document).ready(function() {
			setupScale();
			bindClicks();

			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					setTimeout(function() {
						bindClicks();
					}, 1000);
				});
		});
	};

	ScaleCount = conf => {
		$(function() {
			var CardScale = conf.IsCardScale;
			var RulerScale = conf.IsRulerScale;
			var MultipleScale = conf.IsMultipleScale;
			var $totalPlace = $('.ScaleMainStructure_footerResult');
			var totalCardScale = 0;
			var totalMultipleScale = 0;
			var totalRulerScale = 0;

			var ScaleTypeCard = function() {
				var totalSelected = $('.ScaleList.CardScale').find('.ScaleCard.active').length;
				var totalNumber = 0;
				$(".ScaleList.CardScale:not('.isTitle')").each(function() {
					if ($(this).find('.ScaleCard').length > 0) {
						totalNumber += 1;
					}
				});

				if (totalNumber === totalSelected) {
					var total = [];
					var inputValue = '';
					var $scaleRow = $('.ScaleList.CardScale:not(.isTitle)');
					$scaleRow.each(function() {
						inputValue = $(this)
							.find('.ScaleCard.active')
							.data('value');
						$(this)
							.find('.ScaleList_inputValue input')
							.val(inputValue);
					});

					$('.ScaleList.CardScale .ScaleCard.active').each(function() {
						total.push($(this).data('value'));
					});
					var finalTotal = eval(total.join('+'));
					return finalTotal;
				}
			};

			var ScaleTypeRuler = function() {
				var activeRulerValue = '';
				var $activeRuler = $('.RulerScale_number.active');
				if ($activeRuler.length > 0) {
					var activeRulerValue = $('.RulerScale_number.active')
						.closest('.RulerScale')
						.data().value;
					$('.ScaleList.Ruler')
						.find('.ScaleList_inputValue input')
						.val(activeRulerValue);

					return activeRulerValue;
				}
				return activeRulerValue;
			};

			var ScaleTypeMultiple = function() {
				var numberofCols = $('.ScaleList.MultipleScale')
					.first()
					.find('.ButtonGroupScale').length;
				var numberofRows = $('.ButtonGroupScale').closest('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)')
					.length;
				var total = [];
				var i = 0;
				var j = 0;
				var countActive = 0;
				var countallActiveCols = 0;
				var totalOfItems = numberofCols * numberofRows;
				var totalScore = [];

				for (i = 0; i < numberofCols; i++) {
					for (j = 0; j < numberofRows; j++) {
						var ScaleListSelected = document.querySelectorAll(
							'.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)'
						)[j];
						var ButtonScaleSelected = ScaleListSelected.querySelectorAll('.ButtonGroupScale')[i];

						if (ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active').length > 0) {
							var ScaleValue = ButtonScaleSelected.querySelectorAll('.ButtonGroup_button.active')[0].innerText;
							total.push(parseInt(ScaleValue));
							totalScore.push(parseInt(ScaleValue));
							countActive = countActive + 1;
						}
					}
					if ($('.ScaleList.MultipleScale.isSubtotal').length > 0) {
						if (countActive === numberofRows) {
							var subTotal = eval(total.join('+'));
							var subtotalScale = document.querySelectorAll('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale')[i];
							subtotalScale.innerText = subTotal;
							countallActiveCols = countallActiveCols + 1;
						}
					}
					countActive = 0;
					total = [];
				}

				if (document.querySelectorAll('.ButtonGroup_button.active').length === totalOfItems) {
					var i = 0;
					var j = 0;
					for (i = 0; i < numberofRows; i++) {
						var ScaleListRow = $('.ScaleList.MultipleScale:not(.isTitle):not(.isSubttotal)')[i];
						var $ScaleListInput = $(ScaleListRow).find('.ScaleList_inputValue input');
						var valuesSelected = '';
						for (j = 0; j < numberofCols; j++) {
							var ActiveButton = $(ScaleListRow).find('.ButtonGroup_button.active')[j];
							var ActiveValue = ActiveButton.innerText;
							//valuesSelected=valuesSelected+','+ActiveValue;
							if (j === numberofCols - 1) {
								valuesSelected += ActiveValue;
							} else {
								valuesSelected += ActiveValue + ',';
							}
						}
						$ScaleListInput.val(valuesSelected);
					}
					var getTotal = eval(totalScore.join('+'));
					return getTotal;
				}
			};

			const TotalCalc = function() {
				let isEmpty = false;

				if (CardScale === true) {
					totalCardScale = ScaleTypeCard();
					isEmpty = totalCardScale === '';
				}

				if (RulerScale === true) {
					totalRulerScale = ScaleTypeRuler();
					isEmpty = totalRulerScale === '';
				}

				if (MultipleScale === true) {
					totalMultipleScale = ScaleTypeMultiple();
					isEmpty = totalMultipleScale === '';
				}

				const $footerResult = $('.ScaleMainStructure_footerResult');
				const $totalScore = $('.ScaleMainStructure_totalScore');
				const $scoreLabel = $('.ScaleMainStructure_footerResult .TotalLabel');

				if (isEmpty) {
					$totalScore.text('---');
					$scoreLabel.text('-');

					$footerResult.removeClass('ColorZetaBG');
				} else if (!isNaN(totalMultipleScale) && !isNaN(totalCardScale) && !isNaN(totalRulerScale)) {
					const totalAbsoluteScore = totalCardScale + totalMultipleScale + totalRulerScale;
					const totalAbsoluteLabel = totalAbsoluteScore > 11 ? 'High' : 'Low';

					$totalScore.text(totalAbsoluteLabel);
					$scoreLabel.text(totalAbsoluteScore);

					$footerResult.addClass('ColorZetaBG');

					const $hiddenLink = $('.ScaleMainStructure_hiddingLink a');

					if ($hiddenLink.length > 0) $hiddenLink.click();
				}
			};

			if (CardScale === true) {
				$('.ScaleCard').click(function() {
					if (!$(this).hasClass('disabled')) {
						$parentScaleCard = $(this).closest('.ScaleList.CardScale');
						$parentScaleCard.find('.ScaleCard').removeClass('active');
						$(this).addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (RulerScale === true) {
				$('.RulerScale').click(function() {
					if ($(this).find('.viewmode').length === 0) {
						var $rulerScaleList = $(this).closest('.ScaleList.Ruler');
						$rulerScaleList.find('.RulerScale_number').removeClass('active');
						$(this)
							.find('.RulerScale_number')
							.addClass('active');
						TotalCalc();
					}
				});
				TotalCalc();
			}

			if (MultipleScale === true) {
				var counter;
				var ScaleListTitle = document.querySelector('.ScaleList.MultipleScale.isTitle');
				var ScaleListSubTotal = document.querySelector('.ScaleList.MultipleScale.isSubtotal');
				var ScaleList = document.querySelector('.ScaleList.MultipleScale:not(.isTitle):not(.isSubtotal)');

				$('.ButtonGroupScale')
					.closest('.ScaleList.MultipleScale:nth-child(2n)')
					.addClass('EvenLine');
				var numberOfGroupScale = ScaleList.querySelectorAll('.ButtonGroupScale').length;

				$('.ScaleList.MultipleScale.isSubtotal .ButtonGroupScale').text(0);
				// Check if Multiple Scale Title exists then adjust title width
				if ($('.ScaleList.MultipleScale.isTitle').length > 0) {
					for (counter = 0; counter < numberOfGroupScale; counter++) {
						var ScaleListWidth = ScaleList.querySelectorAll('.ButtonGroupScale')[counter].offsetWidth;
						ScaleListTitle.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
						ScaleListSubTotal.querySelectorAll('.ButtonGroupScale')[counter].style.width = ScaleListWidth + 'px';
					}
				}

				$('.ButtonGroup_button').click(function() {
					TotalCalc();
				});
				TotalCalc();
			}
		});
	};

	setupScale = () => {
		var IsCardScale;
		var IsRulerScale;
		var IsMultipleScale;

		$('.ScaleCard').length > 0 ? (IsCardScale = true) : (IsCardScale = false);
		$('.ButtonGroupScale').length > 0 ? (IsMultipleScale = true) : (IsMultipleScale = false);
		$('.RulerScale').length > 0 ? (IsRulerScale = true) : (IsRulerScale = false);

		setTimeout(function() {
			ScaleCount({
				IsCardScale: IsCardScale,
				IsRulerScale: IsRulerScale,
				IsMultipleScale: IsMultipleScale,
			});
		}, 500);

		if ($('.ScaleMainStructure_options .ToggleItemControl').length > 0) {
			$('.ScaleMainStructure_options .ToggleItemControl').click(function() {
				$('.ScaleMainStructure_totalScore').text('---');
			});
		}
	};

	resetScales = () => {
		$('.ScaleMainStructure_content').css('visibility', 'hidden');
		$('.ScaleMainStructure_options .ToggleItemControl').addClass('disabled');
		setTimeout(function() {
			$('.ScaleMainStructure_totalScore').text('---');
			setupScale();
		}, 600);
		setTimeout(function() {
			$('.ScaleMainStructure_content').css('visibility', 'visible');
			$('.ScaleMainStructure_options .ToggleItemControl').removeClass('disabled');
		}, 1000);
	};

	bindClicks = () => {
		if ($('.ScaleMainStructure_options .ToggleItemControl ').length > 0) {
			$('.ScaleMainStructure')
				.off('click')
				.on('click', '.ToggleItemControl', function() {
					resetScales();
				});
		}

		if ($('.Navigation_control').length > 0) {
			$('.Navigation_right').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});

			$('.Navigation_left').click(function() {
				if (
					!$(this)
						.find('a')[0]
						.hasAttribute('disabled')
				) {
					resetScales();
				}
			});
		}
	};

	SapphireWidgets.ScaleMainStructure = { create };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/scales/toggle-item-control.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/scales/toggle-item-control.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ToggleItemControl */
SapphireWidgets.ToggleItemControl = () => {
	$(document).ready(function() {
		$('.ToggleItemControl input[type="radio"]').each(function() {
			if ($(this).is(':checked')) {
				$(this)
					.parent()
					.parent()
					.addClass('active');
			}
		});

		$('.ToggleItemControl')
			.off('click')
			.on('click', function() {
				$('.ToggleItemControl').removeClass('active');
				$(this)
					.find('input[type="radio"]')
					.not(':checked')
					.prop('checked', true)
					.click();
				if (
					$(this)
						.find('input[type="radio"]')
						.is(':checked')
				) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				$('.ToggleItemControl input[type="radio"]').each(function() {
					if ($(this).is(':checked')) {
						$(this)
							.parent()
							.parent()
							.addClass('active');
					}
				});

				$('.ToggleItemControl')
					.off('click')
					.on('click', function() {
						$('.ToggleItemControl').removeClass('active');

						if (
							$(this)
								.find('input[type="radio"]')
								.is(':checked')
						) {
							$(this).addClass('active');
						} else {
							$(this).removeClass('active');
						}
					});
			});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/select-ssd.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/select-ssd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SelectSSD = function SSDSelectSetup(config) {
	$(function() {
		var $SSDselectId = $('#' + config.SSDSelectId);
		var isMultiple = config.isMultiple;

		var $ComponentSSD = $SSDselectId.closest('.SearchSD');
		var $ComponentSSDinput = $ComponentSSD.find('.SearchSD___input input');
		var Componentinputlength = $ComponentSSDinput.val().length;

		if (Componentinputlength > 0) {
			$SSDselectId.find('.SelectSD__contentTitle').highlight($ComponentSSDinput.val(), {
				className: 'SelectSD-searched-term',
				caseSensitive: false,
				wordsOnly: false,
			});
		}

		var $favoritesSearchInput = $ComponentSSD.find('.SearchSD_filterfavorites input');

		if ($favoritesSearchInput.length) {
			var favoritesSearchLength = $favoritesSearchInput.val().length;

			if (config.HasFavorite === 'True' && favoritesSearchLength > 0) {
				$SSDselectId.find('.SelectSD__contentTitle').highlight($favoritesSearchInput.val(), {
					className: 'SelectSD-searched-term',
					caseSensitive: false,
					wordsOnly: false,
				});
			}
		}

		var OpenConfirmPopup = function($SSDselectId) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$PopupID = $ComponentSSD.siblings('.SSDPopupWrapper');

			$PopupID.fadeIn('fast', function() {
				$ComponentSSD.addClass('Dont_Close');
				$PopupID
					.find('.SSDpopupOk')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							$SSDselectId.find('.SelectSD__starTrigger > a').click();
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});

				$PopupID
					.find('.SSDpopupCancel')
					.off('click')
					.on('click', function() {
						$PopupID.fadeOut('fast', function() {
							setTimeout($ComponentSSD.removeClass('Dont_Close'), 500);
						});
					});
			});
		};

		var SSDCheckBoxSelect = function($widgetId) {
			var checkBoxCount = 0;
			if (isMultiple === 'True') {
				checkBoxCount = $widgetId
					.closest('.SearchSD.showFavorite')
					.find('.SelectSD__multiple > input[type="checkbox"]:checked').length;

				$allListcard = $widgetId.closest('.SearchSD_content');

				if (checkBoxCount > 0) {
					$widgetId.closest('.SearchSD.showFavorite').addClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.off('click');
						$(this)
							.find('.SelectSD_actionLink')
							.off('click');
					});
				} else {
					$widgetId.closest('.SearchSD.showFavorite').removeClass('MultiSelectActive');
					$widgetId.closest('.SearchSD_content .SelectSD ').each(function() {
						$(this)
							.find('.SelectSD_contentWrapper')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
						$(this)
							.find('.SelectSD_actionLink')
							.on('click', function(e) {
								$(this)
									.find('.LineActionLINK > a')
									.click();
							});
					});
				}
			}
		};

		if (isMultiple === 'True') {
			$SSDselectId.find('.SelectSD__multiple > input').click(function() {
				SSDCheckBoxSelect($SSDselectId);
			});
		}

		$SSDselectId.find('.SelectSD__starLink').on('click', function(e) {
			if (!$SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starDisabled')) {
				if ($SSDselectId.find('.SelectSD .SelectSD__starWrapper').hasClass('starSelected')) {
					OpenConfirmPopup($SSDselectId);
				} else {
					$SSDselectId.find('.SelectSD__starTrigger > a').click();
				}
			}
		});

		$SSDselectId.find('.SelectSD_contentWrapper').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}

			$ComponentSSDinput.val('');
		});

		$SSDselectId.find('.SelectSD_actionLink').on('click', function(e) {
			$ComponentSSD = $SSDselectId.closest('.SearchSD');
			$SSDselectId.find('.LineActionLINK > a').click();
			if (!$ComponentSSD.hasClass('MultiSelectActive')) {
				SearchSelectDefine.SSDSearch.returnToSearch($SSDselectId.closest('.SearchSD'));
				SearchSelectDefine.SSDSearch.closeSSD($SSDselectId.closest('.SearchSD'));
			}
		});
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/search-and-select/ssd-search.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/search-and-select/ssd-search.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SearchSelectDefine = (window.SearchSelectDefine = window.SearchSelectDefine || {});

SapphireWidgets.SSDSearch = function SSDsearchSetup(config) {
	$(function() {
		var $SSDwidget = $('#' + config.SSDWidgetId); // SSDComponent map not used again
		var $SSDComponent = $SSDwidget.find('.SearchSD'); // SSDSearch Component id for use in the function and manipulate classes
		var $SSDComponentContent = $SSDComponent.find('.SearchSD_content'); // SSDcomponent content
		var hasClone = config.HasClone; // HasClone variable input parameter value
		var hasFavorite = config.HasFavorite; // HasFavorite variable input parameter value
		var showClones = config.ShowClones; // ShowClones variable input parameter value
		var letterLimit = config.LimitLetter; // Number of letter to enter before trigger the search action
		var hasShield = config.HasShield;
		var shieldTimeout = config.ShieldTimeout;
		var inputLength = config.SearchInputLength;
		var $widgetShield = $SSDComponent.find('.SearchSD--shield');
		var searchTriggerTimer;
		const $SSDClearButton = $SSDComponent.find('.SearchSD___remove');
		const $SSDInputElement = $SSDComponent.find('.SearchSD___input input');

		$SSDInputElement.attr('maxLength', inputLength);

		var executeSearch = function() {
			clearTimeout(searchTriggerTimer);
			searchTriggerTimer = setTimeout(function() {
				TriggerSearch($SSDComponent);
			}, 700);
		};

		if (hasShield) {
			window.setTimeout(function() {
				$widgetShield.hide();
			}, shieldTimeout);
		}

		/*  Returns a function, that, as long as it continues to be invoked, will not
		 *   be triggered. The function will be called after it stops being called for
		 *   N milliseconds. If `immediate` is passed, trigger the function on the
		 *   leading edge, instead of the trailing.
		 */
		var debounce = function(func, wait, immediate) {
			var timeout;
			return function executedFunction() {
				var context = this;
				var args = arguments;

				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};

				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};

		/****
		 *   Reset Search UI to the initial state
		 */
		var resetUI = function($SSDComponent) {
			$SSDComponent.find('.SearchSD__inputWrapper').show();
			$SSDComponent.find('.SearchSD_search_favoriteLink').hide();
			$SSDComponent.find('.SearchSD___goToFavorite').hide();
			$SSDComponent.find('.SearchSD__FavoriteActions').hide();
			$SSDComponent.find('.SearchSD__FavoriteRemove').hide();
			$SSDComponent.find('.SearchSD__cloneWrapper').hide();
			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDInputElement.val().trim() === '') {
				$SSDComponent.find('.SearchSD___remove').hide();
			}

			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('showClone');
		};

		/*
		 *
		 *  Go to Favorites UI
		 *  --  rest SSDcomponent
		 *  --  show Favorite features
		 *  --  remove class showClone if component have that class
		 *  --  add class showFavorite to have component control
		 *  --  addClass Open with slide
		 */
		var goToFavorites = function($SSDComponent) {
			resetUI($SSDComponent);

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');
			$SSDComponent.find('.SearchSD__return').hide();
			$SSDComponent.find('.SearchSD__inputWrapper').hide();

			if ($SSDComponent.hasClass('showClone')) {
				$SSDComponent.removeClass('showClone');
			}

			$SSDComponent.find('.SearchSD_search_favoriteLink ').show();
			$SSDComponent.find('.SearchSD__FavoriteRemove ').show();
			$SSDComponent.find('.SearchSD__FavoriteActions').show();
			$SSDComponent.addClass('showFavorite');
			$SSDComponent.find('.SelectSD.hasFavorite > a').focus();
			$SSDComponent.addClass('Open');

			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}
		};

		/**************
		 *
		 *  Go to Clone UI
		 *  --  remove class Open
		 *  -- Add ShowClone class
		 *  -- SlideDown effect and add Open Class
		 */
		var goToClone = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			$SSDComponent.find('.SearchSD___input input').val('');
			$SSDComponent.removeClass('Open');

			if (!$SSDComponent.hasClass('showClone')) {
				$SSDComponent.addClass('showClone');
			}
			$SSDComponent.addClass('Open');
		};

		/*
		 * Return to search from favorite or clone
		 */
		var returnToSearch = function($SSDComponent) {
			// loading show hide list
			$SSDComponent.find('.SearchSD_contentList').hide();
			$SSDComponent.find('.SearchSD__loading').show();
			if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
				$SSDComponent.find('.SearchSD_showMore').hide();
			}

			resetUI($SSDComponent);
			$SSDComponent.removeClass('showClone');
			$SSDComponent.removeClass('showFavorite');
			$SSDComponent.removeClass('Open');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent.find('.SearchSD__inputWrapper .SearchSD__return').hide();

			if ($SSDComponent.hasClass('hasClone')) {
				$SSDComponent.addClass('hasClone');
				$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
			}
			if ($SSDComponent.hasClass('hasFavorite')) {
				$SSDComponent.addClass('hasFavorite');
				$SSDComponent.find('.SearchSD_search_favoriteLink').show();
			}
		};

		/*
		 *   SSDClear closes SSDSearch container
		 *   and clear ssd filter input
		 */
		var ssdClear = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponent.find('.SearchSD___input input').val('');
		};

		/*
		 *   CloseSSD closes SSDSearch container
		 *   must remove hightlightSelection done by keyboard navigation
		 */
		var closeSSD = function($SSDComponent) {
			$SSDComponent.removeClass('Open');
			$SSDComponentContent.slideUp('250');
			$SSDComponent.find('.selected').removeClass('.selected');
		};

		/*
		 *   Add Open class to SSDComponent
		 *   if SSDComponent has class Open then focus
		 *   makes open effect, check the characters inside the input to filter
		 */
		var ssdFocus = function($SSDComponent) {
			if (!$SSDComponent.hasClass('Open')) {
				// loading show hide list
				$SSDComponent.find('.SearchSD_contentList').hide();
				$SSDComponent.find('.SearchSD__loading').show();
				if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
					$SSDComponent.find('.SearchSD_showMore').hide();
				}

				$SSDComponent.removeClass('Open');
				$SSDComponent.removeClass('.showClone');
				$SSDComponent.removeClass('.showFavorite');

				if (!$SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchLinkInput a').click();
					$SSDComponent.addClass('Open');
				}
			}
		};

		/*
		 *   When clicking clicking outside the component
		 *   the SSD must close and return to initial state
		 */
		var ClickOut = function(e, $SSDComponent) {
			if (!$SSDComponent.is(e.target) && $SSDComponent.has(e.target).length === 0) {
				returnToSearch($SSDComponent);
				$SSDComponent.removeClass('MultiSelectActive');
			}
		};

		/*
		 *   Triggers the link to initialize
		 *   the database search based on current length of the string inserted on the input
		 */
		var TriggerSearch = function($SSDComponent) {
			var currentWord = $SSDComponent.find('.SearchSD___input input').val();
			var currentCount = currentWord.length;
			if (currentCount >= letterLimit || currentCount === 0) {
				$SSDComponent.find('.SearchLinkInput > a').click();
			}
		};

		/*
		 *   Removes all favorite checked boxes
		 *   and ends MultipleSelect
		 */
		var MultiUncheck = function($SSDComponent) {
			$checkBoxes = $SSDComponent.parent().find('.SelectSD__multiple > input[type="checkbox"]');
			$SSDComponent.removeClass('MultiSelectActive');

			$SSDComponent
				.parent()
				.find('.SelectSD__multiple > input[type="checkbox"]')
				.each(function() {
					$(this).prop('checked', false);
				});
		};

		/*
		 *   KeyBoard events up down and enter if not filter
		 */
		var keyboardEvents = function(e, $SSDComponent) {
			if ($SSDComponent.hasClass('Open')) {
				var currentSelected = $SSDComponentContent.find('.ListRecords > span.selected'); // Current selectable item
				var $firstSelect = $SSDComponentContent.find('.ListRecords > span:first-child'); // First selectable item
				var $lastSelect = $SSDComponentContent.find('.ListRecords > span:last-child'); // Last selectable item
				var countSelected = currentSelected.length; // Number of selected item

				if (e.which == 38) {
					// if key pressed is up arrow
					if (countSelected === 0) {
						currentSelected = $lastSelect;
						$lastSelect.addClass('selected');
					} else {
						currentSelected.removeClass('selected');
						next = currentSelected.prev();

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.last().addClass('selected');
						}
					}
				} else if (e.which == 40) {
					// if key pressed is down arrow
					if (countSelected === 0) {
						$firstSelect.addClass('selected');
					} else {
						next = currentSelected.next();
						currentSelected.removeClass('selected');

						if (next.length > 0) {
							currentSelected = next.addClass('selected');
						} else {
							currentSelected = currentSelected.eq(0).addClass('selected');
						}
					}
				} else if (e.which == 13) {
					// if key pressed is enter
					if (countSelected > 0) {
						e.preventDefault();
						currentSelected.find('.SelectSD .SelectSD_actionLink').click();
						ssdClear($SSDComponent);

						return true;
					} else if ($SSDComponent.find('SearchSD___input input').is(':active') && countSelected === 0) {
						e.preventDefault();
						return true;
					}
				} else {
					executeSearch();
				}
			}
		};

		/*
		 *   The first step is to reset the seetings to default
		 */
		resetUI($SSDComponent);

		/*
		 *  Remove autoComplete from search input
		 */
		$SSDComponent.find('.SearchSD___input input').attr('autocomplete', 'off');

		/*
		 *   If SSD has Clone and the clone list is visible
		 *   onclick "Clone previous medication" then
		 *   remove Open and show items to clone list
		 */
		if (hasClone === 'True') {
			$SSDComponent.addClass('hasClone');
			$SSDComponent.find('.SearchSD__cloneWrapper').css('display', 'flex');
		}

		if (hasFavorite === 'True') {
			$SSDComponent.addClass('hasFavorite');
			$SSDComponent.find('.SearchSD_search_favoriteLink').show();
		}

		if ((hasClone === 'True') & (showClones === 'True')) {
			$SSDComponent.find('.SearchSD_cloneWrapper').click(function() {
				$SSDComponent.addClass('Open');
			});
		}

		$SSDComponent.find('.SearchSD__FavoriteRemove').click(function() {
			ssdClear($SSDComponent);
			returnToSearch($SSDComponent);
			debounce(TriggerSearch($SSDComponent), 550);
			debounce($SSDComponent.find('.SearchSD___input input').focus(), 560);
		});

		$SSDComponent.find('.SearchSD__cloneWrapper').click(function() {
			goToClone($SSDComponent);
			$SSDComponent.find('.SearchSD___goToClone > a').click();
		});

		$SSDComponent.find('.SearchSD__inputWrapper').click(function() {
			if ($SSDComponent.hasClass('showClone')) {
				returnToSearch($SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsCancel').click(function() {
			MultiUncheck($SSDComponent);
		});

		$SSDComponent.find('.SearchSD___input input').focus(function() {
			debounce(ssdFocus($SSDComponent), 600);
		});

		$('body').mouseup(function(e) {
			ClickOut(e, $SSDComponent);
		});
		/*
		 *   KeyBoard events on key press
		 */
		$SSDComponent
			.find('.SearchSD___input input')
			.add($SSDComponent.find('.SelectSD_actionLink'))
			.on('keyup', function(e) {
				if (!e.which != 13) {
					keyboardEvents(e, $SSDComponent);
				}

				if ($SSDInputElement.val().trim() === '') {
					$SSDClearButton.animate({ opacity: 'hide' }, 300);
				} else {
					$SSDClearButton.animate({ opacity: 'show' }, 300);
				}
			});

		/*
		 *   Prevent form submission on enter,
		 *   instead go to keyboard events to trigger
		 *   the selection
		 */
		$($SSDComponent).on('keydown', function(e) {
			if (e.which == 13) {
				keyboardEvents(e, $SSDComponent);
			}
		});

		$SSDComponent.find('.SearchSD___remove').click(function() {
			ssdClear($SSDComponent);
			debounce(returnToSearch($SSDComponent), 600);
		});

		$SSDComponent.find('.SearchSD_search_favoriteLink').click(function() {
			ssdClear($SSDComponent);
			goToFavorites($SSDComponent);
			$SSDComponent.find('.SearchSD___goToFavorite > a').click();
		});

		$SSDComponent.find('.SearchSD__FavoriteActionsAdd > a').click(function() {
			debounce(TriggerSearch($SSDComponent), 200);
			debounce(returnToSearch($SSDComponent), 350);
		});

		/*
		 *   On Ajax Request hide loading div if the SSD is open then show the
		 *   ListRecords
		 */
		osAjaxBackend &&
			osAjaxBackend.BindAfterAjaxRequest(function() {
				if ($SSDComponent.hasClass('Open')) {
					$SSDComponent.find('.SearchSD__loading').hide();
					$SSDComponentContent.slideDown('1000', function() {
						$SSDComponent.find('.SearchSD_contentList').show();
						if ($SSDComponent.find('.SearchSD_showMore a').length > 0) {
							$SSDComponent.find('.SearchSD_showMore').show();
						}
					});
				}
			});

		$('form').append('<input type="submit" name="ssdInput" onclick="return false;"  style="display:none;" />');

		window.SearchSelectDefine.SSDSearch = {
			returnToSearch: returnToSearch,
			resetUI: resetUI,
			closeSSD: closeSSD,
			ssdFocus: ssdFocus,
			TriggerSearch: TriggerSearch,
			ssdClear: ssdClear,
		};
	});
};
// Added to close the select list if we click the prescription Iframe;
window.addEventListener('DOMContentLoaded', event => {
	var rootElement = document.querySelector('body');
	rootElement.addEventListener(
		'click',
		function(event) {
			document.querySelector("iframe[src*='Prescriptions_CW']") &&
				document
					.querySelector("iframe[src*='Prescriptions_CW']")
					.contentWindow.document.addEventListener('click', e => {
						e.stopPropagation();
						document.querySelector('.SearchSD').classList.remove('Open');
						var allInput = document.querySelector('.SearchSD___input').children;
						for (const element in allInput) {
							return allInput[element].value != undefined ? (allInput[element].value = '') : null;
						}
					});
		},
		true
	);
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/searchable-client-side/scripts.js":
/*!*******************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/searchable-client-side/scripts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SearchClientSide */
(function($, window, SapphireWidgets) {
	class SearchClientSide {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();

			$(window).load(() => {
				osAjaxBackend &&
					osAjaxBackend.BindAfterAjaxRequest(() => {
						setTimeout(() => {
							$('#' + this.options.inputId).trigger('change');
						}, 200);
					});
			});
		}

		onComponentInit() {
			$('#' + this.options.inputId).on('change keydown paste input', e => {
				if (e.keyCode === 13) {
					e.preventDefault();
				} else {
					this.searchClientSide(
						this.options.inputId,
						this.options.searchableElementSelector,
						this.options.searchableChildSelector
					);
				}
			});
		}

		searchClientSide(inputId, selector, childSelector) {
			if ($('#' + inputId).is(':visible')) {
				var searchText = osjs('#' + inputId)
					.val()
					.toLowerCase();
				var searchCounter = 0;
				var selecion = osjs(selector);

				selecion.removeClass('searchNotFound');
				selecion.removeClass('searchFound');
				selecion.unhighlight();

				if (childSelector) {
					const elementToSearch = osjs(childSelector);
					elementToSearch.unhighlight();
				}

				if (searchText.length > 1) {
					selecion.each(function() {
						const textToCompare = childSelector
							? $(this)
									.find(childSelector)
									.text()
							: this.innerText;

						if (
							textToCompare
								.trim()
								.toLowerCase()
								.indexOf(searchText) > -1
						) {
							osjs(this).addClass('searchFound');
							searchCounter++;
							osjs(this).highlight(searchText);
						} else {
							osjs(this).addClass('searchNotFound');
						}
					});
				}
			}
		}
	}

	const create = config => (window[config.widgetId] = new SearchClientSide(config));

	SapphireWidgets.SearchClientSide = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-custom/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-custom/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandable */
(function($, window, SapphireWidgets) {
	function SectionExpandableCustom() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableCustom_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				tempHeight = SectionContent.height();
				SectionContent.height(0);
				SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;

				if ($('.Page').hasClass('ie8') || $('.Page').hasClass('ie9')) {
					SectionContent.height('auto');
					SectionContent.css('overflow', 'visible');
				}
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandable_headerCustom').off();

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandable_headerCustom').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableCustom').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = {
						client: stat,
						server: stat,
					};
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableCustom_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableCustom').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = {
					client: stat,
					server: stat,
				};

				if (
					$(this).hasClass('HideWhenEmpty') &&
					$(this)
						.find('.SectionExpandableCustom_content')
						.text().length === 0
				) {
					$(this).hide();
				}

				// hack to display a message when SectionExpandableCustom has no child items
				var isEmpty = true;
				$(this)
					.find('.SectionExpandableCustom_content div, .SectionExpandableCustom_content span')
					.not('.SectionExpandableCustom_content--empty')
					.each(function() {
						if ($(this).text().length > 0) {
							isEmpty = false;
							return false;
						}
					});
				if (!isEmpty) {
					$(this)
						.find('.SectionExpandableCustom_content--empty')
						.css({
							display: 'none',
						});
				}

				var $expandableInstance = $(this);
				var $toggler = $(this).find('> .SectionExpandable-toggler');
				if ($toggler.length === 1) {
					var $togglerState = false;
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
					$toggler.off('click').on('click', function(evt) {
						evt.stopPropagation();
						$togglerState = !$togglerState;
						if ($togglerState) {
							$expandableInstance.find('.SectionExpandable-toggled').show();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));
						} else {
							$expandableInstance.find('.SectionExpandable-toggled').hide();
							$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));
						}
					});
				}
			});

			// add click events
			$('.SectionExpandable_headerCustom')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandable_headerCustom input, .SectionExpandable_headerCustom select, .SectionExpandable_headerCustom a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const create = () => {
		const expandable = new SectionExpandableCustom();

		expandable.init();
	};

	SapphireWidgets.SectionExpandable = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/section-expandable-inside/scripts.js":
/*!**********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/section-expandable-inside/scripts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SectionExpandableInside */
(function($, window, SapphireWidgets) {
	function SectionExpandableInside() {
		var that = this;

		// Object to save stats
		var previewstat = [];

		// set click events
		function clickEvents(ob) {
			// store querys in a single var
			var Section = $(ob).parent();
			var SectionContent = Section.children('.SectionExpandableInside_content');

			// get id
			var id = Section.attr('id');

			var tempHeight = 0;

			// has class expanded
			if (Section.hasClass('expanded')) {
				// Calc and set a fixed height, during this process, transitions are disabled
				SectionContent.addClass('noTransition');
				SectionContent.height(SectionContent.height());
				SectionContent[0].offsetHeight; // hack to force a repaint
				SectionContent.removeClass('noTransition');

				// Collapse content
				SectionContent.height(0);
				Section.removeClass('expanded');
				SectionContent.css('overflow', 'hidden');

				// Remove class, set height and save state
				previewstat[id]['client'] = false;
			} else {
				// Calc and set a fixed height
				SectionContent.height('auto');
				// tempHeight = SectionContent.height();
				// SectionContent.height(0);
				// SectionContent.height(tempHeight);
				SectionContent.css('overflow', 'hidden');

				// remove class, set height and save state
				Section.addClass('expanded');
				previewstat[id]['client'] = true;
			}
		}

		// ajax refres function
		that.ajaxRefresh = function() {
			// remove click events
			$('.SectionExpandableInside .SectionExpandableInside_header').off();

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// add new click events
			$('.SectionExpandableInside .SectionExpandableInside_header').on('click', function() {
				clickEvents(this);
			});

			// each all sections
			$('.SectionExpandableInside').each(function() {
				// if new SectionExpandable then add to previewstat array
				if (previewstat[$(this).attr('id')] == null) {
					// add stat on array
					var stat = false;
					// if open
					if ($(this).hasClass('expanded')) {
						stat = true;
					}
					// add row
					previewstat[$(this).attr('id')] = { client: stat, server: stat };
				}

				// curent state (ajax state x initial state)
				var curState = false;

				// check if start expandable
				if ($(this).hasClass('expanded')) {
					curState = true;
				}

				// check if ajax != initial server
				if (curState != previewstat[$(this).attr('id')]['server']) {
					// curstate
					previewstat[$(this).attr('id')]['client'] = curState;
					previewstat[$(this).attr('id')]['server'] = curState;
				} else {
					// has class expanded
					if (previewstat[$(this).attr('id')]['client'] == false && $(this).hasClass('expanded')) {
						$(this).removeClass('expanded');
						$(this)
							.children('.SectionExpandableInside_content')
							.height(0);
					} else if (previewstat[$(this).attr('id')]['client'] == true && !$(this).hasClass('expanded')) {
						$(this).addClass('expanded');
					}
				}
			});
		};

		// set events
		that.init = function() {
			// each all sections to create array stat
			$('.SectionExpandableInside').each(function() {
				// add stat on array
				var stat = false;

				// if open
				if ($(this).hasClass('expanded')) {
					stat = true;
				}

				// add row
				previewstat[$(this).attr('id')] = { client: stat, server: stat };
			});

			// add click events
			$('.SectionExpandableInside .SectionExpandableInside_header')
				.off('click')
				.on('click', function() {
					clickEvents(this);
				});

			// add stop prepagation
			$(
				'.SectionExpandableInside .SectionExpandableInside_header input, .SectionExpandableInside .SectionExpandableInside_header select, .SectionExpandableInside .SectionExpandableInside_header a'
			).click(function(event) {
				event.stopPropagation();
			});

			// event ajax
			osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(that.ajaxRefresh);
		};
	}

	const setOpenCloseClass = id => {
		id.click(function() {
			if (id.parent().hasClass('expanded')) {
				$(this)
					.find('.HeaderIcon')
					.removeClass('open');
				$(this)
					.find('.HeaderIcon')
					.addClass('closed');
			} else {
				$(this)
					.find('.HeaderIcon')
					.removeClass('closed');
				$(this)
					.find('.HeaderIcon')
					.addClass('open');
			}
		});
	};

	const create = () => {
		const expandable = new SectionExpandableInside();

		expandable.init();
	};

	SapphireWidgets.SectionExpandableInside = {
		create,
		setOpenCloseClass,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/select-system/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = config => {
	$(function() {
		var WidgetId = config.WidgetId; //Combo Box Id to be used.
		var Class = config.Class; //All Combo boxes with this class will be be transformed.
		var NoResultsText = config.NoResultsText; //Text to display when there are no results.
		var inputType = config.InpuType; //Options: FIlters, Dropdown, Select2
		var Prompt = config.Prompt; //Prompt in search
		var Select2Type = config.SelectType; // Type of select2 configuration
		var HasSearch = config.HasSearch; // has search
		var OnSelectingJS = config.OnSelectingJS;
		var OnUnSelectingJS = config.OnUnSelectingJS;
		var MaximumLength = config.MaximumLength;
		var SelectedValue = config.SelectedValue;
		var allowClear = config.allowClear;
		//  Select2 Ajax Configuration
		var AjaxURL = config.AjaxURL;
		var AjaxDelay = config.AjaxDelay;
		var PaginationSize = config.PaginationSize;
		var MinimumInputLenght = config.MinimumInputLenght;
		var SearchTerm = config.SearchTerm;
		var SearchExtraParam1 = config.SearchExtraParam1;
		var PageTerm = config.PageTerm;
		var AmountPage = config.PageAmount;
		var isMultiple = config.isMultiple;
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.locale === 'AR' || config.locale === 'FA') {
			Select2Options.dir = 'rtl';
		}
		
		Select2Options.theme = 'default SelectSystem';

		console.log("--- " + Select2Type + " ---");
		/*  
          Change select2 search display 
              -Multiple Select2 search UI like Single Select2
      */
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function(Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function() {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
							'<input class="select2-search__field" placeholder="' +
							placeholder +
							'" type="search"' +
							' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
							' spellcheck="false" role="textbox" />' +
							'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		/**
		 * Default Configuration needed to associate the widget to the select2 plugin
		 */
		if (WidgetId === '' && Class != '') {
			$WidgetIdentifier = $('.' + Class);
		} else {
			$WidgetIdentifier = $('#' + WidgetId);
		}
		Select2Options.containerCssClass = 'select-hide ' + inputType;

		//  Select2Options.dropdownParent= $('#'+ParentDiv);

		var formatResult = function(result) {
			var $selectedOptionsValue = $WidgetIdentifier.find(':selected');
			var selectedOptions = $selectedOptionsValue.length;
			var totalOptions = $WidgetIdentifier.find('option').length;
			var selectAllOpt = $WidgetIdentifier.find('option:first-child:selected').length;
			var activeValues = '';
			var allOptExceptAll = $WidgetIdentifier.find(':selected:not(".SelectedAll")').length;
			var $allOptExceptAllObj = $WidgetIdentifier.find(':selected:not(".SelectedAll")');

			if (selectedOptions === totalOptions) {
				if (totalOptions - 1 > 3) {
					return 'All Selected';
				} else {
					$allOptExceptAllObj.each(function() {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				}
			} else {
				var totalopt = totalOptions - 1;
				if (selectedOptions > 3) {
					return selectedOptions + ' of ' + totalopt + ' selected';
				} else {
					if (selectedOptions > 0) {
						$selectedOptionsValue.each(function() {
							activeValues = activeValues + ' ' + $(this)[0].innerText + ', ';
						});
						activeValues = activeValues.replace(/,\s*$/, '');
						return activeValues;
					} else {
						return 'Select an option';
					}
				}
			}
		};

		if (NoResultsText != '') {
			Select2Options.formatNoMatches = function() {
				return NoResultsText;
			};
		}

		if (inputType != '') {
			Select2Options.dropdownCssClass = inputType;
		}

		if (allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (MaximumLength != '') {
			Select2Options.maximumInputLength = MaximumLength;
		}

		if (Prompt != '') {
			Select2Options.placeholder = Prompt;
		} else {
			Select2Options.placeholder = {
				id: '-1', // the value of the option
				text: 'Select an option',
			};
		}

		if (Select2Type === '3') {
			// Select2 Ajax
			Select2Options = {};

			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			Select2Options.allowClear = false;

			Select2Options.templateSelection = function(repo) {
				if (!repo.element) {
					return Prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function(repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			(Select2Options.ajax = {
				url: AjaxURL,
				dataType: 'json',
				delay: AjaxDelay,
				data: function(params) {
					var Select2AjaxOpt = {};
					var SplitParameter = SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = AmountPage;

					SplitParameter.forEach(function(el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function(data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			}),
				(Select2Options.minimumInputLength = MinimumInputLenght);

			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (config.isMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			if (SelectedValue !== '') {
				try {
					const data = JSON.parse(SelectedValue);
					const option = new Option(data.Value, data.Id, true, true);

					$WidgetIdentifier.append(option).trigger('change');
				} catch (error) {
					console.error(`Component SelectSystem (${WidgetId}): SelectedValue must be a valid JSON!`);
				}
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (Select2Type === '2') {
			//Select2 with CheckBox

			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (WidgetId != '') {
				option = new Option('Select All', 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (HasSearch === 'True') {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = formatResult;
		}

		if (Select2Type === '6') {
			// Select2 HtmlOptions
			Select2Options = {};
			if (config.locale === 'AR' || config.locale === 'FA') {
				Select2Options.dir = 'rtl';
			}

			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function(key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function(markup) {
				return markup;
			};

			if (SelectedValue != '') {
				$WidgetIdentifier.val(SelectedValue).trigger('change');
			} else {
				$WidgetIdentifier.val('').trigger('change');
			}
		}

		if (Select2Type === '1') {
			// Select2 TagCustom
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			Select2Options.TokenSeparatos = [',', ' '];
			Select2Options.createSearchChoice = function(term, data) {
				if (
					$(data).filter(function() {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};
		}

		if (Select2Type === '5') {
			// Select2 TagMultiple
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function(params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true, // add additional parameters
				};
			};
		}

		if (HasSearch === 'False') {
			Select2Options.minimumResultsForSearch = -1;
		}

		if (OnUnSelectingJS != '' || OnSelectingJS != '') {
			$WidgetIdentifier
				.select2(Select2Options)
				.on('select2:unselecting', function(e) {
					$(this).data('unselecting', true);
					OnUnSelectingJS;
				})
				.on('select:selecting', function(e) {
					OnSelectingJS;
				})
				.on('select:opening', function(e) {
					if ($(this).data('unselecting')) {
						$(this).removeData('unselecting');
						e.preventDefault();
					}
				})
				.on('select:open', function(evt) {
					evt.preventDefault();
				})
				.on('select2:close', function(evt) {
					evt.preventDefault();
				});
		} else {
			if (Select2Type === '2') {
				$WidgetIdentifier.select2(Select2Options);
				var idwidget = '#' + WidgetId;

				$WidgetIdentifier.on('select2:select', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						var selectedItems = [];
						var allOptions = $(idwidget + ' option');
						allOptions.each(function() {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					} else {
						var selectedOptions = $WidgetIdentifier.find('option:selected').length;
						var totalOptions = $WidgetIdentifier.find('option').length;
						if (selectedOptions === totalOptions - 1 && $(idwidget + ' >  option:selected:first-child').length === 0) {
							var selectedItems = [];
							var allOptions = $(idwidget + ' option');
							allOptions.each(function() {
								selectedItems.push($(this).val());
							});
							$WidgetIdentifier.select2('destroy');
							$WidgetIdentifier.val(selectedItems).trigger('change');
							$WidgetIdentifier.select2(Select2Options);
							$WidgetIdentifier.select2('open');
						}
					}
				});

				$WidgetIdentifier.on('select2:unselect', function(e) {
					UnselectedId = e.params.data.id;
					if (UnselectedId === 'All') {
						$(idwidget + ' > option').removeAttr('selected');
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
						$(idwidget)
							.val('')
							.trigger('change');
						//$(idwidget +' > option').attr('selected', "selected");
					} else {
						$(idwidget + ' > option:first-child').removeAttr('selected');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				});
			} else {
				$WidgetIdentifier.select2(Select2Options);
			}
		}

		if (Select2Type === '4') {
			$WidgetIdentifier.select2(Select2Options);
			var idwidget = '#' + WidgetId;

			$WidgetIdentifier.on('select2:select', function(e) {
				if(e.target.selectedIndex !== 0){
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				}else{
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			})
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-container/scripts.js":
/*!************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-container/scripts.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftContainer */
(function($, window, document, SapphireWidgets) {
	let shiftTimelineResizeTimer;
	let $shiftContainerId = $();

	const create = shiftContainerId => {
		// $('.ShiftCard_timeLine').css('visibility', 'hidden');

		$('.ShiftExpandable_container .ActionsMenu ').css('display', 'none');

		$shiftContainerId = $(shiftContainerId);

		hasScrollBar();
		handleShiftTable();

		// setTimeout(function () {
		// 	$('.ShiftCard_timeLine').css('visibility', 'visible');
		// 	$('.ShiftExpandable_container .ActionsMenu ').css('display', 'block');
		// }, 1500);

		$('.ShiftExpandable__arrow')
			.off('mousedown')
			.on('mousedown', function() {
				setTimeout(function() {
					redrawShiftTimeline();
				}, 1500);
			});
	};

	const handleShiftTable = () => {
		$('.ShiftExpandable').each(function(index, el) {
			var $elFlag = $(this)
				.parent()
				.find('.FlagLine');
			var $elFlagTime = $(this)
				.parent()
				.find('.FlagLine_time');
			var $columnFlag = $elFlag.data('column');
			var $minutesFlag = $elFlag.data('minutes');
			var $slots = $(this)
				.closest('.ShiftContainer')
				.find('.ShiftContainer_header')
				.find('.ShiftCellContent');
			var $slotWidth = Math.round($slots.eq(0).width());
			var minutesPosition = ($minutesFlag * $slotWidth) / 60;

			// handle current time flog horizontal positioning
			var slotsPosition = [];
			$slots.each(function(index, el) {
				slotsPosition.push($(this).position().left);
			});
			$elFlag.css('left', slotsPosition[$columnFlag - 1] + minutesPosition);
			$elFlag.css('display', 'block');
			if ($columnFlag === $slots.length) {
				$elFlagTime.css({
					right: '1px',
					left: 'auto',
				});
			}

			// handle cells that might span over several slots
			$(this)
				.find('.ShiftCard')
				.each(function(index, elRow) {
					var rowHasSpannedCell = false;
					$(elRow)
						.find('.ShiftCellContent')
						.each(function(index, elCell) {
							var colspan = $(elCell).data('colspan');
							if (colspan === slotsPosition.length || rowHasSpannedCell) {
								$(elCell).css({
									display: 'inline-block',
									flex: '1 1 auto',
								});
							} else if (colspan > 1) {
								rowHasSpannedCell = true;
								$(elCell).css({
									display: 'inline-block',
									flex: 'none',
									width: +(slotsPosition[colspan] - slotsPosition[0]) + 'px',
								});
							}
						});
				});

			// handle horizontal scroll behavior
			if (el.scrollWidth > el.clientWidth) {
				$(el).width(el.scrollWidth);
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width(el.scrollWidth);
			} else {
				$(el).width('auto');
				$(this)
					.closest('.ShiftContainer')
					.find('.ShiftContainer_header')
					.width('auto');
			}
		});
	};

	const hasScrollBar = () => {
		var $ScrollableDiv = $shiftContainerId.find('.ShiftExpandable_container');
		if ($shiftContainerId.find('.ShiftExpandable_container').length > 0) {
			if ($ScrollableDiv.get(0).scrollHeight > $ScrollableDiv.height()) {
				var $lastCell = $shiftContainerId.find('.IsTimer:last-child');
				$lastCell.css('padding-right', '7px');
			}
		}
	};

	const redrawShiftTimeline = () => {
		clearTimeout(shiftTimelineResizeTimer);
		shiftTimelineResizeTimer = setTimeout(function() {
			hasScrollBar();
			handleShiftTable();
		}, 400);
	};

	const checkScroll = () => {
		var hContent = $('.Content').height();
		var hWindow = $(window).height();

		if (hContent > hWindow) redrawShiftTimeline();
	};

	SapphireWidgets.ShiftContainer = {
		create,
		checkScroll,
		redrawShiftTimeline,
	};
})(jQuery, window, document, SapphireWidgets);

$(window)
	.off('resize.GenericGallery')
	.on('resize.GenericGallery', function() {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		SapphireWidgets.ShiftContainer.redrawShiftTimeline();

		osAjaxBackend && osAjaxBackend.BindAfterAjaxRequest(SapphireWidgets.ShiftContainer.redrawShiftTimeline);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 1000);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 1500);
	});

$(window).load(function() {
	if (!!$('.ShiftContainer').length) {
		$('.ShiftCard_timeLine').css('visibility', 'hidden');
		$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');

		setTimeout(function() {
			SapphireWidgets.ShiftContainer.redrawShiftTimeline();
		}, 400);

		setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

		setTimeout(function() {
			$('.ShiftCard_timeLine').css('visibility', 'visible');
			$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
		}, 600);

		$('.navigation-control-item')
			.off('click')
			.on('click', function() {
				$('.ShiftCard_timeLine').css('visibility', 'hidden');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'none');
			});

		//Verify the scroll if tooltip opened
		$('.ShiftExpandable_container').on('scroll', function() {
			if ($('.tooltipster-base').is(':visible')) {
				$('.tooltipster-base').css('visibility', 'hidden');
			}
		});

		osAjaxBackend.BindAfterAjaxRequest(function() {
			setTimeout(function() {
				SapphireWidgets.ShiftContainer.redrawShiftTimeline();
			}, 400);

			setTimeout(SapphireWidgets.ShiftContainer.checkScroll, 500);

			setTimeout(function() {
				$('.ShiftCard_timeLine').css('visibility', 'visible');
				$('.ShiftExpandable_container .ActionsMenu').css('display', 'block');
			}, 600);

			// SapphireWidgets.ShiftContainer.redrawShiftTimeline;
		});
	}
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTable.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTable */
SapphireWidgets.ShiftTable = widgetId => {
	$(document).ready(() => {
		setTimeout(() => {
			const $shiftTable = $(`#${widgetId}`);
			const $headerCellList = $shiftTable.find('.ShiftTable__HeaderLabels .ShiftTableCell');
			const $hourLine = $shiftTable.find('.HourLine');

			const columnLine = $hourLine.data('column');
			const minutesLine = $hourLine.data('minutes');

			const cellWidth = $headerCellList.eq(0).width();
			const minutesPosition = (cellWidth / 60) * minutesLine;

			// Handle current hour line horizontal positioning
			const cellPosition = [];

			$headerCellList.each(function(index, el) {
				cellPosition.push($(this).position().left);
			});

			$hourLine.css('left', cellPosition[columnLine - 1] + minutesPosition);
			$hourLine.css('display', 'flex');
		}, 500);
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCard.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCard.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCard */
SapphireWidgets.ShiftTableCard = widgetId => {
	const $component = $(`#${widgetId}`);
	const $actions = $component.find('.MoreActions');
	const hasActions = $actions.length > 0;

	if (hasActions) {
		$actions.on('click', e => {
			e.stopPropagation();

			$('.ShiftTableCard').removeClass('ShiftTableCard--selected');
			$component.addClass('ShiftTableCard--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($component) && !$target.parents($component).is($component)) {
				$component.removeClass('ShiftTableCard--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js":
/*!***********************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableCardProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ShiftTableCardProgress = config => {
	const DEFAULT_PADDING = 8;
	const DEFAULT_CARD_HEIGHT = 56;

	const setTableCardProgress = () => {
		const cardProgresID = config.widgetId;
		const startColumn = config.startColumn;
		const endColumn = config.endColumn;

		const $cardProgress = $('#' + cardProgresID);
		const $shiftTable = $cardProgress.closest('.ShiftTable');
		const $tableCellList = $shiftTable.find('.ShiftTable__Content .ShiftTableCell');
		const $tableRowContent = $cardProgress.closest('.ShiftTableRow__Content');
		const $tableCard = $tableRowContent.find('.ShiftTableCard');
		const $cardProgressList = $tableRowContent.find('.ShiftTableCardProgress');
		const $progressBarList = $cardProgress.find('.ProgressBarWrap');
		const $actions = $cardProgress.find('.MoreActions');

		const cardsTotal = $tableCard.length;
		const timeSlotWidth = $tableCellList[1].getBoundingClientRect().width;
		const colFill = parseInt(endColumn) - parseInt(startColumn) + 1;
		const minuteValueWidth = timeSlotWidth / 60;
		const hasActions = $actions.length > 0;

		let totalLeft = 0;

		for (let i = 1; i < parseInt(startColumn); i++) {
			totalLeft += $tableCellList[i].getBoundingClientRect().width;
		}

		let roundWidth = Math.round((timeSlotWidth + Number.EPSILON) * 100) / 100;
		const paddingOffset = DEFAULT_PADDING * 2;
		const newWidth = colFill * roundWidth - paddingOffset;
		const direction = $('.Page').hasClass('AR') || $('.Page').hasClass('FA') ? 'right' : 'left';

		$cardProgress.css('width', `${newWidth}px`);
		$cardProgress.css('max-width', 'unset');
		$cardProgress.css(direction, `${(totalLeft += DEFAULT_PADDING)}px`);

		if (cardsTotal > 0) {
			let count = 0;

			$tableCard.each(function() {
				const $this = $(this);
				const isOverlaped = checkForOverlap($cardProgress[0], $this[0]);

				if (isOverlaped === true && count < $cardProgressList.length) {
					$cardProgress.css('top', $this[0].offsetTop + $cardProgress.height());
				}

				count = count++;
			});

			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					$cardProgress.css('top', $this[0].offsetTop + 130);
				} else {
					$cardProgress.css('top', $tableRowContent.height() - DEFAULT_PADDING);
				}
			});

			const offset = 4 + DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

			$tableRowContent.height($cardProgressList.last().position().top + offset);
		} else {
			$cardProgressList.each(function() {
				const $this = $(this);

				const helper = helperObj($this, $cardProgress, $cardProgressList);

				if (helper.isOverlaped) {
					const offset = DEFAULT_CARD_HEIGHT + DEFAULT_PADDING * 2;

					$cardProgress.css('top', $cardProgress[0].offsetTop + offset + 'px');
					helper.$shiftCard.height(helper.$shiftCard.height() + $this[0].offsetHeight);
				}
			});
		}

		setTimeout(() => {
			if (timeSlotWidth !== $tableCellList[1].getBoundingClientRect().width) {
				setTableCardProgress(config);
			}
		}, 500);

		if (hasActions) {
			$actions.on('click', e => {
				e.stopPropagation();

				$cardProgress.addClass('ShiftTableCardProgress--selected');

				window.addEventListener('click', onClickOutside);
			});

			const onClickOutside = e => {
				const $target = $(e.target);

				if (!e.target.className.includes($cardProgress) && !$target.parents($cardProgress).is($cardProgress)) {
					$cardProgress.removeClass('ShiftTableCardProgress--selected');

					window.removeEventListener('click', onClickOutside);
				}
			};
		}

		/*$progressBarList.each(function(index) {
			const beginslot = $(this).data('beginslot');
			const beginminute = $(this).data('beginminute');
			const endslot = $(this).data('endslot');
			const endminute = $(this).data('endminute');
			const actionsWidth = 56;

			const progressBarMinutes = (endslot - beginslot) * 60 + endminute - beginminute;
			const progressendWithPer = progressBarMinutes * minuteValueWidth;

			const $progressTotal = $(this).find('.ProgressBar__animation');

			//$(this).css('left', ((beginslot - 1) * 60 + beginminute) * minuteValueWidth + 'px');
			$progressTotal.css('width', progressendWithPer - actionsWidth + 'px');
		});*/
	};

	const checkForOverlap = (el1, el2) => {
		const bounds1 = el1.getBoundingClientRect();
		const bounds2 = el2.getBoundingClientRect();

		const firstIstLeftmost = bounds1.left <= bounds2.left;
		const leftest = firstIstLeftmost ? bounds1 : bounds2;
		const rightest = firstIstLeftmost ? bounds2 : bounds1;

		// Replace > to to >= if border overlap should count
		if (leftest.right > rightest.left) {
			const firstIsTopmost = bounds1.top <= bounds2.top;
			const topest = firstIsTopmost ? bounds1 : bounds2;
			const bottomest = firstIsTopmost ? bounds2 : bounds1;

			// Replace > to >= if border should count
			return topest.bottom > bottomest.top;
		} else return false;
	};

	const helperObj = ($this, $cardProgress, $cardProgressList) => {
		const $shiftCard = $this.closest('.ShiftTableRow__Content');
		let isOverlaped = checkForOverlap($cardProgress[0], $this[0]);
		const createdId = $cardProgress.attr('id');
		const loopedId = $this.attr('id');
		const $firstSlotCreated = $cardProgressList[0];

		isOverlaped = isOverlaped === true && createdId != loopedId && createdId != $firstSlotCreated.id;

		return { $shiftCard, createdId, loopedId, $firstSlotCreated, isOverlaped };
	};

	$(document).ready(function() {
		setTableCardProgress(config);
	});

	$(window).resize(function() {
		if (window[config.widgetId]) {
			clearTimeout(window[config.widgetId].resizedFinished);
			window[config.widgetId].resizedFinished = setTimeout(function() {
				setTableCardProgress(config);
			}, 250);
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/shift-table/shiftTableHover.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/shift-table/shiftTableHover.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ShiftTableCardHover */
SapphireWidgets.ShiftTableCardHover = widgetId => {
	$(document).ready(function() {
		const $card = $(`#${widgetId}`);
		const $cardContent = $card.find('.ShiftTableCardHover__Content');

		$cardContent.on('click', e => {
			e.stopPropagation();

			$card.addClass('ShiftTableCardHover--selected');

			window.addEventListener('click', onClickOutside);
		});

		const onClickOutside = e => {
			const $target = $(e.target);

			if (!e.target.className.includes($card) && !$target.parents($card).is($card)) {
				$card.removeClass('ShiftTableCardHover--selected');

				window.removeEventListener('click', onClickOutside);
			}
		};
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/side-menu/scripts.js":
/*!******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/side-menu/scripts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SideMenuStructure */
(function($, window, SapphireWidgets) {
	class SideMenu {
		constructor(config) {
			this.options = {
				...config,
			};

			this.onComponentInit();
		}

		setMainMenuWidth() {
			$(document).ready(() => {
				const $sideBarIframe = $('.LayoutBase-iframesidebar.notExpandable');

				if ($sideBarIframe.length) {
					const $mainMenu = $('.LayoutBase-MainMenu');
					$mainMenu.css({
						width: 'calc(100% - 262px)',
					});
				}
			});
		}

		openCloseMenu(toOpen) {
			if (toOpen) {
				this.$component.addClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 0,
				});
			} else {
				this.$component.removeClass('SideMenu--open');

				$('.LayoutBase-iframesidebar').css({
					zIndex: 70,
				});
			}
		}

		windowClick($component) {
			$(window)
				.off('click.SideMenuStructure')
				.on('click.SideMenuStructure', event => {
					const isMenuItem = event.target.offsetParent && $(event.target.offsetParent).hasClass('MenuItem');

					if (!isMenuItem) {
						$component.find('.SideMenu__MenuItems .active').removeClass('active');
						$component.find('.SideMenu__MenuItems .show').removeClass('show');

						$(window).off('click.SideMenuStructure');
					}
				});
		}

		onComponentInit() {
			this.setMainMenuWidth();

			this.$component = $(`#${this.options.widgetId}`);
			this.$trigger = this.$component.find('.SideMenu__Trigger');
			this.$shield = this.$component.find('.SideMenu__Shield');
			this.$closeButton = this.$component.find('.SideMenu__MenuClose');
			this.$tabItem = this.$component.find('.SideMenu__TabItems .MenuItem');
			this.$menuItem = this.$component.find('.SideMenu__MenuItems .MenuItem__ItemTitle');
			this.$subItem = this.$component.find('.SideMenu__MenuItems .MenuItem_subItems');
			this.$department = this.$component.find('.SideMenu__Tabs .DepartmentName');

			//this.$trigger.hide();
			this.$department.hide();

			this.$iframeContainer = this.$component.find('.iframeContainer');
			this.$iframeContainer.append('<div class="lds-ring OI"><div></div><div></div><div></div><div></div></div>');
			this.$iframeContainer.find('iframe').load(() => {
				this.$iframeContainer.find('.lds-ring').fadeOut();

				if (!this.$component.hasClass('SideMenu--tabsTheme')) {
					//this.$trigger.show();
					this.$department.show();
				}
			});

			this.$trigger.on('click', () => this.openCloseMenu(true));
			this.$shield.on('click', () => this.openCloseMenu(false));
			this.$closeButton.on('click', () => this.openCloseMenu(false));

			this.$tabItem.on('click', event => {
				const $target = $(event.currentTarget);
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();
			});

			this.$menuItem.on('click', event => {
				const isIcon = event.target.className === 'icon icon-changedown';
				if (event.target !== event.currentTarget && !isIcon) return;

				const $target = $(event.currentTarget).parent();
				const $subItems = $target.find('.MenuItem_subItems');
				const $link = $target.find('.MenuItem_label a');

				if ($link.length) $link.get(0).click();

				if ($target.hasClass('active')) {
					$target.removeClass('active');
					$subItems.removeClass('show');
				} else {
					this.$component
						.find('.SideMenu__MenuItems .active')
						.not($target)
						.removeClass('active');

					this.$component
						.find('.SideMenu__MenuItems .show')
						.not($target)
						.removeClass('show');

					$target.toggleClass('active');
					$subItems.toggleClass('show');

					if (this.$component.hasClass('SideMenu--tabsTheme')) {
						this.windowClick(this.$component);
					}
				}
			});

			this.$subItem.on('click', event => event.stopPropagation());

			this.$component
				.find('.SideMenu__TabItems > div:empty')
				.parent()
				.hide();
		}
	}

	const resizeTabs = ($component, $menuTabs, isRecursive) => {
		const $menuTrigger = $component.find('.SideMenu__Trigger');
		const headerWidth = $component.find('.SideMenu__Header').outerWidth();
		const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
		const tabsWidth = $menuItems.length ? $menuItems.outerWidth() : $menuTabs.outerWidth();

		const fixedValue = $(window.parent).width() < 1024 ? 180 : 196;
		let hasItemToRemove = true;

		if (tabsWidth > 0 && tabsWidth + fixedValue > headerWidth && hasItemToRemove) {
			const $moreOptions = $component.find('.SideMenu__Content');
			const $lastItem = $menuTabs
				.find('.SideMenu__MenuItems .MenuItem')
				.last()
				.detach();

			if (!$moreOptions.find('.SideMenu__MenuItems').length) {
				$('<div class="SideMenu__MenuItems"></div>').appendTo($moreOptions);
			}

			const $menuItems = $moreOptions.find('.SideMenu__MenuItems');
			$lastItem.prependTo($menuItems);

			$menuTrigger.css('visibility', 'visible');

			hasItemToRemove = !!$lastItem.length;

			resizeTabs($component, $menuTabs, !!$lastItem.length);
		} else if (!isRecursive) {
			const $menuItems = $menuTabs.find('.SideMenu__MenuItems');
			let $firstItem = $component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').first();

			const newLinkWidth = 140 * 1.16 + 16; // Font-size + padding between items (gap)
			const newItemsWidth = newLinkWidth + $menuItems.outerWidth();

			if (newItemsWidth + fixedValue < headerWidth) {
				$firstItem = $firstItem.detach();
				$firstItem.appendTo($menuTabs.find('.SideMenu__MenuItems'));

				if ($component.find('.SideMenu__Content .SideMenu__MenuItems .MenuItem').length) {
					resizeTabs($component, $menuTabs);
				} else {
					$menuTrigger.css('visibility', 'hidden');
				}
			}
		}
	};

	const setTabsTheme = () => {
		$(top.document).ready(function() {
			$('.SideMenu', window.parent.document).addClass('SideMenu--tabsTheme');

			const $component = $('.SideMenu', window.parent.document);
			const $menuTabs = $component.find('.SideMenu__Tabs');

			$menuTabs.find('> div:empty').hide();

			const $items = $component.find('.SideMenu__MenuItems').detach();
			$items.appendTo($menuTabs);

			$(document).ready(function() {
				resizeTabs($component, $menuTabs, true);
			});

			$(window.parent).resize(function() {
				clearTimeout(window.resizedFinished);
				window.resizedFinished = setTimeout(function() {
					resizeTabs($component, $menuTabs);
				}, 250);
			});
		});
	};

	const create = config => (window[config.widgetId] = new SideMenu(config));

	SapphireWidgets.SideMenu = { create, setTabsTheme };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/sidebar/sidebar-structure.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/sidebar/sidebar-structure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component ISidebar */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new Sidebar(config);
		SapphireWidgets.Sidebar.widgetId = config.widgetId;
	};

	var close = function() {
		window[SapphireWidgets.Sidebar.widgetId].close();
	};

	var Sidebar = function(config) {
		var _this = this;
		this.isExpandable = config.isExpandable;
		this.$widget = $('#' + config.widgetId);
		this.$sidebar = this.$widget.find('.ISidebar');
		this.$sidebarMenu = this.$widget.find('.ISidebar-menu');
		this.$sidebarMenuItem = this.$widget.find('.SidebarMenuItem');
		this.$sidebarShield = this.$widget.find('.ISidebar-shield');
		this.$sidebarContent = this.$widget.find('.ISidebar-content');
		this.$sidebarContent.find('> div').each(function() {
			if ($(this).hasClass('PH') && $(this).text() === '') {
				$(this).remove();
			}
		});
		this.attachEvents();
		if (!this.isExpandable) {
			this.openMenuItem(0);
		}
		$(function() {
			if (!config.isExpandable) {
				$(`.${config.selectedTab}`).click();
			}

			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();

			if (!this.isExpandable) {
				$('input[type="text"]:visible')
					.eq(0)
					.focus();
			}
		});

		$(window).unload(function() {
			window.parent.$('.LayoutBase-iframesidebar .lds-ring').fadeOut();
		});
	};

	Sidebar.prototype.attachEvents = function() {
		var _this = this;
		this.$sidebarMenu.on('click', function(evt) {
			evt.stopPropagation();
			if (!_this.$sidebar.hasClass('open')) {
				_this.openMenuItem(0);
			}
		});
		this.$sidebarMenuItem.on('click', function() {
			var selectedPosition = $(this).index();
			_this.openMenuItem(selectedPosition);
		});
		this.$sidebarShield.on('click', function() {
			_this.close();
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:first-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab1')
				.removeClass('Tab2');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
		this.$sidebar.on('click', '.SearchSideBarFields .ButtonGroup_button:last-child', function() {
			_this.$sidebar
				.find('.FieldsSlider')
				.addClass('Tab2')
				.removeClass('Tab1');
			_this.setFieldFocus(_this.$sidebarContent.find('.TextInput:visible').eq(0));
		});
	};

	Sidebar.prototype.openMenuItem = function(selectedPosition) {
		var _this = this;
		this.$sidebar
			.find('.SidebarMenuItem')
			.removeClass('active')
			.eq(selectedPosition)
			.addClass('active');
		this.$sidebar
			.find('.ISidebar-content > .ISidebar-content-panel')
			.hide()
			.eq(selectedPosition)
			.show();
		this.$sidebar.addClass('open');
		if (window.parent.length && this.isExpandable) {
			window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);
		}
		if (this.$sidebarContent.find('.TextInput:visible').length > 0) {
			this.setFieldFocus(this.$sidebarContent.find('.TextInput:visible').eq(0));
		}
		if (window.parent.$('.select2-container--open').length) {
			window.parent.$('.select2-hidden-accessible').select2('close');
		}
	};

	Sidebar.prototype.setFieldFocus = function($input) {
		window.setTimeout(function() {
			$input.click().select();
		}, 250);
	};

	Sidebar.prototype.close = function() {
		var _this = this;
		if (window.parent.length) {
			window.parent.SapphireWidgets.LayoutBase.closeSidebarIframe(0);
		}
		if (this.isExpandable) {
			this.$sidebar.removeClass('open');
			this.$sidebar.find('.SidebarMenuItem').removeClass('active');
			this.$sidebar.find('.ISidebar-content > .ISidebar-content-panel').hide();
		}
	};

	SapphireWidgets.Sidebar = {
		create: create,
		close: close,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/small-box-selectable/scripts.js":
/*!*****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/small-box-selectable/scripts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.SmallBoxSelectable = function(config) {
	const $component = $(`#${config.widgetId}`);

	if (config.selectOnClick) {
		$component.click(() => {
			const $list = $('.SmallBoxList .SmallBoxSelectable').not($component);

			$list.removeClass('SmallBoxSelectable--selected');
			$component.toggleClass('SmallBoxSelectable--selected');
		});
	}
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-horizontal/scripts.js":
/*!***************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-horizontal/scripts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerHorizontal */
SapphireWidgets.SpinnerHorizontal = {
	create: config => {
		const $input = $(`#${config.widgetId} input`);
		const $plus = $(`#${config.widgetId} a.Plus`);
		const $minus = $(`#${config.widgetId} a.Minus`);

		let val = $input.val();

		if (val <= +config.minValue) {
			$minus.attr('disabled', 'disabled');
		} else if (val >= +config.maxValue) {
			$plus.attr('disabled', 'disabled');
		}

		$input.on('change', function() {
			val = Math.abs(parseInt(this.value, 10) || +config.minValue);
			this.value = val > +config.maxValue ? +config.maxValue : val < +config.minValue ? +config.minValue : val;

			if (val <= +config.minValue) $minus.attr('disabled', 'disabled');
			else $minus.removeAttr('disabled');

			if (val >= +config.maxValue) $plus.attr('disabled', 'disabled');
			else $plus.removeAttr('disabled');
		});
	},
	increment: function(elementId, minValue, maxValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) < maxValue) {
				_element.val(parseFloat(_element.val()) + 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Minus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) >= maxValue) {
				$(elementId)
					.find('a.Plus')
					.attr('disabled', 'disabled');
			}
		}
	},
	decrement: function(elementId, minValue, triggerOnChange) {
		var _element = $(elementId)
			.find('input[type="number"]')
			.first();
		if (_element.val() == undefined || _element.val() == '' || isNaN(parseFloat(_element.val()))) {
			_element.val(minValue);
			if (triggerOnChange) {
				_element.trigger('change');
			}
		} else {
			if (parseFloat(_element.val()) > minValue) {
				_element.val(parseFloat(_element.val()) - 1);
				if (triggerOnChange) {
					_element.trigger('change');
				}
				$(elementId)
					.find('a.Plus')
					.removeAttr('disabled');
			}
			if (parseFloat(_element.val()) <= minValue) {
				$(elementId)
					.find('a.Minus')
					.attr('disabled', 'disabled');
			}
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/*!*************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/spinner-vertical/scripts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					$errorMessage.css('display', arrayToSpin.indexOf(inputValueInt) === -1 ? 'block' : 'none');
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/split-button/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/split-button/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SplitButton */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		window[config.widgetId] = new SplitButton(config);
	};

	var SplitButton = function(config) {
		var _this = this;
		this.config = config;
		this.$widget = $('#' + this.config.widgetId);
		this.$button = this.$widget.find('.SplitButton-button');
		this.$buttonLink = this.$button.find('> a');
		this.$trigger = this.$widget.find('.SplitButton-trigger');
		this.$actions = this.$widget.find('.SplitButton-actions');
		if (!!this.$actions.text()) {
			this.$widget.find('> .SplitButton').addClass('hasTrigger');
			this.buildActionsTrigger();
		}
	};

	SplitButton.prototype.buildActionsTrigger = function() {
		var _this = this;
		var classList = this.$buttonLink[0].classList.value;
		this.$trigger.addClass(classList);
		$(function() {
			// inside a document ready due to sapphire popup binded events
			if (!_this.$trigger.hasClass('tooltipstered')) {
				_this.$trigger.tooltipster({
					arrow: true,
					content: $('<section/>').append(_this.$actions.clone(true)),
					trigger: _this.config.triggerEvent,
					position: _this.config.position,
					maxWidth: _this.config.maxWidth,
					theme: 'tooltipster-splitbutton Padding-' + _this.config.padding,
				});
				_this.$actions.remove();
			}
		});
	};

	SapphireWidgets.SplitButton = {
		create: create,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-component-block/scripts.js":
/*!****************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-component-block/scripts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var milisecondpassed = 0;
var stoptimer = true;
var myTimout  = null;

function onKeydownFunction() {
    milisecondpassed = 0;
  
    stoptimer=true;
    clearInterval(myTimout);
    myTimout = null;
  };
  
  function onKeyUpFunction(elementToClick) {
  stoptimer = false;
  
  if(milisecondpassed == 0 && myTimout==null){
      myTimout = setInterval(
        function() {
          milisecondpassed+=100;
         
          if (milisecondpassed >= 400 && stoptimer==false) {
            milisecondpassed = 0;
            stoptimer=true;
            clearInterval(myTimout);
            myTimout = null;
            elementToClick.click();
          
          }
          else{
            if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
            }
          }
        }, 100);
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }
    }
    else{
        if(stoptimer==true){
            clearInterval(myTimout);
            myTimout = null;
        }   
    }
};

if(typeof(ssdComponent) === 'undefined') {

    ssdComponent = {
        length: 0,
        numberOfActive: 0,
        isRTL: false,
        id: '',
        toDestroy: false,
        onBlurDestroy: function() {
            if (ssdComponent.id != '') {
                var _ssdComponent = $('#' + ssdComponent.id);
                var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                if (ssdComponent.toDestroy) {
                    _wrapper.find('.SSDListRefreshHandler').find('a.to-destroy').click();
                    _wrapper.remove();
                }
                else {
                     var _wrapper = $('[data-ssd-placeholder=' + ssdComponent.id + ']');
                    _wrapper.find('input').val('');
                    ssdComponent.blur();
                }
            }
        },
        focus: function(ssdComponentWidget) {
            var _ssdComponentWidget = $(ssdComponentWidget).children('div.SSD-Wrapper:not(.Selected)');
            
            if(!_ssdComponentWidget.length)
                return; //If this SSD-Wrapper is already Selected, return.
            
            if(ssdComponent.numberOfActive)
                ssdComponent.blur(); //Blurs the other focused SSD's.
            
            ssdComponent.numberOfActive++;
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    },
                    'top': function() {
                        return this.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return this.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(this).outerWidth() - this.getBoundingClientRect().left;
                        return 'auto';
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            else{
                _ssdComponentWidget.children('.SSD-Component')
                .css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).outerWidth();
                    }
                })
                .siblings('.SSD-List').attr('current-focus', 0);
            }
            
            if(!_ssdComponentWidget.parent().hasClass('SSDPopup')){
                _ssdComponentWidget.closest('form').append(_ssdComponentWidget);
            }
            _ssdComponentWidget.addClass('Positioned');
            
            setTimeout(
                function() {
                    _ssdComponentWidget.addClass('Selected');
                }
                , 1
            );
            
        },
        
        
        
        blur: function() {
            if(!ssdComponent.numberOfActive)
                return;
            
            var _wrapper = $('div.SSD-Wrapper.Positioned.Selected');
            
            _wrapper.each(function() {
                var parent = $('#' + $(this).attr('data-ssd-placeholder'));
                parent.append($(this));
            });
            
            _wrapper.removeClass('Positioned')
            .children('.SSD-Component')
                .css({
                    'width': '',
                    'top': '',
                    'left': '',
                    'right': ''
                })
                .removeClass('Searching Fixed KeyboardNav')
            .children('.SSD-Bar').css({
                'width': ''
            });
                
            setTimeout(
                function() {
                    _wrapper.removeClass('Selected')
                    .find('.SSD-Bar').each(function() {
                        ssdComponent.tabsClear(this);
                    });
                }
                , 1
            );
                
            ssdComponent.numberOfActive--;
            $(".SSD_ListRecords span, .SSD_ListLine.ShowMore, .SSD_DeleteOnBlur").remove();
        },
        resize: function() {
            if(!ssdComponent.numberOfActive)
                return; //If there's no SSD active, there's no need to resize it.
            
            var _ssdWrapper = $('div.SSD-Wrapper.Selected').first();
            var _ssdComponentWidget = $('#' + _ssdWrapper.attr('data-ssd-placeholder'))[0];
            var _ssdComponent = _ssdWrapper.children('.SSD-Component');
            
            if (typeof _ssdComponentWidget.getBoundingClientRect !== "undefined") {
                _ssdComponent.css({
                    'width': function() {
                        return $(_ssdComponentWidget).width();
                    }/*,
                    'top': function() {
                        return _ssdComponentWidget.getBoundingClientRect().top + $(document).scrollTop();
                    },
                    'left': function() {
                        if(ssdComponent.isRTL)
                            return 'auto';
                        return _ssdComponentWidget.getBoundingClientRect().left;
                    },
                    'right': function() {
                        if(ssdComponent.isRTL)
                            return $(window).width() - $(_ssdComponentWidget).outerWidth() - _ssdComponentWidget.getBoundingClientRect().left;
                        return 'auto';
                    }*/
                }).children('.SSD-Bar').css({
                    'width': function() {
                        return $(this).closest('.SSD-Component').innerWidth();
                    }
                });
            }
        },
        tabSelect: function(ssdComponentWidget, ssdBar, selectedTab, isInputEvent) {
            var _selectedTab = $(selectedTab);

            if(ssdComponent.numberOfActive == 0) {
                ssdComponent.focus(ssdComponentWidget);
            }
            
            if(!_selectedTab.is('.Selected')) {
                ssdComponent.tabsClear(ssdBar);
                _selectedTab.addClass('Selected');
            }
            
            ssdComponent.focusSelectedTab(ssdBar,isInputEvent);
        },
        focusSelectedTab: function(ssdBar,isInputEvent) {
            // Selected tab is the Search input?
            if(ssdBar.children('.SearchInput-Container.Selected').length) {
                var elementToClick = ssdBar.siblings('.SSDListRefreshHandler').find('a:not(.to-destroy)');
                
                if(isInputEvent){
                    onKeyUpFunction(elementToClick);
                }
                else{
                    elementToClick.click();
                }
                ssdBar.find('.InputPlaceholder input[type="text"]:not(:focus)').first().select().focus();
                return;
            }
            
            // Selected tab is the Short list?
            if(ssdBar.children('.ShortListSelector-Container.Selected').length) {
                ssdBar.find('.ShortListSelector-Container > a').focus();
                return;
            }
        },
        /*
         * Method being called by user action js_ssdComponent_focusCurrentRow
         */
        focusCurrentRow: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');
            var _currentFocus = _ssdList.attr('current-focus');

            _ssdComponent.addClass('KeyboardNav');
            _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')').addClass('focus');
        },
        tabsClear: function(ssdBar) {
            $(ssdBar).children().removeClass('Selected');
        },
        searchIcon: function(event) {
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, $(event.data.ssdBar).children('.SearchInput-Container'),false);
        },
        /*
         * @name inputEvent
         * @description 
         */
        inputEvent: function(event) {
            var _inputContainer = $(event.data.input).closest('.SearchInput-Container');
            
            ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, _inputContainer,true);
            
            if($(event.data.input).val() == '') {
                _inputContainer.closest('.SSD-Component').removeClass('Searching');
            }
            else {
                _inputContainer.closest('.SSD-Component').addClass('Searching');
            }
        },
        keydownEvent: function(event) {
           onKeydownFunction();          
          
        },
        keyboardHandler: function(event) {
            if(event.key == "Shift" || event.key == "Control")
                return;

            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(event.key == "Enter" && _ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            if(event.key == "Tab") {
                _ssdComponent.addClass('KeyboardNav');
                return;
            }
            
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                var _currentFocus = _ssdList.attr('current-focus');
                var _selectedElement = $(null);
                
                if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length) {
                    _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore.focus');
                }
                else if(_currentFocus > 0) {
                    _selectedElement = _ssdList.find('span.SSD_ListRecords > span:nth-child(' + _currentFocus + ')');
                }
                
                _ssdComponent.addClass('KeyboardNav')
                
                if(event.key == "ArrowUp") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').prev();
                        }

                        _currentFocus--;
                    }
                    else {
                        _currentFocus = _ssdList.find('span.SSD_ListRecords > span').length;

                        if(_ssdList.find('.SSD_ListLine.ShowMore').length) {
                            _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            _currentFocus++;
                        }
                        else {
                            _selectedElement = _ssdList.find('span.SSD_ListRecords > span:last-child');
                        }
                    }
                }
                
                if(event.key == "ArrowDown") {
                    if(_selectedElement.length) {
                        
                        if(_selectedElement.is('.SSD_ListLine.ShowMore.focus')) {
                            _selectedElement.removeClass('focus');
                            _selectedElement = $(null);
                        }
                        else {
                            _selectedElement = _selectedElement.removeClass('focus').next();
                            
                            if(!_selectedElement.length && _ssdList.find('.SSD_ListLine.ShowMore').length) {
                                _selectedElement = _ssdList.find('.SSD_ListLine.ShowMore');
                            }
                        }
                        
                        _currentFocus++;
                    }
                    else {
                        _selectedElement = _ssdList.find('span.SSD_ListRecords > span:first-child');
                        _currentFocus = 1;
                    }
                }
                
                _selectedElement.addClass('focus');
                
                if(!_selectedElement.length) {
                    ssdComponent.focusSelectedTab(_ssdComponent.find('.SSD-Bar'),false);
                    _currentFocus = 0;
                }
                else if (!_selectedElement.find('.SSD_ListLine.Disabled').length){
                    _selectedElement.find('.ExpandControl > a').focus();
                }
                else {
                    _ssdList.find('a.OtherControlLink').focus();
                }
                
                _ssdList.attr('current-focus', _currentFocus);

                return;
            }
            
            ssdComponent.clearKeyboardNavStatus(_ssdComponent);
        },
        clearKeyboardNavStatus: function(ssdComponent) {
            var _ssdComponent = $(ssdComponent);
            var _ssdList = _ssdComponent.find('.SSD-List');

            if(_ssdList.find('.SSD_ListLine.ShowMore.focus').length)
                return;

            _ssdComponent.removeClass('KeyboardNav');
            _ssdList.attr('current-focus', 0)
                .find('span.SSD_ListRecords > span.focus').removeClass('focus')
                .find('.ExpandControl > a').blur();
        },
        scrollHandler: function() {
            var _ssdComponent = $('div.SSD-Wrapper.Selected .SSD-Component').first();
            if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 1024){
                if(_ssdComponent[0].getBoundingClientRect().top > $(".toolbar-wrapper.Fixed").outerHeight()) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top', $(".toolbar-wrapper.Fixed").outerHeight() + 'px'); 
                    
                    
                }
            }else{
                /*Not Mobile apply fixed behaviour*/
                if(_ssdComponent[0].getBoundingClientRect().top > ($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight()+ $('.CTTASLevelAssessmentMainContainer').outerHeight(true) )) {
                    _ssdComponent.removeClass('Fixed');
                    return;
                }else{
                    $('.SSD-Wrapper.Selected > .SSD-Component.Fixed > .SSD-Bar').css('top',($('.TopPatientHeader').outerHeight(true) + $('.Header').outerHeight(true) + $(".toolbar-wrapper").outerHeight() + $('.CTTASLevelAssessmentMainContainer').outerHeight(true)) + 'px'); 
                }
            }


            _ssdComponent.addClass('Fixed');
        },
        destroy: function(_inputId) { /* Used to destroy a specific ssd component by receive the input identifier as parameter and determine the wrapper to remove. */
            $('[data-ssd-placeholder=' + ssdComponent.id + ']').remove();
        },
        init: function(ssdComponentWidget,_toDestroy) {
            ssdComponent.length++;
            ssdComponent.numberOfActive = 0;
            ssdComponent.isRTL = $('html').is('.rtl');
            ssdComponent.toDestroy = _toDestroy;
            if (typeof ssdComponentWidget != 'undefined') {
                ssdComponent.id = $(ssdComponentWidget).attr('id');
            }
            var _ssdComponentWidget = $(ssdComponentWidget);
            var _ssdComponent = _ssdComponentWidget.find('.SSD-Component');
            var _ssdBar = _ssdComponent.children('.SSD-Bar').first();
            var _searchIcon = _ssdBar.find('.SearchIcon').first();
            var _input = _ssdBar.find('input[type="text"]').first();
            var _clearControl = _ssdBar.find('.ClearControl').first();
            
            _searchIcon.off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, ssdComponent.searchIcon);
            
            _ssdBar.children('div').off('click').on('click', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar
            }, function(event) {
                ssdComponent.tabSelect(event.data.ssdComponentWidget, event.data.ssdBar, this,false);
            });
            
            _clearControl.off('click').on('click', ssdComponent.onBlurDestroy);
            
            _input.off('keyup').on('keyup', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.inputEvent);
            
            _input.off('keydown').on('keydown', {
                ssdComponentWidget: _ssdComponentWidget,
                ssdBar: _ssdBar,
                input: _input
            }, ssdComponent.keydownEvent);
            
            $(_ssdComponent).off('click').on('click', {
                ssdComponent: _ssdComponent
            }, function(event) {
                ssdComponent.clearKeyboardNavStatus(event.data.ssdComponent);
            });
        }
    }
}

$(document).ready(function() {
    $(window).on('resize', function(event) {
        ssdComponent.resize();
    });
    
    $(document).on('click', function(event) {
        if(!$(event.target).is(':visible')) { /* Clicks on hidden elements are dismissed. */
            return;
        }
        
        var e = $(event.target).closest('.SSD-Component');
        
        if(!e.length) { // User clicked outside the SSD-Component?
            ssdComponent.onBlurDestroy();
        }
    });
    
    $(document).on('keydown', function(event) {
        if(ssdComponent.numberOfActive > 0) {
            if(event.keyCode == "27") { // User hit Escape
                ssdComponent.onBlurDestroy();
            }
            if(event.key == "ArrowUp" || event.key == "ArrowDown") {
                event.preventDefault();
            }
        }
    });
    
    $(document).on('keyup', function(event) {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for Keyboard handler
            ssdComponent.keyboardHandler(event);
        }
    });
    
    $(document).on('scroll', function() {
        if(ssdComponent.numberOfActive > 0) { // If there's an SSD component active, go for scroll handler
            ssdComponent.scrollHandler();
        }
    });
});


/***/ }),

/***/ "./src/components/05-components/v3-pat/ssd-list-line/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/ssd-list-line/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component SSDListLine */
SapphireWidgets.SSDListLine = {
	toggle: (lineId, lineHandler = '') => {
		var _line = $(lineId).is('.SSD_ListLine')
			? $(lineId)
			: $(lineId)
					.children('.SSD_ListLine')
					.first();

		if (!_line.length) return;

		var _expandControl = $('.expand-control-custom-width');

		if (_expandControl.length != 0) {
			_expandControl.removeClass('expand-control-custom-width');
			_expandControl.css('width', '');
		}

		if (!_line.is('.Active')) {
			var _lineHeader = _line
				.closest('div.SelectableList, .SelectableList-ListRecords')
				.find('div.SelectableList-Line.Active')
				.not(_line);

			_lineHeader.find('a[hide-action]').click();
			_lineHeader
				.removeClass('Active')
				.children('span')
				.hide(200);
			_line.addClass('Active');

			if ($(lineHandler).length) {
				$(lineHandler).click();
			}
		} else {
			_line.removeClass('Active');
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/table-form/scripts.js":
/*!*******************************************************************!*\
  !*** ./src/components/05-components/v3-pat/table-form/scripts.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TableForm */
(function($, window, SapphireWidgets) {
	const addEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.append('<div class="TableFormColumn__EmptyItem"></div>');
	};

	const removeEmptyLine = config => {
		const $list = $('.TableFormColumn:not(.TableFormColumn--editMode) .TableFormColumn__Fields > .ListRecords');

		$list.each(function(index) {
			$(this)
				.find('> .TableFormColumn__EmptyItem:first')
				.remove();
		});
	};

	const onComponentReload = widgetId => {
		const $table = $(`#${widgetId}`);
		const $editing = $table.find('.TableFormColumn--editMode');

		if ($editing.length) {
			$table.addClass('TableForm--scrollDisabled');
		} else {
			$table.removeClass('TableForm--scrollDisabled');
		}
	};

	SapphireWidgets.TableForm = { addEmptyLine, onComponentReload, removeEmptyLine };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabs-extended/scripts.js":
/*!**********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabs-extended/scripts.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabsExtended */
SapphireWidgets.TabsExtended = function(config) {
	$(document).ready(function() {
		const $component = $(`#${config.widgetId} .Tabs_Extended`);
		const $tabHeader = $component.find('.Tabs_header');
		const $tabContainer = $component.find('.TabsContainer');
		const $tabs = $tabHeader.find('> .Tabs__tab');
		const $tabsEnabled = $tabHeader.find('> .Tabs__tab:not(.disabled)');
		const $tabsInput = $component.find('.Tabs_Input input');

		$tabs.each(function() {
			if ($(this).text() === '') {
				$(this).remove();
			}
		});

		$tabsEnabled.on('click', function() {
			$tabContainer.attr('activetab', $(this).attr('value'));

			$tabsInput.val($(this).attr('value'));
			$tabsInput.change();
		});

		$tabsEnabled.off('mousedown').on('mousedown', function(evt) {
			var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
			$tabsExtended.removeClass('isClosed');
		});

		$('.Tabs_Extended.HideActiveOnClick .Tabs_header')
			.off('mousedown')
			.on('mousedown', '.Tabs__tab.active', function(evt) {
				var $tabsExtended = $(evt.target).closest('.Tabs_Extended');
				var $tabsBody = $tabsExtended.find('.Tabs_body');

				if ($tabsBody.hasClass('Tabs_body--closed')) {
					$tabsBody.removeClass('Tabs_body--closed');
					$tabsExtended.removeClass('isClosed');
				} else {
					$tabsBody.addClass('Tabs_body--closed');
					$tabsExtended.addClass('isClosed');
				}
			});

		$tabHeader.find('.Tabs_Extended--disabled').each(function(index, el) {
			$(el)
				.parent()
				.css('cursor', 'default')
				.off('click');
		});

		$component.each(function(index, el) {
			if ($(el).hasClass('Tabs_Extended--closedonstart')) {
				$(el)
					.find('.Tabs_body')
					.addClass('Tabs_body--closed');
				$(el).addClass('isClosed');
				$(el).removeClass('Tabs_Extended--closedonstart');
			}

			$(el)
				.off('click')
				.on('click', '.Tabs_Extended--close', function(evt) {
					$(evt.target)
						.closest('.Tabs_body')
						.addClass('Tabs_body--closed');
				});
		});

		if (!config.tab1Enabled) $tabHeader.find('> .Tabs__tab[value=1]').addClass('disabled');
		if (!config.tab2Enabled) $tabHeader.find('> .Tabs__tab[value=2]').addClass('disabled');
		if (!config.tab3Enabled) $tabHeader.find('> .Tabs__tab[value=3]').addClass('disabled');
		if (!config.tab4Enabled) $tabHeader.find('> .Tabs__tab[value=4]').addClass('disabled');
		if (!config.tab5Enabled) $tabHeader.find('> .Tabs__tab[value=5]').addClass('disabled');
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-list/scripts.js":
/*!*********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-list/scripts.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularList */
(function($, window, document, SapphireWidgets) {
	var allTabularLists = [];

	var create = function(config) {
		window[config.tabularListId] = new TabularList(config);
		allTabularLists.push(window[config.tabularListId]);

		$(window).load(function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleTabularListColumns();
				element.handleResponsiveClasses(200);
			});
		});

		$(window).on('resize.tabularlist', function() {
			var allTabularLists = SapphireWidgets.TabularList.all();
			allTabularLists.forEach(function(element, i) {
				element.handleResponsiveClasses(200);
			});
		});
	};

	var TabularList = function(config) {
		var _this = this;
		this.config = config;
		this.tabularListResizeTimer = 0;
		this.$widget = $('#' + config.tabularListId);
		this.$widgetList = this.$widget.find('> .TabularList');
		this.$widget.find('.TabularListRow').each(function(i, row) {
			_this.columnsCount = 0;
			$(row)
				.find('.TabularListRow-values .TabularListRow-item')
				.each(function(i, el) {
					$(el).addClass('TabularListColumn' + (i + 1));
					_this.columnsCount++;
				});
		});
		if (!!config.breakOn) {
			this.breakOnOrder = parseInt(config.breakOn);
		} else {
			this.breakOnOrder = 0;
		}
		this.handleTabularListColumns();
	};

	TabularList.prototype.handleTabularListColumns = function() {
		if (this.config.columnsWidth === 'Auto') {
			if (this.$widgetList.width() > 1) {
				for (i = 1; i <= this.columnsCount; i++) {
					var maxWidthContent = Math.max.apply(
						null,
						this.$widget
							.find('.TabularListColumn' + i)
							.map(function() {
								return $(this).outerWidth(true);
							})
							.get()
					);
					this.$widget.find('.TabularListColumn' + i).width(maxWidthContent);
					this.$widget.find('.TabularListColumn' + i).css('opacity', 1);
				}
			}
		}
		if (!!this.config.propertyMinWidth) {
			this.$widget.find('.TabularListRow-property').css('min-width', convertInCSSValue(this.config.propertyMinWidth));
		}
		if (!!this.config.propertyMaxWidth) {
			this.$widget.find('.TabularListRow-property').css('max-width', convertInCSSValue(this.config.propertyMaxWidth));
		}
		if (!!this.config.actionsMinWidth) {
			this.$widget.find('.TabularListRow-actions').css('min-width', convertInCSSValue(this.config.actionsMinWidth));
		}
		if (!!this.config.actionsMaxWidth) {
			this.$widget.find('.TabularListRow-actions').css('max-width', convertInCSSValue(this.config.actionsMaxWidth));
		}
	};

	TabularList.prototype.handleResponsiveClasses = function(timeout) {
		var _this = this;
		window.clearTimeout(this.tabularListResizeTimer);
		this.tabularListResizeTimer = window.setTimeout(function() {
			_this.$widgetList.removeClass(function(index, className) {
				return (className.match(/(^|\s)screen-\S+/g) || []).join(' ');
			});

			_this.$widgetList.removeClass('isBreaking');

			var widgetWidth = _this.$widgetList.outerWidth(true);
			if (widgetWidth === 0) {
				widgetWidth = _this.$widgetList
					.parents(':visible')
					.eq(0)
					.outerWidth(true);
			}

			if (widgetWidth >= 1900) {
				_this.$widgetList.addClass('screen-DesktopHD');
				if (_this.breakOnOrder >= 6) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1600) {
				_this.$widgetList.addClass('screen-DesktopBig');
				if (_this.breakOnOrder >= 5) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1366) {
				_this.$widgetList.addClass('screen-Desktop');
				if (_this.breakOnOrder >= 4) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 1024) {
				_this.$widgetList.addClass('screen-DesktopSmall');
				if (_this.breakOnOrder >= 3) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else if (widgetWidth >= 420) {
				_this.$widgetList.addClass('screen-Tablet');
				if (_this.breakOnOrder >= 2) {
					_this.$widgetList.addClass('isBreaking');
				}
			} else {
				_this.$widgetList.addClass('screen-Phone');
				if (_this.breakOnOrder >= 1) {
					_this.$widgetList.addClass('isBreaking');
				}
			}
		}, timeout);
	};

	SapphireWidgets.TabularList = {
		create: create,
		all: function() {
			return allTabularLists;
		},
	};
})(jQuery, window, document, SapphireWidgets);

function convertInCSSValue(value_in) {
	var returned;
	if (value_in.includes('px') || value_in.includes('%')) {
		returned = value_in;
	} else {
		returned = value_in + 'px';
	}
	return returned;
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/tabular-scroll/scripts.js":
/*!***********************************************************************!*\
  !*** ./src/components/05-components/v3-pat/tabular-scroll/scripts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TabularScroll */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			$('.TabularScroll').each(function(i, el) {
				setupTabularScroll($(el));
			});
		});

		$(window).load(function() {
			osAjaxBackend &&
				osAjaxBackend.BindAfterAjaxRequest(function() {
					$('.TabularScroll').each(function(i, el) {
						setupTabularScroll($(el));
						resizeRows($(el));
					});
				});
		});

		$(window).on('resize.tabularscroll', function() {
			$('.TabularScroll').each(function(i, el) {
				var $centerTable = $(el).find('.TabularScroll-center-table');
				var tableWidth = $centerTable.find('table').width();
				$(el)
					.find('.TabularScroll-center .TopScrollDragger')
					.width(tableWidth);
				if ($centerTable[0].scrollWidth > $centerTable.width()) {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'visible');
				} else {
					$(el)
						.find('.TopScrollWrapper')
						.css('visibility', 'hidden');
				}
			});
		});
	};

	const setupTabularScroll = function($tabularScroll) {
		var $topScrollWrapper = $tabularScroll.find('.TopScrollWrapper');
		var $centerTable = $tabularScroll.find('.TabularScroll-center-table');
		$tabularScroll.find('.TopScrollWrapper').scroll(function() {
			$centerTable.scrollLeft($topScrollWrapper.scrollLeft());
		});
		$centerTable.scroll(function() {
			$topScrollWrapper.scrollLeft($centerTable.scrollLeft());
		});
		// similar to Resize
		var tableWidth = $centerTable.find('table').width();
		$tabularScroll.find('.TabularScroll-center .TopScrollDragger').width(tableWidth);
		if ($centerTable[0].scrollWidth > $centerTable.width()) {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'visible');
		} else {
			$tabularScroll.find('.TopScrollWrapper').css('visibility', 'hidden');
		}
	};

	const resizeRows = function($tabularScroll) {
		let arrrayHeight = [];
		const $tableCenter = $tabularScroll.find('.TabularScroll-center-table table tbody');
		const $tableRight = $tabularScroll.find('.TabularScroll-right .ListRecords');
		const $tableLeft = $tabularScroll.find('.TabularScroll-left .ListRecords');

		arrrayHeight = $tableCenter
			.children('tr')
			.map(function() {
				return $(this).height();
			})
			.get();

		$tableRight.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});

		$tableLeft.children().each(function(index) {
			$(this).css('height', arrrayHeight[index] + 'px');
		});
	};

	SapphireWidgets.TabularScroll = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/timeline/scripts.js":
/*!*****************************************************************!*\
  !*** ./src/components/05-components/v3-pat/timeline/scripts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Timeline Helpers */
SapphireWidgets.TimelineCounterItems = function(titleItemID, label) {
	$(document).ready(function() {
		const $section = $(`#${titleItemID}`).parents('.TimelineItemSection');
		const $title = $section.find('.TimelineItemHeader a');
		const $items = $section.find('.TimelineItem');

		$title.append($(`<div class='ColorGreyText TextLarge TextRegular'> (${$items.length})</div>`));
	});
};

SapphireWidgets.ScrollToEvent = function(elementId) {
	SapphireWidgets.LayoutBase.scrollToElement($(`#${elementId}:first`, window.top.document), 52);
};

SapphireWidgets.LineTimelineComponent = function(widgetId, hasContent, isExpandable) {
	$(document).ready(function() {
		const $component = $(`#${widgetId}`);

		if (hasContent && isExpandable) {
			const $expandableLink = $component.find('.LineTimeLine__Header');
			const $actions = $component.find('.LineTimeLine__Actions');

			$expandableLink.click(() => {
				$component.toggleClass('LineTimeLine--expanded');

				return false;
			});

			$actions.click(function(e) {
				e.stopPropagation();
			});
		}
	});
};

SapphireWidgets.TimelinePageEvents = function(showMoreTimelineLink) {
	$(document).ready(function() {
		$(window)
			.off('scroll.Timeline')
			.on('scroll.Timeline', function() {
				if (window.scrollY === 0) {
					const $item = $('.TimelineAnchor').first();
					const $list = $('.TimelinePage__Navigation .ListRecords');

					selectItem($item.attr('id'));
					clearTimeout(window.scrollFinished);

					$list.scrollTop(0);
				} else {
					clearTimeout(window.scrollFinished);
					window.scrollFinished = setTimeout(function() {
						let id = 0;

						$('.TimelineAnchor').each(function(index) {
							if ($(window).scrollTop() + 190 >= $(this).offset().top) {
								id = $(this).attr('id');

								if (index == $('.TimelineAnchor').length - 1) selectItem(id);
							} else {
								selectItem(id, true);

								window.lastItemID = id;

								return false;
							}
						});

						if ($(document).height() - $(this).height() - 150 < $(this).scrollTop()) {
							const $list = $('.TimelinePage__Navigation .ListRecords');

							$(`#${showMoreTimelineLink}`).click();
							$('.TimelinePage__Right .TimelinePage__LoadingMore').css('display', 'flex');

							window.scrollListPosition = $list.scrollTop();
						}
					}, 100);
				}

				checkEndOfPage();
			});

		infiniteScrollList(showMoreTimelineLink);
	});
};

SapphireWidgets.TimelineRestoreEvents = function(showMoreTimelineLink) {
	$('.TimelinePage__Navigation .ListRecords').scrollTop(window.scrollListPosition);
	$('.TimelinePage__LoadingMore').css('display', 'none');

	window.alreadyClicked = false;

	infiniteScrollList(showMoreTimelineLink);

	if (window.lastItemID) selectItem(window.lastItemID);
};

function selectItem(id, scrollTo) {
	const $navItem = $(`[data-item=event-${id}] .TimelineItem`);

	$('.TimelineItem.TimelineItem--active').removeClass('TimelineItem--active');
	$navItem.addClass('TimelineItem--active');

	if (scrollTo && $navItem.length) scrollToView($navItem);
}

function scrollToView(element) {
	const $parentDiv = $('.TimelinePage__Navigation .ListRecords');

	$parentDiv.scrollTop(
		$parentDiv.scrollTop() + element.position().top - $parentDiv.height() / 2 + element.height() / 2
	);

	return true;
}

function infiniteScrollList(showMoreNavLink, name) {
	const $list = $('.TimelinePage__Navigation .ListRecords');

	$list.off('mousewheel.TimelineNav').on('mousewheel.TimelineNav', function() {
		const listHeight = $list.height();
		const scrollTop = $list.scrollTop();
		const scrollHeight = $list.prop('scrollHeight');

		if (listHeight + scrollTop + 100 > scrollHeight && scrollTop > 0 && !window.alreadyClicked) {
			clearTimeout(window.scrollListFinished);
			window.scrollListFinished = setTimeout(function() {
				$(`#${showMoreNavLink}`).click();

				$('.TimelinePage__LoadingMore').css('display', 'flex');

				window.scrollListPosition = $list.scrollTop();
				window.alreadyClicked = true;
			}, 100);
		}
	});
}

function checkEndOfPage() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		const $item = $('.TimelineAnchor').last();
		window.lastItemID = $item.attr('id');
	}
}


/***/ }),

/***/ "./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/trigger-iframe-tooltip/trigger-iframe-tooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TriggerIframeTooltip */
(function($, window, document, SapphireWidgets) {
	var create = function(config) {
		var $elementId = $('#' + config.elementId);

		$elementId.addClass('tooltip');

		if (config.triggerId === 'click') $elementId.addClass('tooltipstered--pointer');

		const widgetNotifyDiv = $.find('[data-iframetooltiptriggerid="' + config.elementId + '"]');
		let widgetNotifyId = '';

		if (widgetNotifyDiv.length === 1) {
			widgetNotifyId = $(widgetNotifyDiv).data('iframetooltipnotifyid');
		}

		$elementId.tooltipster({
			contentAsHTML: true,
			theme: config.theme,
			interactive: true,
			position: config.positionId,
			trigger: config.triggerId,
			minWidth: config.minWidth,
			maxWidth: config.maxWidth,
			zindex: config.zindex,
			onlyOne: true,
			content: `<iframe id="tooltipster-frame" data-ui="iframe-tooltip" src="${config.URL}" style="border:none; min-height:${config.minHeight}px;" data-iframetooltiptriggerid="${config.elementId}" iframetooltipnotifyid="${widgetNotifyId}"></iframe>`,
			functionReady: function(instance, helper) {
				$(helper).css({ visibility: 'hidden' });

				if (config.noPadding) $('.tooltipster-content').addClass('tooltipster--noPadding');
				if (config.customClass) $('.tooltipster-content').addClass(config.customClass);

				setTimeout(function() {
					$('.tooltipster-base').css({
						visibility: 'visible',
						minHeight: config.minHeight > 0 ? config.minHeight : 'auto',
					});
				}, 500);

				$('.tooltipster-content').prepend('<div class="TooltipsterLoading"><div class="lds-ring"><div></div></div>');

				const isLeftOrRight = config.positionId === 'left' || config.positionId === 'right';

				// Set a fixed height in order to keep the arrow in the same position
				if (isLeftOrRight) {
					setFixHeight();

					$(window)
						.off('scroll.Tooltip')
						.on('scroll.Tooltip', function() {
							setTimeout(() => {
								setFixHeight();
							}, 500);
						});
				}
			},
			functionAfter: function() {
				$(window).off('scroll.Tooltip');
			},
		});
	};

	const setFixHeight = () => {
		const $arrow = $('.tooltipster-arrow');

		$arrow.height($arrow.height());
	};

	SapphireWidgets.TriggerIframeTooltip = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/truncated-content/scripts.js":
/*!**************************************************************************!*\
  !*** ./src/components/05-components/v3-pat/truncated-content/scripts.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Component TruncatedContent */
(function($, window, document, SapphireWidgets) {
	const create = function(config = {}) {
		$(document).ready(function() {
			var $allTruncated = $([]);
			var rootSelector = `#${config.widgetId}`;
			var openerSelector = '.TruncatedContent--all';
			var bodySelector = '.TruncatedContent--body';

			$(rootSelector).each(function() {
				var $el = $(this);
				$allTruncated = $allTruncated.add($el);
				var $elBody = $el.find(bodySelector);
				var maxLines = $el.data('maxlines');
				var lineHeight = window
					.getComputedStyle($el.find('> div')[0])
					.getPropertyValue('line-height')
					.replace('px', '');
				var lineCount = Math.ceil($el.height() / lineHeight);
				if (lineCount > maxLines) {
					$elBody.css({
						maxHeight: lineHeight * maxLines + 'px',
					});
					var sentence = $el.data('additional').replace('{n}', lineCount - maxLines);
					$el.append('<p class="' + openerSelector.replace('.', '') + '">' + sentence + '</p>');
				}
			});

			$(rootSelector).on('click', openerSelector, function() {
				var el = $(this).closest(rootSelector);
				openTruncatedContent(el);
			});

			openTruncatedContent = function(el) {
				$(el)
					.find(bodySelector)
					.css('max-height', 'none');
				$(el)
					.find(openerSelector)
					.css('display', 'none');
			};

			if (window.frameElement && window.frameElement.id === 'tooltipster-frame') {
				$(rootSelector).off('click', openerSelector);
				$(openerSelector).addClass('in-tooltip');
			}
		});
	};

	SapphireWidgets.TruncatedContent = {
		create,
		open: function(el) {
			openTruncatedContent(el);
		},
		openAll: function() {
			$allTruncated.each(function() {
				openTruncatedContent($(this));
			});
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/08-pages/clinicianWorkArea.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/clinicianWorkArea.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.ClinicianWorkArea = function(containerID) {
	$(document).ready(function() {
		const $container = $(`#${containerID}`);
		const $toggler = $container.find('.SectionExpandable-toggler');

		if ($toggler.length === 1) {
			let $togglerState = false;

			$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

			$toggler.off('click').on('click', function(evt) {
				evt.stopPropagation();

				buttonClick();
			});

			const buttonClick = function() {
				$togglerState = !$togglerState;

				if ($togglerState) {
					$container.find('.SectionExpandable-toggled').show();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelhide]').data('labelhide'));

					$toggler.hide();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.click(() => buttonClick());
				} else {
					$container.find('.SectionExpandable-toggled').hide();
					$toggler.find('[data-labelvalue]').text($toggler.find('[data-labelshow]').data('labelshow'));

					$toggler.show();

					const $cancelButton = $('.SectionExpandable-toggled .ButtonCancelSearch');
					$cancelButton.off('click');
				}
			};
		}
	});
};


/***/ }),

/***/ "./src/components/08-pages/eSignature.js":
/*!***********************************************!*\
  !*** ./src/components/08-pages/eSignature.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

SapphireWidgets.QRCodeScanner = function(options) {
	Html5Qrcode.getCameras()
		.then(devices => {
			if (devices && devices.length) startCamera(devices[0].id);
		})
		.catch(err => {
			// App doesn't have access to the camera...

			setTimeout(() => {
				const $checkbox = $('.AccessCodeOption');

				$checkbox.attr('checked', true).trigger('click');
				$('.LayoutScanCode').addClass('LayoutScanCode--modeOnlyCode');

				$('.LayoutScanCode__Splash').fadeOut(500);
			}, 500);
		});

	function startCamera(cameraID) {
		const html5QrCode = new Html5Qrcode('qrreader');
		const config = { fps: 5, qrbox: 250 };

		const successCallback = response => {
			if ($('.ModeAccessCode').length) return;

			$('.ScanOverlay').addClass('ScanOverlay--correctCode');

			OsNotifyWidget(options.widgetFakeNotifyId, response);

			//setTimeout(() => html5QrCode.stop(), 1000);
		};

		const errorCallback = response => {
			// console.error(response);
		};

		html5QrCode
			.start({ facingMode: 'environment' }, config, successCallback, errorCallback)
			.then(() => {
				setTimeout(() => $('.LayoutScanCode__Splash').fadeOut(500), 500);
			})
			.catch(err => {
				console.error(err);
			});
	}

	let isPortrait = window.matchMedia('(orientation: portrait)').matches;
	let isOrientarionChanged = false;

	$(window).on('orientationchange', function(event) {
		if ($('.ModeAccessCode').length) {
			isOrientarionChanged = window.matchMedia('(orientation: portrait)').matches;
			SapphireWidgets.IsOrientarionChanged = !(isPortrait ^ isOrientarionChanged);

			return;
		}

		window.location.reload();
	});
};

SapphireWidgets.OnModeChange = function() {
	$('.ScanOverlay').removeClass('ScanOverlay--correctCode');
	$('.ScanOverlay').removeClass('ScanOverlay--incorrectCode');

	if (SapphireWidgets.IsOrientarionChanged && !$('.ModeAccessCode').length) {
		window.location.reload();
	}
};

SapphireWidgets.GoNextInput = function(currentInput, nextInputClass) {
	const key = event.keyCode || event.charCode;
	const isNumber = !isNaN(event.key) && !isNaN(parseFloat(event.key));

	const $curr = $(currentInput);
	const $next = $(`.${nextInputClass}`);
	const $prev = $curr.prevAll('input').first();

	if (key === 8 || key === 46) {
		$prev.focus();
		$curr.removeClass('ColorAlphaBorder');

		return;
	}

	if (isNumber) {
		$next.focus();
		$curr.addClass('ColorAlphaBorder');
		$('.ValidateInputButton').click();
	} else event.preventDefault();
};


/***/ }),

/***/ "./src/components/08-pages/remoteAppointment.js":
/*!******************************************************!*\
  !*** ./src/components/08-pages/remoteAppointment.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function($, window, SapphireWidgets) {
	const create = () => {
		const $widget = $('.RemoteAppointment');
		const $header = $widget.find('.RemoteAppointment__Header');
		const $minimize = $header.find('.Minimize');
		const $smallSize = $header.find('.Small');
		const $mediumSize = $header.find('.Medium');
		const $fullScreen = $header.find('.FullScreen');
		const $restoreWindow = $widget.find('.RemoteAppointment__RestoreWindow');

		let isPreviousSmall = $smallSize.is(':visible');

		$minimize.click(() => {
			isPreviousSmall = $mediumSize.is(':visible');

			//$widget.draggable({ disabled: true });

			$widget.addClass('RemoteAppointment--minimized');
			$minimize.hide();
			$mediumSize.show();

			$widget.animate(minimizedPosition($header.height()));
		});

		$smallSize.click(() => {
			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$smallSize.hide();
			$mediumSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: '280px',
				height: '380px',
			});
		});

		$mediumSize.click(() => {
			const isCallStarted = $widget.hasClass('RemoteAppointment--callStarted');

			//$widget.draggable('enable');

			$widget.removeClass('RemoteAppointment--minimized');
			$minimize.show();
			$mediumSize.hide();
			if (isCallStarted) $smallSize.show();

			$widget.animate({
				top: '50%',
				right: '50%',
				left: '50%',
				width: isCallStarted ? '45vw' : '450px',
				height: isCallStarted ? '45vh' : '260px',
			});
		});

		$fullScreen.click(() => {
			const iframe = document.querySelector('.RemoteAppointment iframe');

			if (iframe.requestFullscreen) {
				iframe.requestFullscreen();
			} else if (iframe.webkitRequestFullscreen) {
				iframe.webkitRequestFullscreen();
			}
		});

		$restoreWindow.click(() => {
			if (isPreviousSmall) $smallSize.click();
			else $mediumSize.click();
		});

		$(document).ready(function() {
			$widget.draggable({
				containment: 'window',
				handle: $header,
				scroll: false,
				snap: true,
				iframeFix: true,
			});

			fakeAjaxRefresh();
		});

		checkIframeLoaded();
	};

	const minimizedPosition = (headerHeight = 48) => {
		return {
			top: $(window).height() - headerHeight - 16,
			right: '76px',
			left: $(window).width() - 280 - 60 - 16,
			width: '275px',
			height: '48px',
		};
	};

	const resizeWhenJoin = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');

		$smallSize.show();
		$widget.addClass('RemoteAppointment--callStarted');

		$widget.css({
			height: '45vh',
			width: '45vw',
		});

		const centerPx = ($(window.top).width() - $widget.width()) / 2;

		$widget.css({
			inset: `230px auto auto ${centerPx}px`,
		});

		let timeout;

		function warning(e) {
			timeout = setTimeout(function() {
				// Hack to keep the current tab selected if user doesn't go to another page
				const iframeContents = window.top.$('.MainContent > iframe').contents();
				const tabItems = iframeContents.find('.TabWrapper');

				tabItems.removeClass('Active');
				tabItems.first().addClass('Active');
			}, 1000);

			return (e.returnValue = 'You are leaving the page');
		}

		function noTimeout() {
			clearTimeout(timeout);
		}

		window.top.onbeforeunload = warning;
		window.top.unload = noTimeout;

		/*window.top.addEventListener('beforeunload', function(e) {
			e.preventDefault();
			e.returnValue = '123';
		});*/
	};

	const setInitialState = () => {
		const $widget = $('.RemoteAppointment');
		const $smallSize = $widget.find('.Small');
		const $mediumSize = $widget.find('.Medium');

		$smallSize.hide();
		$mediumSize.hide();
		$widget.removeClass('RemoteAppointment--callStarted');

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.RemoteAppointment').css({
			display: 'initial',
			right: '22%',
			top: '30%',
			height: '260px',
			width: '450px',
		});
	};

	const setModalMinimized = () => {
		// To use only inside Sapphire iFrame pages
		const $modalRemoteAppt = window.top.$('.RemoteAppointment');

		if ($modalRemoteAppt.length) {
			const $minimizeModal = $modalRemoteAppt.find('.Minimize');
			$minimizeModal.click();
		}
	};

	const checkIframeLoaded = () => {
		const iframe = document.getElementsByClassName('SapphireFrame')[0];
		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		if (iframeDoc.readyState == 'complete') {
			iframe.contentWindow.onload = function() {
				setInitialState();
			};

			return;
		}

		window.setTimeout(checkIframeLoaded, 100);
	};

	const setCallStarted = () => {};

	const fakeAjaxRefresh = () => {
		const $iframe = $('.SapphireFrame');

		$iframe.on('load', function() {
			$iframe[0].contentWindow.onbeforeunload = function(e) {
				$('.Feedback_AjaxWait').show();
			};

			$('.Feedback_AjaxWait').hide();
		});
	};

	const openModalLeaveContext = url => {
		SapphireWidgets.RemoteAppointment.leaveURL = url;

		window.top.unload = null;
		window.top.onbeforeunload = null;

		$('.OpenModalLeaveContext').click();
	};

	SapphireWidgets.RemoteAppointment = {
		create,
		resizeWhenJoin,
		setCallStarted,
		setInitialState,
		fakeAjaxRefresh,
		setModalMinimized,
		openModalLeaveContext,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/globals.js":
/*!***********************************!*\
  !*** ./src/components/globals.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wMC1zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1lbWVyZ2VuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LXBvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L3N1YkxheW91dExlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYWN0aW9ucy1tZW51L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvYnV0dG9uLWxpbmsvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbGxhcHNpYmxlLXNpZGUtcGFuZWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb21wLWxpbmUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kYXRldGltZS1yYW5nZS1waWNrZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcmFnLWRyb3Avc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wZG93bi1jYXRlZ29yaWVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZXhwYW5kYWJsZS1saW5rL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWNhcmQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3Jpem9udGFsLXRvb2xiYXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1saXN0L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbG9jYXRpb24tYm94L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbWVudS1iYXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC1ub3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcG9wdXAtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhdGllbnQtY2FsbC1jYW5jZWwvcGF0aWVudC1jYWxsLWNhbmNlbC1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcHJlc2NyaXB0aW9uLWV4cGFuZGFibGUvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1wb3B1cC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvdG9nZ2xlLWl0ZW0tY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaC1hbmQtc2VsZWN0L3NzZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VhcmNoYWJsZS1jbGllbnQtc2lkZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1jdXN0b20vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtaW5zaWRlL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VsZWN0LXN5c3RlbS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmRQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlSG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZWJhci9zaWRlYmFyLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zbWFsbC1ib3gtc2VsZWN0YWJsZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItdmVydGljYWwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1saXN0L3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90aW1lbGluZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RyaWdnZXItaWZyYW1lLXRvb2x0aXAvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cnVuY2F0ZWQtY29udGVudC9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL2VTaWduYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9p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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ1BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzFTRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QjtBQUNsRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzloQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7O0FDekNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLDZDOzs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNLRDtBQUNBO0FB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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3pTRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDLENBQUM7Ozs7Ozs7Ozs7OztBQzdJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6SEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtREFBbUQsSUFBSSxzQkFBc0I7QUFDN0U7QUFDQSwrREFBK0QsUUFBUSxHQUFHLFNBQVM7QUFDbkYsZ0RBQWdELElBQUksb0ZBQW9GOztBQUV4STtBQUNBO0FBQ0Esb0RBQW9ELGVBQWU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLGtEQUFrRCxlQUFlO0FBQ2pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL01EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNLRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQyxrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7QUMzYkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNM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Q0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7OztBQUlUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsR0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEMsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5TkQsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiZGV2LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjM5MjkzMDRiYjFjZmQxYTA0MzM0XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJhcHBcIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2FwcC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmRleC5zY3NzJyk7XG5cbi8vSW1wb3J0IGFsbCBKUyBmaWxlc1xuY29uc3QgcmVxdWlyZUFsbCA9IHIgPT4gci5rZXlzKCkuZm9yRWFjaChyKTtcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuL2NvbXBvbmVudHMnLCB0cnVlLCAvXFwuanMkLykpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuLzAwLXNldHRpbmdzL2NvbmZpZy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDAtc2V0dGluZ3MvY29uZmlnLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtYmFzZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJhc2UuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1ibGFuay5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LWJsYW5rLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtZW1lcmdlbmN5LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL2xheW91dC9sYXlvdXQtcG9wdXAuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1wb3B1cC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy9sYXlvdXQvc3ViTGF5b3V0TGVmdC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy9sYXlvdXQvc3ViTGF5b3V0TGVmdC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvYWN0aW9ucy1tZW51L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2FjdGlvbnMtbWVudS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9idXR0b24tbGluay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9idXR0b24tbGluay9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9jYXJkLWNoYXJ0cy9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jb2xsYXBzaWJsZS1zaWRlLXBhbmVsL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbGxhcHNpYmxlLXNpZGUtcGFuZWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvY29tcC1saW5lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvbXAtbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9jb3VudHJ5LXBob25lL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2NvdW50cnktcGhvbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZGF0YS10YWJsZXMvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZGF0ZXRpbWUtcmFuZ2UtcGlja2VyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2RhdGV0aW1lLXJhbmdlLXBpY2tlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcmFnLWRyb3Avc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJhZy1kcm9wL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2Ryb3Bkb3duLWNhdGVnb3JpZXMvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcGRvd24tY2F0ZWdvcmllcy9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9kcm9wem9uZS9kcm9wem9uZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZHJvcHpvbmUvZHJvcHpvbmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2V4cGFuZGFibGUtbGluay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9leHBhbmRhYmxlLWxpbmsvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZnVsbHNjcmVlbi10YWJzLXdyYXBwZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdhbGxlcnkvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvZ2VuZXJpYy1nYWxsZXJ5L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2dlbmVyaWMtZ3JpZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9nZW5lcmljLWdyaWQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaG9yaXpvbnRhbC10b29sYmFyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2hvcml6b250YWwtdG9vbGJhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9ob3VyLXBpY2tlci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC1sYXNhL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LWxhc2Evc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvaW5wdXQtd2l0aC1jbGVhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWNsZWFyL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2lucHV0LXdpdGgtbGlzdC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9pbnB1dC13aXRoLWxpc3Qvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1hZGQvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbGluZS1kZXRhaWxzLWV4cGFuZC1ib3gvc2NyaXB0LmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9saW5lLWRldGFpbHMtZXhwYW5kLWJveC9zY3JpcHQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L2xvY2F0aW9uLWJveC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9sb2NhdGlvbi1ib3gvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvbWFpbi1pbnRlcmFjdGl2ZS1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L21haW4taW50ZXJhY3RpdmUtY2FyZC9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tZW51LWJhci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9tZW51LWJhci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9tdWx0aXBsZS1zZWxlY3Rpb24tYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L211bHRpcGxlLXNlbGVjdGlvbi1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBhbmVsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9jb25maXJtYXRpb24tcGFuZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL2NvbmZpcm1hdGlvbi1wb3B1cC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvY29uZmlybWF0aW9uLXBvcHVwLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9tb2RhbC1wb3B1cC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvbW9kYWwtcG9wdXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BhbmVsLWJ5LWlkLW5vdGlmeS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQtbm90aWZ5LmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9wYW5lbC1ieS1pZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvcGFuZWwtYnktaWQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3BvcHVwLW1lbnUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3BhbmVsL3NhcHBoaXJlLXBhbmVsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYW5lbC9zYXBwaGlyZS1wYW5lbC5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGFuZWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLXN0cnVjdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvcGF0aWVudC1jYWxsLWNhbmNlbC9wYXRpZW50LWNhbGwtY2FuY2VsLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9wYXRpZW50LWNhbGwtY2FuY2VsL3BhdGllbnQtY2FsbC1jYW5jZWwuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1jYXJkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3ByZXNjcmlwdGlvbi1leHBhbmRhYmxlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLWhlYWRlci9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zYXBwaGlyZS1oZWFkZXIvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcG9wdXAvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2FwcGhpcmUtcmFkaW8tYnV0dG9uL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NhcHBoaXJlLXJhZGlvLWJ1dHRvbi9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zY2FsZXMvc2NhbGUtbWFpbi1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy9zY2FsZS1tYWluLXN0cnVjdHVyZS5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2NhbGVzL3RvZ2dsZS1pdGVtLWNvbnRyb2wuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NjYWxlcy90b2dnbGUtaXRlbS1jb250cm9sLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zZWxlY3Qtc3NkLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2gtYW5kLXNlbGVjdC9zc2Qtc2VhcmNoLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWFyY2hhYmxlLWNsaWVudC1zaWRlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlYXJjaGFibGUtY2xpZW50LXNpZGUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWN1c3RvbS9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWN0aW9uLWV4cGFuZGFibGUtY3VzdG9tL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlY3Rpb24tZXhwYW5kYWJsZS1pbnNpZGUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2VjdGlvbi1leHBhbmRhYmxlLWluc2lkZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zZWxlY3Qtc3lzdGVtL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NlbGVjdC1zeXN0ZW0vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtY29udGFpbmVyL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LWNvbnRhaW5lci9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaGlmdC10YWJsZS9zaGlmdFRhYmxlQ2FyZC5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUNhcmQuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NoaWZ0LXRhYmxlL3NoaWZ0VGFibGVIb3Zlci5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2hpZnQtdGFibGUvc2hpZnRUYWJsZUhvdmVyLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC9zaWRlLW1lbnUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc2lkZS1tZW51L3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NpZGViYXIvc2lkZWJhci1zdHJ1Y3R1cmUuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NtYWxsLWJveC1zZWxlY3RhYmxlL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NtYWxsLWJveC1zZWxlY3RhYmxlL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwaW5uZXItaG9yaXpvbnRhbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLWhvcml6b250YWwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3Bpbm5lci12ZXJ0aWNhbC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGlubmVyLXZlcnRpY2FsL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NwbGl0LWJ1dHRvbi9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zcGxpdC1idXR0b24vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWNvbXBvbmVudC1ibG9jay9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC9zc2QtY29tcG9uZW50LWJsb2NrL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3NzZC1saXN0LWxpbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvc3NkLWxpc3QtbGluZS9zY3JpcHRzLmpzXCIsXG5cdFwiLi8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJsZS1mb3JtL3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYmxlLWZvcm0vc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFicy1leHRlbmRlZC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJzLWV4dGVuZGVkL3NjcmlwdHMuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RhYnVsYXItbGlzdC9zY3JpcHRzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90YWJ1bGFyLWxpc3Qvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGFidWxhci1zY3JvbGwvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDUtY29tcG9uZW50cy92My1wYXQvdGltZWxpbmUvc2NyaXB0cy5qc1wiLFxuXHRcIi4vMDUtY29tcG9uZW50cy92My1wYXQvdHJpZ2dlci1pZnJhbWUtdG9vbHRpcC90cmlnZ2VyLWlmcmFtZS10b29sdGlwLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wNS1jb21wb25lbnRzL3YzLXBhdC90cmlnZ2VyLWlmcmFtZS10b29sdGlwL3RyaWdnZXItaWZyYW1lLXRvb2x0aXAuanNcIixcblx0XCIuLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RydW5jYXRlZC1jb250ZW50L3NjcmlwdHMuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA1LWNvbXBvbmVudHMvdjMtcGF0L3RydW5jYXRlZC1jb250ZW50L3NjcmlwdHMuanNcIixcblx0XCIuLzA4LXBhZ2VzL2NsaW5pY2lhbldvcmtBcmVhLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy8wOC1wYWdlcy9jbGluaWNpYW5Xb3JrQXJlYS5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvZVNpZ25hdHVyZS5qc1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvMDgtcGFnZXMvZVNpZ25hdHVyZS5qc1wiLFxuXHRcIi4vMDgtcGFnZXMvcmVtb3RlQXBwb2ludG1lbnQuanNcIjogXCIuL3NyYy9jb21wb25lbnRzLzA4LXBhZ2VzL3JlbW90ZUFwcG9pbnRtZW50LmpzXCIsXG5cdFwiLi9nbG9iYWxzLmpzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9nbG9iYWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJTYXBwaGlyZVdpZGdldHMgPSB3aW5kb3cuU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyB8fCB7fTtcbiIsIi8qIENvbXBvbmVudCBMYXlvdXRCYXNlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBMYXlvdXRCYXNlKGNvbmZpZyk7XG5cdFx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWQgPSBjb25maWcud2lkZ2V0SWQ7XG5cdH07XG5cblx0dmFyIG9wZW5TaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLm9wZW5TaWRlYmFySWZyYW1lKGR1cmF0aW9uKTtcblx0fTtcblxuXHR2YXIgY2xvc2VTaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0XHR3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLmNsb3NlU2lkZWJhcklmcmFtZShkdXJhdGlvbik7XG5cdH07XG5cblx0dmFyIHNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uKCRlbGVtZW50LCBvZmZzZXQgPSAwKSB7XG5cdFx0dmFyICR0YXJnZXRFbGVtZW50ID0gJGVsZW1lbnQ7XG5cblx0XHRpZiAoISEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdHZhciBzY3JvbGxUb09mZnNldEludGVydmFsO1xuXG5cdFx0XHRzY3JvbGxUb09mZnNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh3aW5kb3dbU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uud2lkZ2V0SWRdLmdldFRocmVzaG9sZHMoKS5zZWNvbmRhcnlUaHJlc2hvbGQgPiAwKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzY3JvbGxUb09mZnNldEludGVydmFsKTtcblxuXHRcdFx0XHRcdGxldCB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wID0gJHRhcmdldEVsZW1lbnQub2Zmc2V0KCkudG9wO1xuXG5cdFx0XHRcdFx0Y29uc3QgaXNGaXhlZCA9ICQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpLmhhc0NsYXNzKCdpc0ZpeGVkJyk7XG5cdFx0XHRcdFx0Y29uc3QgaXNFbWVyZ2VuY3kgPSAhISQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpLnRleHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IGhlYWRlckhlaWdodCA9ICQoJy5TYXBwaGlyZUhlYWRlcicpLmhlaWdodCgpO1xuXHRcdFx0XHRcdGNvbnN0IHNlY29uZGFyeUhlaWdodCA9ICQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeScpLm91dGVySGVpZ2h0KCk7XG5cdFx0XHRcdFx0Y29uc3QgZW1lcmdlbmN5SGVpZ2h0ID0gaXNFbWVyZ2VuY3kgPyAkKCcuTGF5b3V0QmFzZS1lbWVyZ2VuY3knKS5oZWlnaHQoKSA6IDA7XG5cblx0XHRcdFx0XHQvL2NvbnN0IHNlY29uZGFyeUZpeGVkID0gaXNGaXhlZCA/IHNlY29uZGFyeUhlaWdodCA6IHNlY29uZGFyeUhlaWdodCAtIDI2O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgPSB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wIC0gKGhlYWRlckhlaWdodCArIHNlY29uZGFyeUhlaWdodCArIGVtZXJnZW5jeUhlaWdodCk7XG5cblx0XHRcdFx0XHQkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKHRhcmdldEVsZW1lbnRPZmZzZXRUb3AgLSAxNik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBMYXlvdXRCYXNlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lciA9IDA7XG5cdFx0dGhpcy5oYXNIZWFkZXIgPSBjb25maWcuaGFzSGVhZGVyO1xuXHRcdHRoaXMuaXNFeHBhbmRhYmxlID0gY29uZmlnLmlzRXhwYW5kYWJsZTtcblx0XHR0aGlzLmlzVG9wV2luZG93ID0gd2luZG93LnRvcCA9PT0gd2luZG93LnNlbGYgPyB0cnVlIDogZmFsc2U7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xuXHRcdHRoaXMuJHdyYXBwZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtV3JhcHBlcicpO1xuXHRcdHRoaXMuJHNwYWNlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zcGFjZXInKTtcblx0XHR0aGlzLiRtYWluTWVudSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xuXHRcdHRoaXMuJGhlYWRlciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1oZWFkZXInKTtcblx0XHR0aGlzLiRoZWFkZXJCb2R5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1ib2R5Jyk7XG5cdFx0dGhpcy4kcHJpbWFyeU1lbnUgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtcHJpbWFyeS1tZW51Jyk7XG5cdFx0dGhpcy4kZW1lcmdlbmN5ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLWVtZXJnZW5jeScpO1xuXHRcdHRoaXMuJHNlY29uZGFyeSA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1zZWNvbmRhcnknKTtcblx0XHR0aGlzLiRzZWNvbmRhcnlNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5MYXlvdXRCYXNlLXNlY29uZGFyeS1tZW51Jyk7XG5cdFx0dGhpcy4kaWZyYW1lU2lkZWJhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJyk7XG5cdFx0dGhpcy4kaGVhZGVyQWRkaXRpb25hbENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWFkZGl0aW9uYWwtY29udGVudCcpO1xuXHRcdHRoaXMuJHRvcGZpeGVkQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuTGF5b3V0QmFzZS10b3BmaXhlZGNvbnRlbnQnKTtcblx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtYm90dG9tZml4ZWRjb250ZW50Jyk7XG5cdFx0dGhpcy4kbWFpbkNvbnRlbnQgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkxheW91dEJhc2UtTWFpbkNvbnRlbnQnKTtcblx0XHR0aGlzLmV4dHJhUGFkZGluZ0VtZXJnZW5jeSA9IDA7XG5cdFx0dGhpcy5leHRyYVBhZGRpbmdTZWNvbmRhcnkgPSAwO1xuXHRcdHRoaXMuc2V0dXBXaW5kb3dFdmVudHMoKTtcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxkcy1yaW5nIDFcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXG5cdFx0JChmdW5jdGlvbigpIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnTGF5b3V0QmFzZScpO1xuXHRcdFx0aWYgKF90aGlzLmlzVG9wV2luZG93KSB7XG5cdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdCQoJ2JvZHknKS5jbGljaygpO1xuXHRcdFx0JCh3aW5kb3cpLnNjcm9sbCgpO1xuXG5cdFx0XHRfdGhpcy4kaWZyYW1lU2lkZWJhci5maW5kKCcubGRzLXJpbmcnKS5mYWRlT3V0KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuc2V0dXBXaW5kb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBjdXJzb3JQb3NpdG9uID0gMDtcblxuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy51cGRhdGVUaHJlc2hvbGRzKCk7XG5cdFx0XHRfdGhpcy5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMoKTtcblx0XHRcdF90aGlzLmhhbmRsZUxheW91dFRvcFBhZGRpbmcoKTtcblx0XHRcdF90aGlzLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcoKTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3UG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoX3RoaXMubGF5b3V0QmFzZVJlZHJhd1RpbWVyKTtcblx0XHRcdF90aGlzLmxheW91dEJhc2VSZWRyYXdUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdGhpcy51cGRhdGVUaHJlc2hvbGRzKCk7XG5cdFx0XHRcdF90aGlzLmhhbmRsZU9wdGlvbmFsQ29udGFpbmVycygpO1xuXHRcdFx0XHRfdGhpcy5oYW5kbGVMYXlvdXRUb3BQYWRkaW5nKCk7XG5cdFx0XHRcdF90aGlzLmhhbmRsZUxheW91dEJvdHRvbVBhZGRpbmcoKTtcblx0XHRcdFx0X3RoaXMuaGFuZGxlTWFuYWdlUXVldWVDYXJkKGN1cnNvclBvc2l0b24sIG5ld1Bvc2l0aW9uKTtcblx0XHRcdFx0Y3Vyc29yUG9zaXRvbiA9IG5ld1Bvc2l0aW9uO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9KTtcblx0fTtcblxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVPcHRpb25hbENvbnRhaW5lcnMgPSBmdW5jdGlvbigpIHtcblx0XHQvKmNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRjb25zdCBpc0VtZXJnZW5jeSA9ICEhJCgnLkxheW91dEJhc2UtZW1lcmdlbmN5JykudGV4dCgpOyovXG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTGF5b3V0VG9wUGFkZGluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYWRkaW5nVG9wID0gdGhpcy5jb250ZW50VGhyZXNob2xkICsgdGhpcy5leHRyYVBhZGRpbmdFbWVyZ2VuY3kgKyB0aGlzLmV4dHJhUGFkZGluZ1NlY29uZGFyeTtcblx0XHR0aGlzLiRzcGFjZXIuc3RvcCgpLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGhlaWdodDogcGFkZGluZ1RvcCxcblx0XHRcdH0sXG5cdFx0XHQwLFxuXHRcdFx0J2xpbmVhcidcblx0XHQpO1xuXHRcdGlmICh0aGlzLiR0b3BmaXhlZENvbnRlbnQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHR0aGlzLiR0b3BmaXhlZENvbnRlbnQuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICQoJy5MYXlvdXRCYXNlLU1haW5Db250ZW50Jykud2lkdGgoKSxcblx0XHRcdFx0dG9wOiB0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCArICdweCcsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuaGFuZGxlTGF5b3V0Qm90dG9tUGFkZGluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLiRib3R0b21maXhlZENvbnRlbnQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRpZiAoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCA+ICQoJ2JvZHknKS5oZWlnaHQoKSkge1xuXHRcdFx0XHR2YXIgYm90dG9tRml4ZWRIZWlnaHQgPSB0aGlzLiRib3R0b21maXhlZENvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cdFx0XHRcdHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoJ2hhc0ZpeGVkQm90dG9tJykuY3NzKCdwYWRkaW5nLWJvdHRvbScsIGJvdHRvbUZpeGVkSGVpZ2h0ICsgJ3B4Jyk7XG5cdFx0XHRcdHRoaXMuJGJvdHRvbWZpeGVkQ29udGVudC5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoOiAkKCcuTGF5b3V0QmFzZS1NYWluQ29udGVudCcpLm91dGVyV2lkdGgodHJ1ZSksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5yZW1vdmVDbGFzcygnaGFzRml4ZWRCb3R0b20nKS5jc3MoJ3BhZGRpbmctYm90dG9tJywgJycpO1xuXHRcdFx0XHR0aGlzLiRib3R0b21maXhlZENvbnRlbnQuY3NzKHtcblx0XHRcdFx0XHR3aWR0aDogJycsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS51cGRhdGVUaHJlc2hvbGRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1haW5NZW51SGVpZ2h0ID0gdGhpcy4kbWFpbk1lbnUub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcblx0XHR2YXIgaGVhZGVyQm9keUhlaWdodCA9IHRoaXMuJGhlYWRlckJvZHkub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgdGhpcy4kaGVhZGVyLm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XG5cdFx0dmFyIHRvcGZpeGVkQ29udGVudEhlaWdodCA9IHRoaXMuJHRvcGZpeGVkQ29udGVudC5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xuXHRcdHZhciBwcmltYXJ5TWVudUhlaWdodCA9IHRoaXMuJHByaW1hcnlNZW51Lm91dGVySGVpZ2h0KHRydWUpIHx8IDA7XG5cdFx0dmFyIGVtZXJnZW5jeUhlaWdodCA9IHRoaXMuJGVtZXJnZW5jeS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xuXHRcdHRoaXMudG9wZml4ZWRDb250ZW50VGhyZXNob2xkID0gbWFpbk1lbnVIZWlnaHQgKyBoZWFkZXJCb2R5SGVpZ2h0O1xuXHRcdHRoaXMuY29udGVudFRocmVzaG9sZCA9IG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodCArIHRvcGZpeGVkQ29udGVudEhlaWdodDtcblx0XHR0aGlzLmVtZXJnZW5jeVRocmVzaG9sZCA9IG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodCArIHRvcGZpeGVkQ29udGVudEhlaWdodCArIHByaW1hcnlNZW51SGVpZ2h0O1xuXHRcdHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkID1cblx0XHRcdG1haW5NZW51SGVpZ2h0ICsgaGVhZGVyQm9keUhlaWdodCArIHRvcGZpeGVkQ29udGVudEhlaWdodCArIHByaW1hcnlNZW51SGVpZ2h0ICsgZW1lcmdlbmN5SGVpZ2h0O1xuXHR9O1xuXG5cdExheW91dEJhc2UucHJvdG90eXBlLmdldFRocmVzaG9sZHMgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wZml4ZWRDb250ZW50VGhyZXNob2xkOiB0aGlzLnRvcGZpeGVkQ29udGVudFRocmVzaG9sZCxcblx0XHRcdGNvbnRlbnRUaHJlc2hvbGQ6IHRoaXMuY29udGVudFRocmVzaG9sZCxcblx0XHRcdGVtZXJnZW5jeVRocmVzaG9sZDogdGhpcy5lbWVyZ2VuY3lUaHJlc2hvbGQsXG5cdFx0XHRzZWNvbmRhcnlUaHJlc2hvbGQ6IHRoaXMuc2Vjb25kYXJ5VGhyZXNob2xkLFxuXHRcdH07XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUub3BlblNpZGViYXJJZnJhbWUgPSBmdW5jdGlvbihkdXJhdGlvbl9pbikge1xuXHRcdHZhciBkdXJhdGlvbiA9IGR1cmF0aW9uX2luID49IDAgPyBkdXJhdGlvbl9pbiA6IDEwMDtcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHR9LFxuXHRcdFx0ZHVyYXRpb25cblx0XHQpO1xuXHRcdCQoJ2JvZHknKVxuXHRcdFx0LmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKVxuXHRcdFx0LmNsaWNrKCk7XG5cdH07XG5cblx0TGF5b3V0QmFzZS5wcm90b3R5cGUuY2xvc2VTaWRlYmFySWZyYW1lID0gZnVuY3Rpb24oZHVyYXRpb25faW4pIHtcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbl9pbiA+PSAwID8gZHVyYXRpb25faW4gOiAxMDA7XG5cdFx0dmFyIHRhcmdldFdpZHRoID0gdGhpcy5pc0V4cGFuZGFibGUgPyA0MCA6IDI2Mjtcblx0XHR0aGlzLiRpZnJhbWVTaWRlYmFyLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdHdpZHRoOiB0YXJnZXRXaWR0aCxcblx0XHRcdH0sXG5cdFx0XHRkdXJhdGlvblxuXHRcdCk7XG5cdFx0JCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcblx0fTtcblxuXHRMYXlvdXRCYXNlLnByb3RvdHlwZS5oYW5kbGVNYW5hZ2VRdWV1ZUNhcmQgPSBmdW5jdGlvbihjdXJzb3JQb3NpdG9uLCBuZXdQb3NpdGlvbikge1xuXHRcdGNvbnN0ICRtYW5hZ2VRdWV1ZSA9ICQoJy5NYW5hZ2VRdWV1ZUNvbnRhaW5lcicpO1xuXG5cdFx0aWYgKCRtYW5hZ2VRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdGlmIChuZXdQb3NpdGlvbiA+IGN1cnNvclBvc2l0b24pIHtcblx0XHRcdFx0JG1hbmFnZVF1ZXVlLmFkZENsYXNzKCdNYW5hZ2VRdWV1ZUNvbnRhaW5lci0tY2xvc2VkJyk7XG5cdFx0XHR9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uIDwgY3Vyc29yUG9zaXRvbikge1xuXHRcdFx0XHQkbWFuYWdlUXVldWUucmVtb3ZlQ2xhc3MoJ01hbmFnZVF1ZXVlQ29udGFpbmVyLS1jbG9zZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2UgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGNsb3NlU2lkZWJhcklmcmFtZSxcblx0XHRvcGVuU2lkZWJhcklmcmFtZSxcblx0XHRzY3JvbGxUb0VsZW1lbnQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTGF5b3V0QmxhbmsgKi9cbiQoZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuXHRcdGlmICghISQodGhpcy5mcmFtZUVsZW1lbnQpLmNsb3Nlc3QoJy5NYWluSW50ZXJhY3RpdmVDYXJkJykubGVuZ3RoKSB7XG5cdFx0XHQkKCcuTGF5b3V0QmxhbmsuUGFnZScpLmFkZENsYXNzKCdNYWluSW50ZXJhY3RpdmVDYXJkJyk7XG5cdFx0fVxuXHR9XG59KTsiLCIoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IEZvcndhcmRQYXRpZW50Q29tcG9uZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRhbGxPcHRpb25zID0gJCgnLkZvcndhcmRMb2NhdGlvbnNDb250ZW50Jyk7XG5cdFx0Y29uc3QgJG11bHRpcGxlID0gJCgnLkZvcndhcmRMb2NhdGlvbnNEaXYnKTtcblx0XHRjb25zdCAkc2luZ2xlID0gJCgnLlNpbmdsZUxvY2F0aW9uJyk7XG5cblx0XHQkKCdib2R5JykubW91c2V1cChmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCBub3RDbGlja0luQWxsT3B0aW9ucyA9ICEkYWxsT3B0aW9ucy5pcyhlLnRhcmdldCkgJiYgJGFsbE9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luTXVsdGlwbGUgPSAhJG11bHRpcGxlLmlzKGUudGFyZ2V0KSAmJiAkbXVsdGlwbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBub3RDbGlja0luU2luZ2xlID0gISRzaW5nbGUuaXMoZS50YXJnZXQpICYmICRzaW5nbGUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDA7XG5cdFx0XHRjb25zdCBpc09wZW4gPSAkbXVsdGlwbGUuaXMoJzp2aXNpYmxlJyk7XG5cblx0XHRcdGlmIChub3RDbGlja0luQWxsT3B0aW9ucyAmJiBub3RDbGlja0luTXVsdGlwbGUgJiYgbm90Q2xpY2tJblNpbmdsZSAmJiBpc09wZW4pIHtcblx0XHRcdFx0JG11bHRpcGxlLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkxheW91dEVtZXJnZW5jeSA9IHtcblx0XHRGb3J3YXJkUGF0aWVudENvbXBvbmVudCxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBMYXlvdXRQb3B1cCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgcG9wdXBXaWR0aDtcblx0dmFyIHBvcHVwTWluV2lkdGg7XG5cdHZhciBwb3B1cEhlaWdodDtcblx0dmFyIHBvcHVwTWluSGVpZ2h0O1xuXHR2YXIgcG9wdXBNYXhIZWlnaHQ7XG5cdHZhciBwb3B1cFdpZHRoUGVyY2VudGFnZTtcblx0dmFyIGxheW91dFBvcHVwUmVzaXplVGltZXI7XG5cblx0dmFyICRwb3B1cCA9ICQoJy5MYXlvdXRQb3B1cCcpO1xuXHR2YXIgJG9zUG9wdXAgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC1Qb3B1cC5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKTtcblx0dmFyICRvc1BvcHVwQ29udGVudCA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Lm9zLWludGVybmFsLXVpLXdpZGdldC1jb250ZW50Jyk7XG5cdHZhciAkb3ZlcmxheSA9IHdpbmRvdy5wYXJlbnQuJCgnLm9zLWludGVybmFsLXVpLXdpZGdldC1vdmVybGF5Jyk7XG5cdHZhciBwb3B1cFNpemU7XG5cdHZhciBwYWRkaW5nQm9keTtcblxuXHRjb25zdCBCT0RZX1BBRERJTkdfVE9QX0JPVFRPTSA9IDMyO1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcgPSBjb25maWc7XG5cdFx0cG9wdXBTaXplID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5Qb3B1cFNpemU7XG5cdFx0cGFkZGluZ0JvZHkgPSBjb25maWcubm9Db250ZW50UGFkZGluZyA/IDAgOiBCT0RZX1BBRERJTkdfVE9QX0JPVFRPTTtcblxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ0xheW91dFBvcHVwJyk7IC8vIGJlY2F1c2UgZGF0ZXRpbWVyYW5nZXBpY2tlciBpcyBhdHRhY2hlZCB0byBib2R5XG5cblx0XHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2gpIHtcblx0XHRcdFx0JHBvcHVwLmFkZENsYXNzKCdpc1RvdWNoJyk7XG5cdFx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaXNUb3VjaCcpOyAvLyBiZWNhdXNlIHNlbGVjdDIgaXMgYXR0YWNoZWQgdG8gYm9keVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcblx0XHRcdFx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24sIGluZGV4KSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdG8gcmVkcmF3IHRoZSBkaWFsb2cgaWYgaXQgaXMgb25lIHRoZSBmb2xsb3dpbmcgcG9wdXBzXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMgJiZcblx0XHRcdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Qb3B1cHNUb0F2b2lkTXV0YXRpb25zLnNvbWUoZSA9PiAkKGAuJHtlfWApLmxlbmd0aClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZWRyYXdEaWFsb2dXaW5kb3coKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG5cdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdFx0YXR0cmlidXRlczogZmFsc2UsXG5cdFx0XHR9KTtcblxuXHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzLmZyYW1lRWxlbWVudCkuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0XHR9KTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzaXplRGlhbG9nKCk7XG5cdFx0XHRcdHJlc2l6ZUNvbnRlbnQoKTtcblx0XHRcdFx0JCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHR9LCAxNTApO1xuXG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5yZWRyYXdEaWFsb2dXaW5kb3cpO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cucGFyZW50KVxuXHRcdFx0Lm9mZigncmVzaXplLkxheW91dFBvcHVwJylcblx0XHRcdC5vbigncmVzaXplLkxheW91dFBvcHVwJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlZHJhd0RpYWxvZ1dpbmRvdygpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVkcmF3RGlhbG9nV2luZG93ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KGxheW91dFBvcHVwUmVzaXplVGltZXIpO1xuXHRcdGxheW91dFBvcHVwUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVzaXplRGlhbG9nKCk7XG5cdFx0XHRyZXNpemVDb250ZW50KCk7XG5cdFx0XHQkKCdib2R5JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHR9LCAzMDApO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmhhc0Nsb3NlKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5zaG93KCk7XG5cblx0XHRcdGlmICh3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCAhPSB1bmRlZmluZWQgfHwgZmFsc2UpIHtcblx0XHRcdFx0Y29uc3QgJGNsb3NlQnV0dG9uID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlJyk7XG5cblx0XHRcdFx0JGNsb3NlQnV0dG9uLnJlbW92ZUF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0JGNsb3NlQnV0dG9uLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB3aW5kb3cudG9wLl9pZnJhbWVQb3B1cC5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5jbG9zZSgpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAod2luZG93LnRvcC4kKCdib2R5JykuaGFzQ2xhc3MoJ0xheW91dEJhc2UnKSkge1xuXHRcdFx0d2luZG93LnRvcC4kKCdib2R5JykuY3NzKHtcblx0XHRcdFx0b3ZlcmZsb3dZOiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCRvdmVybGF5LndpZHRoKCcxMDAlJyk7XG5cblx0XHRjYWxjV2lkdGhQZXJjZW50YWdlKHBvcHVwU2l6ZSwgJG9zUG9wdXBDb250ZW50KTtcblxuXHRcdCRvc1BvcHVwLmNzcyh7XG5cdFx0XHRsZWZ0OiAndW5zZXQnLFxuXHRcdFx0dG9wOiAndW5zZXQnLFxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0XHRtaW5XaWR0aDogcG9wdXBNaW5XaWR0aCArICdweCcsXG5cdFx0XHR3aWR0aDogcG9wdXBXaWR0aCArICdweCcsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVzaXplQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkYm9keSA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpO1xuXHRcdHZhciBjb250ZW50U2Nyb2xsVG9wID0gJGJvZHkuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAocG9wdXBTaXplID09PSAnU21hbGwnICYmICQoJy5kYXRlcmFuZ2VwaWNrZXI6dmlzaWJsZScpLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIHNraXAgdGhlIHJlc2V0IG9mIC5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYm9keS5jc3Moe1xuXHRcdFx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGxldCBib2R5Q29udGVudCA9IHBhZGRpbmdCb2R5XG5cdFx0XHQ/ICQoJy5MYXlvdXRQb3B1cF9fYm9keV9fY29udGVudCcpWzBdLnNjcm9sbEhlaWdodFxuXHRcdFx0OiAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5oZWlnaHQoKTtcblxuXHRcdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2hlYWRlcicpLmlubmVySGVpZ2h0KCkgfHwgMDtcblx0XHR2YXIgaW50cm9IZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2ludHJvJykuaW5uZXJIZWlnaHQoKSB8fCAwO1xuXHRcdHZhciBib2R5SGVpZ2h0ID0gYm9keUNvbnRlbnQgfHwgMDtcblx0XHR2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19mb290ZXInKS5pbm5lckhlaWdodCgpIHx8IDA7XG5cdFx0dmFyIGNvbnRlbnRIZWlnaHQgPSBoZWFkZXJIZWlnaHQgKyBpbnRyb0hlaWdodCArIGJvZHlIZWlnaHQgKyBmb290ZXJIZWlnaHQgKyBwYWRkaW5nQm9keTtcblx0XHR2YXIgZGlhbG9nSGVpZ2h0ID0gd2luZG93LnBhcmVudC4kKCcub3MtaW50ZXJuYWwtUG9wdXAub3MtaW50ZXJuYWwtdWktZGlhbG9nJykub3V0ZXJIZWlnaHQoKTtcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdy5wYXJlbnQpLmhlaWdodCgpO1xuXG5cdFx0aWYgKHBvcHVwU2l6ZSA9PT0gJ1NtYWxsJykge1xuXHRcdFx0dmFyIHBhcmVudEhlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XG5cblx0XHRcdGlmIChjb250ZW50SGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSB7XG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQocGFyZW50SGVpZ2h0IC0gNzApO1xuXHRcdFx0XHQkYm9keS5oZWlnaHQoJG9zUG9wdXBDb250ZW50LmhlaWdodCgpIC0gcGFkZGluZ0JvZHkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChjb250ZW50SGVpZ2h0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGNvbnRlbnRIZWlnaHQgPCBkaWFsb2dIZWlnaHQgJiYgU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc0ZpeGVkSGVpZ2h0KSB7XG5cdFx0XHRcdHZhciBmb3JjZWRCb2R5SGVpZ2h0ID0gZGlhbG9nSGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcblx0XHRcdFx0JGJvZHkuaGVpZ2h0KGZvcmNlZEJvZHlIZWlnaHQpO1xuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0IDwgZGlhbG9nSGVpZ2h0KSB7XG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoY29udGVudEhlaWdodCk7XG5cdFx0XHRcdGlmIChjb250ZW50SGVpZ2h0IDwgcG9wdXBNaW5IZWlnaHQpIHtcblx0XHRcdFx0XHR2YXIgZGlmZXJlbmNlID0gcG9wdXBNaW5IZWlnaHQgLSBjb250ZW50SGVpZ2h0O1xuXHRcdFx0XHRcdCRib2R5LmhlaWdodChib2R5SGVpZ2h0ICsgZGlmZXJlbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjb250ZW50SGVpZ2h0ID49IGRpYWxvZ0hlaWdodCAmJiBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzRml4ZWRIZWlnaHQpIHtcblx0XHRcdFx0dmFyIGZvcmNlZEJvZHlIZWlnaHQgPSBkaWFsb2dIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBpbnRyb0hlaWdodCAtIGZvb3RlckhlaWdodCAtIHBhZGRpbmdCb2R5O1xuXHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRlbnRIZWlnaHQgPj0gZGlhbG9nSGVpZ2h0KSB7XG5cdFx0XHRcdGlmIChjb250ZW50SGVpZ2h0ID4gcG9wdXBNYXhIZWlnaHQpIHtcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KHBvcHVwTWF4SGVpZ2h0KTtcblx0XHRcdFx0XHR2YXIgZm9yY2VkQm9keUhlaWdodCA9IHBvcHVwTWF4SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgLSBmb290ZXJIZWlnaHQgLSBwYWRkaW5nQm9keTtcblx0XHRcdFx0XHQkYm9keS5oZWlnaHQoZm9yY2VkQm9keUhlaWdodCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JG9zUG9wdXBDb250ZW50LmhlaWdodChjb250ZW50SGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdVbmV4cGVjdGVkIGNvbWJpbmF0aW9uLi4uJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIHdoZW4gRGF0ZVRpbWVSYW5nZVBpY2tlciBpcyBvcGVuZWRcblx0XHR2YXIgZGF0ZVJhbmdlUGlja2VyID0gJCgnLmRhdGVyYW5nZXBpY2tlcjp2aXNpYmxlJyk7XG5cdFx0aWYgKGRhdGVSYW5nZVBpY2tlci5sZW5ndGggPT09IDEpIHtcblx0XHRcdGlmIChkYXRlUmFuZ2VQaWNrZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gZGlhbG9nSGVpZ2h0KSB7XG5cdFx0XHRcdHZhciBkaWZmZXJlbmNlID0gZGF0ZVJhbmdlUGlja2VyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGRpYWxvZ0hlaWdodDtcblx0XHRcdFx0dmFyIGJvZHlIZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5vdXRlckhlaWdodCh0cnVlKTtcblxuXHRcdFx0XHQkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5oZWlnaHQoYm9keUhlaWdodCArIGRpZmZlcmVuY2UgKyBwYWRkaW5nQm9keSk7XG5cdFx0XHRcdCRvc1BvcHVwQ29udGVudC5oZWlnaHQoJCgnYm9keScpWzBdLnNjcm9sbEhlaWdodCk7XG5cblx0XHRcdFx0Y29uc3QgcG9wdXBUb3RhbEhlaWdodCA9ICRvc1BvcHVwQ29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0Y29uc3QgbmV3Q29udGVudEhlaWdodCA9ICQoJy5MYXlvdXRQb3B1cF9fYm9keScpLm91dGVySGVpZ2h0KHRydWUpICsgaGVhZGVySGVpZ2h0ICsgaW50cm9IZWlnaHQgKyBmb290ZXJIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHdpbmRvd0hlaWdodCA8IDcyMCkge1xuXHRcdFx0XHRcdGNvbnN0IGNvb3JkcyA9IGRhdGVSYW5nZVBpY2tlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgcG9pbnQgPSB3aW5kb3cucGFyZW50LnNjcm9sbFkgKyBjb29yZHMudG9wIC0gY29vcmRzLmhlaWdodDtcblx0XHRcdFx0XHRkYXRlUmFuZ2VQaWNrZXIuYWRkQ2xhc3MoJ2Ryb3AtdXAnKS5jc3MoJ3RvcCcsIHBvaW50KTtcblx0XHRcdFx0fSBlbHNlIGlmICh3aW5kb3dIZWlnaHQgPCA5ODAgJiYgbmV3Q29udGVudEhlaWdodCA+IHBvcHVwVG90YWxIZWlnaHQpIHtcblx0XHRcdFx0XHQkb3NQb3B1cENvbnRlbnQuY3NzKHtcblx0XHRcdFx0XHRcdG1heEhlaWdodDogbmV3Q29udGVudEhlaWdodCArICdweCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQkYm9keS5zY3JvbGxUb3AoY29udGVudFNjcm9sbFRvcCk7XG5cdH07XG5cblx0Y29uc3QgaW5jcmVhc2VIZWlnaHQgPSBmdW5jdGlvbihkaWZlcmVuY2UpIHtcblx0XHQkb3NQb3B1cENvbnRlbnQuaGVpZ2h0KCRvc1BvcHVwQ29udGVudC5oZWlnaHQoKSArIGRpZmVyZW5jZSk7XG5cdH07XG5cblx0Y29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gZnVuY3Rpb24oJGVsZW1lbnQpIHtcblx0XHR2YXIgJHRhcmdldEVsZW1lbnQgPSAkZWxlbWVudDtcblx0XHRpZiAoISEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdHZhciBzY3JvbGxUb09mZnNldEludGVydmFsO1xuXHRcdFx0c2Nyb2xsVG9PZmZzZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHNjcm9sbFRvT2Zmc2V0SW50ZXJ2YWwpO1xuXHRcdFx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLkxheW91dFBvcHVwX19oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKSB8fCAwO1xuXHRcdFx0XHR2YXIgaW50cm9IZWlnaHQgPSAkKCcuTGF5b3V0UG9wdXBfX2ludHJvJykub3V0ZXJIZWlnaHQodHJ1ZSkgfHwgMDtcblx0XHRcdFx0dmFyIGN1cnJlbnRCb2R5U2Nyb2xsID0gJCgnLkxheW91dFBvcHVwX19ib2R5X19jb250ZW50JylbMF0uc2Nyb2xsVG9wIHx8IDA7XG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtZW50T2Zmc2V0VG9wID0gJHRhcmdldEVsZW1lbnQub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0IC0gaW50cm9IZWlnaHQgKyBjdXJyZW50Qm9keVNjcm9sbCAtIDIwO1xuXHRcdFx0XHQkKCcuTGF5b3V0UG9wdXBfX2JvZHlfX2NvbnRlbnQnKS5zY3JvbGxUb3AodGFyZ2V0RWxlbWVudE9mZnNldFRvcCk7XG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjYWxjV2lkdGhQZXJjZW50YWdlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQod2luZG93LnBhcmVudCkuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdy5wYXJlbnQpLndpZHRoKCk7XG5cblx0XHRpZiAocG9wdXBTaXplID09PSAnU21hbGwnKSB7XG5cdFx0XHRsZXQgcGVyY2VudGFnZSA9IDAuMzM7XG5cblx0XHRcdGlmICh3aW5kb3dXaWR0aCA8PSAxMDI0KSBwZXJjZW50YWdlID0gMC41O1xuXHRcdFx0ZWxzZSBpZiAod2luZG93V2lkdGggPiAxMDI0ICYmIHdpbmRvd1dpZHRoIDw9IDE0NDApIHBlcmNlbnRhZ2UgPSAwLjQ7XG5cblx0XHRcdHBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIHBlcmNlbnRhZ2UpO1xuXHRcdFx0cG9wdXBNaW5XaWR0aCA9IDQwMDtcblx0XHR9IGVsc2UgaWYgKHBvcHVwU2l6ZSA9PT0gJ01lZGl1bScpIHtcblx0XHRcdGlmICh3aW5kb3dXaWR0aCA8PSAxMDI0KSBwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuODtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuUG9wdXBXaWR0aCkge1xuXHRcdFx0XHRcdGNhc2UgJ1hTbWFsbCc6XG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gMjAwO1xuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdTbWFsbCc6XG5cdFx0XHRcdFx0XHRwb3B1cE1pbldpZHRoID0gMzAwO1xuXHRcdFx0XHRcdFx0cG9wdXBXaWR0aFBlcmNlbnRhZ2UgPSAwLjM7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdNZWRpdW0nOlxuXHRcdFx0XHRcdFx0cG9wdXBNaW5XaWR0aCA9IDcwMDtcblx0XHRcdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gMC42O1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHBvcHVwTWluV2lkdGggPSA3MDA7XG5cdFx0XHRcdFx0XHRwb3B1cFdpZHRoUGVyY2VudGFnZSA9IDAuNztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBvcHVwV2lkdGhQZXJjZW50YWdlID0gU2FwcGhpcmVXaWRnZXRzLkxheW91dFBvcHVwLmNvbmZpZy5pc1RvdWNoID8gMC44IDogcG9wdXBXaWR0aFBlcmNlbnRhZ2U7XG5cdFx0XHR9XG5cblx0XHRcdHBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3dXaWR0aCAqIHBvcHVwV2lkdGhQZXJjZW50YWdlKTtcblx0XHRcdHBvcHVwTWluSGVpZ2h0ID0gMTAwO1xuXHRcdFx0cG9wdXBNYXhIZWlnaHQgPSBTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAuY29uZmlnLmlzVG91Y2hcblx0XHRcdFx0PyBwYXJzZUludCh3aW5kb3dIZWlnaHQgKiAwLjkpXG5cdFx0XHRcdDogcGFyc2VJbnQod2luZG93SGVpZ2h0ICogMC43KTtcblxuXHRcdFx0aWYgKFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRQb3B1cC5jb25maWcuaXNGaXhlZEhlaWdodCkgcG9wdXBIZWlnaHQgPSBwb3B1cE1heEhlaWdodDtcblx0XHRcdGVsc2UgcG9wdXBIZWlnaHQgPSB3aW5kb3cucGFyZW50LiQoJy5vcy1pbnRlcm5hbC1Qb3B1cC5vcy1pbnRlcm5hbC11aS1kaWFsb2cnKS5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHQkb3NQb3B1cENvbnRlbnQuY3NzKHtcblx0XHRcdFx0bWF4SGVpZ2h0OiBwb3B1cE1heEhlaWdodCArICdweCcsXG5cdFx0XHRcdG1pbkhlaWdodDogcG9wdXBNaW5IZWlnaHQgKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IHBvcHVwSGVpZ2h0ICsgJ3B4Jyxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnTGFyZ2UnKSB7XG5cdFx0XHRwb3B1cE1pbldpZHRoID0gcGFyc2VJbnQod2luZG93V2lkdGggKiAwLjgpO1xuXHRcdFx0cG9wdXBNYXhIZWlnaHQgPSBwYXJzZUludCh3aW5kb3dIZWlnaHQgKiAwLjkpO1xuXHRcdH0gZWxzZSBpZiAocG9wdXBTaXplID09PSAnRml4ZWQnKSB7XG5cdFx0XHRwb3B1cFdpZHRoID0gU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUG9wdXAucG9wdXBXaWR0aDtcblx0XHRcdHBvcHVwTWluV2lkdGggPSBTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQb3B1cC5wb3B1cFdpZHRoO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdHJlc2l6ZURpYWxvZyxcblx0XHRyZXNpemVDb250ZW50LFxuXHRcdGluY3JlYXNlSGVpZ2h0LFxuXHRcdHJlZHJhd0RpYWxvZ1dpbmRvdyxcblx0XHRzY3JvbGxUb0VsZW1lbnQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KS51bmxvYWQoZnVuY3Rpb24oKSB7XG5cdGlmICghISQoJy5MYXlvdXRQb3B1cCcpLmxlbmd0aCkge1xuXHRcdHdpbmRvdy50b3AuJCgnYm9keScpLmNzcyh7XG5cdFx0XHRvdmVyZmxvd1k6ICdzY3JvbGwnLFxuXHRcdH0pO1xuXHR9XG59KTtcbiIsIi8qIENvbXBvbmVudCBTdWJMYXlvdXRMZWZ0ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKCkge307XG5cblx0U2FwcGhpcmVXaWRnZXRzLlN1YkxheW91dExlZnQgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEFjdGlvbnNNZW51ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciAkdHJpZ2dlckVsZW1lbnQgPSAkKCcjJyArIGNvbmZpZy50cmlnZ2VyRWxlbWVudCk7XG5cdFx0dmFyICRjb250ZW50RWxlbWVudCA9ICQoJyMnICsgY29uZmlnLmNvbnRlbnRFbGVtZW50KTtcblxuXHRcdGlmICgkY29udGVudEVsZW1lbnQudGV4dCgpLmxlbmd0aCA8IDEpIHtcblx0XHRcdCR0cmlnZ2VyRWxlbWVudC5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0JChmdW5jdGlvbigpIHtcblx0XHRcdC8vIGluc2lkZSBhIGRvY3VtZW50IHJlYWR5IGR1ZSB0byBzYXBwaGlyZSBwb3B1cCBiaW5kZWQgZXZlbnRzXG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuXHRcdFx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJykge1xuXHRcdFx0XHRcdHN3aXRjaCAoY29uZmlnLnBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ2xlZnQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdyaWdodCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnYm90dG9tLWxlZnQnOlxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbiA9ICdib3R0b20tcmlnaHQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2JvdHRvbS1yaWdodCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ2JvdHRvbS1sZWZ0Jztcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd0b3AtbGVmdCc6XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uID0gJ3RvcC1yaWdodCc7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAndG9wLXJpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24gPSAndG9wLWxlZnQnO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JHRyaWdnZXJFbGVtZW50LnRvb2x0aXBzdGVyKHtcblx0XHRcdFx0XHRjb250ZW50OiAkKCc8c2VjdGlvbi8+JykuYXBwZW5kKCRjb250ZW50RWxlbWVudC5jbG9uZSh0cnVlLCB0cnVlKSksXG5cdFx0XHRcdFx0dHJpZ2dlcjogY29uZmlnLnRyaWdnZXJFdmVudCxcblx0XHRcdFx0XHRwb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0XHRcdFx0bWF4V2lkdGg6IGNvbmZpZy5tYXhXaWR0aCxcblx0XHRcdFx0XHR0aGVtZTpcblx0XHRcdFx0XHRcdCd0b29sdGlwc3Rlci1sb2NhdGlvbi0tJyArXG5cdFx0XHRcdFx0XHRjb25maWcubG9jYXRpb24gK1xuXHRcdFx0XHRcdFx0JyBBY3Rpb25zTWVudS10b29sdGlwIFBhZGRpbmctLScgK1xuXHRcdFx0XHRcdFx0Y29uZmlnLnBhZGRpbmcgK1xuXHRcdFx0XHRcdFx0JyBCb3JkZXItLScgK1xuXHRcdFx0XHRcdFx0Y29uZmlnLmJvcmRlcixcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCRjb250ZW50RWxlbWVudC5yZW1vdmUoKTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkFjdGlvbnNNZW51ID0ge1xuXHRcdGNyZWF0ZSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IEJ1dHRvbkxpbmsgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgJHdpZGdldCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLkJ1dHRvbkNsaWNrYCk7XG5cblx0XHRcdCR3aWRnZXQub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0Y29uc3QgX3RhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRcdGlmIChfdGFyZ2V0LmNsb3Nlc3QoJy5CdXR0b25DbGljay5jbGljaycpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0JCgnLkJ1dHRvbkNsaWNrLmNsaWNrJykucmVtb3ZlQ2xhc3MoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkJ1dHRvbkxpbmsgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgQ2FyZENoYXJ0cyAqL1xuU2FwcGhpcmVXaWRnZXRzLkNhcmRDaGFydHNQb3B1cCA9ICgpID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93WydDYXJkQ2hhcnRzU2Nyb2xsJ10gPSB7fTtcblx0XHRjb25zdCBpc0luc2lkZUlmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuXG5cdFx0bGV0ICRjb21wb25lbnQgPSAkKCcuQ2FyZENoYXJ0cycpO1xuXHRcdGxldCAkaGVhZGVyID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fSGVhZGVyJyk7XG5cdFx0bGV0ICRjb250ZW50ID0gJGNvbXBvbmVudC5maW5kKCcuQ2FyZENoYXJ0c19fQ29udGVudCcpO1xuXHRcdGxldCAkcHJvcGVydGllcyA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX1Byb3BlcnRpZXMnKTtcblx0XHRsZXQgJGhlYWRlckRpdiA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlckNoYXJ0ID4gZGl2Jyk7XG5cdFx0bGV0ICRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xuXHRcdGxldCAkYm9keUNvbnRlbnQgPSAkKCcuTGF5b3V0UG9wdXBfX2JvZHknKTtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSAmJiAhJGZha2VDb2x1bW5zLmxlbmd0aCkge1xuXHRcdFx0JGhlYWRlckRpdi5hcHBlbmQoYDxkaXYgY2xhc3M9J0Zha2VDb2x1bW5zJz48L2Rpdj5gKTtcblx0XHR9XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdCRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xuXG5cdFx0XHQkY29udGVudC5vbignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93WydDYXJkQ2hhcnRzU2Nyb2xsJ10uc2Nyb2xsRmluaXNoZWQpO1xuXHRcdFx0XHR3aW5kb3dbJ0NhcmRDaGFydHNTY3JvbGwnXS5zY3JvbGxGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCRjb250ZW50LnNjcm9sbFRvcCgpID4gMCkgJGhlYWRlci5hZGRDbGFzcygnU2hhZG93TWVkaXVtJyk7XG5cdFx0XHRcdFx0ZWxzZSAkaGVhZGVyLnJlbW92ZUNsYXNzKCdTaGFkb3dNZWRpdW0nKTtcblx0XHRcdFx0fSwgNTApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRcdCRjb21wb25lbnQgPSAkKCcuQ2FyZENoYXJ0cycpO1xuXHRcdFx0JGhlYWRlciA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX0hlYWRlcicpO1xuXHRcdFx0JGNvbnRlbnQgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19Db250ZW50Jyk7XG5cdFx0XHQkcHJvcGVydGllcyA9ICRjb21wb25lbnQuZmluZCgnLkNhcmRDaGFydHNfX1Byb3BlcnRpZXMnKTtcblx0XHRcdCRmYWtlQ29sdW1ucyA9ICQoJy5GYWtlQ29sdW1ucycpO1xuXHRcdFx0JGJvZHlDb250ZW50ID0gJCgnLkxheW91dFBvcHVwX19ib2R5Jyk7XG5cblx0XHRcdGxldCBoZWFkZXJUaXRsZUhlaWdodCA9IDYzO1xuXHRcdFx0Y29uc3QgaGVhZGVyUHJvcGVydGllc0hlaWdodCA9IDU2O1xuXG5cdFx0XHRjb25zdCAkY2hhcnRzID0gJGNvbnRlbnQuZmluZCgnLkNhcmRDaGFydHNfX0NoYXJ0cyAuT1NDaGFydCcpO1xuXG5cdFx0XHQkY2hhcnRzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICRjaGFydCA9ICQodGhpcyk7XG5cblx0XHRcdFx0Y29uc3QgbmV3V2lkdGggPSAkY29udGVudC53aWR0aCgpIC0gJHByb3BlcnRpZXMud2lkdGgoKSArIDQwO1xuXHRcdFx0XHQkY2hhcnQuaGlnaGNoYXJ0cygpLnNldFNpemUobmV3V2lkdGgsICRjaGFydC5oZWlnaHQoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdGNvbnN0IHRpbWVvdXRIZWlnaHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCAkaGVhZGVyVGl0bGUgPSAkY29tcG9uZW50LmZpbmQoJy5DYXJkQ2hhcnRzX19IZWFkZXJUaXRsZScpO1xuXG5cdFx0XHRcdFx0aGVhZGVyVGl0bGVIZWlnaHQgPSAkaGVhZGVyVGl0bGUubGVuZ3RoID8gJGhlYWRlclRpdGxlLm91dGVySGVpZ2h0KCkgOiBoZWFkZXJUaXRsZUhlaWdodCAtIDY7XG5cblx0XHRcdFx0XHRjb25zdCBuZXdIZWlnaHQgPSAkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmhlaWdodCgpIC0gaGVhZGVyVGl0bGVIZWlnaHQ7XG5cblx0XHRcdFx0XHQkZmFrZUNvbHVtbnMuY3NzKCdoZWlnaHQnLCBgJHtuZXdIZWlnaHQgKyBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0fXB4YCk7XG5cdFx0XHRcdFx0JGNvbnRlbnQuY3NzKCdoZWlnaHQnLCBgJHtuZXdIZWlnaHQgLSBoZWFkZXJQcm9wZXJ0aWVzSGVpZ2h0fXB4YCk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dEhlaWdodCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBTZWUgTXV0YXRpb25PYnNlcnZlciAoTGF5b3V0UG9wdXApXG5cdFx0U2FwcGhpcmVXaWRnZXRzLlBvcHVwc1RvQXZvaWRNdXRhdGlvbnMgPSBbJ0NoYXJ0c1BvcHVwJ107XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBDb2xsYXBzaWJsZVNpZGVQYW5lbCAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjbGFzcyBDb2xsYXBzaWJsZVNpZGVQYW5lbCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMub25Db21wb25lbnRJbml0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0b3BlbkNsb3NlU2lkZVBhbmVsKHRvT3Blbikge1xyXG5cdFx0XHRpZiAodG9PcGVuKSB7XHJcblx0XHRcdFx0dGhpcy4kY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnZ3JpZCcpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kY29tcG9uZW50LnJlbW92ZUNsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbC0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fQ29udGVudCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHRcdFx0fSwgMzUwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ29tcG9uZW50SW5pdCgpIHtcclxuXHRcdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7dGhpcy5vcHRpb25zLndpZGdldElkfWApO1xyXG5cdFx0XHR0aGlzLiRoZWFkZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19IZWFkZXInKTtcclxuXHRcdFx0dGhpcy4kY29udGVudCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX0NvbnRlbnQnKTtcclxuXHRcdFx0dGhpcy4kY291bnRlcjEgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19UaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHRcdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0XHR0aGlzLiRwYW5lbENvbnRlbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbENvbnRlbnQnKTtcclxuXHRcdFx0dGhpcy4kY2xvc2UgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbEhlYWRlciAuaWNvbicpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZUV2ZW50TGluayA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1BhbmVsSGVhZGVyIC5QYW5lbENsb3NlQnV0dG9uJyk7XHJcblxyXG5cdFx0XHR0aGlzLiRoZWFkZXIub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwodHJ1ZSkpO1xyXG5cdFx0XHR0aGlzLiRjbG9zZS5vbignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5vcGVuQ2xvc2VTaWRlUGFuZWwoZmFsc2UpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiRjbG9zZUV2ZW50TGluay5jbGljaygpO1xyXG5cclxuXHRcdFx0XHRpZiAoJCgnLlBhbmVsQ29udGVudEVtcHR5JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuQ29sbGFwc2libGVTaWRlUGFuZWwuY2xvc2UodGhpcy5vcHRpb25zLndpZGdldElkLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0F1dG9Db3VudGVyKSB7XHJcblx0XHRcdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGNvdW50ZXIxLnJlbW92ZUNsYXNzKCdIaWRkZW4nKTtcclxuXHRcdFx0XHR0aGlzLiRjb3VudGVyMi5yZW1vdmVDbGFzcygnSGlkZGVuJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGhhc0VtcHR5TWVzc2FnZSA9IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCcuQ29sbGFwc2libGVFbXB0eU1lc3NhZ2UnKTtcclxuXHRcdFx0Y29uc3QgY29udGVudFRvVmVyaWZ5ID0gaGFzRW1wdHlNZXNzYWdlLmxlbmd0aCA/IHRoaXMuJHBhbmVsQ29udGVudC5maW5kKCc+OmZpcnN0LWNoaWxkJykgOiB0aGlzLiRwYW5lbENvbnRlbnQ7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmhpZGVXaGVuRW1wdHkgJiYgIWNvbnRlbnRUb1ZlcmlmeS50ZXh0KCkpIHtcclxuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL0Rpb2dvIFJpYmVpcm8gLSBpdCBzZWVtcyB3ZSBvbmx5IG5lZWQgbWFyZ2lucyB3aGVuIHdlIHNob3cgdGhlIGhlYWRlclxyXG5cdFx0XHRpZighdGhpcy5vcHRpb25zLmhpZGVIZWFkZXIpIHtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlJykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wU21hbGwnKTtcclxuXHRcdFx0XHRcdCQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbDp2aXNpYmxlOmZpcnN0JykuYWRkQ2xhc3MoJ011bHRpTWFyZ2luVG9wTGFyZ2UnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNhbGN1bGF0ZUNvdW50ZXIgPSAocGFuZWxDb250ZW50LCBjb3VudGVyMSwgY291bnRlcjIpID0+IHtcclxuXHRcdGxldCB0b3RhbCA9IDA7XHJcblx0XHRjb25zdCBjb3VudGVycyA9IHBhbmVsQ29udGVudC5maW5kKCcuRXhhcGFuZGFibGVQbGFjZWhvbGRlci5Db3VudGVyJyk7XHJcblxyXG5cdFx0Y291bnRlcnMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dG90YWwgKz0gKyQodGhpcykudGV4dCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y291bnRlcjEudGV4dCh0b3RhbCk7XHJcblx0XHRjb3VudGVyMi50ZXh0KHRvdGFsKTtcclxuXHJcblx0XHRpZiAodG90YWwgPT09IDApIGNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQ291bnRlciA9ICh3aWRnZXRJZCwgY291bnRlcikgPT4ge1xyXG5cdFx0dGhpcy4kY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XHJcblx0XHR0aGlzLmNvdW50ZXIxID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fVGl0bGUgc3Bhbi5Db3VudGVyJyk7XHJcblx0XHR0aGlzLmNvdW50ZXIyID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxUaXRsZSBzcGFuLkNvdW50ZXInKTtcclxuXHJcblx0XHR0aGlzLmNvdW50ZXIxLnRleHQoY291bnRlcik7XHJcblx0XHR0aGlzLmNvdW50ZXIyLnRleHQoY291bnRlcik7XHJcblxyXG5cdFx0aWYgKCtjb3VudGVyID09PSAwKSB0aGlzLmNvdW50ZXIyLmFkZENsYXNzKCdDb2xvckxpZ2h0R3JleUJHJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xvc2UgPSAod2lkZ2V0SWQsIGhpZGVIZWFkZXIsIHVwZGF0ZUNvdW50ZXIpID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xyXG5cclxuXHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdDb2xsYXBzaWJsZVNpZGVQYW5lbCcpKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChoaWRlSGVhZGVyKSB7XHJcblx0XHRcdHRoaXMuJGNvbXBvbmVudC5hZGRDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLWhlYWRlckhpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnQ29sbGFwc2libGVTaWRlUGFuZWwtLW9wZW4nKTtcclxuXHJcblx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZScpLnJlbW92ZUNsYXNzKCdNdWx0aU1hcmdpblRvcFNtYWxsJyk7XHJcblx0XHQkKCcuQ29sbGFwc2libGVTaWRlUGFuZWw6dmlzaWJsZTpmaXJzdCcpLnJlbW92ZUNsYXNzKCdNdWx0aU1hcmdpblRvcExhcmdlJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tFbXB0eSA9IHdpZGdldElkID0+IHtcclxuXHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApLmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbCcpO1xyXG5cdFx0dGhpcy4kcGFuZWxDb250ZW50ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZVNpZGVQYW5lbF9fUGFuZWxDb250ZW50Jyk7XHJcblx0XHR0aGlzLiRjb3VudGVyMSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuQ29sbGFwc2libGVTaWRlUGFuZWxfX1RpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy4kY291bnRlcjIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLkNvbGxhcHNpYmxlU2lkZVBhbmVsX19QYW5lbFRpdGxlIHNwYW4uQ291bnRlcicpO1xyXG5cdFx0dGhpcy4kZW1wdHlNZXNzYWdlID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Db2xsYXBzaWJsZUVtcHR5TWVzc2FnZScpO1xyXG5cclxuXHRcdHRoaXMuJGVtcHR5TWVzc2FnZS5zaG93KCk7XHJcblxyXG5cdFx0Y2FsY3VsYXRlQ291bnRlcih0aGlzLiRwYW5lbENvbnRlbnQsIHRoaXMuJGNvdW50ZXIxLCB0aGlzLiRjb3VudGVyMik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBDb2xsYXBzaWJsZVNpZGVQYW5lbChjb25maWcpKTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkNvbGxhcHNpYmxlU2lkZVBhbmVsID0geyBjcmVhdGUsIGNsb3NlLCB1cGRhdGVDb3VudGVyLCBjaGVja0VtcHR5IH07XHJcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgQ29tcExpbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRmdW5jdGlvbiBTZWN0aW9uQ29tcGxpbmUoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0Ly8gT2JqZWN0IHRvIHNhdmUgc3RhdHNcblx0XHR2YXIgcHJldmlld3N0YXQgPSBbXTtcblxuXHRcdC8vIHNldCBjbGljayBldmVudHNcblx0XHRmdW5jdGlvbiBjbGlja0V2ZW50cyhvYikge1xuXHRcdFx0Ly8gc3RvcmUgcXVlcnlzIGluIGEgc2luZ2xlIHZhclxuXHRcdFx0dmFyIGhvbGRlciA9ICQob2IpLmNsb3Nlc3QoJy5Db21wTGluZScpO1xuXHRcdFx0dmFyIFNlY3Rpb24gPSAkKG9iKS5jbG9zZXN0KCcuQ29tcExpbmVFeHBhbmRhYmxlJyk7XG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuQ29tcExpbmVfRXhwYW5kJyk7XG5cblx0XHRcdC8vIGdldCBpZFxuXHRcdFx0dmFyIGlkID0gaG9sZGVyLmF0dHIoJ2lkJyk7XG5cblx0XHRcdHZhciB0ZW1wSGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRpZiAoU2VjdGlvbi5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHQsIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRyYW5zaXRpb25zIGFyZSBkaXNhYmxlZFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5hZGRDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodChTZWN0aW9uQ29udGVudC5oZWlnaHQoKSk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50WzBdLm9mZnNldEhlaWdodDsgLy8gaGFjayB0byBmb3JjZSBhIHJlcGFpbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQucmVtb3ZlQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXG5cdFx0XHRcdC8vIENvbGxhcHNlIGNvbnRlbnRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDYWxjIGFuZCBzZXQgYSBmaXhlZCBoZWlnaHRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdHRlbXBIZWlnaHQgPSBTZWN0aW9uQ29udGVudC5oZWlnaHQoKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KDApO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQodGVtcEhlaWdodCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdFNlY3Rpb24uYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSB0cnVlO1xuXG5cdFx0XHRcdGlmICgkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTgnKSB8fCAkKCcuUGFnZScpLmhhc0NsYXNzKCdpZTknKSkge1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGhvbGRlci5oYXNDbGFzcygnbm90UmVuZGVySW50ZXJhY3Rpb25zJykpIHtcblx0XHRcdFx0XHRob2xkZXIuZmluZCgnLkNvbXBMaW5lLXRvZ2dsZS1pbnRlcmFjdGlvbnMnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUnKS5vZmYoKTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoJy5Db21wTGluZV9oZWFkTGluZSBpbnB1dCwgLkNvbXBMaW5lX2hlYWRMaW5lIHNlbGVjdCwgLkNvbXBMaW5lX2hlYWRMaW5lIGEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykudW5iaW5kKCdjbGljaycpO1xuXHRcdFx0JCgnLkNvbXBMaW5lX19leHBhbmRJY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMucGFyZW50RWxlbWVudCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5Db21wTGluZUV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRdID09IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcpXG5cdFx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRcdGNsaWVudDogc3RhdCxcblx0XHRcdFx0XHRcdHNlcnZlcjogc3RhdCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3VyZW50IHN0YXRlIChhamF4IHN0YXRlIHggaW5pdGlhbCBzdGF0ZSlcblx0XHRcdFx0dmFyIGN1clN0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgc3RhcnQgZXhwYW5kYWJsZVxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdGN1clN0YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIGFqYXggIT0gaW5pdGlhbCBzZXJ2ZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN1clN0YXRlICE9XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdF1bJ3NlcnZlciddID0gY3VyU3RhdGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaGFzIGNsYXNzIGV4cGFuZGVkXG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0cHJldmlld3N0YXRbXG5cdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHQuY2xvc2VzdCgnLkNvbXBMaW5lJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaWQnKVxuXHRcdFx0XHRcdFx0XVsnY2xpZW50J10gPT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5jaGlsZHJlbignLkNvbXBMaW5lX0V4cGFuZCcpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5Db21wTGluZScpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XHRcdF1bJ2NsaWVudCddID09IHRydWUgJiZcblx0XHRcdFx0XHRcdCEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudHNcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XG5cdFx0XHQkKCcuQ29tcExpbmVFeHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gYWRkIHN0YXQgb24gYXJyYXlcblx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0c3RhdCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdHByZXZpZXdzdGF0W1xuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuQ29tcExpbmUnKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJylcblx0XHRcdFx0XSA9IHtcblx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0c2VydmVyOiBzdGF0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBjbGljayBldmVudHNcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLnVuYmluZCgnY2xpY2snKTtcblx0XHRcdCQoJy5Db21wTGluZV9fZXhwYW5kSWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzLnBhcmVudEVsZW1lbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKCcuQ29tcExpbmVfaGVhZExpbmUgaW5wdXQsIC5Db21wTGluZV9oZWFkTGluZSBzZWxlY3QsIC5Db21wTGluZV9oZWFkTGluZSBhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHVuZWNlc3NhcnkgYmVoYXZpb3JzXG5cblx0XHRcdC8vIGV2ZW50IGFqYXhcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFNlY3Rpb25Db21wbGluZSgpO1xuXG5cdFx0ZXhwYW5kYWJsZS5pbml0KCk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkNvbXBMaW5lID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IENvdW50cnlQaG9uZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0Y29uc3QgYWRkaXRpb25hbFZhbGlkYXRpb25zID0gY29uZmlnLmFkZGl0aW9uYWxWYWxpZGF0aW9ucztcblxuXHRcdGNvbnN0IGNvdW50cnlQaG9uZUlucHV0ID0gd2luZG93LmludGxUZWxJbnB1dCgkZWxlbWVudCwge1xuXHRcdFx0aW5pdGlhbENvdW50cnk6IGNvbmZpZy5pbml0aWFsQ291bnRyeSxcblx0XHRcdHByZWZlcnJlZENvdW50cmllczogY29uZmlnLnByZWZlcnJlZENvdW50cmllcyxcblx0XHRcdHNlcGFyYXRlRGlhbENvZGU6IGNvbmZpZy5zZXBhcmF0ZURpYWxDb2RlLFxuXHRcdFx0bmF0aW9uYWxNb2RlOiBjb25maWcubmF0aW9uYWxNb2RlLFxuXHRcdFx0YXV0b1BsYWNlaG9sZGVyOiBjb25maWcuYXV0b1BsYWNlaG9sZGVyID8gJ3BvbGl0ZScgOiBmYWxzZSxcblx0XHRcdGZvcm1hdE9uRGlzcGxheTogZmFsc2UsXG5cdFx0XHR1dGlsc1NjcmlwdDogJy9WM19QYXQvanMvdXRpbHMuanMnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJGlucHV0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdFx0JGlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmICgkaW5wdXQudmFsKCkgPT09ICcrJyB8fCAkaW5wdXQudmFsKCkgPT09ICcnKSB7XG5cdFx0XHRcdGNvdW50cnlQaG9uZUlucHV0LnNldENvdW50cnkoY29uZmlnLmluaXRpYWxDb3VudHJ5KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRpbnB1dC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBhZGRpdGlvbmFsVmFsaWRhdGlvbnMuZmluZChpID0+IGkuQ291bnRyeVBob25lVmFsaWRhdGlvbnMuQ291bnRyeUNvZGUgPT09IHNlbGVjdGVkQ291bnRyeS5pc28yKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gJGlucHV0LnZhbCgpLnRyaW0oKTtcblxuXHRcdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xuXG5cdFx0XHRpZiAoZmlsdGVyKSB7XG5cdFx0XHRcdGNvbnN0IHdpdGhvdUNvZGUgPSB2YWx1ZS5yZXBsYWNlKGArJHtzZWxlY3RlZENvdW50cnkuZGlhbENvZGV9YCwgJycpO1xuXG5cdFx0XHRcdGlzVmFsaWQgPSB3aXRob3VDb2RlLnRyaW0oKS5sZW5ndGggKyAxIDw9IGZpbHRlci5Db3VudHJ5UGhvbmVWYWxpZGF0aW9ucy5QaG9uZUxlbmd0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlID09PSBgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWApIHtcblx0XHRcdFx0JGlucHV0LnZhbChgKyR7c2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfSBgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNWYWxpZCAmJlxuXHRcdFx0XHQoZS5tZXRhS2V5IHx8IC8vIGNtZC9jdHJsXG5cdFx0XHRcdGUud2hpY2ggPD0gMCB8fCAvLyBhcnJvdyBrZXlzXG5cdFx0XHRcdGUud2hpY2ggPT0gOCB8fCAvLyBkZWxldGUga2V5XG5cdFx0XHRcdFx0KCF2YWx1ZS5sZW5ndGggJiYgZS5rZXkgPT09ICcrJykgfHxcblx0XHRcdFx0XHQvWzAtOV0vLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSkpXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0JGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY291bnRyeWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0b25DaGFuZ2VDb3VudHJ5KCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNoYW5nZUNvdW50cnkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCAkc2VsZWN0ZWRDb3VudHJ5SW5wdXQgPSAkKGAjJHtjb25maWcuc2VsZWN0ZWRDb3VudHJ5SW5wdXR9YCk7XG5cdFx0XHRjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJ5UGhvbmVJbnB1dC5nZXRTZWxlY3RlZENvdW50cnlEYXRhKCk7XG5cblx0XHRcdCRzZWxlY3RlZENvdW50cnlJbnB1dC52YWwoc2VsZWN0ZWRDb3VudHJ5LmlzbzIpO1xuXHRcdFx0JHNlbGVjdGVkQ291bnRyeUlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdH07XG5cblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdG9uQ2hhbmdlQ291bnRyeSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Db3VudHJ5UGhvbmUgPSB7XG5cdFx0Y3JlYXRlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cdGNsYXNzIERhdGFUYWJsZXMge1xuXHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHtjb25maWcud2lkZ2V0SWR9YCk7XG5cdFx0XHR0aGlzLiR0YWJsZSA9IHRoaXMuJHdpZGdldC5maW5kKCd0YWJsZScpO1xuXHRcdFx0dGhpcy4kdGFibGUuYWRkQ2xhc3MoJ2NlbGwtYm9yZGVyIGNvbXBhY3QnKTtcblx0XHRcdHRoaXMub25Jbml0KCk7XG5cdFx0fVxuXG5cdFx0b25Jbml0KCkge1xuXHRcdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0XHQuLi50aGlzLmNvbmZpZyxcblx0XHRcdFx0Zml4ZWRDb2x1bW5zOiB0cnVlLFxuXHRcdFx0XHRpbmZvOiBmYWxzZSxcblx0XHRcdFx0b3JkZXJpbmc6IGZhbHNlLFxuXHRcdFx0XHRwYWdpbmc6IGZhbHNlLFxuXHRcdFx0XHRzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcblx0XHRcdFx0c2Nyb2xsWDogdHJ1ZSxcblx0XHRcdFx0c2VhcmNoaW5nOiBmYWxzZSxcblx0XHRcdH07XG5cblx0XHRcdCQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiR0YWJsZS5EYXRhVGFibGUodGhpcy5vcHRpb25zKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0YVRhYmxlcyhjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuRGF0YVRhYmxlcyA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KSgpO1xuIiwiLyogQ29tcG9uZW50IERhdGVUaW1lUmFuZ2VQaWNrZXIgKi9cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xyXG5cdHZhciBhbGxEYXRlVGltZVJhbmdlUGlja2VycyA9IFtdO1xyXG5cclxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChhbGxEYXRlVGltZVJhbmdlUGlja2Vyc1tpXS5jb25maWcud2lkZ2V0SWQgPT09IGNvbmZpZy53aWRnZXRJZCkge1xyXG5cdFx0XHRcdGFsbERhdGVUaW1lUmFuZ2VQaWNrZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgRGF0ZVRpbWVSYW5nZVBpY2tlcihjb25maWcpO1xyXG5cdFx0YWxsRGF0ZVRpbWVSYW5nZVBpY2tlcnMucHVzaCh3aW5kb3dbY29uZmlnLndpZGdldElkXSk7XHJcblx0fTtcclxuXHJcblx0dmFyIERhdGVUaW1lUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5jdXJyZW50TG9jYWxlID0gY29uZmlnLmN1cnJlbnRMb2NhbGU7XHJcblxyXG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcud2lkZ2V0SWQpO1xyXG5cdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdEYXRlVGltZVJhbmdlUGlja2VyJyk7XHJcblx0XHR0aGlzLiRjbGVhciA9IHRoaXMuJHdpZGdldC5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jbGVhcicpO1xyXG5cdFx0dGhpcy4kbGFiZWwgPSB0aGlzLiR3aWRnZXQuZmluZCgnLkRhdGVUaW1lUmFuZ2VQaWNrZXItbGFiZWwnKTtcclxuXHJcblx0XHR0aGlzLmlzRW1wdHlIb3VyID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdhdHRhY2hlZElucHV0Jyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLXBsYWNlaG9sZGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0XHRcdHRoaXMuJG1vZGVsLmF0dHIoJ3RhYkluZGV4JywgLTEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0ID0gJCgnIycgKyBjb25maWcuaW5wdXRJZCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZy5hbGxvd3NUeXBpbmcpIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncmVhZG9ubHknLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50TG9jYWxlID09PSAnQVInKSB7XHJcblx0XHRcdG1vbWVudC5sb2NhbGUoJ2FyLWt3Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9wdGlvbnMgPSB7fTtcclxuXHRcdG9wdGlvbnMuc3RhcnREYXRlID0gY29uZmlnLnN0YXJ0RGF0ZTtcclxuXHRcdG9wdGlvbnMuc2luZ2xlRGF0ZVBpY2tlciA9IGNvbmZpZy5zaW5nbGVEYXRlUGlja2VyO1xyXG5cdFx0b3B0aW9ucy5hdXRvQXBwbHkgPSBjb25maWcuYXV0b0FwcGx5O1xyXG5cdFx0b3B0aW9ucy5hdXRvVXBkYXRlSW5wdXQgPSBjb25maWcuYXV0b1VwZGF0ZUlucHV0O1xyXG5cdFx0b3B0aW9ucy50aW1lUGlja2VyID0gY29uZmlnLnRpbWVQaWNrZXI7XHJcblx0XHRvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXIgPSBjb25maWcudGltZVBpY2tlcjI0SG91cjtcclxuXHRcdG9wdGlvbnMudGltZVBpY2tlckluY3JlbWVudCA9IGNvbmZpZy50aW1lUGlja2VySW5jcmVtZW50O1xyXG5cdFx0b3B0aW9ucy5zaG93RHJvcGRvd25zID0gY29uZmlnLmhhc0Ryb3Bkb3duczsgLy8gTW9udGgvWWVhciBQaWNrZXJcclxuXHRcdG9wdGlvbnMuZHJvcHMgPSBjb25maWcuZHJvcHM7XHJcblx0XHRvcHRpb25zLm9wZW5zID0gY29uZmlnLmN1cnJlbnRMb2NhbGUgPT09ICdBUicgJiYgY29uZmlnLm9wZW5zICE9ICdjZW50ZXInID8gJ2xlZnQnIDogY29uZmlnLm9wZW5zO1xyXG5cclxuXHRcdHZhciBzdHJpbmdDb25uZWN0aW9uID0gJ1ssIGF0XSc7XHJcblxyXG5cdFx0aWYgKGNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdGlmICghdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkgdGhpcy4kaW5wdXQucHJvcCgncGxhY2Vob2xkZXInLCAnREQtTU0tWVlZWSBISDpNTScpO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMudGltZVBpY2tlcjI0SG91cikge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdExhYmVsID0gdGhpcy5jb25maWcuaGFzWWVhcldoZW5UZXh0XHJcblx0XHRcdFx0XHQ/ICdEIE1NTSBZWVlZJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIEhIOm1tJ1xyXG5cdFx0XHRcdFx0OiAnRCBNTU0nICsgc3RyaW5nQ29ubmVjdGlvbiArICcgSEg6bW0nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gaGg6bW0gQWA7XHJcblx0XHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHRcclxuXHRcdFx0XHRcdD8gJ0QgTU1NIFlZWVknICsgc3RyaW5nQ29ubmVjdGlvbiArICcgaGg6bW0gQSdcclxuXHRcdFx0XHRcdDogJ0QgTU1NJyArIHN0cmluZ0Nvbm5lY3Rpb24gKyAnIGhoOm1tIEEnO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ29ubHlEYXRlJyk7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHRoaXMuJGlucHV0LnByb3AoJ3BsYWNlaG9sZGVyJywgJ0RELU1NLVlZWVknKTtcclxuXHJcblx0XHRcdHRoaXMuY29uZmlnLmZvcm1hdElucHV0ID0gdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdDtcclxuXHRcdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNZZWFyV2hlblRleHQgPyAnRCBNTU0gWVlZWScgOiAnRCBNTU0nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0dGhpcy4kd2lkZ2V0LmFkZENsYXNzKCdyYW5nZURhdGVzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb25maWcuZm9ybWF0TGFiZWwgPSB0aGlzLmNvbmZpZy5oYXNXZWVrRGF5TmFtZVdoZW5UZXh0XHJcblx0XHRcdD8gJ2RkZFssIF0nICsgdGhpcy5jb25maWcuZm9ybWF0TGFiZWxcclxuXHRcdFx0OiB0aGlzLmNvbmZpZy5mb3JtYXRMYWJlbDtcclxuXHJcblx0XHRvcHRpb25zLmxvY2FsZSA9IHtcclxuXHRcdFx0ZGlyZWN0aW9uOiBjb25maWcuY3VycmVudExvY2FsZSA9PT0gJ0FSJyA/ICdydGwnIDogJ2x0cicsXHJcblx0XHRcdGZvcm1hdDogdGhpcy5jb25maWcuZm9ybWF0SW5wdXQsXHJcblx0XHRcdGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcclxuXHRcdFx0YXBwbHlMYWJlbDogJ0FwcGx5JyxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHR0aGlzLiR3aWRnZXQuYWRkQ2xhc3MoJ3RleHRUcmlnZ2VyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbnVsbGREYXRlcyA9IFsnMDEtMDEtMTkwMCAwMDowMDowMCcsICcxOTAwLTAxLTAxIDAwOjAwOjAwJ107XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmREYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcuZW5kRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5lbmREYXRlID0gY29uZmlnLmVuZERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5tYXhEYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWF4RGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5tYXhEYXRlID0gY29uZmlnLm1heERhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5taW5EYXRlICYmICFudWxsZERhdGVzLnNvbWUoaSA9PiBpID09PSBjb25maWcubWluRGF0ZSkpIHtcclxuXHRcdFx0b3B0aW9ucy5taW5EYXRlID0gY29uZmlnLm1pbkRhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5EaXNhYmxlZFdlZWtEYXlzKSB7XHJcblx0XHRcdHZhciBkaXNhYmxlZFdlZWtEYXlzID0gY29uZmlnLkRpc2FibGVkV2Vla0RheXMuc3BsaXQoJywnKTtcclxuXHRcdFx0b3B0aW9ucy5pc0ludmFsaWREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBkaXNhYmxlZFdlZWtEYXlzLmluY2x1ZGVzKFxyXG5cdFx0XHRcdFx0bW9tZW50KGRhdGUpXHJcblx0XHRcdFx0XHRcdC5kYXkoKVxyXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5kYXRlcmFuZ2VwaWNrZXIob3B0aW9ucywgZnVuY3Rpb24oc3RhcnREYXRlLCBlbmREYXRlLCBsYWJlbCkge1xyXG5cdFx0XHQvLyBhZnRlciBhIHNlbGVjdGlvbiBpcyBtYWRlXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHRmb3JtYXQgPSBgJHtfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW1gO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIF90aGlzLiRtb2RlbC52YWwoc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpKTtcclxuXHRcdFx0XHRcdGVsc2UgX3RoaXMuJG1vZGVsLnZhbChzdGFydERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBzdGFydCwgZW5kO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gZW5kRGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnREYXRlLmZvcm1hdChfdGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdCk7XHJcblx0XHRcdFx0XHRcdGVuZCA9IGVuZERhdGUuZm9ybWF0KF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudmFsKGAke3N0YXJ0fSAgwrcgICR7ZW5kfWApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpbml0aWFsVmFsdWUgPSBfdGhpcy4kaW5wdXQudmFsKCk7XHJcblx0XHRcdGNvbnN0IGFsbG93c01NWVkgPSBfdGhpcy5jb25maWcuYWxsb3dzVHlwaW5nICYmIF90aGlzLmNvbmZpZy5hbGxvd3NUeXBlTU1ZWSAmJiBfdGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcjtcclxuXHJcblx0XHRcdGlmIChhbGxvd3NNTVlZICYmIGluaXRpYWxWYWx1ZS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHRfdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKG1vbWVudChgMDEke2luaXRpYWxWYWx1ZX1gLCAnRERNTVlZJykpO1xyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0XHRcdGxldCBmb3JtYXQgPSAnJztcclxuXHJcblx0XHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLnRpbWVQaWNrZXIpIGZvcm1hdCA9IGAke190aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBISDptbWA7XHJcblx0XHRcdFx0XHRlbHNlIGZvcm1hdCA9IF90aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0O1xyXG5cclxuXHRcdFx0XHRcdF90aGlzLiRtb2RlbC52YWwoX3RoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoZm9ybWF0KSk7XHJcblx0XHRcdFx0XHRfdGhpcy4kbW9kZWwudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBub3cgd2UgaGF2ZSBhIHByb3BlciBpbnN0YW5jZVxyXG5cdFx0dGhpcy5waWNrZXIgPSB0aGlzLiRpbnB1dC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKTtcclxuXHJcblx0XHR0aGlzLiRjYWxlbmRhciA9ICQodGhpcy5waWNrZXIuY29udGFpbmVyKTtcclxuXHJcblx0XHRpZiAoISF0aGlzLmNvbmZpZy5jc3NDbGFzcykge1xyXG5cdFx0XHR0aGlzLiRjYWxlbmRhci5hZGRDbGFzcyh0aGlzLmNvbmZpZy5jc3NDbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kdGltZUhvbGRlciA9IHRoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJyk7XHJcblx0XHR0aGlzLiRidXR0b25zSG9sZGVyID0gdGhpcy4kY2FsZW5kYXIuZmluZCgnLmRycC1idXR0b25zJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHR0aGlzLiRidXR0b25zSG9sZGVyLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY29uZmlnLmlzRW1wdHlTdGFydERhdGUpIHtcclxuXHRcdFx0dGhpcy5jbGVhcihmYWxzZSk7XHJcblx0XHR9IGVsc2UgaWYgKGNvbmZpZy5pc0VtcHR5U3RhcnRIb3VyKSB7XHJcblx0XHRcdHRoaXMuaXNFbXB0eUhvdXIgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkKSB7XHJcblx0XHRcdHRoaXMubmF0aXZlRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuY3VzdG9tRXZlbnRzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XHJcblx0XHRcdHRoaXMuJGlucHV0Lm9mZignY2xpY2sgZm9jdXMga2V5ZG93biBrZXl1cCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ3VzdG9tVmFsaWRhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmhhbmRsZUN1c3RvbVZhbGlkYXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFRPIERPXHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUubmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzR29Ub2RheSkge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5jYWxlbmRhci10YWJsZSB0aGVhZCB0cicpXHJcblx0XHRcdFx0XHQuZXEoMClcclxuXHRcdFx0XHRcdC5hZnRlcihcclxuXHRcdFx0XHRcdFx0Jzx0cj48dGQgY29sc3Bhbj1cIjdcIiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItZ290b2RheVwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdF90aGlzLmNvbmZpZy5nb1RvZGF5TGFiZWwgK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RkPjwvdHI+J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRpZiAoX3RoaXMuY29uZmlnLmRyb3BzID09PSAndXAnKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kY2FsZW5kYXIuY3NzKCd0b3AnLCBfdGhpcy4kY2FsZW5kYXIub2Zmc2V0KCkudG9wIC0gMjQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uKCk7XHJcblxyXG5cdFx0XHRpZiAoIV90aGlzLmNvbmZpZy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcblx0XHRcdFx0JCgnLmRycC1zZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRsZXQgdGV4dCA9ICQodGhpcykudGV4dCgpO1xyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvLS9naSwgJ8K3Jyk7XHJcblxyXG5cdFx0XHRcdFx0JCh0aGlzKS50ZXh0KHRleHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignc2hvdy5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlciAmJiBfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdFx0aWYgKF90aGlzLmlzRW1wdHlIb3VyKSB7XHJcblx0XHRcdFx0XHRfdGhpcy4kdGltZUhvbGRlci5jc3MoJ29wYWNpdHknLCAwLjUpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF90aGlzLiR0aW1lSG9sZGVyLmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdF90aGlzLmhhbmRsZVZpZXdwb3J0UG9zaXRpb24oKTtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLkRhdGVUaW1lUmFuZ2VQaWNrZXIub3BlbmVkV2lkZ2V0SWQgPSBfdGhpcy5jb25maWcud2lkZ2V0SWQ7XHJcblxyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmNzc0NsYXNzID09PSAnQ2FsZW5kYXJQb3B1cCcgJiYgd2luZG93LmZyYW1lRWxlbWVudCkge1xyXG5cdFx0XHRcdGNvbnN0IG9sZEJvZHlIZWlnaHQgPSAkKCdib2R5JylbMF0uc2Nyb2xsSGVpZ2h0ICsgODtcclxuXHRcdFx0XHRjb25zdCBjYWxlbmRhclNhZmVIZWlnaHQgPSBfdGhpcy4kY2FsZW5kYXIub3V0ZXJIZWlnaHQoKSArIDMyO1xyXG5cclxuXHRcdFx0XHRjb25zdCBuZXdIZWlnaHQgPSBvbGRCb2R5SGVpZ2h0ID4gY2FsZW5kYXJTYWZlSGVpZ2h0ID8gb2xkQm9keUhlaWdodCA6IGNhbGVuZGFyU2FmZUhlaWdodDtcclxuXHJcblx0XHRcdFx0JCgnPGRpdiBjbGFzcz1cIkNhbGVuZGFyUG9wdXBfX092ZXJsYXlcIj48L2Rpdj4nKS5pbnNlcnRBZnRlcihfdGhpcy4kY2FsZW5kYXIpO1xyXG5cclxuXHRcdFx0XHQkKHdpbmRvdy5mcmFtZUVsZW1lbnQpLmFuaW1hdGUoeyBtaW5IZWlnaHQ6IG5ld0hlaWdodCB9KTtcclxuXHRcdFx0XHQkKCdib2R5JykuYW5pbWF0ZSh7IG1pbkhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLiRpbnB1dC5vbignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7XHJcblx0XHRcdF90aGlzLiRjYWxlbmRhci5maW5kKCcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1jbGVhcicpLnJlbW92ZSgpO1xyXG5cdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuY3NzQ2xhc3MgPT09ICdDYWxlbmRhclBvcHVwJyAmJiB3aW5kb3cuZnJhbWVFbGVtZW50KSB7XHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jc3MoeyBtaW5IZWlnaHQ6ICd1bnNldCcgfSk7XHJcblx0XHRcdFx0JCgnYm9keScpLmNzcyh7IG1pbkhlaWdodDogJ3Vuc2V0JyB9KTtcclxuXHJcblx0XHRcdFx0JCgnLkNhbGVuZGFyUG9wdXBfX092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ291dHNpZGVDbGljay5kYXRlcmFuZ2VwaWNrZXInLCBmdW5jdGlvbihldmVudCwgcGlja2VyKSB7fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ3RpbWVjaGFuZ2VkLmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcuaGFzQ2xlYXJIb3VyKSB7XHJcblx0XHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5jYWxlbmRhci10aW1lJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cIkRhdGVUaW1lUmFuZ2VQaWNrZXItY2FsZW5kYXItY2xlYXJcIj48L3NwYW4+Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90aGlzLmNvbmZpZy5hdXRvQXBwbHkpIHtcclxuXHRcdFx0XHRfdGhpcy4kY2xlYXIucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0X3RoaXMudXBkYXRlTGFiZWxpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdjbGlja0RhdGUuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXZlbnQsIHBpY2tlcikge1xyXG5cdFx0XHRpZiAoX3RoaXMuY29uZmlnLmF1dG9BcHBseSkge1xyXG5cdFx0XHRcdF90aGlzLiRjbGVhci5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy4kaW5wdXQub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2ZW50LCBwaWNrZXIpIHtcclxuXHRcdFx0X3RoaXMuJGNsZWFyLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRfdGhpcy51cGRhdGVMYWJlbGluZygpO1xyXG5cdFx0XHRfdGhpcy5zZW5kTm90aWZpY2F0aW9uKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jdXN0b21FdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHR0aGlzLiRsYWJlbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X3RoaXMucGlja2VyLnRvZ2dsZSgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLiRjbGVhci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0X3RoaXMuY2xlYXIoKTtcclxuXHRcdFx0X3RoaXMucGlja2VyLmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy4kY2FsZW5kYXIub24oJ2NsaWNrJywgJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChfdGhpcy5jb25maWcudGltZVBpY2tlcjI0SG91cikge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5ob3Vyc2VsZWN0JylcclxuXHRcdFx0XHRcdC52YWwoJzAnKVxyXG5cdFx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF90aGlzLiRjYWxlbmRhclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5ob3Vyc2VsZWN0JylcclxuXHRcdFx0XHRcdC52YWwoJzEyJylcclxuXHRcdFx0XHRcdC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHQuZmluZCgnLm1pbnV0ZXNlbGVjdCcpXHJcblx0XHRcdFx0LnZhbCgnMCcpXHJcblx0XHRcdFx0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRfdGhpcy4kY2FsZW5kYXJcclxuXHRcdFx0XHQuZmluZCgnLmFtcG1zZWxlY3QnKVxyXG5cdFx0XHRcdC52YWwoJ0FNJylcclxuXHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdF90aGlzLmlzRW1wdHlIb3VyID0gdHJ1ZTtcclxuXHRcdFx0X3RoaXMuJHRpbWVIb2xkZXIuY3NzKCdvcGFjaXR5JywgMC41KTtcclxuXHRcdFx0X3RoaXMuJGNhbGVuZGFyLmZpbmQoJy5EYXRlVGltZVJhbmdlUGlja2VyLWNhbGVuZGFyLWNsZWFyJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuJGNhbGVuZGFyLm9uKCdjbGljaycsICcuRGF0ZVRpbWVSYW5nZVBpY2tlci1jYWxlbmRhci1nb3RvZGF5JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdF90aGlzLnBpY2tlci5zZXRTdGFydERhdGUobW9tZW50KCkpO1xyXG5cdFx0XHRfdGhpcy5waWNrZXIuc2V0RW5kRGF0ZShtb21lbnQoKSk7XHJcblxyXG5cdFx0XHRfdGhpcy5waWNrZXIuaGlkZSgpO1xyXG5cclxuXHRcdFx0aWYgKCFfdGhpcy5jb25maWcuYXV0b1VwZGF0ZUlucHV0IHx8IF90aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlciB8fCBfdGhpcy5jb25maWcuYXR0YWNoVG9JbnB1dCkge1xyXG5cdFx0XHRcdF90aGlzLnVwZGF0ZUxhYmVsaW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuJG1vZGVsICYmIF90aGlzLiRtb2RlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3RoaXMuc2VuZE5vdGlmaWNhdGlvbigpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmF0dGFjaFRvSW5wdXQpIHtcclxuXHRcdFx0Ly8gTm90aGluZ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy4kaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRfdGhpcy51cGRhdGVQYXJlbnRJZnJhbWUoKTtcclxuXHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGlucHV0Lm9uKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdF90aGlzLnNlbmROb3RpZmljYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLnVwZGF0ZUxhYmVsaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbGFiZWxNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0TGFiZWw7XHJcblx0XHR2YXIgaW5wdXRNYXNrID0gdGhpcy5jb25maWcuZm9ybWF0SW5wdXQ7XHJcblxyXG5cdFx0aWYgKG1vbWVudCh0aGlzLnBpY2tlci5zdGFydERhdGUpLmlzU2FtZShtb21lbnQoKSwgJ2RheScpKSB7XHJcblx0XHRcdGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NIFlZWVknKSkge1xyXG5cdFx0XHRcdGxhYmVsTWFzayA9IGxhYmVsTWFzay5yZXBsYWNlKCdEIE1NTSBZWVlZJywgJ1tUb2RheSxdIEQgTU1NIFlZWVknKTtcclxuXHRcdFx0fSBlbHNlIGlmIChsYWJlbE1hc2suaW5jbHVkZXMoJ0QgTU1NJykpIHtcclxuXHRcdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnRCBNTU0nLCAnW1RvZGF5XScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5SG91cikge1xyXG5cdFx0XHRsYWJlbE1hc2sgPSBsYWJlbE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cdFx0XHRpbnB1dE1hc2sgPSBpbnB1dE1hc2sucmVwbGFjZSgnaGg6bW0gQScsICdbLS06LS1dJykucmVwbGFjZSgnSEg6bW0nLCAnWy0tOi0tXScpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdFx0dGhpcy4kbGFiZWwuaHRtbCh0aGlzLmNvbmZpZy5wcmVmaXhUZXh0VHJpZ2dlciArIHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobGFiZWxNYXNrKSk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy50aW1lUGlja2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IFswMDowMDowMF1gKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLmNvbmZpZy5oYXNUZXh0VHJpZ2dlcikge1xyXG5cdFx0XHRcdHRoaXMuJGxhYmVsLmh0bWwodGhpcy5jb25maWcucHJlZml4VGV4dFRyaWdnZXIgKyB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGxhYmVsTWFzaykpO1xyXG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGlucHV0TWFzaykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5hdHRhY2hUb0lucHV0KSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jb25maWcuc2luZ2xlRGF0ZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChpbnB1dE1hc2spKTtcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJG1vZGVsICYmIHRoaXMuJG1vZGVsLnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KGAke3RoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXR9IEhIOm1tOnNzYCkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJG1vZGVsICYmIHRoaXMuJG1vZGVsLnZhbCh0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoaW5wdXRNYXNrKTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZW5kRGF0ZSA9IHRoaXMucGlja2VyLmVuZERhdGUuZm9ybWF0KGlucHV0TWFzayk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoYCR7c3RhcnREYXRlfSAgwrcgICR7ZW5kRGF0ZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5jb25maWcuZm9ybWF0SW5wdXQpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCBzdGFydERhdGUgPSB0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLmZvcm1hdElucHV0KTtcclxuXHRcdFx0XHRcdFx0bGV0IGVuZERhdGUgPSB0aGlzLnBpY2tlci5lbmREYXRlLmZvcm1hdCh0aGlzLmNvbmZpZy5mb3JtYXRJbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoYCR7c3RhcnREYXRlfSAgwrcgICR7ZW5kRGF0ZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5oYW5kbGVWaWV3cG9ydFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQgJiZcclxuXHRcdFx0KCQod2luZG93LmZyYW1lRWxlbWVudC5wYXJlbnRFbGVtZW50KS5oYXNDbGFzcygndG9vbHRpcHN0ZXItY29udGVudCcpIHx8XHJcblx0XHRcdFx0JCh3aW5kb3cuZnJhbWVFbGVtZW50LnBhcmVudEVsZW1lbnQpLmhhc0NsYXNzKCdvcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXRoaXMuaXNJblZpZXdwb3J0KCkpIHtcclxuXHRcdFx0dmFyIGNvb3JkcyA9IHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRpZiAodGhpcy4kY2FsZW5kYXIuaGFzQ2xhc3MoJ2Ryb3AtdXAnKSAmJiB0aGlzLiRjYWxlbmRhclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAwKSB7XHJcblx0XHRcdFx0dmFyIHBvaW50ID0gd2luZG93LnNjcm9sbFkgKyBjb29yZHMuYm90dG9tICsgdGhpcy4kaW5wdXQuaGVpZ2h0KCkgKyA3O1xyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2Ryb3AtdXAnKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wLWRvd24nKVxyXG5cdFx0XHRcdFx0LmNzcygndG9wJywgcG9pbnQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdCF0aGlzLiRjYWxlbmRhci5oYXNDbGFzcygnZHJvcC11cCcpICYmXHJcblx0XHRcdFx0dGhpcy4kY2FsZW5kYXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHR2YXIgcG9pbnQgPSB3aW5kb3cuc2Nyb2xsWSArIGNvb3Jkcy50b3AgLSBjb29yZHMuaGVpZ2h0IC0gdGhpcy4kaW5wdXQuaGVpZ2h0KCkgLSA3O1xyXG5cdFx0XHRcdHRoaXMuJGNhbGVuZGFyLmFkZENsYXNzKCdkcm9wLXVwJykuY3NzKCd0b3AnLCBwb2ludCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5pc0luVmlld3BvcnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBib3VuZGluZyA9IHRoaXMuJGNhbGVuZGFyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0Ym91bmRpbmcudG9wID49IDAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyA1IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyA1KVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKHNlbmROb3RpZmljYXRpb24pIHtcclxuXHRcdHRoaXMucGlja2VyLnNldFN0YXJ0RGF0ZShtb21lbnQoKSk7XHJcblx0XHR0aGlzLnBpY2tlci5zZXRFbmREYXRlKG1vbWVudCgpKTtcclxuXHRcdHRoaXMuaXNFbXB0eUhvdXIgPSBmYWxzZTtcclxuXHRcdHRoaXMuJGNsZWFyLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmhhc1RleHRUcmlnZ2VyKSB7XHJcblx0XHRcdHRoaXMuJGxhYmVsLmh0bWwoJy0tIC0tIC0tJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNlbmROb3RpZmljYXRpb24gfHwgc2VuZE5vdGlmaWNhdGlvbiA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5zZW5kTm90aWZpY2F0aW9uKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnBpY2tlci5zaG93KCk7XHJcblx0fTtcclxuXHJcblx0RGF0ZVRpbWVSYW5nZVBpY2tlci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuaGlkZSgpO1xyXG5cdH07XHJcblxyXG5cdERhdGVUaW1lUmFuZ2VQaWNrZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5waWNrZXIuY2xpY2tDYW5jZWwoKTtcclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS5zZW5kTm90aWZpY2F0aW9uID0gZnVuY3Rpb24oc2VuZERhdGUpIHtcclxuXHRcdGlmICh0aGlzLiR3aWRnZXQuaGFzQ2xhc3MoJ2F0dGFjaGVkSW5wdXQnKSkge1xyXG5cdFx0XHR0aGlzLiRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VuZERhdGUgfHwgc2VuZERhdGUgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzRW1wdHlIb3VyKSB7XHJcblx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXHJcblx0XHRcdFx0XHR0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLFxyXG5cdFx0XHRcdFx0dGhpcy5waWNrZXIuc3RhcnREYXRlLmZvcm1hdChgJHt0aGlzLmNvbmZpZy5zeXN0ZW1EYXRlRm9ybWF0fSBbMDA6MDA6MDBdYCkgKyAnfCcgKyB0aGlzLmlzRW1wdHlIb3VyXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcudGltZVBpY2tlcikge1xyXG5cdFx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoXHJcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsXHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQoYCR7dGhpcy5jb25maWcuc3lzdGVtRGF0ZUZvcm1hdH0gSEg6bW06c3NgKSArICd8JyArIHRoaXMuaXNFbXB0eUhvdXJcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5kYXRlVGltZVJhbmdlUGlja2VyRmFrZU5vdGlmeUlkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5zdGFydERhdGUuZm9ybWF0KHRoaXMuY29uZmlnLnN5c3RlbURhdGVGb3JtYXQpICsgJ3wnICsgdGhpcy5pc0VtcHR5SG91clxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdE9zTm90aWZ5V2lkZ2V0KHRoaXMuY29uZmlnLmRhdGVUaW1lUmFuZ2VQaWNrZXJGYWtlTm90aWZ5SWQsICdudWxsfHRydWUnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlVGltZVJhbmdlUGlja2VyLnByb3RvdHlwZS51cGRhdGVQYXJlbnRJZnJhbWUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgU2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlc2l6ZVBhcmVudElmcmFtZS5yZXNpemUoKTtcclxuXHRcdH1cclxuXHRcdGlmICgkKCcuUGFnZS5MYXlvdXRQb3B1cCcpLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTGF5b3V0UG9wdXAucmVkcmF3RGlhbG9nV2luZG93KCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0U2FwcGhpcmVXaWRnZXRzLkRhdGVUaW1lUmFuZ2VQaWNrZXIgPSB7XHJcblx0XHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRcdGFsbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBhbGxEYXRlVGltZVJhbmdlUGlja2VycztcclxuXHRcdH0sXHJcblx0fTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xyXG4iLCIvKiBDb21wb25lbnQgRHJhZ0Ryb3BBcmVhICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBkcmFnRHJvcEFyZWFXaWRnZXQ7XG5cblx0dmFyIGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcuZHJhZ0Ryb3BBcmVhSWRdID0gbmV3IERyYWdEcm9wQXJlYShjb25maWcpO1xuXHRcdGRyYWdEcm9wQXJlYVdpZGdldCA9IHdpbmRvd1tjb25maWcuZHJhZ0Ryb3BBcmVhSWRdO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5EcmFnRHJvcEFyZWEucmVmcmVzaERyYWdEcm9wKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgcmVmcmVzaERyYWdEcm9wID0gZnVuY3Rpb24oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRyYWdEcm9wQXJlYVdpZGdldC5zZXR1cERyYWdnYWJsZSgpO1xuXHRcdFx0ZHJhZ0Ryb3BBcmVhV2lkZ2V0LnNldHVwRHJvcHBhYmxlKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgRHJhZ0Ryb3BBcmVhID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLiRhcmVhID0gJCgnIycgKyBjb25maWcuZHJhZ0Ryb3BBcmVhSWQpO1xuXHRcdHRoaXMuJGFyZWEuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy5za2luID0gY29uZmlnLnNraW47XG5cdFx0dGhpcy5mYWtlTm90aWZ5V2lkZ2V0SWQgPSBjb25maWcuZmFrZU5vdGlmeVdpZGdldElkO1xuXHRcdHRoaXMuc2V0dXBEcm9wcGFibGUoKTtcblx0XHRpZiAoY29uZmlnLnNvcnRhYmxlKSB7XG5cdFx0XHR0aGlzLnNldHVwU29ydGFibGUoKTtcblx0XHR9XG5cdFx0dGhpcy5zZXR1cERyYWdnYWJsZSgpO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdF90aGlzLmhhbmRsZURyb3BwYWJsZSgkKHRoaXMpKTtcblx0XHR9KTtcblx0fTtcblxuXHREcmFnRHJvcEFyZWEucHJvdG90eXBlLnNldHVwRHJhZ2dhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZScpLmRyYWdnYWJsZSh7XG5cdFx0XHRkaXNhYmxlZDogdGhpcy5jb25maWcuZGlzYWJsZWQsXG5cdFx0XHRjb250YWlubWVudDogdGhpcy4kYXJlYSxcblx0XHRcdHNjb3BlOiB0aGlzLmNvbmZpZy5kcmFnRHJvcEFyZWFJZCxcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0c2Nyb2xsOiB0cnVlLFxuXHRcdFx0cmV2ZXJ0OiAnaW52YWxpZCcsXG5cdFx0XHRyZXZlcnREdXJhdGlvbjogMCxcblx0XHRcdGNvbm5lY3RUb1NvcnRhYmxlOiAnLkRyYWdEcm9wLWRyb3BwYWJsZScsXG5cdFx0XHRzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcblx0XHRcdFx0aWYgKHVpLmhlbHBlci5oYXNDbGFzcygndWktZHJhZ2dhYmxlLWRyYWdnaW5nJykpIHtcblx0XHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gX3RoaXMuJGFyZWEuZmluZCgnLnVpLWRyb3BwYWJsZS51aS1zb3J0YWJsZScpO1xuXG5cdFx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcblx0XHRcdFx0XHRcdC8vJCh1aS5oZWxwZXIpLmhpZGUoKTtcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KCR0YXJnZXQuZGF0YSgnZmFrZW5vdGlmeScpLCB1aS5oZWxwZXIuZGF0YSgnaXRlbXR5cGUnKSArICd8JyArIHVpLmhlbHBlci5kYXRhKCdpdGVtaWQnKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxuXHRcdFx0XHRcdFx0XHQkdGFyZ2V0LmRhdGEoJ2Zha2Vub3RpZnknKSxcblx0XHRcdFx0XHRcdFx0X3RoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicpLmluZGV4KCkgKyAnfCcgKyB1aS5oZWxwZXIuZGF0YSgnaXRlbWlkJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuc2V0dXBEcm9wcGFibGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGFyZWEuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZScpLmRyb3BwYWJsZSh7XG5cdFx0XHRob3ZlckNsYXNzOiAnaG92ZXJlZCcsXG5cdFx0XHRhZGRDbGFzc2VzOiB0cnVlLFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuXHRcdFx0c2NvcGU6IHRoaXMuY29uZmlnLmRyYWdEcm9wQXJlYUlkLFxuXHRcdFx0dG9sZXJhbmNlOiAncG9pbnRlcicsXG5cdFx0XHRkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpIHtcblx0XHRcdFx0aWYgKF90aGlzLnNraW4gPT09ICdUZWFtcycpIHtcblx0XHRcdFx0XHQkKHVpLmRyYWdnYWJsZSkuaGlkZSgpO1xuXHRcdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KFxuXHRcdFx0XHRcdFx0JChldmVudC50YXJnZXQpLmRhdGEoJ2Zha2Vub3RpZnknKSxcblx0XHRcdFx0XHRcdHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtdHlwZScpICsgJ3wnICsgdWkuZHJhZ2dhYmxlLmRhdGEoJ2l0ZW1pZCcpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPc05vdGlmeVdpZGdldChcblx0XHRcdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kYXRhKCdmYWtlbm90aWZ5JyksXG5cdFx0XHRcdFx0XHRfdGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXBsYWNlaG9sZGVyJykuaW5kZXgoKSArICd8JyArIHVpLmRyYWdnYWJsZS5kYXRhKCdpdGVtaWQnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5zZXR1cFNvcnRhYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kYXJlYS5maW5kKCcuRHJhZ0Ryb3AtZHJvcHBhYmxlJykuc29ydGFibGUoe1xuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMuY29uZmlnLmRpc2FibGVkLFxuXHRcdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdFx0XHRjb250YWlubWVudDogdGhpcy4kYXJlYSxcblx0XHRcdHRvbGVyYW5jZTogJ3BvaW50ZXInLFxuXHRcdFx0cmV2ZXJ0OiAyMDAsXG5cdFx0XHRpdGVtczogJy5EcmFnRHJvcC1kcm9wcGFibGUtaXRlbXMgLkRyYWdEcm9wLWRyYWdnYWJsZScsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0RyYWdEcm9wLWRyYWdnYWJsZS1wbGFjZWhvbGRlcicsXG5cdFx0fSk7XG5cdH07XG5cblx0RHJhZ0Ryb3BBcmVhLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJGFyZWEub24oJ2NsaWNrJywgJy5EcmFnRHJvcC1kcmFnZ2FibGUgaW5wdXQnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Y29uc3QgJGNoZWNrYm94ID0gJChldnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRjb25zdCAkZHJvcHBhYmxlID0gJGNoZWNrYm94LmNsb3Nlc3QoJy5EcmFnRHJvcC1kcm9wcGFibGUnKTtcblx0XHRcdGNvbnN0ICRkcmFnZ2FibGUgPSAkY2hlY2tib3guY2xvc2VzdCgnLkRyYWdEcm9wLWRyYWdnYWJsZScpO1xuXHRcdFx0Y29uc3QgJGFjdGlvbiA9ICRkcmFnZ2FibGUuZmluZCgnLkRyYWdEcm9wLWRyYWdnYWJsZS1zZWxlY3QtYWN0aW9uIGEnKTtcblxuXHRcdFx0JGFjdGlvbi50cmlnZ2VyKCdjbGljaycpO1xuXG5cdFx0XHRpZiAoJGRyb3BwYWJsZS5oYXNDbGFzcygnYWxsb3dNdWx0aXBsZScpKSB7XG5cdFx0XHRcdGlmICgkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpKSB7XG5cdFx0XHRcdFx0Ly8kY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblx0XHRcdFx0XHQkZHJhZ2dhYmxlLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdFx0XHQkZHJhZ2dhYmxlLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9fdGhpcy5oYW5kbGVEcm9wcGFibGUoJGRyb3BwYWJsZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRhcmVhLm9uKCdjbGljaycsICcuRHJhZ0Ryb3AtZHJhZ2dhYmxlLXNlbGVjdC1hY3Rpb24gYScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdERyYWdEcm9wQXJlYS5wcm90b3R5cGUuaGFuZGxlRHJvcHBhYmxlID0gZnVuY3Rpb24oJGRyb3BwYWJsZSkge1xuXHRcdGlmICgkZHJvcHBhYmxlLmhhc0NsYXNzKCdhbGxvd011bHRpcGxlJykpIHtcblx0XHRcdHZhciAkYWN0aW9ucyA9ICRkcm9wcGFibGUuZmluZCgnLkRyYWdEcm9wLWRyb3BwYWJsZS1pbnRybycpO1xuXHRcdFx0dmFyIGNoa1NlbGVjdGVkID0gJGRyb3BwYWJsZS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCcpLmxlbmd0aDtcblx0XHRcdGlmIChjaGtTZWxlY3RlZCA+IDApIHtcblx0XHRcdFx0JGFjdGlvbnMuZmluZCgnYSwgYnV0dG9uJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkYWN0aW9ucy5maW5kKCdhLCBidXR0b24nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZHJvcHBhYmxlLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5EcmFnRHJvcEFyZWEgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0cmVmcmVzaERyYWdEcm9wOiByZWZyZXNoRHJhZ0Ryb3AsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgRHJvcGRvd25DYXRlZ29yaWVzICovXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGZ1bmN0aW9uIG9wdEdyb3VwU2V0VmFsdWUoc2VsZWN0SWQsIGlucHV0Qm94SWQsIGJ1dHRvbklkKSB7XG5cdFx0dmFyIHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RJZCkudmFsdWU7XG5cdFx0JCgnIycgKyBpbnB1dEJveElkKS52YWwodik7XG5cdFx0JCgnIycgKyBzZWxlY3RJZCArICcgb3B0aW9uW3NlbGVjdGVkXScpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XG5cblx0XHRpZiAodiA+IC0xKSB7XG5cdFx0XHQkKCcjJyArIHNlbGVjdElkICsgJyBvcHRpb25bdmFsdWU9XCInICsgdiArICdcIl0nKS5hdHRyKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdH1cblxuXHRcdCQoJyMnICsgYnV0dG9uSWQpLmNsaWNrKCk7XG5cdFx0JCgnI3MyaWRfJyArIHNlbGVjdElkKS5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItYWN0aXZlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBPc0N1c3RvbVZhbGlkYXRvck9wdEdyb3VwKGEsIGIpIHtcblx0XHR2YXIgX2UgPSAkKCcjJyArIGEuY29udHJvbHRvdmFsaWRhdGUpO1xuXHRcdHZhciBpc1ZhbGlkID0gX2UuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLmxlbmd0aDtcblx0XHR2YXIgaGFzU2libGluZ19NYW5kYXRvcnlTZWxlY3QyID0gX2UucHJldignZGl2LnNlbGVjdDItY29udGFpbmVyLk1hbmRhdG9yeScpLmxlbmd0aDtcblxuXHRcdGlmIChoYXNTaWJsaW5nX01hbmRhdG9yeVNlbGVjdDIpIHtcblx0XHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHRcdF9lLnByZXYoJ2Rpdi5zZWxlY3QyLWNvbnRhaW5lci5NYW5kYXRvcnknKS5yZW1vdmVDbGFzcygnTm90X1ZhbGlkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfZS5wcmV2KCdkaXYuc2VsZWN0Mi1jb250YWluZXIuTWFuZGF0b3J5JykuYWRkQ2xhc3MoJ05vdF9WYWxpZCcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpc1ZhbGlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkT3B0R3JvdXBWYWxpZGF0b3Iob3B0R3JvdXBFbGVtZW50SWQpIHtcblx0XHRPc1BhZ2VfVmFsaWRhdG9ycy5wdXNoKHtcblx0XHRcdGNvbnRyb2x0b3ZhbGlkYXRlOiBvcHRHcm91cEVsZW1lbnRJZCxcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRlcnJvcm1lc3NhZ2U6ICdSZXF1aXJlZCBmaWVsZCEnLFxuXHRcdFx0ZXZhbHVhdGlvbmZ1bmN0aW9uOiAnU2FwcGhpcmVXaWRnZXRzLkRyb3Bkb3duQ2F0ZWdvcmllcy5Pc0N1c3RvbVZhbGlkYXRvck9wdEdyb3VwJyxcblx0XHRcdGluaXRpYWx2YWx1ZTogJycsXG5cdFx0XHRpc3ZhbGlkOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRyb3Bkb3duQ2F0ZWdvcmllcyA9IHtcblx0XHRvcHRHcm91cFNldFZhbHVlLFxuXHRcdE9zQ3VzdG9tVmFsaWRhdG9yT3B0R3JvdXAsXG5cdFx0YWRkT3B0R3JvdXBWYWxpZGF0b3IsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgRHJvcHpvbmUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93LkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRiaW5kRXZlbnRzKGNvbmZpZyk7XG5cblx0XHRcdGNvbnN0IG15RHJvcHpvbmUgPSBuZXcgd2luZG93LkRyb3B6b25lKGNvbmZpZy5oaWRkZW5JbnB1dENvbnRhaW5lciwge1xuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGxldCBwcmV2RmlsZTtcblxuXHRcdFx0XHRcdGNvbnN0IGZpbGVzTGlzdCA9IGNvbmZpZy5maWxlc0xpc3QgPyBjb25maWcuZmlsZXNMaXN0LnNwbGl0KCcsJykgOiBbXTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBmaWxlc0xpc3QpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vY2tGaWxlID0geyBuYW1lOiBpdGVtLCBzaXplOiAxMjM0NTY3OCB9O1xuXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoJ2FkZGVkZmlsZScsIG1vY2tGaWxlKTtcblx0XHRcdFx0XHRcdHRoaXMuZW1pdCgnY29tcGxldGUnLCBtb2NrRmlsZSk7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGVzLnB1c2gobW9ja0ZpbGUpO1xuXG5cdFx0XHRcdFx0XHQkKGAke2NvbmZpZy5oaWRkZW5JbnB1dENvbnRhaW5lcn0gLmR6LWZpbGVuYW1lYCkuYXR0cigndGl0bGUnLCBpdGVtKTtcblxuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBtb2NrRmlsZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoK2NvbmZpZy5tYXhGaWxlcyA9PT0gMSAmJiBjb25maWcuaXNSZXBsYWNlUHJldmlvdXMpIHtcblx0XHRcdFx0XHRcdHRoaXMub24oJ2FkZGVkZmlsZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAocHJldkZpbGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlRmlsZShwcmV2RmlsZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RpZnlJbnB1dCA9ICQoYCMke2NvbmZpZy5ub3RpZnlJbnB1dElkfWApO1xuXG5cdFx0XHRcdFx0dGhpcy5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlVGV4dCkge1xuXHRcdFx0XHRcdFx0cHJldkZpbGUgPSBmaWxlO1xuXG5cdFx0XHRcdFx0XHQkKGAjJHtjb25maWcubm90aWZ5SW5wdXRJZH0gLmR6LWZpbGVuYW1lYCkuYXR0cigndGl0bGUnLCBmaWxlLm5hbWUpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0dGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdHByZXZGaWxlID0gZmlsZTtcblxuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LnZhbChyZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdFx0JG5vdGlmeUlucHV0LmNoYW5nZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlVwbG9hZE1lc3NhZ2VDbGFzc2ApLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCQoYCMke2NvbmZpZy53aWRnZXRJZH0gLmR6LWNsaWNrYWJsZWApLmNsaWNrKCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLkRyb3B6b25lID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBFeHBhbmRhYmxlTGluayAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IHdpZGdldElEID0+IHtcblx0XHRjb25zdCAkZWxlbWVudFdyYXBwZXIgPSAkKGAjJHt3aWRnZXRJRH1gKTtcblxuXHRcdGlmICgkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oYXNDbGFzcygnSGlkZVdoZW5FbXB0eScpKSB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gJGVsZW1lbnRXcmFwcGVyLmZpbmQoJy5FeHBhbmRhYmxlTGlua19fQ29udGVudCcpLnRleHQoKTtcblxuXHRcdFx0aWYgKHRleHQubGVuZ3RoID09PSAwKSAkZWxlbWVudFdyYXBwZXIucGFyZW50KCcuRXhwYW5kYWJsZUxpc3QnKS5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0YmluZEV2ZW50cyh3aWRnZXRJRCk7XG5cdH07XG5cblx0Y29uc3QgYmluZEV2ZW50cyA9IHdpZGdldElEID0+IHtcblx0XHQkKGAjJHt3aWRnZXRJRH0gLkV4cGFuZGFibGVMaW5rX19IZWFkZXJgKS5jbGljaygoKSA9PiBvcGVuQ2xvc2UoYCMke3dpZGdldElEfWApKTtcblx0fTtcblxuXHRjb25zdCBvcGVuQ2xvc2UgPSBlbGVtZW50SUQgPT4ge1xuXHRcdC8vIFdoZW4gdGhlIGV4cGFuZGFibGVzIGFyZSBpbnNpZGUgYSBjb250YWluZXIgd2l0aCBjbGFzcyBFeHBhbmRhYmxlTGlua0dyb3VwLCB3aWxsIGFjdCBsaWtlIGEgZXhwYW5kYWJsZSBncm91cFxuXHRcdGNvbnN0ICRsaW5rR3JvdXAgPSAkKGVsZW1lbnRJRCkuY2xvc2VzdCgnLkV4cGFuZGFibGVMaW5rR3JvdXAnKTtcblxuXHRcdGlmICgkbGlua0dyb3VwLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVzID0gJGxpbmtHcm91cC5maW5kKCcuRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJykubm90KGVsZW1lbnRJRCk7XG5cblx0XHRcdCRleHBhbmRhYmxlcy5yZW1vdmVDbGFzcygnRXhwYW5kYWJsZUxpbmstLWV4cGFuZGVkJyk7XG5cdFx0fVxuXG5cdFx0JChlbGVtZW50SUQpLnRvZ2dsZUNsYXNzKCdFeHBhbmRhYmxlTGluay0tZXhwYW5kZWQnKTtcblxuXHRcdGlmIChTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lKSB7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuUmVzaXplUGFyZW50SWZyYW1lLnJlc2l6ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuRXhwYW5kYWJsZUxpbmsgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgRnVsbFNjcmVlblRhYnNXcmFwcGVyICovXG5TYXBwaGlyZVdpZGdldHMuRnVsbFNjcmVlblRhYnNXcmFwcGVyID0gKCkgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKCcuVGFiV3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3QgJHdyYXBwZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5GdWxsU2NyZWVuVGFic1dyYXBwZXJfX1RhYnMnKTtcblx0XHRcdCR3cmFwcGVyLmZpbmQoJyonKS5yZW1vdmVDbGFzcygnQWN0aXZlJyk7XG5cblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgUGVyc29uQ2FyZCAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdHZhciBQZXJzb25DYXJkRXZlbnQgPSBmdW5jdGlvbigpIHtcblx0XHQkKCcuSXNFeHBhbmRhYmxlIC5QZXJzb25DYXJkX19oZWFkZXJMZWZ0SW5mbywgLklzRXhwYW5kYWJsZSAuUGVyc29uQ2FyZF9fY29udGVudCcpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICRoZWFkZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5QZXJzb25DYXJkX2hlYWRlcicpO1xuXHRcdFx0XHRjb25zdCAkb25DYXJkT3BlbkxpbmsgPSAkaGVhZGVyLmZpbmQoJy5QZXJzb25DYXJkX19PbkNhcmRPcGVuTGluaycpO1xuXHRcdFx0XHRjb25zdCAkb25DYXJkQ2xvc2VMaW5rID0gJGhlYWRlci5maW5kKCcuUGVyc29uQ2FyZF9fT25DYXJkQ2xvc2VDbGljaycpO1xuXHRcdFx0XHRjb25zdCAkY29udGVudCA9ICRoZWFkZXIubmV4dCgpO1xuXG5cdFx0XHRcdGNvbnN0ICRjYXJkID0gJCh0aGlzKS5jbG9zZXN0KCcuUGVyc29uQ2FyZCcpO1xuXG5cdFx0XHRcdCRjb250ZW50LnJlbW92ZUNsYXNzKCdJc0V4cGFuZGVkJyk7XG5cblx0XHRcdFx0aWYgKCRjYXJkLmhhc0NsYXNzKCdJc09wZW4nKSkge1xuXHRcdFx0XHRcdCRvbkNhcmRDbG9zZUxpbmsudHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ0lzT3BlbicpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRvbkNhcmRPcGVuTGluay50cmlnZ2VySGFuZGxlcignY2xpY2snKTtcblxuXHRcdFx0XHRcdCRjb250ZW50LmFkZENsYXNzKCdJc0V4cGFuZGVkJyk7XG5cblx0XHRcdFx0XHQkY2FyZC5hZGRDbGFzcygnSXNPcGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXG5cdCQoJy5TdG9wUHJvcGFnYXRpb24nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9KTtcblxuXHRQZXJzb25DYXJkRXZlbnQoKTtcblxuXHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFBlcnNvbkNhcmRFdmVudCk7XG59KTtcbiIsIi8qIENvbXBvbmVudCBHZW5lcmljR2FsbGVyeSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgR2VuZXJpY0dhbGxlcnkoY29uZmlnKTtcblx0fTtcblxuXHR2YXIgR2VuZXJpY0dhbGxlcnkgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLiR3aWRnZXQgPSAkKCcjJyArIHRoaXMuY29uZmlnLndpZGdldElkKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR0aGlzLmVxdWFsSGVpZ2h0ID0gdGhpcy5jb25maWcuZXF1YWxIZWlnaHQ7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJz4gLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykubGVuZ3RoID09PSAxICYmXG5cdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLkdlbmVyaWNHYWxsZXJ5LWNvbnRlbnQgPiBzcGFuJykuaGFzQ2xhc3MoJ0xpc3RSZWNvcmRzJylcblx0XHQpIHtcblx0XHRcdHRoaXMuJGdhbGxlcnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuR2VuZXJpY0dhbGxlcnktY29udGVudCA+IHNwYW4uTGlzdFJlY29yZHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kZ2FsbGVyeSA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5HZW5lcmljR2FsbGVyeS1jb250ZW50Jyk7XG5cdFx0fVxuXG5cdFx0bGV0IHRlbXBsYXRlQ29sdW1uID0gJ3JlcGVhdCgnICsgdGhpcy5jb25maWcuY29sdW1uU2l6aW5nICsgJywgbWlubWF4KCcgKyB0aGlzLmNvbmZpZy5jb2x1bW5NaW5XaWR0aCArICcsIDFmcikpJztcblxuXHRcdGlmICh0aGlzLmNvbmZpZy5tYXhJdGVtc1JvdyA+IDApIHtcblx0XHRcdHRlbXBsYXRlQ29sdW1uID0gYHJlcGVhdCgke3RoaXMuY29uZmlnLmNvbHVtblNpemluZ30sIG1pbm1heChtYXgoJHt0aGlzLmNvbmZpZy5jb2x1bW5NaW5XaWR0aH0sICgxMDAlIC0gKCR7dGhpcy5jb25maWcubWF4SXRlbXNSb3d9IC0gMSkgKiAke3RoaXMuY29uZmlnLmdhcENvbHVtbn1weCkgLyAke3RoaXMuY29uZmlnLm1heEl0ZW1zUm93fSksIDFmcikpYDtcblx0XHR9XG5cblx0XHR0aGlzLiRnYWxsZXJ5LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXG5cdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiB0ZW1wbGF0ZUNvbHVtbixcblx0XHR9KTtcblxuXHRcdHRoaXMuJGdhbGxlcnlJdGVtcyA9IHRoaXMuJGdhbGxlcnkuY2hpbGRyZW4oKTtcblx0XHR0aGlzLiRnYWxsZXJ5SXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICghJCh0aGlzKS5oYXNDbGFzcygnR2VuZXJpY0dhbGxlcnktaXRlbScpKSB7XG5cdFx0XHRcdCQodGhpcykud3JhcCgnPGRpdiBjbGFzcz1cIkdlbmVyaWNHYWxsZXJ5LWl0ZW1cIj48L2Rpdj4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dhbGxlcnkgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgR2VuZXJpY0dyaWQgKi9cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBhbGxHZW5lcmljR3JpZHMgPSBbXTtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEdlbmVyaWNHcmlkKGNvbmZpZyk7XG5cdFx0YWxsR2VuZXJpY0dyaWRzLnB1c2god2luZG93W2NvbmZpZy53aWRnZXRJZF0pO1xuXHR9O1xuXG5cdHZhciBHZW5lcmljR3JpZCA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuR2VuZXJpY0dyaWQgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdH07XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTsiLCIvKiBDb21wb25lbnQgSG9yaXpvbnRhbFRvb2xiYXIgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cblx0XHQkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0KCR3aWRnZXQsIGNvbmZpZykpO1xuXG5cdFx0aWYgKGNvbmZpZy5pc0Fycm93TmF2aWdhdGlvbikge1xuXHRcdFx0JCh3aW5kb3cpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkaXRlbVdyYXBwZXIgPSAkd2lkZ2V0LmZpbmQoJy5NZW51SXRlbVdyYXBwZXIuQWN0aXZlJyk7XG5cdFx0XHRcdGlmICgkaXRlbVdyYXBwZXIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGl0ZW1XcmFwcGVyWzBdLnNjcm9sbEludG9WaWV3KHtcblx0XHRcdFx0XHRcdGJlaGF2aW9yOiAnYXV0bycsXG5cdFx0XHRcdFx0XHRibG9jazogJ2VuZCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBpbml0ID0gKCR3aWRnZXQsIGNvbmZpZykgPT4ge1xuXHRcdGlmIChjb25maWcuaXNBcnJvd05hdmlnYXRpb24pIHtcblx0XHRcdGhhbmRsZUFycm93cygkd2lkZ2V0KTtcblxuXHRcdFx0Y29uc3QgJHRvb2xiYXJJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zJyk7XG5cdFx0XHRjb25zdCAkbGlzdEl0ZW1zID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLkxpc3RSZWNvcmRzJyk7XG5cdFx0XHRjb25zdCAkYnRuUmlnaHQgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19yaWdodEJ0bicpO1xuXHRcdFx0Y29uc3QgJGJ0bkxlZnQgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19sZWZ0QnRuJyk7XG5cblx0XHRcdCR0b29sYmFySXRlbXMuc2Nyb2xsKCgpID0+IGhhbmRsZUFycm93cygkd2lkZ2V0KSk7XG5cblx0XHRcdCRidG5SaWdodC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRTY3JvbGwgPSAkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoKTtcblx0XHRcdFx0dmFyIG1heFNjcm9sbGwgPSAkbGlzdEl0ZW1zLndpZHRoKCkgLSAkdG9vbGJhckl0ZW1zLndpZHRoKCk7XG5cdFx0XHRcdHZhciBzaWRlV2lkdGggPSBtYXhTY3JvbGxsIC0gNTA7XG5cdFx0XHRcdCR0b29sYmFySXRlbXMuc2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsICsgNTApO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50U2Nyb2xsID09IHNpZGVXaWR0aCkgJGJ0blJpZ2h0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xuXHRcdFx0XHRpZiAoY3VycmVudFNjcm9sbCAhPSA1MCkgJGJ0bkxlZnQucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGJ0bkxlZnQuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50U2Nyb2xsID0gJHRvb2xiYXJJdGVtcy5zY3JvbGxMZWZ0KCk7XG5cdFx0XHRcdHZhciBtYXhTY3JvbGxsID0gJGxpc3RJdGVtcy53aWR0aCgpIC0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xuXHRcdFx0XHR2YXIgc2lkZVdpZHRoID0gbWF4U2Nyb2xsbCAtIDUwO1xuXHRcdFx0XHQkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoY3VycmVudFNjcm9sbCAtIDUwKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFNjcm9sbCAhPSBzaWRlV2lkdGgpICRidG5SaWdodC5yZW1vdmVDbGFzcygnRGlzYWJsZWQnKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT0gNTApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplLnRvb2xiYXInLCAoKSA9PiBoYW5kbGVBcnJvd3MoJHdpZGdldCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoYW5kbGVSZXNpemUoJHdpZGdldCk7XG5cdFx0XHRiaW5kRXZlbnRzQ2xpY2soJHdpZGdldCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplLnRvb2xiYXInLCAoKSA9PiBoYW5kbGVSZXNpemUoJHdpZGdldCkpO1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignVG9vbGJhckZpeGVkJywgKCkgPT4gaGFuZGxlUmVzaXplKCR3aWRnZXQpLCBmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGhhbmRsZUFycm93cyA9ICR3aWRnZXQgPT4ge1xuXHRcdGNvbnN0ICR0b29sYmFySXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpO1xuXHRcdGNvbnN0ICRsaXN0SXRlbXMgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcyAuTGlzdFJlY29yZHMnKTtcblx0XHRjb25zdCAkYnRuUmlnaHQgPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19yaWdodEJ0bicpO1xuXHRcdGNvbnN0ICRidG5MZWZ0ID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fbGVmdEJ0bicpO1xuXG5cdFx0bGV0IGN1cnJlbnRTY3JvbGwgPSAkdG9vbGJhckl0ZW1zLnNjcm9sbExlZnQoKTtcblx0XHRsZXQgbWVudVdpZHRoID0gJGxpc3RJdGVtcy53aWR0aCgpO1xuXHRcdGxldCBleHRlcm5hbFdpZHRoID0gJHRvb2xiYXJJdGVtcy53aWR0aCgpO1xuXHRcdHZhciBtYXhTY3JvbGxsID0gbWVudVdpZHRoIC0gZXh0ZXJuYWxXaWR0aDtcblxuXHRcdGlmIChleHRlcm5hbFdpZHRoID4gbWVudVdpZHRoKSB7XG5cdFx0XHQkYnRuTGVmdC5oaWRlKCk7XG5cdFx0XHQkYnRuUmlnaHQuaGlkZSgpO1xuXG5cdFx0XHQkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX2NvbnRhaW5lcicpLmFkZENsYXNzKCdUb29sYmFyX2NvbnRhaW5lci0tbm9hcnJvd3MnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGJ0bkxlZnQuc2hvdygpO1xuXHRcdFx0JGJ0blJpZ2h0LnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5maW5kKCcuVG9vbGJhcl9jb250YWluZXInKS5yZW1vdmVDbGFzcygnVG9vbGJhcl9jb250YWluZXItLW5vYXJyb3dzJyk7XG5cdFx0fVxuXG5cdFx0aWYgKGN1cnJlbnRTY3JvbGwgPT09IDApICRidG5MZWZ0LmFkZENsYXNzKCdEaXNhYmxlZCcpO1xuXHRcdGVsc2UgJGJ0bkxlZnQucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkJyk7XG5cblx0XHRpZiAoY3VycmVudFNjcm9sbCA+PSBtYXhTY3JvbGxsKSAkYnRuUmlnaHQuYWRkQ2xhc3MoJ0Rpc2FibGVkJyk7XG5cdFx0ZWxzZSAkYnRuUmlnaHQucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkJyk7XG5cdH07XG5cblx0aGFuZGxlUmVzaXplID0gJHdpZGdldCA9PiB7XG5cdFx0bGV0IGl0ZW1zVG90YWwgPSAwO1xuXHRcdGxldCBoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xuXG5cdFx0Y29uc3QgJGxpc3RJdGVtcyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5MaXN0UmVjb3JkcycpO1xuXHRcdCRsaXN0SXRlbXMuZmluZCgnPiBhW3VpXScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0XHRjb25zdCBtZW51V2lkdGggPSAkd2lkZ2V0LmZpbmQoJy5Ub29sYmFyX19JdGVtcycpLm91dGVyV2lkdGgodHJ1ZSk7XG5cblx0XHQkbGlzdEl0ZW1zLmZpbmQoJ2FbdWldJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGl0ZW1zVG90YWwgKz0gcGFyc2VJbnQoJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpLCAxMCk7XG5cblx0XHRcdGlmIChpdGVtc1RvdGFsICsgOTAgPCBtZW51V2lkdGgpIHtcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhc0l0ZW1zSGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoaGFzSXRlbXNIaWRkZW4gJiYgISRsaXN0SXRlbXMuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zJykubGVuZ3RoKSB7XG5cdFx0XHQkd2lkZ2V0XG5cdFx0XHRcdC5maW5kKCcuVG9vbGJhcl9fTW9yZU9wdGlvbnMnKVxuXHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHRcdFx0LmFwcGVuZFRvKCRsaXN0SXRlbXMpO1xuXG5cdFx0XHRoYXNJdGVtc0hpZGRlbiA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0xpc3QnKTtcblxuXHRcdCRsaXN0SXRlbXMuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zJykuY3NzKCdkaXNwbGF5JywgJG9wdGlvbnNMaXN0Lmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZScpO1xuXG5cdFx0Y29uc3QgJGhpZGRlbkl0ZW1zID0gJGxpc3RJdGVtcy5maW5kKCc+IGFbdWldJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQodGhpcykuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnO1xuXHRcdH0pO1xuXG5cdFx0JG9wdGlvbnNMaXN0LmVtcHR5KCk7XG5cblx0XHRjb25zdCBoYXNOb3RpZmljYXRpb25IaWRkZW4gPSAkaGlkZGVuSXRlbXMuZmluZCgnLk1lbnVJdGVtV3JhcHBlcl9CYWRnZTpub3QoOmVtcHR5KScpLmxlbmd0aCAhPT0gMDtcblx0XHRjb25zdCAkdHJpZ2dlciA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9uc0ljb24nKTtcblxuXHRcdGlmIChoYXNOb3RpZmljYXRpb25IaWRkZW4pICR0cmlnZ2VyLmFkZENsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9uc0ljb24tLW5vdGlmaWNhdGlvbicpO1xuXHRcdGVsc2UgJHRyaWdnZXIucmVtb3ZlQ2xhc3MoJ1Rvb2xiYXJfX01vcmVPcHRpb25zSWNvbi0tbm90aWZpY2F0aW9uJyk7XG5cblx0XHQkaGlkZGVuSXRlbXNcblx0XHRcdC5jbG9uZSgpXG5cdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHRcdC5hcHBlbmRUbygkb3B0aW9uc0xpc3QpO1xuXHR9O1xuXG5cdGJpbmRFdmVudHNDbGljayA9ICR3aWRnZXQgPT4ge1xuXHRcdGNvbnN0ICRtb3JlT3B0aW9ucyA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX0l0ZW1zIC5Ub29sYmFyX19Nb3JlT3B0aW9ucycpO1xuXHRcdGNvbnN0ICR0cmlnZ2VyID0gJHdpZGdldC5maW5kKCcuVG9vbGJhcl9fSXRlbXMgLlRvb2xiYXJfX01vcmVPcHRpb25zSWNvbicpO1xuXHRcdGNvbnN0ICRvcHRpb25zTGlzdCA9ICR3aWRnZXQuZmluZCgnLlRvb2xiYXJfX01vcmVPcHRpb25zTGlzdCcpO1xuXG5cdFx0JHRyaWdnZXIub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0JG1vcmVPcHRpb25zLnRvZ2dsZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSk7XG5cblx0XHQkb3B0aW9uc0xpc3Qub24oJ21vdXNld2hlZWwnLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5vbignbW91c2V1cCcsIGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50cygpO1xuXG5cdFx0XHRpZiAoISR0YXJnZXQuYW5kU2VsZigpLmlzKCRtb3JlT3B0aW9ucykpIHtcblx0XHRcdFx0JG1vcmVPcHRpb25zLnJlbW92ZUNsYXNzKCdUb29sYmFyX19Nb3JlT3B0aW9ucy0tb3BlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5Ib3Jpem9udGFsVG9vbGJhciA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBIb3VyUGlja2VyICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y2xhc3MgSG91clBpY2tlciB7XG5cdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHQvLyBPcHRpb25zIHVzZWQgYnkgalF1ZXJ5IFRpbWVycGlja2VyIChFeHRlcm5hbCBMaWIpXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdH07XG5cblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5Ib3VyUGlja2VyLmFsbEludGFuY2VzLnB1c2goY29uZmlnLndpZGdldElkKTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblx0XHR9XG5cblx0XHRpc0NvbXBvbmVudFZhbGlkKCkge1xuXHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcblx0XHRcdGxldCBtZXNzYWdlID0gYENvbXBvbmVudCBIb3VyUGlja2VyICgke3RoaXMub3B0aW9ucy53aWRnZXRJZH0pOmA7XG5cdFx0XHRsZXQgZXJyb3JzID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLiRtb2RlbC5sZW5ndGggJiYgdGhpcy4kbW9kZWwubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRlcnJvcnMgPSBgJHtlcnJvcnN9IC0gTmVlZHMgb25lIC0gYW5kIGp1c3Qgb25lIC0gSW5wdXQgZWxlbWVudC5gO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuJG1vZGVsLmxlbmd0aCAmJiB0aGlzLiRjb21wb25lbnQuZmluZCgnLkhvdXJQaWNrZXJfX1BsYWNlaG9sZGVyIGlucHV0JykubGVuZ3RoKSB7XG5cdFx0XHRcdGVycm9ycyA9IGAke2Vycm9yc31cXG4gLSBUaGUgSW5wdXQgZWxlbWVudCBtdXN0IGJlIG9mIHR5cGUgVGV4dC5gO1xuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXZhbGlkKSBjb25zb2xlLmVycm9yKGAke21lc3NhZ2V9ICR7ZXJyb3JzfWApO1xuXG5cdFx0XHRyZXR1cm4gdmFsaWQ7XG5cdFx0fVxuXG5cdFx0c2V0Q29tcG9uZW50UG9zaXRpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLnVpLXRpbWVwaWNrZXItY29udGFpbmVyJyk7XG5cdFx0XHRjb25zdCBsYWJlbExlZnQgPSB0aGlzLiRsYWJlbC5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0Y29uc3QgbGFiZWxXaWR0aCA9IHRoaXMuJGxhYmVsLndpZHRoKCk7XG5cdFx0XHRjb25zdCBsYWJlbE91dGVyV2lkdGggPSB0aGlzLiRsYWJlbC5vdXRlcldpZHRoKCk7XG5cdFx0XHRjb25zdCB3aWRnZXRPdXRlcldpZHRoID0gJHdpZGdldC5vdXRlcldpZHRoKCk7XG5cdFx0XHRjb25zdCB3aWRnZXRNaW5XaWR0aCA9ICskd2lkZ2V0LmNzcygnbWluLXdpZHRoJykucmVwbGFjZSgncHgnLCAnJyk7XG5cdFx0XHRjb25zdCBpc091dHNpZGVXaW5kb3cgPVxuXHRcdFx0XHRsYWJlbExlZnQgKyBsYWJlbE91dGVyV2lkdGggPiAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpICsgJCh3aW5kb3cpLndpZHRoKCkgLSB3aWRnZXRPdXRlcldpZHRoO1xuXG5cdFx0XHQkd2lkZ2V0LmNzcyh7XG5cdFx0XHRcdGxlZnQ6ICgpID0+IHtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSBsYWJlbExlZnQgLSAod2lkZ2V0TWluV2lkdGggLSBsYWJlbFdpZHRoKSAvIDI7XG5cblx0XHRcdFx0XHRpZiAoaXNPdXRzaWRlV2luZG93KSB2YWx1ZSA9IGxhYmVsTGVmdCArIGxhYmVsV2lkdGggLSB3aWRnZXRPdXRlcldpZHRoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSBsYWJlbExlZnQ7XG5cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRFbGVtZW50Q2xhc3Moc2VsZWN0b3IsIGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZSA/ICQoc2VsZWN0b3IpLmFkZENsYXNzKGNsYXNzTmFtZSkgOiBmYWxzZTtcblx0XHR9XG5cblx0XHRkZWZpbmVUaW1lRm9ybWF0KCkge1xuXHRcdFx0bGV0IGZvcm1hdCA9IFtdO1xuXHRcdFx0bGV0IGFtUG0gPSAnJztcblxuXHRcdFx0Zm9ybWF0LnB1c2godGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0ID8gJ0hIJyA6ICdoaCcpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zaG93TWludXRlcykgZm9ybWF0LnB1c2goJ21tJyk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSBmb3JtYXQucHVzaCgnc3MnKTtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmlzMjRoRm9ybWF0KSBhbVBtID0gJyBwJztcblxuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdC5qb2luKCc6Jyl9JHthbVBtfWA7XG5cdFx0fVxuXG5cdFx0Y29udmVydFRpbWUxMnRvMjQodmFsdWUpIHtcblx0XHRcdGNvbnN0IFt0aW1lLCBtb2RpZmllcl0gPSB2YWx1ZS5zcGxpdCgnICcpO1xuXHRcdFx0bGV0IFtob3VycywgbWludXRlcyA9ICcwMCcsIHNlY29uZHMgPSAnMDAnXSA9IHRpbWUuc3BsaXQoJzonKTtcblxuXHRcdFx0aWYgKGhvdXJzID09PSAnMTInKSBob3VycyA9ICcwMCc7XG5cdFx0XHRpZiAobW9kaWZpZXIgPT09ICdQTScpIGhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKSArIDEyO1xuXG5cdFx0XHRyZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG5cdFx0fVxuXG5cdFx0Y29udmVydFRpbWVGb3JtYXRUb01hc2sodmFsdWUgPSAnJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoL1thLXpBLVpdKy9nLCAnLS0nKTtcblx0XHR9XG5cblx0XHRvbkNoYW5nZUV2ZW50KHZhbHVlID0gJycpIHtcblx0XHRcdGxldCBtb2RlbCA9ICcwMS0wMS0xOTAwIDAwOjAwOjAwJzsgLy9pLmUuIG51bGxcblx0XHRcdGxldCBsYWJlbCA9IHRoaXMuY29udmVydFRpbWVGb3JtYXRUb01hc2sodGhpcy5vcHRpb25zLnRpbWVGb3JtYXQpO1xuXG5cdFx0XHRpZiAodmFsdWUgJiYgISF2YWx1ZS50cmltKCkpIHtcblx0XHRcdFx0Ly8gVGhpcyBjb25kaXRpb24gaXMgY29ycmVjdCwgbW9kZWwgYWx3YXlzIHVzZXMgdGhlIDI0aCBmb3JtYXRcblx0XHRcdFx0bW9kZWwgPSB0aGlzLm9wdGlvbnMuaXMyNGhGb3JtYXQgPyB2YWx1ZSA6IHRoaXMuY29udmVydFRpbWUxMnRvMjQodmFsdWUpO1xuXHRcdFx0XHRsYWJlbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmlzTm90aWZ5RW5hYmxlZCkgT3NOb3RpZnlXaWRnZXQodGhpcy5vcHRpb25zLmhvdXJQaWNrZXJGYWtlTm90aWZ5SWQsIG1vZGVsKTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuaXNUZXh0VHJpZ2dlcmFibGUpIHRoaXMuJGxhYmVsLnRleHQobGFiZWwpO1xuXG5cdFx0XHR0aGlzLiRtb2RlbC52YWwobW9kZWwpO1xuXHRcdFx0dGhpcy4kbW9kZWwuY2hhbmdlKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvbkNvbXBvbmVudEluaXQoKSB7XG5cdFx0XHR0aGlzLiRjb21wb25lbnQgPSAkKGAjJHt0aGlzLm9wdGlvbnMud2lkZ2V0SWR9YCk7XG5cdFx0XHR0aGlzLiRtb2RlbCA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuSG91clBpY2tlcl9fUGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcblx0XHRcdHRoaXMuJGlucHV0ID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5Ib3VyUGlja2VyX19EaXNwbGF5ZWQgLkhvdXJQaWNrZXJfX0lucHV0VmFsdWUnKTtcblx0XHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRpbnB1dDtcblxuXHRcdFx0dGhpcy5vcHRpb25zLnRpbWVGb3JtYXQgPSB0aGlzLmRlZmluZVRpbWVGb3JtYXQoKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQ29tcG9uZW50VmFsaWQoKSkgcmV0dXJuO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSB0aGlzLiRjb21wb25lbnQ7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc1RleHRUcmlnZ2VyYWJsZSkge1xuXHRcdFx0XHRcdCRjb250YWluZXIuYWRkQ2xhc3MoJ0hvdXJQaWNrZXItLXRleHRUcmlnZ2VyJyk7XG5cblx0XHRcdFx0XHR0aGlzLiRsYWJlbCA9ICRjb250YWluZXIuZmluZCgnLkhvdXJQaWNrZXJfX0Rpc3BsYXllZCAuSG91clBpY2tlcl9fTGFiZWxWYWx1ZScpO1xuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRsYWJlbDtcblxuXHRcdFx0XHRcdHRoaXMuJGxhYmVsLnRleHQodGhpcy5jb252ZXJ0VGltZUZvcm1hdFRvTWFzayh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCkpO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGFiZWwub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kbGFiZWwudGltZXBpY2tlcigpLm9wZW4oKTtcblxuXHRcdFx0XHRcdFx0dGhpcy5zZXRDb21wb25lbnRQb3NpdGlvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5pc0NsZWFyYWJsZSkge1xuXHRcdFx0XHRcdHRoaXMuJGJ1dHRvbkNsZWFyID0gJGNvbnRhaW5lci5maW5kKCcuSG91clBpY2tlcl9fRGlzcGxheWVkIC5Ib3VyUGlja2VyX19CdXR0b25DbGVhcicpO1xuXG5cdFx0XHRcdFx0dGhpcy4kYnV0dG9uQ2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcblx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VFdmVudCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy4kZWxlbWVudC50aW1lcGlja2VyKHtcblx0XHRcdFx0XHQuLi50aGlzLm9wdGlvbnMsXG5cdFx0XHRcdFx0Y2hhbmdlOiB0aW1lID0+IHRoaXMub25DaGFuZ2VFdmVudCh0aW1lID8gJCgpLnRpbWVwaWNrZXIuZm9ybWF0VGltZSh0aGlzLm9wdGlvbnMudGltZUZvcm1hdCwgdGltZSkgOiBudWxsKSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5zZXRFbGVtZW50Q2xhc3MoJy51aS10aW1lcGlja2VyLWNvbnRhaW5lcicsIHRoaXMub3B0aW9ucy5jdXJyZW50TG9jYWxlID09PSAnQVInID8gJ3J0bCcgOiAnbHRyJyk7XG5cblx0XHRcdFx0dGhpcy4kaW5wdXQucHJvcCgncmVhZG9ubHknLCAhdGhpcy5vcHRpb25zLmlzVHlwZUVuYWJsZWQpO1xuXHRcdFx0XHR0aGlzLiRpbnB1dC5wcm9wKCdwbGFjZWhvbGRlcicsIHRoaXMub3B0aW9ucy50aW1lRm9ybWF0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IEhvdXJQaWNrZXIoY29uZmlnKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSG91clBpY2tlciA9IHtcblx0XHRjcmVhdGUsXG5cdFx0YWxsSW50YW5jZXM6IFtdLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgSW5wdXRMQVNBICovXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBzZXR1cElucHV0ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JCgnYm9keScpLm9mZignY2xpY2snLCAnIycgKyBjb25maWcubGFiZWxJZCk7XG5cdFx0JCgnYm9keScpLm9mZignYmx1ciBjaGFuZ2UgaW5wdXQnLCAnIycgKyBjb25maWcuaW5wdXRJZCk7XG5cblx0XHQkKCcjJyArIGNvbmZpZy5pbnB1dElkKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblxuXHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmhpZGUoKTtcblx0XHQkKCcjJyArIGNvbmZpZy5sYWJlbElkKS5zaG93KCk7XG5cblx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0KGNvbmZpZyk7XG5cblx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgJyMnICsgY29uZmlnLmxhYmVsSWQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkuaGlkZSgpO1xuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuc2hvdygpO1xuXHRcdFx0JCgnIycgKyBjb25maWcuaW5wdXRJZCkuZm9jdXMoKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5vbignYmx1cicsICcjJyArIGNvbmZpZy5pbnB1dElkLCBmdW5jdGlvbigpIHtcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5oYW5kbGVQcm9tcHQoY29uZmlnKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmlucHV0SWQpLmhpZGUoKTtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpLnNob3coKTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QuaGFuZGxlUHJvbXB0KGNvbmZpZyk7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5hcHBseU1hcmtpbmcoeyB0YXJnZXQ6IGNvbmZpZy5sYWJlbElkIH0pO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5vbignY2hhbmdlIGlucHV0JywgJyMnICsgY29uZmlnLmlucHV0SWQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZCkudGV4dCgkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKSk7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmFwcGx5TWFya2luZyh7IHRhcmdldDogJ3BhZ2UnIH0pO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgaGFuZGxlUHJvbXB0ID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0aWYgKCEkKCcjJyArIGNvbmZpZy5pbnB1dElkKS52YWwoKS5sZW5ndGgpIHtcblx0XHRcdCQoJyMnICsgY29uZmlnLmxhYmVsSWQpXG5cdFx0XHRcdC50ZXh0KCQoJyMnICsgY29uZmlnLmlucHV0SWQpLnByb3AoJ3BsYWNlaG9sZGVyJykpXG5cdFx0XHRcdC5jc3MoJ2NvbG9yJywgJyM5OTknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnIycgKyBjb25maWcubGFiZWxJZClcblx0XHRcdFx0LnRleHQoJCgnIycgKyBjb25maWcuaW5wdXRJZCkudmFsKCkpXG5cdFx0XHRcdC5jc3MoJ2NvbG9yJywgJycpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgPSBTYXBwaGlyZVdpZGdldHMuTWFya1dvcmRzRnJvbUxpc3QgfHwge307XG5cdFNhcHBoaXJlV2lkZ2V0cy5NYXJrV29yZHNGcm9tTGlzdC5zZXR1cElucHV0ID0gc2V0dXBJbnB1dDtcblx0U2FwcGhpcmVXaWRnZXRzLk1hcmtXb3Jkc0Zyb21MaXN0LmhhbmRsZVByb21wdCA9IGhhbmRsZVByb21wdDtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cdGNsYXNzIElucHV0V2l0aENsZWFyIHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcblx0XHRcdHRoaXMuJGNsZWFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhDbGVhci1jbGVhcicpO1xuXHRcdFx0dGhpcy4kbm90aWZ5TGluayA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItbm90aWZ5LWxpbmsnKTtcblx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSW5wdXRXaXRoQ2xlYXItLXNoaWVsZCcpO1xuXHRcdFx0dGhpcy5vbkluaXQoKTtcblx0XHR9XG5cblx0XHRvbkluaXQoKSB7XG5cdFx0XHR0aGlzLiRpbnB1dC5vbigna2V5dXAnLCBlID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuJGlucHV0LnZhbCgpICE9PSAnJykgdGhpcy4kY2xlYXIuc2hvdygpO1xuXHRcdFx0XHRlbHNlIHRoaXMuJGNsZWFyLnNob3coKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRpbnB1dC5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuJGlucHV0LnZhbCgpID09PSAnJykge1xuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICgkKCcuZGF0ZXJhbmdlcGlja2VyOnZpc2libGUnKS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy4kY2xlYXIuaGlkZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy4kbm90aWZ5TGluay50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kY2xlYXIub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoJycpO1xuXHRcdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuJG5vdGlmeUxpbmsudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHRoaXMuY29uZmlnLmhhc1NoaWVsZCkge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kd2lkZ2V0U2hpZWxkLmhpZGUoKTtcblx0XHRcdFx0fSwgdGhpcy5jb25maWcuc2hpZWxkVGltZW91dCk7XG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5zaGllbGRUaW1lb3V0ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJHdpZGdldFNoaWVsZC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLiRjbGVhci5oaWRlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4gKHdpbmRvd1tjb25maWcud2lkZ2V0SWRdID0gbmV3IElucHV0V2l0aENsZWFyKGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5JbnB1dFdpdGhDbGVhciA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXHRjbGFzcyBJbnB1dFdpdGhMaXN0IHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0dGhpcy4kd2lkZ2V0ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXHRcdFx0dGhpcy4kaW5wdXQgPSB0aGlzLiR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZV0nKTtcblx0XHRcdHRoaXMuJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcblxuXHRcdFx0dGhpcy4kaW5wdXQudmFsKCcnKTtcblxuXHRcdFx0dGhpcy5vbkluaXQoKTtcblx0XHR9XG5cblx0XHRvbkluaXQoKSB7XG5cdFx0XHR0aGlzLiRpbnB1dC5vbigna2V5dXAnLCBlID0+IHtcblx0XHRcdFx0Ly8gR2V0dGluZyBlbGVtZW50cyBhZ2FpbiBpbiBvcmRlciB0byB3b3JrIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgY2xvbmVkIChlLmcuIHdoZW4gdXNpbmcgaW5zaWRlIEFjdGlvbnNNZW51KVxuXHRcdFx0XHR0aGlzLiR3aWRnZXQgPSAkKGAjJHt0aGlzLmNvbmZpZy53aWRnZXRJZH1gKTtcblx0XHRcdFx0Y29uc3QgJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cdFx0XHRcdGNvbnN0ICRsaXN0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19MaXN0Jyk7XG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JbnB1dFdpdGhMaXN0X19IaWRkZW5JbnB1dCBpbnB1dCcpO1xuXG5cdFx0XHRcdGlmICgkaW5wdXQudmFsKCkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRcdCRsaXN0LmVtcHR5KCk7XG5cblx0XHRcdFx0XHQkbGlzdC5hcHBlbmQoYDxkaXY+PGI+Q3JlYXRlOjwvYj4gJHskaW5wdXQudmFsKCl9PC9kaXY+YCk7XG5cblx0XHRcdFx0XHRpZiAoISRsaXN0LmlzKCc6dmlzaWJsZScpKSAkbGlzdC5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGxpc3QuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kbGlzdC5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdFx0Y29uc3QgJGxpbmtOb3RpZnkgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3Qtbm90aWZ5LWxpbmsnKTtcblx0XHRcdFx0Y29uc3QgJGxpc3QgPSB0aGlzLiR3aWRnZXQuZmluZCgnLklucHV0V2l0aExpc3RfX0xpc3QnKTtcblx0XHRcdFx0Y29uc3QgJGlucHV0ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGVdJyk7XG5cblx0XHRcdFx0dGhpcy4kaGlkZGVuSW5wdXQudmFsKCRpbnB1dC52YWwoKSk7XG5cdFx0XHRcdHRoaXMuJGhpZGRlbklucHV0LmNoYW5nZSgpO1xuXG5cdFx0XHRcdCRsaW5rTm90aWZ5LmNsaWNrKCk7XG5cdFx0XHRcdCRsaXN0LmhpZGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgSW5wdXRXaXRoTGlzdChjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuSW5wdXRXaXRoTGlzdCA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KSgpO1xuIiwiLyogQ29tcG9uZW50IExpbmVBZGQgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdHNldFdpZHRoKGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZC53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblxuXHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiBzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpKTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLkxpbmVBZGQnLCAoKSA9PiBzZXRXaWR0aChjb25maWcud2lkZ2V0SWQpKTtcblx0fTtcblxuXHRjb25zdCBzZXRXaWR0aCA9IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWQgfHwgU2FwcGhpcmVXaWRnZXRzLkxpbmVBZGQud2lkZ2V0SWR9YCk7XG5cdFx0XHRjb25zdCB3aWR0aHMgPSBbXTtcblxuXHRcdFx0Zm9yIChpID0gMTsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRsZXQgbWF4V2lkdGhDb250ZW50ID0gTWF0aC5tYXguYXBwbHkoXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQkd2lkZ2V0XG5cdFx0XHRcdFx0XHQuZmluZCgnLmxhY29sJyArIGkpXG5cdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS53aWR0aCgpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5nZXQoKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHdpZHRocy5wdXNoKG1heFdpZHRoQ29udGVudCk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLmxhY29sJyArIGkpLndpZHRoKG1heFdpZHRoQ29udGVudCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTGluZUFkZCA9IHsgY3JlYXRlLCBzZXRXaWR0aCB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgTGluZURldGFpbHNFeHBhbmRCb3ggKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjb25zdCBpbml0ID0gY29uZmlnID0+IHtcblx0XHQkKGAjJHtjb25maWcud2lkZ2V0SWR9ICsgLkxpbmVEZXRhaWxzRXhwYW5kQm94X2FjdGlvbmApLmNsaWNrKGV2ZW50ID0+IHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiBpbml0KGNvbmZpZykpO1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5MaW5lRGV0YWlsc0V4cGFuZEJveCA9IHsgY3JlYXRlIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBMb2NhdGlvbkJveCAqL1xuU2FwcGhpcmVXaWRnZXRzLkxvY2F0aW9uQm94ID0gZnVuY3Rpb24od2lkZ2V0SWQpIHtcblx0Y29uc3QgJGNvbXBvbmVudCA9ICQoYCMke3dpZGdldElkfWApO1xuXG5cdGlmICgkY29tcG9uZW50Lmhhc0NsYXNzKCdPbicpKSB7XG5cdFx0JCgnLkRpc2FibGVSb29tJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdPZmYnKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ09uJyk7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoJy5Sb29tQm94Jylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0b3BhY2l0eTogJzEnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbXBvbmVudFxuXHRcdFx0LmFkZENsYXNzKCdPbicpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ09mZicpXG5cdFx0XHQucGFyZW50KCcuUm9vbUJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0b3BhY2l0eTogJzEnLFxuXHRcdFx0fSlcblx0XHRcdC5hZGRDbGFzcygnU2VsZWN0ZWQnKTtcblxuXHRcdCQoJy5EaXNhYmxlUm9vbTpub3QoIycgKyB3aWRnZXRJZCArICcpJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ09mZicpO1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnT24nKTtcblx0XHR9KTtcblxuXHRcdCQoJy5EaXNhYmxlUm9vbS5PZmYnKVxuXHRcdFx0LnBhcmVudCgnLlJvb21Cb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdG9wYWNpdHk6ICcwLjUwJyxcblx0XHRcdH0pXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ1NlbGVjdGVkJyk7XG5cdH1cbn07XG4iLCIvKiBDb21wb25lbnQgTWFpbkludGVyYWN0aXZlQ2FyZCAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBbXTtcblx0dmFyIGRlZmF1bHREdXJhdGlvbiA9IDMwMDtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzW2ldLmNvbmZpZy53aWRnZXRJZCA9PT0gY29uZmlnLndpZGdldElkKSB7XG5cdFx0XHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgTWFpbkludGVyYWN0aXZlQ2FyZChjb25maWcpO1xuXHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLnB1c2god2luZG93W2NvbmZpZy53aWRnZXRJZF0pO1xuXG5cdFx0aWYgKCEhIVNhcHBoaXJlV2lkZ2V0cy5NYWluSW50ZXJhY3RpdmVDYXJkLmFmdGVyQWpheFJlcXVlc3RCaW5kZWQgJiYgISFvc0FqYXhCYWNrZW5kKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0dmFyIE1haW5JbnRlcmFjdGl2ZUNhcmQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMuaXNMb2NrZWRPbkNsb3NlID0gZmFsc2U7XG5cdFx0dGhpcy5pc09wZW4gPSBjb25maWcuaXNPcGVuO1xuXHRcdHRoaXMuaXNFbmFibGVkID0gY29uZmlnLmlzRW5hYmxlZDtcblx0XHR0aGlzLmlzU2VsZWN0YWJsZSA9IGNvbmZpZy5pc1NlbGVjdGFibGU7XG5cdFx0dGhpcy5hbGxvd09wZW5pbmcgPSBjb25maWcuYWxsb3dPcGVuaW5nO1xuXHRcdHRoaXMuYWxsb3dNdWx0aXBsZU9wZW4gPSBjb25maWcuYWxsb3dNdWx0aXBsZU9wZW47XG5cdFx0dGhpcy5lbWl0Tm90aWZ5T25PcGVuID0gY29uZmlnLmVtaXROb3RpZnlPbk9wZW47XG5cdFx0dGhpcy5oaWRlQWN0aW9uc09uT3BlbiA9IGNvbmZpZy5oaWRlQWN0aW9uc09uT3Blbjtcblx0XHR0aGlzLmhpZGVDYXB0aW9uT25PcGVuID0gY29uZmlnLmhpZGVDYXB0aW9uT25PcGVuO1xuXHRcdHRoaXMuaGlkZVRpdGxlT25PcGVuID0gY29uZmlnLmhpZGVUaXRsZU9uT3Blbjtcblx0XHR0aGlzLmhpZGVTdWJUaXRsZU9uT3BlbiA9IGNvbmZpZy5oaWRlU3ViVGl0bGVPbk9wZW47XG5cdFx0dGhpcy5oZWFkZXJIZWlnaHRXaGVuT3BlbiA9IGNvbmZpZy5oZWFkZXJIZWlnaHRXaGVuT3Blbjtcblx0XHR0aGlzLk1haW5JbnRlcmFjdGl2ZUNhcmRGYWtlTm90aWZ5SWQgPSBjb25maWcubWFpbkludGVyYWN0aXZlQ2FyZEZha2VOb3RpZnlJZDtcblxuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiR3aWRnZXQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0dGhpcy4kY2FyZCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXInKTtcblx0XHR0aGlzLiRoZWFkZXJUZXh0ID0gdGhpcy4kaGVhZGVyLmZpbmQoJy5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0Jyk7XG5cdFx0dGhpcy4kZXhwYW5kSWNvbiA9IHRoaXMuJGhlYWRlci5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1leHBhbmQtaWNvbicpO1xuXHRcdHRoaXMuJGJvZHkgPSB0aGlzLiR3aWRnZXQuZmluZCgnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IGRpdiA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWJvZHknKTtcblx0XHR0aGlzLiRhY3Rpb25zID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItYWN0aW9ucydcblx0XHQpO1xuXHRcdHRoaXMuJGNhcHRpb24gPSB0aGlzLiR3aWRnZXQuZmluZChcblx0XHRcdCc+IC5NYWluSW50ZXJhY3RpdmVDYXJkID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyIC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci10ZXh0LWNhcHRpb24nXG5cdFx0KTtcblx0XHR0aGlzLiR0aXRsZSA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRleHQtdGl0bGUnXG5cdFx0KTtcblx0XHR0aGlzLiRzdWJUaXRsZSA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXIgLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXRleHQtc3VidGl0bGUnXG5cdFx0KTtcblx0XHR0aGlzLiRzZWxlY3RUcmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlci1zZWxlY3RhYmxlID4gLk1haW5JbnRlcmFjdGl2ZUNhcmQtaGVhZGVyLXNlbGVjdGFibGUtdHJpZ2dlcidcblx0XHQpO1xuXHRcdHRoaXMuJHNlbGVjdFBsYWNlaG9sZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoXG5cdFx0XHQnPiAuTWFpbkludGVyYWN0aXZlQ2FyZCA+IC5NYWluSW50ZXJhY3RpdmVDYXJkLWhlYWRlciAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItc2VsZWN0YWJsZS1wbGFjZWhvbGRlcidcblx0XHQpO1xuXHRcdHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlciA9IHRoaXMuJHdpZGdldC5maW5kKFxuXHRcdFx0Jz4gLk1haW5JbnRlcmFjdGl2ZUNhcmQgPiAuTWFpbkludGVyYWN0aXZlQ2FyZC1oZWFkZXItdHJpZ2dlckFjdGlvbi1wbGFjZWhvbGRlcidcblx0XHQpO1xuXG5cdFx0aWYgKHRoaXMuJHRyaWdnZXJQbGFjZWhvbGRlci5maW5kKCdhJykubGVuZ3RoID09PSAxKSB7XG5cdFx0XHR0aGlzLiR0cmlnZ2VyID0gdGhpcy4kdHJpZ2dlclBsYWNlaG9sZGVyLmZpbmQoJ2EnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc09wZW4pIHtcblx0XHRcdHRoaXMub3BlbihmYWxzZSwgLTEpO1xuXHRcdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnZm9yY2VPcGVuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kY2FyZC5hZGRDbGFzcyh0aGlzLmhlYWRlckhlaWdodFdoZW5PcGVuICsgJ0hlYWRlcicpO1xuXG5cdFx0aWYgKHRoaXMuYWxsb3dPcGVuaW5nKSB7XG5cdFx0XHR0aGlzLiRjYXJkLmFkZENsYXNzKCdhbGxvd09wZW5pbmcnKTtcblx0XHR9XG5cblx0XHR0aGlzLmF0dGFjaEV2ZW50cygpO1xuXG5cdFx0dmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG5cdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbiwgaW5kZXgpIHtcblx0XHRcdFx0X3RoaXMuaGFuZGxlSGVhZGVyV2l0aEFic29sdXRlQnV0dG9ucygpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy53aWRnZXRJZCksIHtcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHRhdHRyaWJ1dGVzOiBmYWxzZSxcblx0XHR9KTtcblx0fTtcblxuXHRNYWluSW50ZXJhY3RpdmVDYXJkLnByb3RvdHlwZS5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRpZiAoISF0aGlzLiRib2R5LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMnKS5sZW5ndGggJiYgdGhpcy5pc09wZW4pIHtcblx0XHRcdHZhciBhYnNvbHV0ZUFjdGlvbnNXaWR0aCA9IE1hdGgubWF4LmFwcGx5KFxuXHRcdFx0XHRNYXRoLFxuXHRcdFx0XHR0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMnKVxuXHRcdFx0XHRcdC5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldCgpXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGhlYWRlck1heFdpZHRoID0gdGhpcy4kaGVhZGVyLndpZHRoKCkgLSBhYnNvbHV0ZUFjdGlvbnNXaWR0aDtcblx0XHRcdGlmIChoZWFkZXJNYXhXaWR0aCA+IDEwKSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlclRleHQuY3NzKHtcblx0XHRcdFx0XHRtYXhXaWR0aDogaGVhZGVyTWF4V2lkdGggKyAncHgnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuJGJvZHlcblx0XHRcdFx0LmZpbmQoJz4gZGl2IC5NYWluSW50ZXJhY3RpdmVDYXJkLWFic29sdXRlLWFjdGlvbnMgLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRfdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRoZWFkZXJcblx0XHRcdC5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC0tb3Blbjpub3QoW2Rpc2FibGVkXSknKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRfdGhpcy5vcGVuKHRydWUpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy4kaGVhZGVyXG5cdFx0XHQuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtLWNsb3NlJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHRcdH0pO1xuXHRcdGlmICh0aGlzLmFsbG93T3BlbmluZykge1xuXHRcdFx0Y29uc3QgY2xpY2tBY3Rpb24gPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aWYgKCQoZXZ0LnRhcmdldCkuaGFzQ2xhc3MoJ0J1dHRvbicpKSB7XG5cdFx0XHRcdFx0Ly8gdGhlIHVzZXIgY2xpY2tlZCBvbiBhIEJ1dHRvbiBpbnNpZGUgdGhlIGhlYWRlciwgbm90aGluZyB0byBkbyBoZXJlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKF90aGlzLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJlxuXHRcdFx0XHRcdFx0XHQhX3RoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5oYXNDbGFzcygnY2tlX3d5c2l3eWdfZnJhbWUnKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIGRvIG5vdCBjbG9zZSB3aGVuIGFuZCBpZnJhbWUgZXhpc3RzXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5maW5kKCdhJykubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC0tY2xvc2UnKS5sZW5ndGggPiAwXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZG8gbm90IGNsb3NlIHdoZW4gdGhlIGNhcmQgaGFzIGFjdGlvbnNcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdF90aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzLm9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLiRoZWFkZXJUZXh0Lm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGNsaWNrQWN0aW9uKGUpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRleHBhbmRJY29uLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGNsaWNrQWN0aW9uKGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmlzU2VsZWN0YWJsZSkge1xuXHRcdFx0dGhpcy4kc2VsZWN0VHJpZ2dlci5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoX3RoaXMuJHNlbGVjdFBsYWNlaG9sZGVyLmZpbmQoJ2EnKS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRfdGhpcy4kc2VsZWN0UGxhY2Vob2xkZXIuZmluZCgnYScpLmNsaWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdZb3UgbmVlZCAxIGxpbmsgaW4gdGhpcyBwbGFjZWhvbGRlci4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihzZW5kTm90aWZ5LCBkdXJhdGlvbikge1xuXHRcdHZhciBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IGRlZmF1bHREdXJhdGlvbjtcblx0XHR0aGlzLmlzT3BlbiA9IHRydWU7XG5cdFx0dGhpcy4kY2FyZC5hZGRDbGFzcygnaXNPcGVuJyk7XG5cdFx0aWYgKHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4pIHtcblx0XHRcdHRoaXMuJGFjdGlvbnMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuaGlkZVRpdGxlT25PcGVuKSB7XG5cdFx0XHR0aGlzLiR0aXRsZS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHN1YlRpdGxlLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhpZGVDYXB0aW9uT25PcGVuKSB7XG5cdFx0XHR0aGlzLiRjYXB0aW9uLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVtaXROb3RpZnlPbk9wZW4pIHtcblx0XHRcdGlmIChzZW5kTm90aWZ5KSB7XG5cdFx0XHRcdE9zTm90aWZ5V2lkZ2V0KHRoaXMuTWFpbkludGVyYWN0aXZlQ2FyZEZha2VOb3RpZnlJZCwgJ29wZW4nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLiR0cmlnZ2VyKSB7XG5cdFx0XHR0aGlzLiR0cmlnZ2VyLmNsaWNrKCk7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZHVyYXRpb24gPiAwKSB7XG5cdFx0XHRcdHRoaXMuJGJvZHkuc2xpZGVEb3duKGR1cmF0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykubGVuZ3RoID09PSAxICYmICF0aGlzLiR3aWRnZXQuZmluZCgnaWZyYW1lJykuaGFzQ2xhc3MoJ2NrZV93eXNpd3lnX2ZyYW1lJykpIHtcblx0XHRcdHZhciBpZnJhbWVDb250ZW50cyA9IHRoaXMuJHdpZGdldC5maW5kKCdpZnJhbWUnKS5jb250ZW50cygpO1xuXHRcdFx0aWZyYW1lQ29udGVudHMuZmluZCgnLk1haW5JbnRlcmFjdGl2ZUNhcmQtaWZyYW1lLWFjdGlvbnMnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhhbmRsZUhlYWRlcldpdGhBYnNvbHV0ZUJ1dHRvbnMoKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmFsbG93TXVsdGlwbGVPcGVuKSB7XG5cdFx0XHRhbGxNYWluSW50ZXJhY3RpdmVDYXJkcy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0gIT09IHRoaXMgJiYgaXRlbS5hbGxvd09wZW5pbmcgPyBpdGVtLmNsb3NlKGR1cmF0aW9uKSA6IG51bGwpKTtcblx0XHR9XG5cdH07XG5cblx0TWFpbkludGVyYWN0aXZlQ2FyZC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihkdXJhdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBkZWZhdWx0RHVyYXRpb247XG5cdFx0dGhpcy5pc09wZW4gPSBmYWxzZTtcblx0XHR0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHRpZiAodGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy4kd2lkZ2V0LmZpbmQoJ2lmcmFtZScpLmhhc0NsYXNzKCdja2Vfd3lzaXd5Z19mcmFtZScpKSB7XG5cdFx0XHR0aGlzLiR3aWRnZXRcblx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdC5maW5kKCcuTWFpbkludGVyYWN0aXZlQ2FyZC1pZnJhbWUtYWN0aW9ucycpXG5cdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0fVxuXHRcdHRoaXMuJGJvZHkuc2xpZGVVcChkdXJhdGlvbiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc2VsZi4kY2FyZC5oYXNDbGFzcygnZm9yY2VPcGVuJykpIHtcblx0XHRcdFx0c2VsZi4kY2FyZC5yZW1vdmVDbGFzcygnZm9yY2VPcGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuaGlkZUFjdGlvbnNPbk9wZW4pIHtcblx0XHRcdHRoaXMuJGFjdGlvbnMuc2hvdygpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHRpdGxlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlU3ViVGl0bGVPbk9wZW4pIHtcblx0XHRcdHRoaXMuJHN1YlRpdGxlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5oaWRlQ2FwdGlvbk9uT3Blbikge1xuXHRcdFx0dGhpcy4kY2FwdGlvbi5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgPiAxMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyVGV4dC5jc3Moe1xuXHRcdFx0XHRtYXhXaWR0aDogdGhpcy4kaGVhZGVyLndpZHRoKCkgLSB0aGlzLiRhY3Rpb25zLndpZHRoKCkgKyAncHgnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdE1haW5JbnRlcmFjdGl2ZUNhcmQucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmlzT3Blbjtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZCA9IHtcblx0XHRjcmVhdGU6IGNyZWF0ZSxcblx0XHRhbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzO1xuXHRcdH0sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHRpZiAoISEkKCcuTWFpbkludGVyYWN0aXZlQ2FyZCcpLmxlbmd0aCkge1xuXHRcdGlmICghISFTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgYWxsTWFpbkludGVyYWN0aXZlQ2FyZHMgPSBTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hbGwoKTtcblx0XHRcdFx0YWxsTWFpbkludGVyYWN0aXZlQ2FyZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRTYXBwaGlyZVdpZGdldHMuTWFpbkludGVyYWN0aXZlQ2FyZC5hZnRlckFqYXhSZXF1ZXN0QmluZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhbGxNYWluSW50ZXJhY3RpdmVDYXJkcyA9IFNhcHBoaXJlV2lkZ2V0cy5NYWluSW50ZXJhY3RpdmVDYXJkLmFsbCgpO1xuXHRcdGFsbE1haW5JbnRlcmFjdGl2ZUNhcmRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5oYW5kbGVIZWFkZXJXaXRoQWJzb2x1dGVCdXR0b25zKCk7XG5cdFx0fSk7XG5cdH0sIDEwMDApO1xufSk7XG4iLCIvKiBDb21wb25lbnQgTWVudUJhciAqL1xuU2FwcGhpcmVXaWRnZXRzLk1lbnVCYXIgPSBmdW5jdGlvbihjb25maWcpIHtcblx0JChmdW5jdGlvbigpIHtcblx0XHR2YXIgJG1lbnVXaWRnZXQgPSAkKCcjJyArIGNvbmZpZy5tZW51V2lkZ2V0KTtcblxuXHRcdHZhciBtZW51UmVzaWRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5hdldpZHRoID0gMDtcblx0XHRcdHZhciBhdmFpbGFiZUVzcGFjZSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0nKS53aWR0aCgpO1xuXG5cdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG5hdldpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAobmF2V2lkdGggPiBhdmFpbGFiZUVzcGFjZSkge1xuXHRcdFx0XHR2YXIgbGFzdEl0ZW0gPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9pdGVtIC5NZW51SXRlbScpLmxhc3QoKTtcblx0XHRcdFx0bGFzdEl0ZW0uYXR0cignZGF0YS13aWR0aCcsIGxhc3RJdGVtLm91dGVyV2lkdGgodHJ1ZSkpO1xuXHRcdFx0XHRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykpO1xuXHRcdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGZpcnN0TW9yZUVsZW1lbnQgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9fZXh0cmFDb250YWluZXIgLk1lbnVJdGVtJykuZmlyc3QoKTtcblx0XHRcdFx0aWYgKG5hdldpZHRoICsgZmlyc3RNb3JlRWxlbWVudC5kYXRhKCd3aWR0aCcpIDwgYXZhaWxhYmVFc3BhY2UpIHtcblx0XHRcdFx0XHRmaXJzdE1vcmVFbGVtZW50Lmluc2VydEFmdGVyKCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2l0ZW0gLk1lbnVJdGVtJykubGFzdCgpKTtcblx0XHRcdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJG1lbnVXaWRnZXQuZmluZCgnLk1lbnViYXJfX2V4dHJhQ29udGFpbmVyJykuaXMoJzplbXB0eScpKSB7XG5cdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX2V4dHJhSXRlbScpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0ISQodGhpcylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuaGFzQ2xhc3MoJ01lbnViYXJfX2V4dHJhQ29udGFpbmVyJylcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVJbmRpY2F0b3InKSkge1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5hY3RpdmVJbmRpY2F0b3InKS5hZGRDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblx0XHRcdFx0fSBlbHNlIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgJiYgJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlSW5kaWNhdG9yJykpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnLk1lbnVJdGVtX3N1Ykl0ZW1zJylcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpXG5cdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0gLmljb24nKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCRtZW51V2lkZ2V0LmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lciAnKS50b2dnbGVDbGFzcygnc2hvdycpO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkubW91c2V1cChlID0+IHtcblx0XHRcdHZhciAkbWVudSA9ICRtZW51V2lkZ2V0LmZpbmQoJy5NZW51SXRlbS5hY3RpdmUnKTtcblx0XHRcdHZhciAkbW9yZU9wdGlvbnMgPSAkbWVudVdpZGdldC5maW5kKCcuTWVudWJhcl9leHRyYUl0ZW0nKTtcblxuXHRcdFx0Ly8gaWYgdGhlIHRhcmdldCBvZiB0aGUgY2xpY2sgaXNuJ3QgdGhlIG1lbnUgb3IgYSBkZXNjZW5kYW50IG9mIHRoZSBtZW51XG5cdFx0XHRpZiAoJG1lbnUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoISRtZW51LmlzKGUudGFyZ2V0KSAmJiAkbWVudS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdCRtZW51LmZpbmQoJy5NZW51SXRlbV9zdWJJdGVtcycpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdFx0JCgnLmFjdGl2ZUluZGljYXRvcicpLnJlbW92ZUNsYXNzKCdzaGFkb3cnKTtcblx0XHRcdFx0XHQkbWVudVdpZGdldC5maW5kKCcuTWVudUl0ZW0uYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJG1vcmVPcHRpb25zLmlzKGUudGFyZ2V0KSAmJiAkbW9yZU9wdGlvbnMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0JG1vcmVPcHRpb25zLmZpbmQoJy5NZW51YmFyX19leHRyYUNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdCQoJy5hY3RpdmVJbmRpY2F0b3InKS5yZW1vdmVDbGFzcygnc2hhZG93Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtZW51UmVzaWRlcigpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgTXVsdGlwbGVTZWxlY3Rpb25CdXR0b24gKi9cblNhcHBoaXJlV2lkZ2V0cy5NdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uKFdyYXBwZXJJZCkge1xuXHRjb25zdCAkd2lkZ2V0ID0gJChXcmFwcGVySWQpO1xuXHRjb25zdCAkY29udHJvbCA9ICR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cblx0aWYgKCQoV3JhcHBlcklkICsgJyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5pcygnOmRpc2FibGVkJykpIHtcblx0XHQkd2lkZ2V0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdH1cblxuXHRpZiAoJChXcmFwcGVySWQgKyAnIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0JHdpZGdldC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdH0gZWxzZSB7XG5cdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdH1cblxuXHQkd2lkZ2V0LmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSAkcGFyZW50LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRlbHNlICRwYXJlbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9KTtcblxuXHQkd2lkZ2V0LmZpbmQoJy5NdWx0aXBsZVNlbGVjdGlvbkJ1dHRvbi1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCRjb250cm9sWzBdLmNsaWNrKCk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCRjb250cm9sLmlzKCc6Y2hlY2tlZCcpKSAkd2lkZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdGVsc2UgJHdpZGdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0fSwgMTApO1xuXHR9KTtcbn07XG4iLCIvKiBDb21wb25lbnQgQ29uZmlybWF0aW9uUGFuZWwzT3B0aW9ucyBDb25maXJtYXRpb25QYW5lbCBzYW1lIGphdmFzY3JpcHQgY29kZSovXG5cblNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbCA9IHtcblx0aXNBbnlQYW5lbE9wZW5lZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKSAmJiAkKCcuUGFuZWxDb250YWluZXI6dmlzaWJsZScpLmxlbmd0aDtcblx0fSxcblxuXHR0b2dnbGVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSByZXR1cm47XG5cblx0XHRpZiAoIVNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5pc0FueVBhbmVsT3BlbmVkKCkpIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZUluKDE0MCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0XHQuZmluZCgnLlBhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0XHQuc2xpZGVUb2dnbGUoMTUwKTtcblx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5zZXRNb2RhbE1pbmltaXplZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZVBhbmVsOiBmdW5jdGlvbihQYW5lbElkKSB7XG5cdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXHRcdCQoJyMnICsgUGFuZWxJZCkuZmFkZU91dCgxNDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgUGFuZWxJZClcblx0XHRcdFx0LmZpbmQoJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdC5zbGlkZVVwKDE1MCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRzZXRQYW5lbEJlaGF2aW9yOiBmdW5jdGlvbigpIHtcblx0XHQkKCcuUGFuZWxbY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkXScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGhpc19wYW5lbCA9ICQodGhpcyk7XG5cdFx0XHQkKCcjJyArIHRoaXNfcGFuZWwuYXR0cignY29uZmlybWF0aW9uLXBhbmVsLXRyaWdnZXItZWxlbWVudGlkJykgKyAnJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBhbmVsLnRvZ2dsZVBhbmVsKHRoaXNfcGFuZWwuYXR0cignaWQnKSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUGFuZWwuc2V0UGFuZWxCZWhhdmlvcigpO1xuXHRpZiAob3NBamF4QmFja2VuZC5FdmVudEhhbmRsZXJzLkFmdGVyQWpheFJlcXVlc3QudG9TdHJpbmcoKS5pbmRleE9mKCdzZXRQYW5lbEJlaGF2aW9yJykgPT0gLTEpIHtcblx0XHRvc0FqYXhCYWNrZW5kLkJpbmRBZnRlckFqYXhSZXF1ZXN0KFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25QYW5lbC5zZXRQYW5lbEJlaGF2aW9yKTtcblx0fVxufSk7XG4iLCIvKiBDb21wb25lbnQgQ29uZmlybWF0aW9uUG9wdXAgKi9cbnZhciBfaXNJbklmcmFtZSA9IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gdW5kZWZpbmVkIHx8IGZhbHNlO1xuU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwID0ge1xuXHRpc0FueUNvbmZpcm1hdGlvbk9wZW5lZDogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKF9pc0luSWZyYW1lKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LnRvcC4kKCdib2R5JykuaGFzQ2xhc3MoJ2NvbmZpcm1hdGlvbi1vcGVuZWQnKSAmJiB3aW5kb3cudG9wLiQoJy5jb25maXJtLWNvbnRhaW5lcjp2aXNpYmxlJykubGVuZ3RoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdjb25maXJtYXRpb24tb3BlbmVkJykgJiYgJCgnLmNvbmZpcm0tY29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XG5cdFx0fVxuXHR9LFxuXG5cdHRvZ2dsZUNvbmZpcm06IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcblx0XHRpZiAoIU9zVmFsaWRhdG9yT25TdWJtaXQoKSkgcmV0dXJuO1xuXG5cdFx0aWYgKCF0aGlzLmlzQW55Q29uZmlybWF0aW9uT3BlbmVkKCkpIHtcblx0XHRcdHZhciBfYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdHZhciBfYm9keUpTID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRfYm9keSA9IHdpbmRvdy50b3AuJCgnYm9keScpO1xuXHRcdFx0XHRfYm9keUpTID0gd2luZG93LnRvcC5kb2N1bWVudC5ib2R5O1xuXHRcdFx0fVxuXG5cdFx0XHRfYm9keS5hZGRDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1JZCA9ICdjb25maXJtXycgKyBfaWQ7XG5cblx0XHRcdHZhciBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBfY29uZmlybUlkKTtcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtIGNvbmZpcm0td2InKTtcblx0XHRcdF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjb25maXJtLXRyaWdnZXItZWxlbWVudGlkJywgX2lkKTtcblxuXHRcdFx0dmFyIF9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tYmFja2dyb3VuZCBjb25maXJtLXdiJyk7XG5cdFx0XHRfYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JnXycgKyBfY29uZmlybUlkKTtcblx0XHRcdF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2JhY2tncm91bmQpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblx0XHRcdF9jb25maXJtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS1jb250YWluZXIgY29uZmlybS13YicpO1xuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XG5cblx0XHRcdHZhciBfY29uZmlybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZmlybS10aXRsZScpO1xuXHRcdFx0dmFyIF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKF9xdWVzdGlvbik7XG5cdFx0XHRfY29uZmlybVRpdGxlLmFwcGVuZENoaWxkKF90aXRsZSk7XG5cdFx0XHRfY29uZmlybS5hcHBlbmRDaGlsZChfY29uZmlybVRpdGxlKTtcblxuXHRcdFx0dmFyIF9jb25maXJtTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybU1zZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbmZpcm0tbWVzc2FnZScpO1xuXG5cdFx0XHRfY29uZmlybU1zZy5pbm5lckhUTUwgPSBfbWVzc2FnZTsgLyogU2V0IEhUTUwgdG8gcmVuZGVyIHRoZSBtZXNzYWdlIEhUTUwgdGFncywgc2ltaWxhciB0byB0aGUgRXNjYXBlIENvbnRlbnQgc2V0IGFzIE5vLiAqL1xuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1Nc2cpO1xuXG5cdFx0XHR2YXIgX2NvbmZpcm1BY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRfY29uZmlybUFjdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25maXJtLWFjdGlvbnMnKTtcblx0XHRcdF9jb25maXJtLmFwcGVuZENoaWxkKF9jb25maXJtQWN0aW9ucyk7XG5cblx0XHRcdHZhciBfbm9CdG5MbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdCdXR0b24gVGhpcmQgTXVsdGlNYXJnaW5SaWdodDEwJyk7XG5cdFx0XHRfbm9CdG5Mbmsuc2V0QXR0cmlidXRlKCdjYW5jZWwtYnV0dG9uJywgJ2NhbmNlbC1idXR0b24nKTtcblx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ObzEnKTtcblx0XHRcdGlmIChfSGFzTm90aWZ5T25DYW5jZWwgPT0gJ1RydWUnKSB7XG5cdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCInICtcblx0XHRcdFx0XHRcdFx0J2lmcmFtZV8nICtcblx0XHRcdFx0XHRcdFx0X2lkICtcblx0XHRcdFx0XHRcdFx0J1wiKS5jb250ZW50V2luZG93Lk9zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRcdF9ub3RpZnlJZCArXG5cdFx0XHRcdFx0XHRcdCdcIixcIkNBTkNFTFwiKTsgU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArXG5cdFx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnT3NOb3RpZnlXaWRnZXQoXCInICtcblx0XHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdFx0J1wiLFwiQ0FOQ0VMXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXG5cdFx0XHRcdFx0XHRcdCdcIik7J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9ub0J0bkxuay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0XHQnU2FwcGhpcmVXaWRnZXRzLkNvbmZpcm1hdGlvblBvcHVwLmNsb3NlQ29uZmlybVBvcHVwKFwiJyArIF9jb25maXJtSWQgKyAnXCIpOydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBfbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm8nKTtcblx0XHRcdF9ub0J0bkxuay5hcHBlbmRDaGlsZChfbm9CdG4pO1xuXHRcdFx0X2NvbmZpcm1BY3Rpb25zLmFwcGVuZENoaWxkKF9ub0J0bkxuayk7XG5cblx0XHRcdHZhciBfeWVzQnRuTG5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQScpO1xuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ0J1dHRvbiBTZXRBc1ZhbGlkIElzX0RlZmF1bHQnKTtcblx0XHRcdF95ZXNCdG5Mbmsuc2V0QXR0cmlidXRlKCdjYW5jZWwtYnV0dG9uJywgJycpO1xuXHRcdFx0X3llc0J0bkxuay5zZXRBdHRyaWJ1dGUoJ3VpJywgJ0NvbmZpcm1ZZXMxJyk7XG5cblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJyArXG5cdFx0XHRcdFx0XHQnaWZyYW1lXycgK1xuXHRcdFx0XHRcdFx0X2lkICtcblx0XHRcdFx0XHRcdCdcIikuY29udGVudFdpbmRvdy5Pc05vdGlmeVdpZGdldChcIicgK1xuXHRcdFx0XHRcdFx0X25vdGlmeUlkICtcblx0XHRcdFx0XHRcdCdcIixcIk9LXCIpOyBTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAuY2xvc2VDb25maXJtUG9wdXAoXCInICtcblx0XHRcdFx0XHRcdF9jb25maXJtSWQgK1xuXHRcdFx0XHRcdFx0J1wiKTsnXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfeWVzQnRuTG5rLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHQnb25jbGljaycsXG5cdFx0XHRcdFx0J09zTm90aWZ5V2lkZ2V0KFwiJyArXG5cdFx0XHRcdFx0XHRfbm90aWZ5SWQgK1xuXHRcdFx0XHRcdFx0J1wiLFwiT0tcIik7IFNhcHBoaXJlV2lkZ2V0cy5Db25maXJtYXRpb25Qb3B1cC5jbG9zZUNvbmZpcm1Qb3B1cChcIicgK1xuXHRcdFx0XHRcdFx0X2NvbmZpcm1JZCArXG5cdFx0XHRcdFx0XHQnXCIpOydcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHZhciBfeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1llcycpO1xuXHRcdFx0X3llc0J0bkxuay5hcHBlbmRDaGlsZChfeWVzQnRuKTtcblx0XHRcdF9jb25maXJtQWN0aW9ucy5hcHBlbmRDaGlsZChfeWVzQnRuTG5rKTtcblxuXHRcdFx0X2NvbmZpcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1BY3Rpb25zKTtcblxuXHRcdFx0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChfY29uZmlybSk7XG5cblx0XHRcdF9ib2R5SlMuYXBwZW5kQ2hpbGQoX2NvbnRhaW5lcik7XG5cblx0XHRcdGlmIChfaXNJbklmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQoJyNiZ18nICsgX2NvbmZpcm1JZCkuZmFkZUluKDE0MCk7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93LnRvcFxuXHRcdFx0XHRcdFx0LiQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHRcdFx0d2luZG93LnRvcC4kKCcjJyArIF9jb25maXJtSWQgKyAnIFtjYW5jZWwtYnV0dG9uXScpLmZvY3VzKCk7XG5cdFx0XHRcdH0sIDEwMCk7XG5cblx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlJlbW90ZUFwcG9pbnRtZW50LnNldE1vZGFsTWluaW1pemVkKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjYmdfJyArIF9jb25maXJtSWQpLmZhZGVJbigxNDApO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZClcblx0XHRcdFx0XHRcdC5maW5kKCcuY29uZmlybS1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHRcdFx0JCgnIycgKyBfY29uZmlybUlkICsgJyBbY2FuY2VsLWJ1dHRvbl0nKS5mb2N1cygpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZUNvbmZpcm1Qb3B1cDogZnVuY3Rpb24oX2NvbmZpcm1JZCkge1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnY29uZmlybWF0aW9uLW9wZW5lZCcpO1xuXHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XG5cdFx0JCgnI2JnXycgKyBfY29uZmlybUlkKS5mYWRlT3V0KDE0MCk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBfY29uZmlybUlkKVxuXHRcdFx0XHQuZmluZCgnLmNvbmZpcm0tY29udGFpbmVyJylcblx0XHRcdFx0LnNsaWRlVXAoMTUwKTtcblx0XHRcdCQoJyMnICsgX2NvbmZpcm1JZCkucmVtb3ZlKCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKF9pZCwgX3F1ZXN0aW9uLCBfbWVzc2FnZSwgX25vdGlmeUlkLCBfSGFzTm90aWZ5T25DYW5jZWwpIHtcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoJyMnICsgX2lkKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuQ29uZmlybWF0aW9uUG9wdXAudG9nZ2xlQ29uZmlybShfaWQsIF9xdWVzdGlvbiwgX21lc3NhZ2UsIF9ub3RpZnlJZCwgX0hhc05vdGlmeU9uQ2FuY2VsKTtcblx0XHRcdFx0XHRpZiAoX2lzSW5JZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZW51LWlkJywgX2lkKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5mcmFtZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdpZnJhbWVfJyArIF9pZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IE1vZGFsUG9wdXAgKi9cblxudmFyIF9pc0luSWZyYW1lID0gd2luZG93LmZyYW1lRWxlbWVudCAhPSB1bmRlZmluZWQgfHwgZmFsc2U7XG5cblNhcHBoaXJlV2lkZ2V0cy5Nb2RhbFBvcHVwID0ge1xuXHRjcmVhdGU6IGZ1bmN0aW9uKHdpZGdldElkKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBVc2UgdGhpcyBjb2RlIHRvIGFwcGVuZCB0aGUgY29tcG9uZW50IHRvIHRoZSByb290IGJvZHlcblx0XHRcdC8vIHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgJCh3aW5kb3cuZnJhbWVFbGVtZW50KS5jbG9zZXN0KCcuTWFpbkludGVyYWN0aXZlQ2FyZC1ib2R5JykubGVuZ3RoID4gMFxuXHRcdFx0aWYgKGZhbHNlKSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJlbnRCb2R5ID0gcGFyZW50LiQoJ2JvZHknKTtcblx0XHRcdFx0bGV0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdFx0XHRpZiAoJHBhcmVudEJvZHkuZmluZCgkd2lkZ2V0KS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHQkcGFyZW50Qm9keS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkd2lkZ2V0XG5cdFx0XHRcdFx0XHRcdC53cmFwKCc8ZGl2Lz4nKVxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdFx0LmRldGFjaCgpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR3aWRnZXQgPSBwYXJlbnQuJChgIyR7d2lkZ2V0SWR9YCk7XG5cdFx0XHRcdGNvbnN0ICRidG5DbG9zZSA9ICR3aWRnZXQuZmluZCgnLm1vZGFsUG9wdXBfY2xvc2UnKTtcblxuXHRcdFx0XHQkYnRuQ2xvc2UuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ3Nob3djbG9zZScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRcdFx0Y29uc3QgJGJ0bkNsb3NlID0gJHdpZGdldC5maW5kKCcubW9kYWxQb3B1cF9jbG9zZScpO1xuXG5cdFx0XHRcdGlmICh3aW5kb3cuZnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdFx0Y29uc3QgJG1vZGFsUmVtb3RlQXBwdCA9IHdpbmRvdy50b3AuJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cblx0XHRcdFx0XHRpZiAoJG1vZGFsUmVtb3RlQXBwdC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtaW5pbWl6ZU1vZGFsID0gJG1vZGFsUmVtb3RlQXBwdC5maW5kKCcuTWluaW1pemUnKTtcblx0XHRcdFx0XHRcdCRtaW5pbWl6ZU1vZGFsLmNsaWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGJ0bkNsb3NlLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcblx0XHRcdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdzaG93Y2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFBhbmVsQnlJRE5vdGlmeSAqL1xudmFyIHBhbmVsTm90aWZ5V2lkZ2V0O1xuU2FwcGhpcmVXaWRnZXRzLlBhbmVsQnlJZE5vdGlmeSA9IHtcblx0aXNBbnlQYW5lbE9wZW5lZERlcHJlY2F0ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdH0sXG5cdHRvZ2dsZVBhbmVsQnlOb3RpZnk6IGZ1bmN0aW9uKElkKSB7XG5cdFx0aWYgKCFpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZCgpKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cdFx0XHQkKCcjJyArIElkKVxuXHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHRcdC5mYWRlSW4oMTQwKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0JCgnLlBhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgcGFuZWxNYXJnaW5MZWZ0KVxuXHRcdFx0XHRcdFx0LmNzcygnbGVmdCcsIHBhbmVsTGVmdClcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhwYW5lbEFycm93Q2xhc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjJyArIElkKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCcuUGFuZWxDb250YWluZXInKVxuXHRcdFx0XHRcdC5zbGlkZURvd24oMTUwKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHRcdCQoJyMnICsgSWQpXG5cdFx0XHRcdC5wYXJlbnRzKCcuVG9nZ2xlQnV0dG9uJylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcblx0XHRcdFx0LmZhZGVPdXQoMTQwKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJyMnICsgSWQpXG5cdFx0XHRcdFx0LnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKVxuXHRcdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbENvbnRhaW5lcicpXG5cdFx0XHRcdFx0LnNsaWRlVXAoMTUwKTtcblx0XHRcdH0sIDEwMCk7XG5cdFx0fVxuXHR9LFxuXHR0b2dnbGVQYW5lbE5vdGlmeUJ5SWQ6IGZ1bmN0aW9uKElkKSB7XG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdQYW5lbE9wZW5lZCcpO1xuXHRcdCQoJyMnICsgSWQpXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHQucGFyZW50KClcblx0XHRcdC5jaGlsZHJlbignLlBhbmVsJylcblx0XHRcdC5mYWRlVG9nZ2xlKDE0MCk7XG5cblx0XHRwYW5lbE5vdGlmeVdpZGdldCA9ICQoJyMnICsgSWQpXG5cdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHQuYXR0cignTm90aWZ5SWQnKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcjJyArIElkKVxuXHRcdFx0XHQucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuY2hpbGRyZW4oJy5QYW5lbCcpXG5cdFx0XHRcdC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0fSwgMTAwKTtcblx0fSxcbn07XG4iLCIvKiBDb21wb25lbnQgUGFuZWxCeUlEICovXG5TYXBwaGlyZVdpZGdldHMuUGFuZWxCeUlkID0ge1xuXHRpc0FueVBhbmVsT3BlbmVkRGVwcmVjYXRlZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICQoJ2JvZHknKS5oYXNDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0fSxcblxuXHR0b2dnbGVCdXR0b246IGZ1bmN0aW9uKGlkKSB7XG5cdFx0Y29uc3QgJHRvZ2dsZUJ1dHRvbiA9ICQoYCMke2lkfWApLnBhcmVudHMoJy5Ub2dnbGVCdXR0b24nKS5sZW5ndGhcblx0XHRcdD8gJChgIyR7aWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpXG5cdFx0XHQ6ICQoYCMke2lkfWApO1xuXG5cdFx0JHRvZ2dsZUJ1dHRvbi5jbGljaygpO1xuXHR9LFxuXG5cdHRvZ2dsZVBhbmVsQnlJZDogZnVuY3Rpb24oSWQpIHtcblx0XHRjb25zdCAkdG9nZ2xlQnV0dG9uID0gJChgIyR7SWR9YCkucGFyZW50cygnLlRvZ2dsZUJ1dHRvbicpO1xuXHRcdGNvbnN0ICRwYW5lbCA9ICR0b2dnbGVCdXR0b24ucGFyZW50KCkuY2hpbGRyZW4oJy5QYW5lbCcpO1xuXHRcdGNvbnN0ICRwYW5lbENvbnRhaW5lciA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQ29udGFpbmVyJyk7XG5cdFx0Y29uc3QgJHBhbmVsQmFja2dyb3VuZCA9ICRwYW5lbC5jaGlsZHJlbignLlBhbmVsQmFja2dyb3VuZCcpO1xuXG5cdFx0aWYgKCF0aGlzLmlzQW55UGFuZWxPcGVuZWREZXByZWNhdGVkKCkpIHtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnUGFuZWxPcGVuZWQnKTtcblx0XHRcdCQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XG5cblx0XHRcdCRwYW5lbC5zaG93KCk7XG5cdFx0XHQkcGFuZWxDb250YWluZXIuc2xpZGVEb3duKDIwMCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICh0eXBlb2YganVzdERyYWdnZWQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0aWYgKGp1c3REcmFnZ2VkID09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHQkKCcuUGFuZWxCeUlkTmV3X1BhbmVsQ29udGFpbmVyJylcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCBwYW5lbE1hcmdpbkxlZnQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwYW5lbExlZnQpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhwYW5lbEFycm93Q2xhc3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlSW4oODApO1xuXG5cdFx0XHRcdCR0b2dnbGVCdXR0b24uY2xpY2soKTtcblx0XHRcdH0sIDUwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHBhbmVsQ29udGFpbmVyLnNsaWRlVXAoMjAwKTtcblxuXHRcdFx0JHBhbmVsQmFja2dyb3VuZC5mYWRlT3V0KDgwLCAoKSA9PiB7XG5cdFx0XHRcdCR0b2dnbGVCdXR0b24uY2xpY2soKTtcblxuXHRcdFx0XHQkKCdib2R5JykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xuXHRcdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1BhbmVsT3BlbmVkJyk7XG5cblx0XHRcdFx0JHBhbmVsLmhpZGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcbn07XG4iLCIvKiBDb21wb25lbnQgUG9wVXBNZW51ICovXG5TYXBwaGlyZVdpZGdldHMuUG9wVXBNZW51ID0ge1xuXHRtZW51UG9zaXRpb246IGZ1bmN0aW9uKGlkLCBDb250ZXh0LCBMb2NhbGUpIHtcblx0XHQvKiBIaWRlIGFueSBvdGhlciBtZW51cyBvbiBwYWdlIGFuZCBzZXQgYnV0dG9uIGFzIGNvbGxhcHNlZC4gKi9cblx0XHQkKCcucG9wdXAtbWVudTp2aXNpYmxlJykuaGlkZSgpO1xuXG5cdFx0Ly92YXIgX3RoaXMgPSAkKHRoaXMpO1xuXHRcdHZhciBfdGhpcyA9ICQoJyMnICsgaWQpO1xuXHRcdHZhciBYeCA9IDA7XG5cdFx0dmFyIFl5ID0gMDtcblx0XHR2YXIgV3cgPSAwO1xuXHRcdHZhciBIaCA9IDA7XG5cblx0XHQvL190aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWV4cGFuZDp2aXNpYmxlJykuaGlkZSgpO1xuXG5cdFx0LyogR2V0IHRoZSBtZW51IGVsZW1lbnQuICovXG5cdFx0dmFyIF9lbCA9IF90aGlzLm5leHQoJy5wb3B1cC1tZW51Jyk7XG5cblx0XHQvKiBEaXNwbGF5IHRoZSBtZW51LiAqL1xuXHRcdF9lbC5zaG93KCk7XG5cblx0XHQvKiBTZXQgYnV0dG9uIGNvbGxhcHNlLiAqL1xuXHRcdF90aGlzLmNoaWxkcmVuKCcuYnV0dG9uLWNvbGxhcHNlJykuc2hvdygpO1xuXG5cdFx0LyogR2V0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSBidXR0b24uICovXG5cdFx0YnV0dG9uSGggPSBfdGhpcy5vdXRlckhlaWdodCgpO1xuXHRcdGJ1dHRvbld3ID0gX3RoaXMub3V0ZXJXaWR0aCgpO1xuXG5cdFx0dmFyIGJ1dHRvblkgPSBfdGhpcy5wb3NpdGlvbigpLnRvcCArIGJ1dHRvbkhoICsgMTA7XG5cdFx0dmFyIGJ1dHRvblggPSBfdGhpcy5vZmZzZXQoKS5sZWZ0O1xuXHRcdC8vdmFyIGJ1dHRvblggPSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XG5cblx0XHQvKiBHZXQgdGhlIGRpc3RhbmNlIG9mIG1lbnUgYnV0dG9uIGFuZCB0aGUgcGFyZW50IGVsZW1lbnQgKi9cblx0XHR2YXIgcG9wdXBQYXJlbnRYeCA9IF90aGlzLm9mZnNldCgpLmxlZnQgLSBfdGhpcy5wb3NpdGlvbigpLmxlZnQ7XG5cblx0XHR2YXIgcG9wdXBYeCA9IF9lbC5vZmZzZXQoKS5sZWZ0O1xuXHRcdHZhciBwb3B1cFd3ID0gX2VsLm91dGVyV2lkdGgoKTtcblxuXHRcdFh4ID0gTWF0aC5hYnMoYnV0dG9uWCAtICQoJ2JvZHknKS5zY3JvbGxMZWZ0KCkgLSBwb3B1cFBhcmVudFh4KTtcblx0XHRZeSA9IE1hdGguYWJzKGJ1dHRvbkhoIC0gYnV0dG9uWSAtICQoJ2JvZHknKS5zY3JvbGxUb3AoKSk7XG5cblx0XHRpZiAoTG9jYWxlICE9ICdBUicpIHtcblx0XHRcdC8qIENoZWNrIGlmIGNsaWNrZWQgcG9zaXRpb24gcGx1cyB0aGUgcG9wdXAgd2lkdGggZXhjZWVkIHRoZSB3aW5kb3cgd2lkdGguICovXG5cdFx0XHRpZiAoYnV0dG9uWCArIHBvcHVwV3cgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpID4gJChDb250ZXh0KS53aWR0aCgpKSB7XG5cdFx0XHRcdFh4ID0gYnV0dG9uWCAtIHBvcHVwV3cgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpIC0gcG9wdXBQYXJlbnRYeCArIGJ1dHRvbld3O1xuXHRcdFx0XHQvL1h4ID0gKCQod2luZG93KS53aWR0aCgpIC0gcG9wdXBXdykgLSAkKCdib2R5Jykuc2Nyb2xsTGVmdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qIFNldCBtZW51IHBvc2l0aW9uLiAqL1xuXHRcdF9lbC5jc3Moe1xuXHRcdFx0bGVmdDogWHggKyAncHgnLFxuXHRcdFx0dG9wOiBidXR0b25ZICsgJ3B4Jyxcblx0XHR9KTtcblxuXHRcdC8qIFJlZnJlc2ggdmFsdWUgKi9cblx0XHRwb3B1cFh4ID0gX2VsLm9mZnNldCgpLmxlZnQ7XG5cblx0XHR2YXIgX2JhbGxvb25FbCA9IF9lbC5jaGlsZHJlbignLnBvcHVwLW1lbnUtYmFsbG9vbicpO1xuXG5cdFx0dmFyIF9iYWxsb29uWHggPSBfYmFsbG9vbkVsLm9mZnNldCgpLmxlZnQ7XG5cdFx0dmFyIF9iYWxsb29uV3cgPSBfYmFsbG9vbkVsLm91dGVyV2lkdGgoKTtcblx0XHR2YXIgX2JhbGxvb25Qb3NYeCA9IE1hdGguYWJzKGJ1dHRvblggLSBYeCAtIHBvcHVwUGFyZW50WHgpO1xuXG5cdFx0LyogSXMgdGhlIGJhbGxvb24gaWNvbiBwb3NpdGlvbmVkIG91dCBvZiB0aGUgcG9wdXAgbWVudT8gKi9cblx0XHRpZiAoX2JhbGxvb25Qb3NYeCArIFh4ICsgX2JhbGxvb25XdyA+IFh4ICsgcG9wdXBXdykge1xuXHRcdFx0X2JhbGxvb25Qb3NYeCA9IF9iYWxsb29uUG9zWHggLSBfYmFsbG9vbld3O1xuXHRcdH1cblxuXHRcdC8qIFNldCBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbiBlZmZlY3QuICovXG5cdFx0X2JhbGxvb25FbC5jc3MoJ2xlZnQnLCBfYmFsbG9vblBvc1h4ICsgJ3B4Jyk7XG5cdH0sXG5cdG1lbnVFdmVudHM6IGZ1bmN0aW9uKENvbnRleHQsIExvY2FsZSkge1xuXHRcdCQoJy5wb3B1cC1idXR0b24nKVxuXHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuXHRcdFx0XHRTYXBwaGlyZVdpZGdldHMuUG9wVXBNZW51Lm1lbnVQb3NpdGlvbihpZCwgQ29udGV4dCwgTG9jYWxlKTtcblxuXHRcdFx0XHQvKmUuc3RvcFByb3BhZ2F0aW9uKCk7Ki9cblxuXHRcdFx0XHQvKiBQcmV2ZW50IGxpbmsgc3VibWlzc2lvbiAqL1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdC8qIHYgKioqIEhpZGUgcG9wdXAgd2hlbiBjbGljayBvdXRzaWRlICoqKiB2ICovXG5cdFx0ZnVuY3Rpb24gUE1DbGlja091dHNpZGUoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgndGFyZ2V0JykpIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0LyppZiAoKHRhcmdldC5wYXJlbnRzKCkuaW5kZXgoJCgnYVtzYXBwaGlyZWhvc3BpdGFsXSwgLkhvc3BpdGFsUG9wVXAnKSkgPT0gLTEpKSB7fSovXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoXG5cdFx0XHRcdFx0XHQnLnBvcHVwLWJ1dHRvbiwgLnBvcHVwLW1lbnUsIC5vcy1pbnRlcm5hbC11aS1hdXRvY29tcGxldGUsIC5vcy1pbnRlcm5hbC11aS1tZW51LWl0ZW0sIC5vcy1pbnRlcm5hbC11aS1jb3JuZXItYWxsLCB1aS1hdXRvY29tcGxldGUtaXRlbSdcblx0XHRcdFx0XHQpLmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQkKCcucG9wdXAtbWVudTp2aXNpYmxlJykuaGlkZSgpO1xuXHRcdFx0XHRcdCQoJy5idXR0b24tY29sbGFwc2U6dmlzaWJsZScpLmhpZGUoKTtcblx0XHRcdFx0XHQvLyQoJy5idXR0b24tZXhwYW5kJykuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIF9QTUlzRHJhZyA9IGZhbHNlO1xuXHRcdHZhciBfUE1Jc0NsaWNrID0gZmFsc2U7XG5cdFx0JChkb2N1bWVudCkub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0X1BNSXNEcmFnID0gZmFsc2U7XG5cdFx0XHRfUE1Jc0NsaWNrID0gdHJ1ZTtcblx0XHR9KTtcblx0XHQkKGRvY3VtZW50KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdF9QTUlzRHJhZyA9IHRydWU7XG5cdFx0fSk7XG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdCQoZG9jdW1lbnQpLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZiAoIV9QTUlzRHJhZyAmJiBfUE1Jc0NsaWNrKSB7XG5cdFx0XHRcdFBNQ2xpY2tPdXRzaWRlKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdF9QTUlzRHJhZyA9IGZhbHNlO1xuXHRcdFx0X1BNSXNDbGljayA9IGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0JCgnLmJ1dHRvbi1jb2xsYXBzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHQkKCdib2R5JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9KTtcblx0XHQvKiBeICoqKiBIaWRlIHBvcHVwIHdoZW4gY2xpY2sgb3V0c2lkZSAqKiogXiAqL1xuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBTYXBwaGlyZVBhbmVsICovXG5TYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbCA9IHtcblx0Y2hlY2tPcGVuUGFuZWw6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ1NhcHBoaXJlUGFuZWxPcGVuJykgJiYgJCgnLlNhcHBoaXJlUGFuZWxfQ29udGFpbmVyOnZpc2libGUnKS5sZW5ndGg7XG5cdH0sXG5cblx0dG9nZ2xlU2FwcGhpcmVQYW5lbDogZnVuY3Rpb24oUGFuZWxJZCkge1xuXHRcdGlmICghT3NWYWxpZGF0b3JPblN1Ym1pdCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVQYW5lbC5jaGVja09wZW5QYW5lbCgpKSB7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ1NhcHBoaXJlUGFuZWxPcGVuJyk7XG5cdFx0XHQkKCcjJyArIFBhbmVsSWQpLmZhZGVJbigxNDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjJyArIFBhbmVsSWQpXG5cdFx0XHRcdFx0LmZpbmQoJy5TYXBwaGlyZVBhbmVsX0NvbnRhaW5lcicpXG5cdFx0XHRcdFx0LnNsaWRlVG9nZ2xlKDE1MCk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH1cblx0fSxcblxuXHRjbG9zZVNhcHBoaXJlUGFuZWw6IGZ1bmN0aW9uKFBhbmVsSWQpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ1NhcHBoaXJlUGFuZWxPcGVuJyk7XG5cdFx0JCgnIycgKyBQYW5lbElkKS5mYWRlT3V0KDE0MCk7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnIycgKyBQYW5lbElkKVxuXHRcdFx0XHQuZmluZCgnLlNhcHBoaXJlUGFuZWxfQ29udGFpbmVyJylcblx0XHRcdFx0LnNsaWRlVXAoMTUwKTtcblx0XHR9LCAxMDApO1xuXHR9LFxuXG5cdHNldFBhbmVsQmVoYXZpb3I6IGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5QYW5lbFtwYW5lbC10cmlnZ2VyLWVsZW1lbnRpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRoaXNfcGFuZWwgPSAkKHRoaXMpO1xuXHRcdFx0JCgnIycgKyB0aGlzX3BhbmVsLmF0dHIoJ3BhbmVsLXRyaWdnZXItZWxlbWVudGlkJykgKyAnJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwudG9nZ2xlU2FwcGhpcmVQYW5lbCh0aGlzX3BhbmVsLmF0dHIoJ2lkJykpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwuc2V0UGFuZWxCZWhhdmlvcigpO1xuXG5cdGlmIChvc0FqYXhCYWNrZW5kLkV2ZW50SGFuZGxlcnMuQWZ0ZXJBamF4UmVxdWVzdC50b1N0cmluZygpLmluZGV4T2YoJ3NldFBhbmVsQmVoYXZpb3InKSA9PSAtMSkge1xuXHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlUGFuZWwuc2V0UGFuZWxCZWhhdmlvcik7XG5cdH1cbn0pO1xuIiwicmVxdWlyZSgnLi9jb25maXJtYXRpb24tcGFuZWwnKTtcbnJlcXVpcmUoJy4vbW9kYWwtcG9wdXAnKTtcbnJlcXVpcmUoJy4vcGFuZWwtYnktaWQnKTtcbnJlcXVpcmUoJy4vcG9wdXAtbWVudScpO1xucmVxdWlyZSgnLi9zYXBwaGlyZS1wYW5lbCcpO1xuIiwiLyogQ29tcG9uZW50IFBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCkuZmluZCgnLlBhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlJyk7XG5cdFx0Y29uc3QgJGxpc3RRdWV1ZVdyYXBwZXIgPSAkd2lkZ2V0LmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZV9fTGlzdFF1ZXVlcycpO1xuXHRcdGNvbnN0ICRkcm9wZG93biA9ICRsaXN0UXVldWVXcmFwcGVyLmZpbmQoJy5JbmxpbmVEcm9wZG93bl9sYWJlbCcpO1xuXG5cdFx0JGxpc3RRdWV1ZVdyYXBwZXIub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKCEkZHJvcGRvd24ubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0JHdpZGdldC50b2dnbGVDbGFzcygnUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUtLWFjdGl2ZScpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2suUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUnLCAoKSA9PiB7XG5cdFx0XHRcdCR3aWRnZXQucmVtb3ZlQ2xhc3MoJ1BhdGllbnRDYWxsQ2FuY2VsU3RydWN0dXJlLS1hY3RpdmUnKTtcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdjbGljay5QYXRpZW50Q2FsbENhbmNlbFN0cnVjdHVyZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuUGF0aWVudENhbGxDYW5jZWxTdHJ1Y3R1cmUgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFBhdGllbnRDYWxsQ2FuY2VsICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy53aWRnZXRJZCk7XG5cdFx0Y29uc3QgJGNvdW50ZG93biA9ICR3aWRnZXQuZmluZCgnW3VpPWRhdGEtY291bnRlcl0nKTtcblx0XHRsZXQgJGNhbGxCdXR0b24gPSAkd2lkZ2V0LmZpbmQoJ1t1aT1kYXRhLWJ1dHRvbi1jYWxsXScpO1xuXHRcdGxldCAkY2FuY2VsQnV0dG9uID0gJHdpZGdldC5maW5kKCdbdWk9ZGF0YS1idXR0b24tY2FuY2VsXScpO1xuXHRcdGNvbnN0ICRvdGhlckNvbnRlbnQgPSAkd2lkZ2V0LmZpbmQoJy5QYXRpZW50Q2FsbENhbmNlbF9fT3RoZXInKTtcblxuXHRcdGxldCBpbnRlcnZhbDtcblx0XHRsZXQgdGltZUNvdW50ZXI7XG5cblx0XHRjb25zdCBjYWxsUGF0aWVudCA9IGZ1bmN0aW9uKCR3aWRnZXQpIHtcblx0XHRcdHRvZ2dsZUNhbGxpbmdTdGF0ZSgpO1xuXG5cdFx0XHRpZiAoY29uZmlnLnNob3dDb3VudGRvd24pICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luICsgJyAnICsgY29uZmlnLnRpbWVUb0NhbmNlbCk7XG5cdFx0XHRlbHNlICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luKTtcblxuXHRcdFx0c3RhcnRDb3VudGVyKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHRvZ2dsZUNhbGxpbmdTdGF0ZSA9ICgpID0+IHtcblx0XHRcdCR3aWRnZXQudG9nZ2xlQ2xhc3MoJ0NhbGxpbmdQYXRpZW50Jyk7XG5cdFx0XHQkY291bnRkb3duLnRleHQoY29uZmlnLnR4dENhbGxQYXRpZW50KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0SW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnQ2FsbGluZ1BhdGllbnQnKTtcblx0XHRcdCRjYWxsQnV0dG9uLnNob3coKTtcblx0XHRcdCRvdGhlckNvbnRlbnQuc2hvdygpO1xuXHRcdH07XG5cblx0XHRjb25zdCBzdGFydENvdW50ZXIgPSAoKSA9PiB7XG5cdFx0XHR0aW1lQ291bnRlciA9IGNvbmZpZy50aW1lVG9DYW5jZWw7XG5cdFx0XHRpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh1cGRhdGVDb3VudGVyLCAxMDAwKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgdXBkYXRlQ291bnRlciA9ICgpID0+IHtcblx0XHRcdHRpbWVDb3VudGVyLS07XG5cblx0XHRcdGlmICh0aW1lQ291bnRlciA9PT0gMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0T3NOb3RpZnlXaWRnZXQoY29uZmlnLnBhdGllbnRDYWxsRmFrZU5vdGlmeUlkLCAnJyk7XG5cblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcuc2hvd0NvdW50ZG93bikgJGNvdW50ZG93bi50ZXh0KGNvbmZpZy50eHRDYWxsaW5nSW4gKyAnICcgKyB0aW1lQ291bnRlcik7XG5cdFx0XHRlbHNlICRjb3VudGRvd24udGV4dChjb25maWcudHh0Q2FsbGluZ0luKTtcblx0XHR9O1xuXG5cdFx0aWYgKGNvbmZpZy5zdGFydENvdW50aW5nKSBjYWxsUGF0aWVudCgkd2lkZ2V0KTtcblxuXHRcdCRjYWxsQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdGlmICgkd2lkZ2V0Lmhhc0NsYXNzKCdDYWxsaW5nUGF0aWVudCcpKSByZXR1cm47XG5cblx0XHRcdGNhbGxQYXRpZW50KCR3aWRnZXQpO1xuXG5cdFx0XHQkY2FsbEJ1dHRvbi5oaWRlKCk7XG5cdFx0XHQkb3RoZXJDb250ZW50LmhpZGUoKTtcblx0XHR9KTtcblxuXHRcdCRjYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0dGltZUNvdW50ZXIgPSBjb25maWcudGltZVRvQ2FuY2VsO1xuXHRcdFx0JGNvdW50ZG93bi50ZXh0KHRpbWVDb3VudGVyKTtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG5cdFx0XHR0b2dnbGVDYWxsaW5nU3RhdGUoKTtcblxuXHRcdFx0JGNhbGxCdXR0b24uc2hvdygpO1xuXHRcdFx0JG90aGVyQ29udGVudC5zaG93KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlBhdGllbnRDYWxsQ2FuY2VsID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBQcmVzY3JpcHRpb25DYXJkICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuUHJlc2NyaXB0aW9uQ2FyZGApO1xuXG5cdFx0aWYgKGNvbmZpZy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdGNvbnN0ICRleHBhbmRMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuUHJlc2NyaXB0aW9uQ2FyZF9fRXhwYW5kSWNvbicpO1xuXG5cdFx0XHQkZXhwYW5kTGluay5jbGljaygoKSA9PiB7XG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ1ByZXNjcmlwdGlvbkNhcmQtLWV4cGFuZGVkJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlByZXNjcmlwdGlvbkNhcmQgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCIvKiBDb21wb25lbnQgUHJlc2NyaXB0aW9uRXhwYW5kYWJsZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IFByZXNjcmlwdGlvbkV4cGFuZGFibGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRjb25zdCB3aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBwcmV2aWV3c3RhdCA9IFtdO1xuXG5cdFx0Y29uc3QgJGVsZW1lbnRXcmFwcGVyID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdFx0Y29uc3QgY2xpY2tFdmVudHMgPSBvYiA9PiB7XG5cdFx0XHRpZiAoJChvYikuaGFzQ2xhc3MoJ1ByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpKSB7XG5cdFx0XHRcdHZhciBTZWN0aW9uID0gJChvYilcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgU2VjdGlvbiA9ICQob2IpLnBhcmVudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9jb250ZW50Jyk7XG5cblx0XHRcdC8vIGdldCBpZFxuXHRcdFx0dmFyIGlkID0gU2VjdGlvbi5hdHRyKCdpZCcpO1xuXG5cdFx0XHR2YXIgdGVtcEhlaWdodCA9IDA7XG5cblx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0aWYgKFNlY3Rpb24uaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0LCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0cmFuc2l0aW9ucyBhcmUgZGlzYWJsZWRcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuYWRkQ2xhc3MoJ25vVHJhbnNpdGlvbicpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCkpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudFswXS5vZmZzZXRIZWlnaHQ7IC8vIGhhY2sgdG8gZm9yY2UgYSByZXBhaW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LnJlbW92ZUNsYXNzKCdub1RyYW5zaXRpb24nKTtcblxuXHRcdFx0XHQvLyBDb2xsYXBzZSBjb250ZW50XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbi5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQ2FsYyBhbmQgc2V0IGEgZml4ZWQgaGVpZ2h0XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgnYXV0bycpO1xuXHRcdFx0XHR0ZW1wSGVpZ2h0ID0gU2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCgwKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KHRlbXBIZWlnaHQpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBjbGFzcywgc2V0IGhlaWdodCBhbmQgc2F2ZSBzdGF0ZVxuXHRcdFx0XHRTZWN0aW9uLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRwcmV2aWV3c3RhdFtpZF1bJ2NsaWVudCddID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5pbml0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGhlYWRlciA9ICRlbGVtZW50V3JhcHBlci5maW5kKCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXInKTtcblx0XHRcdGNvbnN0ICRsaW5rcyA9ICRoZWFkZXIuZmluZCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyX19MaW5rc0RpdicpO1xuXG5cdFx0XHQvLyBDcmVhdGUgYXJyYXkgc3RhdFxuXHRcdFx0JCgnLlNlY3Rpb25QcmVzY3JpcHRpb25FeHBhbmRhYmxlQXJlYScpLmVhY2goKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGF0ID0gJGhlYWRlci5oYXNDbGFzcygnZXhwYW5kZWQnKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdFx0cHJldmlld3N0YXRbd2lkZ2V0SWRdID0geyBjbGllbnQ6IHN0YXQsIHNlcnZlcjogc3RhdCB9O1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICgkaGVhZGVyLmhhc0NsYXNzKCdOb3RFeHBhbmRhYmxlJykpIHtcblx0XHRcdFx0JGhlYWRlci5vbignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cdFx0XHR9IGVsc2UgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ2lzTGlua0VwYW5kYWJsZUNsaWNrJykpIHtcblx0XHRcdFx0JGxpbmtzLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGxpbmtzKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkaGVhZGVyLm9uKCdjbGljaycsIGUgPT4gY2xpY2tFdmVudHMoJGhlYWRlcikpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9XG5cdFx0XHRcdCcuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgaW5wdXQsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBzZWxlY3QsIC5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2hlYWRlciBhJztcblx0XHRcdCQoZWxlbWVudHMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChhamF4UmVmcmVzaCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFqYXhSZWZyZXNoID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcblx0XHRcdC8vJCgnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyJykub2ZmKCk7XG5cblx0XHRcdC8vIGFkZCBzdG9wIHByZXBhZ2F0aW9uXG5cdFx0XHQkKFxuXHRcdFx0XHQnLlByZXNjcmlwdGlvbkV4cGFuZGFibGVfaGVhZGVyIGlucHV0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgc2VsZWN0LCAuUHJlc2NyaXB0aW9uRXhwYW5kYWJsZV9oZWFkZXIgYSdcblx0XHRcdCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnNcblx0XHRcdCQoJy5TZWN0aW9uUHJlc2NyaXB0aW9uRXhwYW5kYWJsZUFyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBpZiBuZXcgU2VjdGlvbkV4cGFuZGFibGUgdGhlbiBhZGQgdG8gcHJldmlld3N0YXQgYXJyYXlcblx0XHRcdFx0aWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XG5cdFx0XHRcdFx0dmFyIHN0YXQgPSBmYWxzZTtcblx0XHRcdFx0XHQvLyBpZiBvcGVuXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhZGQgcm93XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlX2NvbnRlbnQnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KDApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gdHJ1ZSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+IHtcblx0XHRjb25zdCBleHBhbmRhYmxlID0gbmV3IFByZXNjcmlwdGlvbkV4cGFuZGFibGUoY29uZmlnKTtcblxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5QcmVzY3JpcHRpb25FeHBhbmRhYmxlID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlSGVhZGVyICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTYXBwaGlyZUhlYWRlcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZCA9IGNvbmZpZy53aWRnZXRJZDtcblx0fTtcblxuXHR2YXIgaGFuZGxlRGVtb2dyYXBoaWNzID0gZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdH07XG5cblx0dmFyIFNhcHBoaXJlSGVhZGVyID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLmlzQ29uZmlkZW50aWFsID0gY29uZmlnLmlzQ29uZmlkZW50aWFsO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiR3aWRnZXQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0fSk7XG5cdFx0dGhpcy4kaGVhZGVyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlcicpO1xuXHRcdHRoaXMuJG5hdmlnYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLW5hdmlnYXRpb24nKTtcblx0XHR0aGlzLiRpZGVudGlmaWNhdGlvbiA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItaWRlbnRpZmljYXRpb24nKTtcblx0XHR0aGlzLiRkZW1vZ3JhcGhpYyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItZGVtb2dyYXBoaWNzJyk7XG5cdFx0dGhpcy4kaW5mb3JtYXRpb24gPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNhcHBoaXJlSGVhZGVyLWluZm9ybWF0aW9uJyk7XG5cdFx0dGhpcy4kYWN0aW9ucyA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWN0aW9ucycpO1xuXHRcdHRoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TYXBwaGlyZUhlYWRlci1hZGRpdGlvbmFsLXRyaWdnZXInKTtcblx0XHR0aGlzLiRhZGRpdGlvbmFsQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuU2FwcGhpcmVIZWFkZXItYWRkaXRpb25hbC1jb250ZW50Jyk7XG5cblx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cblx0XHRpZiAodGhpcy4kaW5mb3JtYXRpb24udGV4dCgpID09PSAnJykge1xuXHRcdFx0dGhpcy4kaW5mb3JtYXRpb24uaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuZ2V0Q29uZmlnID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5oYW5kbGVEZW1vZ3JhcGhpY3MoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZUhlYWRlci5wcm90b3R5cGUuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRhZGRpdGlvbmFsVHJpZ2dlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChfdGhpcy4kaGVhZGVyLmhhc0NsYXNzKCdpc09wZW4nKSkge1xuXHRcdFx0XHRfdGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHRcdFx0Ly8kKCcuTGF5b3V0QmFzZS1oZWFkZXInKS5jc3MoJ3otaW5kZXgnLCAyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF90aGlzLiRoZWFkZXIuYWRkQ2xhc3MoJ2lzT3BlbicpO1xuXHRcdFx0XHQvLyQoJy5MYXlvdXRCYXNlLWhlYWRlcicpLmNzcygnei1pbmRleCcsIDMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdFNhcHBoaXJlSGVhZGVyLnByb3RvdHlwZS5oYW5kbGVEZW1vZ3JhcGhpY3MgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0dGhpcy4kYWRkaXRpb25hbFRyaWdnZXIuaGlkZSgpO1xuXHRcdHRoaXMuJGFkZGl0aW9uYWxDb250ZW50LmVtcHR5KCk7XG5cblx0XHRjb25zdCBkZW1vZ3JhcGhpY1dpZHRoID0gdGhpcy4kZGVtb2dyYXBoaWMub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRsZXQgaXRlbXNUb3RhbCA9IDA7XG5cblx0XHRjb25zdCBjb21wb25lbnRXaWR0aCA9IHRoaXMuJHdpZGdldC5vdXRlcldpZHRoKHRydWUpO1xuXHRcdGNvbnN0IG5hdmlnYXRpb25XaWR0aCA9IHRoaXMuJG5hdmlnYXRpb24ud2lkdGgoKTtcblx0XHRjb25zdCBpZGVudGlmaWNhdGlvbldpZHRoID0gdGhpcy4kaWRlbnRpZmljYXRpb24ud2lkdGgoKTtcblx0XHRjb25zdCBkZW1vZ3JhcGhpY3NXaWR0aCA9IHRoaXMuJGRlbW9ncmFwaGljLndpZHRoKCk7XG5cdFx0Y29uc3QgaW5mb3JtYXRpb25XaWR0aCA9IHRoaXMuJGluZm9ybWF0aW9uLndpZHRoKCk7XG5cdFx0Y29uc3QgYWN0aW9uc1dpZHRoID0gdGhpcy4kYWN0aW9ucy53aWR0aCgpO1xuXG5cdFx0dGhpcy4kZGVtb2dyYXBoaWMuZmluZCgnLkRlbW9ncmFwaGljLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpdGVtc1RvdGFsICs9IHBhcnNlSW50KCQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSwgMTApO1xuXG5cdFx0XHQvLyA2NCAtPiBtYXJnaW5zIGFuZCA5OSAtPiBNb3JlIEluZm8gYnV0dG9uXG5cdFx0XHRpZiAoaXRlbXNUb3RhbCArIDY0ICsgMTEwIDwgZGVtb2dyYXBoaWNXaWR0aCkge1xuXHRcdFx0XHQkKHRoaXMpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcblx0XHRcdFx0XHQuYXBwZW5kVG8oX3RoaXMuJGFkZGl0aW9uYWxDb250ZW50KTtcblx0XHRcdFx0X3RoaXMuJGFkZGl0aW9uYWxUcmlnZ2VyLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLiRhZGRpdGlvbmFsQ29udGVudC5maW5kKCcuRGVtb2dyYXBoaWMtaXRlbScpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCdpc09wZW4nKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLnNob3dBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5hZGRDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVIZWFkZXIucHJvdG90eXBlLmhpZGVBZGRpdGlvbmFsID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcygnaXNPcGVuJyk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyID0ge1xuXHRcdGNyZWF0ZTogY3JlYXRlLFxuXHRcdGhhbmRsZURlbW9ncmFwaGljczogaGFuZGxlRGVtb2dyYXBoaWNzLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhU2FwcGhpcmVXaWRnZXRzLlNhcHBoaXJlSGVhZGVyLndpZGdldElkKSB7XG5cdFx0d2luZG93W1NhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZUhlYWRlci53aWRnZXRJZF0uaGFuZGxlRGVtb2dyYXBoaWNzKCk7XG5cdH1cblx0aWYgKCEhJCgnLlNhcHBoaXJlSGVhZGVyLWRlbW9ncmFwaGljcycpLmxlbmd0aCkge1xuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2FwcGhpcmVIZWFkZXIud2lkZ2V0SWRdLmhhbmRsZURlbW9ncmFwaGljcygpO1xuXHRcdFx0fSk7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUG9wdXAgKi9cbnZhciBSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0O1xuXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Ly8gQ2hlY2sgaWYgdGhlIHdpZGdldCBpcyBsb2FkZWQgaW5zaWRlIGFuIGlGcmFtZVxuXHRsZXQgaXNJbnNpZGVJZnJhbWUgPSB3aW5kb3cuZnJhbWVFbGVtZW50ICE9IHVuZGVmaW5lZCB8fCBmYWxzZTtcblxuXHQvLyBDb25zdGFudHNcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9XSURUSCA9IDMwMDtcblx0Y29uc3QgUE9QVVBfSU5JVElBTF9IRUlHSFQgPSAxMDA7XG5cdGNvbnN0IFBPUFVQX1dJTkRPV19JTkRFWCA9IDQwMTA7XG5cdGNvbnN0IFBPUFVQX0NMT1NJTkdfVEFHID0gJ2Nsb3NpbmcnO1xuXHRjb25zdCBQT1BVUF9DTE9TSU5HX1ZBTFVFID0gJ3RydWUnO1xuXG5cdGxldCBQT1BVUF9OT1RJRllfV0lER0VUO1xuXHRsZXQgUE9QVVBfUEFSRU5UX1VSTDtcblxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xuXHRcdGlmIChjb25maWcuaWdub3JlSWZyYW1lKSBpc0luc2lkZUlmcmFtZSA9IGZhbHNlO1xuXG5cdFx0JCgpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0XHRcdGNvbnN0IF9pZCA9IGNvbmZpZy5saW5rSWQ7XG5cdFx0XHRjb25zdCBsaW5rUXVlcnkgPSBgIyR7Y29uZmlnLmxpbmtJZH1gO1xuXHRcdFx0bGV0IGxpbmtXaWRnZXQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQgPSAkKGxpbmtRdWVyeSkuZ2V0KDApO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rV2lkZ2V0ID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdC8vQ2FzZSB0aGUgd2lkZ2V0IGlzIGluZXhpc3RlbnQgb3IgaW52aXNpYmxlLCBpdCB3aWxsIHNob3cgbm8gZXJyb3JzLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdFBPUFVQX1BBUkVOVF9VUkwgPSBjb25maWcucGFyZW50VXJsO1xuXG5cdFx0XHRjb25zdCBsaW5rUmVzdWx0ID0gZ2V0TGlua0hSRUYobGlua1dpZGdldCk7XG5cdFx0XHRjb25zdCBsaW5rSHJlZiA9IGxpbmtSZXN1bHRbMF07XG5cdFx0XHRjb25zdCBpc0FCdXR0b24gPSBsaW5rUmVzdWx0WzFdO1xuXG5cdFx0XHRpZiAodHlwZW9mIGxpbmtIcmVmID09ICd1bmRlZmluZWQnIHx8IGxpbmtIcmVmID09ICcnIHx8IGxpbmtIcmVmID09ICcjJyB8fCBsaW5rSHJlZi5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09IDApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR3aW5kb3cuT3NIYW5kbGVFeGNlcHRpb24oXG5cdFx0XHRcdFx0XHRuZXcgRXJyb3IoJ1BvcHVwIGxpbmsgaWQgbXVzdCBiZSB0aGUgaWQgb2YgYSBMaW5rIG9yIEJ1dHRvbiBXaWRnZXQgd2l0aCBNZXRob2QgTmF2aWdhdGUuJyksXG5cdFx0XHRcdFx0XHRvdXRzeXN0ZW1zLm9zRXJyb3JDb2Rlcy5TeXN0ZW1KYXZhc2NyaXB0RXJyb3IsXG5cdFx0XHRcdFx0XHQnUG9wdXBfRWRpdG9yJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIGV4aXN0aW5nIG9uLWNsaWNrIGV2ZW50XG5cdFx0XHRpZiAoaXNBQnV0dG9uKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnd2luZG93LmxvY2F0aW9uLmhyZWY9JywgJ3JldHVybiBmYWxzZTt3aW5kb3cubG9jYXRpb24uaHJlZj0nKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgY29uZmlybWF0aW9uIG1lc3NhZ2UsIHN0b3JlIGluIGFuIGF0dHJpYnV0ZSB0aGUgcmVzdWx0XG5cdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ29uY2xpY2snKSAhPSBudWxsKSB7XG5cdFx0XHRcdGxpbmtXaWRnZXQuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdCdvbmNsaWNrJyxcblx0XHRcdFx0XHRsaW5rV2lkZ2V0XG5cdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdvbmNsaWNrJylcblx0XHRcdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0J2lmKCByZXQgIT0gdHJ1ZSApJyxcblx0XHRcdFx0XHRcdFx0XCIkKCdcIiArIGxpbmtRdWVyeSArIFwiJykuZ2V0KDApLnNldEF0dHJpYnV0ZSgnY29uZmlybWVkJywgcmV0KTsgaWYoIHJldCAhPSB0cnVlIClcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHQvLyBUaGUgY2xpY2tIYW5kbGVyIGV2ZW50IGlzIHJlZ2lzdGVyZWQgaW4gb3NqcyBhbmQgJCBmb3IgY29tcGF0aWJpbGxpdHkgcmVhc29ucywgdGhleSBtdXN0IG5vdCBydW4gYm90aCBmb3IgdGhlIHNhbWUgY2xpY2suXG5cdFx0XHRcdC8vIFZhcmlhYmxlIGlzIHNldCB0byBmYWxzZSBpbiByZXNpemUgZnVuY3Rpb24uXG5cdFx0XHRcdGlmICgkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycpID09IHRydWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBjbGlja2VkIGxpbmsgaXMgZGlzYWJsZWRcblx0XHRcdFx0aWYgKGxpbmtXaWRnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgbGlua0Rpc2FibGVkID0gbGlua1dpZGdldFxuXHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdFx0aWYgKGxpbmtEaXNhYmxlZCA9PSAnZGlzYWJsZWQnIHx8IGxpbmtEaXNhYmxlZC5pbmRleE9mKCd0cnVlJykgIT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobGlua1dpZGdldC5nZXRBdHRyaWJ1dGUoJ2NvbmZpcm1lZCcpID09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWYgKE9zSXNJRSgpKSBvc0ZvY3VzQmFja2VuZC5DbGVhckZvY3VzZWRFbGVtZW50KCk7XG5cblx0XHRcdFx0bGV0IHBvcHVwRGl2O1xuXHRcdFx0XHRsZXQgcGxlYXNlV2FpdERpdjtcblxuXHRcdFx0XHRjb25zdCB3YWl0VGV4dCA9IGA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMzZweDtcIj4ke2NvbmZpZy5sb2FkaW5nTWVzc2FnZX08L2Rpdj5gO1xuXHRcdFx0XHRjb25zdCBpbWdIVE1MID0gJzxkaXYgY2xhc3M9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PC9kaXY+Jztcblx0XHRcdFx0Y29uc3QgbG9hZGluZ0VsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIkxheW91dFBvcHVwLWxvYWRpbmdcIj4ke2ltZ0hUTUx9ICR7d2FpdFRleHR9PC9kaXY+YDtcblx0XHRcdFx0Y29uc3QgaUZyYW1lRWxlbWVudCA9IGA8aWZyYW1lIGlkPVwiaWZyYW1lXyR7X2lkfVwiIHdpZHRoPVwiMTAwJVwiIHNjcm9sbGluZz1cIm5vXCIgaGVpZ2h0PVwiMTAwJVwiIGZyYW1lYm9yZGVyPVwiMFwiIHNyYz1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIi8+YDtcblxuXHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRsZXQgX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXHRcdFx0XHRcdF9kaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IG5vbmU7Jyk7XG5cdFx0XHRcdFx0X2Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHR3aW5kb3cudG9wLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX2Rpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IHdpbmRvdy50b3AuJCgnI3dpbmRvd18nICsgX2lkKTtcblx0XHRcdFx0XHRwb3B1cERpdi5hcHBlbmQoaUZyYW1lRWxlbWVudCk7XG5cblx0XHRcdFx0XHRwbGVhc2VXYWl0RGl2ID0gcG9wdXBEaXYucHJlcGVuZChsb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cG9wdXBEaXYgPSAkKFwiPGRpdiBzdHlsZT0ndGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBub25lOyc+PC9kaXY+XCIpLmFwcGVuZFRvKCdib2R5Jyk7XG5cdFx0XHRcdFx0cG9wdXBEaXYuYXBwZW5kKGlGcmFtZUVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IHBvcHVwRGl2LnByZXBlbmQobG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgbG9hZFRhcmdldFBhZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy50b3AuUE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgaWZyYW1lIG9iamVjdCBvbiB0aGUgZG9jdW1lbnQgcGFyZW50XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wLl9pZnJhbWVQb3B1cCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQuY29udGVudFdpbmRvdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC5faWZyYW1lUG9wdXAgPSB3aW5kb3c7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0UE9QVVBfTk9USUZZX1dJREdFVCA9IGNvbmZpZy5ub3RpZnlJZDtcblx0XHRcdFx0XHRSaWNoV2lkZ2V0c19Qb3B1cF9FZGl0b3Jfbm90aWZ5V2lkZ2V0ID0gY29uZmlnLm5vdGlmeUlkO1xuXHRcdFx0XHRcdHdpbmRvdy50b3AuX2lmcmFtZVBvcHVwLlJpY2hXaWRnZXRzX1BvcHVwX0VkaXRvcl9ub3RpZnlXaWRnZXQgPSBjb25maWcubm90aWZ5SWQ7XG5cblx0XHRcdFx0XHQvLyBMb2FkIHRhcmdldCBwYWdlXG5cdFx0XHRcdFx0Y29uc3Qgb2hyZWYgPSBnZXRMaW5rSFJFRihsaW5rV2lkZ2V0KVswXTtcblx0XHRcdFx0XHRjb25zdCByaHJlZiA9IG9ocmVmLnJlcGxhY2UoLyhcXD98JilfPS4qPygmfCQpLywgJyQxXz0nICsgK25ldyBEYXRlKCkubm93ICsgJyQyJyk7XG5cdFx0XHRcdFx0Y29uc3QgeGhyZWYgPSByaHJlZiArIChyaHJlZiA9PSBvaHJlZiA/IChyaHJlZi5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyAnXz0nICsgK25ldyBEYXRlKCkgOiAnJyk7XG5cblx0XHRcdFx0XHRwb3B1cERpdi5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCB4aHJlZik7XG5cblx0XHRcdFx0XHQoZnVuY3Rpb24ocG9wdXBEaXYpIHtcblx0XHRcdFx0XHRcdHBvcHVwRGl2LmZpbmQoJ2lmcmFtZScpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFmdGVyIGxvYWRpbmcgdHJ5IHRvIHJlc2l6ZVxuXHRcdFx0XHRcdFx0XHRyZXNpemUocG9wdXBEaXYsIF9pZCwgY29uZmlnLnNldFdpZHRoLCBjb25maWcuc2V0SGVpZ2h0LCB0cnVlLCBldmVudCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KShwb3B1cERpdik7XG5cblx0XHRcdFx0XHRwb3B1cERpdiA9IG51bGw7XG5cdFx0XHRcdFx0cGxlYXNlV2FpdERpdiA9IG51bGw7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0b3BlblBvcHVwKHBvcHVwRGl2LCBwbGVhc2VXYWl0RGl2LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0JChsaW5rUXVlcnkpLmNsaWNrKGNsaWNrSGFuZGxlcik7XG5cblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwLnBvcHVwV2lkdGggPSBjb25maWcuc2V0V2lkdGggfHwgUE9QVVBfSU5JVElBTF9XSURUSDtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNpemUgPSAoZGl2VG9Qb3B1cCwgX2lkLCBzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlciwgZXZlbnQpID0+IHtcblx0XHQvLyBDb2RlIHRvIHN1cHBvcnQgb2xkIHJlc2l6ZSBtZXRob2QgUG9wdXBfV2luZG93X3Jlc2l6ZShzZXRXaWR0aCwgc2V0SGVpZ2h0LCByZWNlbnRlcilcblx0XHRpZiAodHlwZW9mIHJlY2VudGVyID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZWNlbnRlciA9IHNldEhlaWdodDtcblx0XHRcdHNldEhlaWdodCA9IHNldFdpZHRoO1xuXHRcdFx0c2V0V2lkdGggPSBkaXZUb1BvcHVwO1xuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0ZGl2VG9Qb3B1cCA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXZUb1BvcHVwID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVzaXplIG11c3QgYmFpbCBvdXQgaW1tZWRpYXRlbHkgaWYgdGhlIHBvcHVwIGlzIG1hcmtlZCBhcyBjbG9zaW5nLCBhbmQgbm90IHN0YXJ0IHRoZSBhbmltYXRpb24uXG5cdFx0aWYgKCQuZGF0YShkaXZUb1BvcHVwLmdldCgwKSwgUE9QVVBfQ0xPU0lOR19UQUcpID09IFBPUFVQX0NMT1NJTkdfVkFMVUUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsZXQgZG9jdW1lbnRTZXJ2ZXI7XG5cdFx0bGV0IGZyYW1lT2JqID0gZGl2VG9Qb3B1cC5maW5kKCdpZnJhbWUnKVswXTtcblxuXHRcdGlmICh0eXBlb2YgZnJhbWVPYmogPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGZyYW1lT2JqID0gd2luZG93LnRvcC4kKCcjaWZyYW1lXycgKyBfaWQpWzBdO1xuXHRcdH1cblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0ZG9jdW1lbnRTZXJ2ZXIgPSB3aW5kb3cudG9wLmRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcL10qKS4qLywgJyQxJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50U2VydmVyID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGZyYW1lT2JqICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zdCBmcmFtZVNlcnZlciA9IGZyYW1lT2JqLnNyYy5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFwvXSopLiovLCAnJDEnKTtcblx0XHRcdGNvbnN0IHNhbWVPcmlnaW4gPSBmcmFtZVNlcnZlci50b0xvd2VyQ2FzZSgpID09IGRvY3VtZW50U2VydmVyLnRvTG93ZXJDYXNlKCkgfHwgZnJhbWVTZXJ2ZXIuaW5kZXhPZignaHR0cCcpICE9IDA7XG5cblx0XHRcdGlmICghc2FtZU9yaWdpbiAmJiAoc2V0V2lkdGggPT0gLTEgfHwgc2V0SGVpZ2h0ID09IC0xKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0EgUG9wdXAgd2l0aCBhIHNjcmVlbiBmcm9tIGEgZGlmZmVyZW50IHNlcnZlciAob3IgaHR0cHMpIG5lZWRzIGV4cGxpY2ljdCB3aWR0aCwgaGVpZ2h0IHNldC4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0aWYgKGZyYW1lT2JqLmNvbnRlbnREb2N1bWVudCAhPT0gbnVsbCB8fCBmcmFtZU9iai5jb250ZW50V2luZG93ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyRG9jID0gZnJhbWVPYmouY29udGVudERvY3VtZW50ID8gZnJhbWVPYmouY29udGVudERvY3VtZW50IDogZnJhbWVPYmouY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0XHRpZiAoaW5uZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCA9PSAwKVxuXHRcdFx0XHRcdFx0Ly8gU3RyYW5nZWx5IHRoaXMgZXZlbnQgaXMgYWxzbyB0cmlnZ2VyZWQgb24gY2xvc2Vcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb2xkSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdG9sZEhlaWdodCA9IHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkSGVpZ2h0ID0gJChkaXZUb1BvcHVwKVxuXHRcdFx0XHRcdC5wYXJlbnRzKCcub3MtaW50ZXJuYWwtUG9wdXAnKVxuXHRcdFx0XHRcdC5vdXRlckhlaWdodCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgd2lkdGggPSBzZXRXaWR0aCA9PSAtMSA/ICQoaW5uZXJEb2MpLndpZHRoKCkgOiBzZXRXaWR0aDtcblx0XHRcdGxldCBoZWlnaHQgPSBzZXRIZWlnaHQgPT0gLTEgPyAkKGlubmVyRG9jKS5oZWlnaHQoKSA6IHNldEhlaWdodDtcblxuXHRcdFx0dmFyIHRpdGxlSGVpZ2h0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHRpdGxlSGVpZ2h0ID0gd2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyJykuaGVpZ2h0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZUhlaWdodCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXInKS5oZWlnaHQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVmVyaWZ5IGlmIHRoZSBwYXJlbnQgd2luZG93IHdpZHRoIGlzIGxlc3MgdGhhbiB0aGUgcG9wLXVwIHdpbmRvdywgaWYgc28gc2V0IHRoZSByZXNwb25zaXZlIGNsYXNzIG9uIHRoZSBpZnJhbWUgYm9keSAoZm9yIHJlc3BvbnNpdmUgdGhlbWVzKVxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgd2lkdGgpIHtcblx0XHRcdFx0Ly8gb25seSBzZXQgdGhlIGNsYXNzIGlmIHRoZSBvcmlnaW4gaXMgdGhlIHNhbWVcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pIHtcblx0XHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2JvZHknKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdSZXNwb25zaXZlJyk7XG5cdFx0XHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwOyAvLyAxMHB4IFwicGFkZGluZ1wiIGVmZmVjdCwgdG8ga2VlcCB0aGUgcG9wdXAgbG9vayBhbmQgZmVlbCBvbiB0b3Agb2YgY29udGVudFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCBpc3N1ZXMgd2l0aCBzY3JvbGxiYXJzXG5cdFx0XHRpZiAoc2V0SGVpZ2h0ID09IC0xKSB7XG5cdFx0XHRcdC8vIElFNyBuZWVkcyBhIGxpdHRsZSBtb3JlIHNwYWNlIHRvIHJlbW92ZSB0aGUgc2Nyb2xsYmFyc1xuXHRcdFx0XHRpZiAoJC5icm93c2VyLm1zaWUpIGhlaWdodCA9IGhlaWdodCArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvL3doZW4gZXhwbGljaXRseSBzZXR0aW5nIHRoZSBoZWlnaHRcblx0XHRcdFx0aWYgKHNhbWVPcmlnaW4pIGlubmVyRG9jLmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdFx0d2luZG93LnRvcC4kKGRpdlRvUG9wdXApLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly9IaWRlIEVDVFxuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy50b3Bcblx0XHRcdFx0XHQuJChpbm5lckRvYylcblx0XHRcdFx0XHQuZmluZCgnLkVDVF9GZWVkYmFja0NvbnRhaW5lcicpXG5cdFx0XHRcdFx0LmhpZGUoKTtcblx0XHRcdFx0dmFyIGRpdlBvcHVwT3V0ZXJXaW5kb3cgPSB3aW5kb3cudG9wLiQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKGlubmVyRG9jKVxuXHRcdFx0XHRcdC5maW5kKCcuRUNUX0ZlZWRiYWNrQ29udGFpbmVyJylcblx0XHRcdFx0XHQuaGlkZSgpO1xuXHRcdFx0XHR2YXIgZGl2UG9wdXBPdXRlcldpbmRvdyA9ICQoZGl2VG9Qb3B1cCkucGFyZW50cygnLm9zLWludGVybmFsLVBvcHVwJyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhbmltYXRlRmluYWwgPSB7fTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkVG9wID0gcGFyc2VJbnQoZGl2UG9wdXBPdXRlcldpbmRvdy5jc3MoJ3RvcCcpKTtcblx0XHRcdFx0aWYgKHJlY2VudGVyKSBhbmltYXRlRmluYWwudG9wID0gTWF0aC5tYXgoMjAsIG9sZFRvcCArIChvbGRIZWlnaHQgLSAoaGVpZ2h0ICsgdGl0bGVIZWlnaHQpKSAvIDIpO1xuXHRcdFx0XHRhbmltYXRlRmluYWwuaGVpZ2h0ID0gaGVpZ2h0ICsgdGl0bGVIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHR2YXIgb2xkTGVmdCA9IHBhcnNlSW50KGRpdlBvcHVwT3V0ZXJXaW5kb3cuY3NzKCdsZWZ0JykpO1xuXHRcdFx0XHRpZiAocmVjZW50ZXIpIGFuaW1hdGVGaW5hbC5sZWZ0ID0gb2xkTGVmdCArIChkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgLSB3aWR0aCkgLyAyO1xuXHRcdFx0XHRhbmltYXRlRmluYWwud2lkdGggPSB3aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LndpZHRoKCkgPT0gYW5pbWF0ZUZpbmFsLndpZHRoICYmXG5cdFx0XHRcdGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gYW5pbWF0ZUZpbmFsLmhlaWdodCAtICgkLmJyb3dzZXIubXNpZSA/IDEgOiAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpLmhpZGUoKTtcblx0XHRcdFx0JChkaXZUb1BvcHVwKS5oZWlnaHQoaGVpZ2h0IC0gKCQuYnJvd3Nlci5tc2llID8gMSA6IDApKTsgLy8gcmVzdG9yZSBzaXplXG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyBub3RoaW5nIHRvIGRvLi4uXG5cdFx0XHR9XG5cblx0XHRcdC8vIGhpZGUgY29udGVudCBpbiBmaXJzdCByZXNpemUgLSByZWFkanVzdG1lbnRzIHdpbGwgbm90IGZsaWNrclxuXHRcdFx0aWYgKGRpdlBvcHVwT3V0ZXJXaW5kb3cud2lkdGgoKSA9PSBQT1BVUF9JTklUSUFMX1dJRFRIICYmIGRpdlBvcHVwT3V0ZXJXaW5kb3cuaGVpZ2h0KCkgPT0gUE9QVVBfSU5JVElBTF9IRUlHSFQpIHtcblx0XHRcdFx0JChmcmFtZU9iaikuaGVpZ2h0KDApO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb25BbmltYXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHRcdFx0d2luZG93LnRvcC4kKCcub3MtaW50ZXJuYWwtdWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlLW5vLXRpdGxlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRcdFx0XHR3aW5kb3cudG9wXG5cdFx0XHRcdFx0XHRcdC4kKGRpdlRvUG9wdXApXG5cdFx0XHRcdFx0XHRcdC5maW5kKCdpZnJhbWUnKVxuXHRcdFx0XHRcdFx0XHQuaGVpZ2h0KCcxMDAlJylcblx0XHRcdFx0XHRcdFx0LndpZHRoKGFuaW1hdGVGaW5hbC53aWR0aCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctdGl0bGViYXItY2xvc2Utbm8tdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdFx0XHRcdCQoZGl2VG9Qb3B1cClcblx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lmcmFtZScpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHQud2lkdGgoYW5pbWF0ZUZpbmFsLndpZHRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDEzKTtcblx0XHRcdH07XG5cblx0XHRcdHZhciBkaXZQbGVhc2VXYWl0O1xuXHRcdFx0aWYgKGlzSW5zaWRlSWZyYW1lKSB7XG5cdFx0XHRcdGRpdlBsZWFzZVdhaXQgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGl2UGxlYXNlV2FpdCA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudD4uTGF5b3V0UG9wdXAtbG9hZGluZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXZQbGVhc2VXYWl0LmhpZGUoKTtcblxuXHRcdFx0aWYgKHNldEhlaWdodCA9PSAtMSB8fCBzZXRXaWR0aCA9PSAtMSkge1xuXHRcdFx0XHRkaXZQb3B1cE91dGVyV2luZG93LmFuaW1hdGUoYW5pbWF0ZUZpbmFsLCB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMCxcblx0XHRcdFx0XHRjb21wbGV0ZTogb25BbmltYXRpb25Db21wbGV0ZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRpbm5lckRvYyA9IG51bGw7XG5cdFx0XHRkaXZQb3B1cE91dGVyV2luZG93ID0gbnVsbDtcblx0XHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cudG9wLiQuZGF0YShldmVudC50YXJnZXQsICdvcy1pbnRlcm5hbC1wcm9jZXNzaW5nJywgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JC5kYXRhKGV2ZW50LnRhcmdldCwgJ29zLWludGVybmFsLXByb2Nlc3NpbmcnLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG5cdFx0bGV0IHBvcHVwVG9DbG9zZTtcblx0XHRsZXQgcG9wdXBDb250YWluZXI7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdHBvcHVwVG9DbG9zZSA9IHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9IHdpbmRvdy50b3AuJCgnLlNhcHBoaXJlUG9wdXAnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXBUb0Nsb3NlID0gJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZy1jb250ZW50Jyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lciA9ICQoJy5TYXBwaGlyZVBvcHVwJyk7XG5cdFx0fVxuXG5cdFx0cG9wdXBUb0Nsb3NlLmRhdGEoUE9QVVBfQ0xPU0lOR19UQUcsIFBPUFVQX0NMT1NJTkdfVkFMVUUpO1xuXG5cdFx0Ly9zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdGlmIChwb3B1cFRvQ2xvc2UubGVuZ3RoKSBwb3B1cFRvQ2xvc2UuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0cG9wdXBUb0Nsb3NlLnJlbW92ZSgpO1xuXHRcdHBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdC8vfSwgMCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TGlua0hSRUYgPSB3aWRnZXQgPT4ge1xuXHRcdGxldCBsaW5rSHJlZjtcblx0XHRsZXQgaXNBQnV0dG9uID0gZmFsc2U7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly9DaGVja3MgaWYgdGhlIGlkIGlzIGZyb20gYSBsaW5rIG9yIG5vdFxuXHRcdFx0bGlua0hyZWYgPSAkKHdpZGdldCkuYXR0cignaHJlZicpO1xuXG5cdFx0XHQvL1Rlc3RzIGZvciB2aXNpYmlsaXR5L2V4aXN0ZW5jZVxuXHRcdFx0aWYgKHR5cGVvZiBsaW5rSHJlZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zdCBvbkNsaWNrID0gd2lkZ2V0LmdldEF0dHJpYnV0ZSgnb25jbGljaycpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2Ygb25DbGljayAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGlzQUJ1dHRvbiA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAob25DbGljayAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRsZXQgaHJlZk1hdGNoO1xuXG5cdFx0XHRcdFx0XHRpZiAoKGhyZWZNYXRjaCA9IG9uQ2xpY2sudG9TdHJpbmcoKS5tYXRjaCgvaHJlZj0nKFteJ10qKScvKSkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRsaW5rSHJlZiA9IGhyZWZNYXRjaFsxXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0cmV0dXJuIFtsaW5rSHJlZiwgaXNBQnV0dG9uXTtcblx0fTtcblxuXHRjb25zdCBvcGVuUG9wdXAgPSAoZGl2VG9Qb3B1cCwgZGl2UGxlYXNlV2FpdCwgbG9hZFRhcmdldFBhZ2UsIGV2ZW50LCBjb25maWcpID0+IHtcblx0XHQvLyBEZXN0cm95IGFueSBwcmV2aW91cyBkaWFsb2dcblx0XHRjbG9zZShudWxsKTtcblxuXHRcdGlmIChpc0luc2lkZUlmcmFtZSkge1xuXHRcdFx0Y29uc3QgJGpQYXJlbnQgPSB3aW5kb3cudG9wLiQ7XG5cdFx0XHQkalBhcmVudCgnLm9zLWludGVybmFsLVBvcHVwJykucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYW55IGNsb3NlIGlzIHBlbmRpbmcsIHNjaGVkdWxlIHRvIGV4ZWN1dGUgaXRzZWxmIGFzeW5jaHJvbm91c2x5IGV4aXRcblx0XHQvLyBJZiBubyBjbG9zZSBpcyBwZW5kaW5nLCBjb250aW51ZSB3aXRoIG9wZW4gb3BlcmF0aW9uXG5cdFx0bGV0IGNsb3NpbmdQb3B1cHM7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIGNsb3NpbmdQb3B1cHMgPSB3aW5kb3cudG9wLiQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXHRcdGVsc2UgY2xvc2luZ1BvcHVwcyA9ICQoJy5vcy1pbnRlcm5hbC11aS1kaWFsb2ctY29udGVudCcpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9zaW5nUG9wdXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoJC5kYXRhKGNsb3NpbmdQb3B1cHMuZ2V0KGkpLCBQT1BVUF9DTE9TSU5HX1RBRykgPT0gUE9QVVBfQ0xPU0lOR19WQUxVRSkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG9wZW5Qb3B1cChkaXZUb1BvcHVwLCBkaXZQbGVhc2VXYWl0LCBsb2FkVGFyZ2V0UGFnZSwgZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRcdH0sIDEzKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IF9kaWFsb2c7XG5cblx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHtcblx0XHRcdGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdFx0XHRwb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ1NhcHBoaXJlUG9wdXAnKTtcblxuXHRcdFx0d2luZG93LnRvcC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcblxuXHRcdFx0X2RpYWxvZyA9IHdpbmRvdy50b3AuJChkaXZUb1BvcHVwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnPGRpdiBjbGFzcz1cIlNhcHBoaXJlUG9wdXBcIj48L2Rpdj4nKS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0XHRfZGlhbG9nID0gJChkaXZUb1BvcHVwKTtcblx0XHR9XG5cblx0XHQkKGRpdlBsZWFzZVdhaXQpLnNob3coKTtcblxuXHRcdGlmICgkKCcuSVNpZGViYXInKS5sZW5ndGgpIHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cblx0XHRfZGlhbG9nLnNob3coKS5kaWFsb2coe1xuXHRcdFx0YXBwZW5kVG86ICcuU2FwcGhpcmVQb3B1cCcsXG5cdFx0XHRkaWFsb2dDbGFzczogJ29zLWludGVybmFsLVBvcHVwJyxcblx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRhdXRvUmVzaXplOiBmYWxzZSxcblx0XHRcdGNsb3NlT25Fc2NhcGU6ICFjb25maWcuaGlkZUNsb3NlQnV0dG9uLFxuXHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0YXV0b09wZW46IHRydWUsXG5cdFx0XHR0aXRsZTogY29uZmlnLnNldFRpdGxlLFxuXHRcdFx0bW9kYWw6ICEoY29uZmlnLnVzZU1vZGFsID09PSBmYWxzZSksXG5cdFx0XHRoZWlnaHQ6IGNvbmZpZy5zZXRIZWlnaHQgPT0gLTEgPyBQT1BVUF9JTklUSUFMX0hFSUdIVCA6IGNvbmZpZy5zZXRIZWlnaHQsXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHR3aWR0aDogY29uZmlnLnNldFdpZHRoID09IC0xID8gUE9QVVBfSU5JVElBTF9XSURUSCA6IGNvbmZpZy5zZXRXaWR0aCxcblx0XHRcdHpJbmRleDogUE9QVVBfV0lORE9XX0lOREVYLFxuXHRcdFx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBJZiB0aGUgcG9wdXAgaXMgY2xvc2VkIGJlZm9yZSBpdCBpcyByZXNpemVkIChFU0MpIHdlIG5lZWQgdG8gc2V0IHRoZSBwcm9jZXNzaW5nIGV2ZW50IHRvIGZhbHNlLlxuXHRcdFx0XHQkLmRhdGEoZXZlbnQudGFyZ2V0LCAnb3MtaW50ZXJuYWwtcHJvY2Vzc2luZycsIGZhbHNlKTtcblxuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLnVuYmluZCgnbG9hZCcpO1xuXHRcdFx0XHRfZGlhbG9nLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICdhYm91dDpibGFuaycpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X2RpYWxvZy5maW5kKCdpZnJhbWUnKS5lbXB0eSgpO1xuXHRcdFx0XHRcdF9kaWFsb2cuZW1wdHkoKTtcblx0XHRcdFx0fSwgMTMpO1xuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdF9kaWFsb2cuZmluZCgnaWZyYW1lJykuaGVpZ2h0KDApO1xuXHRcdF9kaWFsb2cucGFyZW50cygnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmRyb3BTaGFkb3coKTtcblxuXHRcdGlmIChjb25maWcuQ3NzQ2xhc3NlcyAhPT0gJyAnKSB7XG5cdFx0XHRpZiAoaXNJbnNpZGVJZnJhbWUpIHdpbmRvdy50b3AuJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHRcdGVsc2UgJCgnLm9zLWludGVybmFsLXVpLWRpYWxvZycpLmFkZENsYXNzKGNvbmZpZy5Dc3NDbGFzc2VzKTtcblx0XHR9XG5cblx0XHRsb2FkVGFyZ2V0UGFnZSgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVBvcHVwID0geyBjcmVhdGUsIGNsb3NlLCByZXNpemUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNhcHBoaXJlUmFkaW9CdXR0b24gKi9cblNhcHBoaXJlV2lkZ2V0cy5TYXBwaGlyZVJhZGlvQnV0dG9uID0gd2lkZ2V0SWQgPT4ge1xuXHRjb25zdCAkd2lkZ2V0ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdGNvbnN0ICRpbnB1dCA9ICR3aWRnZXQuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG5cdGNvbnN0ICRsYWJlbCA9ICR3aWRnZXQuZmluZCgnLkJ1dHRvblJhZGlvSW5wX3JhZGlvVGV4dCcpO1xuXHRjb25zdCBuYW1lID0gJGlucHV0LnByb3AoJ25hbWUnKTtcblxuXHRjb25zdCBhZGRSZW1vdmVDbGFzcyA9ICgkZWwsIHRvQWRkKSA9PiB7XG5cdFx0aWYgKHRvQWRkKSAkZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdGVsc2UgJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0fTtcblxuXHRjb25zdCBpc0NoZWNrZWQgPSAkZWwgPT4ge1xuXHRcdGlmICgkZWwuaXMoJzpjaGVja2VkJykpIGFkZFJlbW92ZUNsYXNzKCR3aWRnZXQsIHRydWUpO1xuXHRcdGVsc2UgYWRkUmVtb3ZlQ2xhc3MoJHdpZGdldCwgZmFsc2UpO1xuXHR9O1xuXG5cdCRpbnB1dC5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtuYW1lfVwiXWApLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGRSZW1vdmVDbGFzcygkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSk7XG5cblx0JGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRpc0NoZWNrZWQoJCh0aGlzKSk7XG5cdH0pO1xuXG5cdCRsYWJlbC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY2xvc2VzdEVsZW1lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5CdXR0b25SYWRpb0lucCcpO1xuXG5cdFx0aWYgKCRjbG9zZXN0RWxlbWVudC5oYXNDbGFzcygnZGlzYWJsZWQnKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0JGlucHV0WzBdLmNsaWNrKCk7XG5cdFx0Ly9pc0NoZWNrZWQoJGlucHV0KTtcblx0fSk7XG5cblx0aXNDaGVja2VkKCRpbnB1dCk7XG59O1xuIiwiLyogQ29tcG9uZW50IFNjYWxlTWFpblN0cnVjdHVyZSAqL1xyXG4oZnVuY3Rpb24oJCwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpIHtcclxuXHRjb25zdCBjcmVhdGUgPSBjb25maWcgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNldHVwU2NhbGUoKTtcclxuXHRcdFx0YmluZENsaWNrcygpO1xyXG5cclxuXHRcdFx0b3NBamF4QmFja2VuZCAmJlxyXG5cdFx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRiaW5kQ2xpY2tzKCk7XHJcblx0XHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdFNjYWxlQ291bnQgPSBjb25mID0+IHtcclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBDYXJkU2NhbGUgPSBjb25mLklzQ2FyZFNjYWxlO1xyXG5cdFx0XHR2YXIgUnVsZXJTY2FsZSA9IGNvbmYuSXNSdWxlclNjYWxlO1xyXG5cdFx0XHR2YXIgTXVsdGlwbGVTY2FsZSA9IGNvbmYuSXNNdWx0aXBsZVNjYWxlO1xyXG5cdFx0XHR2YXIgJHRvdGFsUGxhY2UgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCcpO1xyXG5cdFx0XHR2YXIgdG90YWxDYXJkU2NhbGUgPSAwO1xyXG5cdFx0XHR2YXIgdG90YWxNdWx0aXBsZVNjYWxlID0gMDtcclxuXHRcdFx0dmFyIHRvdGFsUnVsZXJTY2FsZSA9IDA7XHJcblxyXG5cdFx0XHR2YXIgU2NhbGVUeXBlQ2FyZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciB0b3RhbFNlbGVjdGVkID0gJCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUnKS5maW5kKCcuU2NhbGVDYXJkLmFjdGl2ZScpLmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgdG90YWxOdW1iZXIgPSAwO1xyXG5cdFx0XHRcdCQoXCIuU2NhbGVMaXN0LkNhcmRTY2FsZTpub3QoJy5pc1RpdGxlJylcIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmZpbmQoJy5TY2FsZUNhcmQnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHRvdGFsTnVtYmVyICs9IDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmICh0b3RhbE51bWJlciA9PT0gdG90YWxTZWxlY3RlZCkge1xyXG5cdFx0XHRcdFx0dmFyIHRvdGFsID0gW107XHJcblx0XHRcdFx0XHR2YXIgaW5wdXRWYWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0dmFyICRzY2FsZVJvdyA9ICQoJy5TY2FsZUxpc3QuQ2FyZFNjYWxlOm5vdCguaXNUaXRsZSknKTtcclxuXHRcdFx0XHRcdCRzY2FsZVJvdy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpbnB1dFZhbHVlID0gJCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2NhbGVDYXJkLmFjdGl2ZScpXHJcblx0XHRcdFx0XHRcdFx0LmRhdGEoJ3ZhbHVlJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlNjYWxlTGlzdF9pbnB1dFZhbHVlIGlucHV0JylcclxuXHRcdFx0XHRcdFx0XHQudmFsKGlucHV0VmFsdWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0JCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUgLlNjYWxlQ2FyZC5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0b3RhbC5wdXNoKCQodGhpcykuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHZhciBmaW5hbFRvdGFsID0gZXZhbCh0b3RhbC5qb2luKCcrJykpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZpbmFsVG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIFNjYWxlVHlwZVJ1bGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGFjdGl2ZVJ1bGVyVmFsdWUgPSAnJztcclxuXHRcdFx0XHR2YXIgJGFjdGl2ZVJ1bGVyID0gJCgnLlJ1bGVyU2NhbGVfbnVtYmVyLmFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmICgkYWN0aXZlUnVsZXIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dmFyIGFjdGl2ZVJ1bGVyVmFsdWUgPSAkKCcuUnVsZXJTY2FsZV9udW1iZXIuYWN0aXZlJylcclxuXHRcdFx0XHRcdFx0LmNsb3Nlc3QoJy5SdWxlclNjYWxlJylcclxuXHRcdFx0XHRcdFx0LmRhdGEoKS52YWx1ZTtcclxuXHRcdFx0XHRcdCQoJy5TY2FsZUxpc3QuUnVsZXInKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNjYWxlTGlzdF9pbnB1dFZhbHVlIGlucHV0JylcclxuXHRcdFx0XHRcdFx0LnZhbChhY3RpdmVSdWxlclZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlUnVsZXJWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFjdGl2ZVJ1bGVyVmFsdWU7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgU2NhbGVUeXBlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgbnVtYmVyb2ZDb2xzID0gJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlJylcclxuXHRcdFx0XHRcdC5maXJzdCgpXHJcblx0XHRcdFx0XHQuZmluZCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIG51bWJlcm9mUm93cyA9ICQoJy5CdXR0b25Hcm91cFNjYWxlJykuY2xvc2VzdCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlOm5vdCguaXNUaXRsZSk6bm90KC5pc1N1YnRvdGFsKScpXHJcblx0XHRcdFx0XHQubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciB0b3RhbCA9IFtdO1xyXG5cdFx0XHRcdHZhciBpID0gMDtcclxuXHRcdFx0XHR2YXIgaiA9IDA7XHJcblx0XHRcdFx0dmFyIGNvdW50QWN0aXZlID0gMDtcclxuXHRcdFx0XHR2YXIgY291bnRhbGxBY3RpdmVDb2xzID0gMDtcclxuXHRcdFx0XHR2YXIgdG90YWxPZkl0ZW1zID0gbnVtYmVyb2ZDb2xzICogbnVtYmVyb2ZSb3dzO1xyXG5cdFx0XHRcdHZhciB0b3RhbFNjb3JlID0gW107XHJcblxyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBudW1iZXJvZkNvbHM7IGkrKykge1xyXG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bWJlcm9mUm93czsgaisrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBTY2FsZUxpc3RTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdFx0XHRcdFx0Jy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknXHJcblx0XHRcdFx0XHRcdClbal07XHJcblx0XHRcdFx0XHRcdHZhciBCdXR0b25TY2FsZVNlbGVjdGVkID0gU2NhbGVMaXN0U2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVtpXTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChCdXR0b25TY2FsZVNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cF9idXR0b24uYWN0aXZlJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTY2FsZVZhbHVlID0gQnV0dG9uU2NhbGVTZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpWzBdLmlubmVyVGV4dDtcclxuXHRcdFx0XHRcdFx0XHR0b3RhbC5wdXNoKHBhcnNlSW50KFNjYWxlVmFsdWUpKTtcclxuXHRcdFx0XHRcdFx0XHR0b3RhbFNjb3JlLnB1c2gocGFyc2VJbnQoU2NhbGVWYWx1ZSkpO1xyXG5cdFx0XHRcdFx0XHRcdGNvdW50QWN0aXZlID0gY291bnRBY3RpdmUgKyAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoJCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb3VudEFjdGl2ZSA9PT0gbnVtYmVyb2ZSb3dzKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHN1YlRvdGFsID0gZXZhbCh0b3RhbC5qb2luKCcrJykpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzdWJ0b3RhbFNjYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlNjYWxlTGlzdC5NdWx0aXBsZVNjYWxlLmlzU3VidG90YWwgLkJ1dHRvbkdyb3VwU2NhbGUnKVtpXTtcclxuXHRcdFx0XHRcdFx0XHRzdWJ0b3RhbFNjYWxlLmlubmVyVGV4dCA9IHN1YlRvdGFsO1xyXG5cdFx0XHRcdFx0XHRcdGNvdW50YWxsQWN0aXZlQ29scyA9IGNvdW50YWxsQWN0aXZlQ29scyArIDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvdW50QWN0aXZlID0gMDtcclxuXHRcdFx0XHRcdHRvdGFsID0gW107XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkJ1dHRvbkdyb3VwX2J1dHRvbi5hY3RpdmUnKS5sZW5ndGggPT09IHRvdGFsT2ZJdGVtcykge1xyXG5cdFx0XHRcdFx0dmFyIGkgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIGogPSAwO1xyXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG51bWJlcm9mUm93czsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBTY2FsZUxpc3RSb3cgPSAkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGU6bm90KC5pc1RpdGxlKTpub3QoLmlzU3VidHRvdGFsKScpW2ldO1xyXG5cdFx0XHRcdFx0XHR2YXIgJFNjYWxlTGlzdElucHV0ID0gJChTY2FsZUxpc3RSb3cpLmZpbmQoJy5TY2FsZUxpc3RfaW5wdXRWYWx1ZSBpbnB1dCcpO1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzU2VsZWN0ZWQgPSAnJztcclxuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG51bWJlcm9mQ29sczsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIEFjdGl2ZUJ1dHRvbiA9ICQoU2NhbGVMaXN0Um93KS5maW5kKCcuQnV0dG9uR3JvdXBfYnV0dG9uLmFjdGl2ZScpW2pdO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBBY3RpdmVWYWx1ZSA9IEFjdGl2ZUJ1dHRvbi5pbm5lclRleHQ7XHJcblx0XHRcdFx0XHRcdFx0Ly92YWx1ZXNTZWxlY3RlZD12YWx1ZXNTZWxlY3RlZCsnLCcrQWN0aXZlVmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGogPT09IG51bWJlcm9mQ29scyAtIDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlc1NlbGVjdGVkICs9IEFjdGl2ZVZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZXNTZWxlY3RlZCArPSBBY3RpdmVWYWx1ZSArICcsJztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JFNjYWxlTGlzdElucHV0LnZhbCh2YWx1ZXNTZWxlY3RlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgZ2V0VG90YWwgPSBldmFsKHRvdGFsU2NvcmUuam9pbignKycpKTtcclxuXHRcdFx0XHRcdHJldHVybiBnZXRUb3RhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCBUb3RhbENhbGMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgaXNFbXB0eSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRpZiAoQ2FyZFNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHR0b3RhbENhcmRTY2FsZSA9IFNjYWxlVHlwZUNhcmQoKTtcclxuXHRcdFx0XHRcdGlzRW1wdHkgPSB0b3RhbENhcmRTY2FsZSA9PT0gJyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoUnVsZXJTY2FsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0dG90YWxSdWxlclNjYWxlID0gU2NhbGVUeXBlUnVsZXIoKTtcclxuXHRcdFx0XHRcdGlzRW1wdHkgPSB0b3RhbFJ1bGVyU2NhbGUgPT09ICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKE11bHRpcGxlU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRvdGFsTXVsdGlwbGVTY2FsZSA9IFNjYWxlVHlwZU11bHRpcGxlKCk7XHJcblx0XHRcdFx0XHRpc0VtcHR5ID0gdG90YWxNdWx0aXBsZVNjYWxlID09PSAnJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnN0ICRmb290ZXJSZXN1bHQgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCcpO1xyXG5cdFx0XHRcdGNvbnN0ICR0b3RhbFNjb3JlID0gJCgnLlNjYWxlTWFpblN0cnVjdHVyZV90b3RhbFNjb3JlJyk7XHJcblx0XHRcdFx0Y29uc3QgJHNjb3JlTGFiZWwgPSAkKCcuU2NhbGVNYWluU3RydWN0dXJlX2Zvb3RlclJlc3VsdCAuVG90YWxMYWJlbCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoaXNFbXB0eSkge1xyXG5cdFx0XHRcdFx0JHRvdGFsU2NvcmUudGV4dCgnLS0tJyk7XHJcblx0XHRcdFx0XHQkc2NvcmVMYWJlbC50ZXh0KCctJyk7XHJcblxyXG5cdFx0XHRcdFx0JGZvb3RlclJlc3VsdC5yZW1vdmVDbGFzcygnQ29sb3JaZXRhQkcnKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCFpc05hTih0b3RhbE11bHRpcGxlU2NhbGUpICYmICFpc05hTih0b3RhbENhcmRTY2FsZSkgJiYgIWlzTmFOKHRvdGFsUnVsZXJTY2FsZSkpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRvdGFsQWJzb2x1dGVTY29yZSA9IHRvdGFsQ2FyZFNjYWxlICsgdG90YWxNdWx0aXBsZVNjYWxlICsgdG90YWxSdWxlclNjYWxlO1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxBYnNvbHV0ZUxhYmVsID0gdG90YWxBYnNvbHV0ZVNjb3JlID4gMTEgPyAnSGlnaCcgOiAnTG93JztcclxuXHJcblx0XHRcdFx0XHQkdG90YWxTY29yZS50ZXh0KHRvdGFsQWJzb2x1dGVMYWJlbCk7XHJcblx0XHRcdFx0XHQkc2NvcmVMYWJlbC50ZXh0KHRvdGFsQWJzb2x1dGVTY29yZSk7XHJcblxyXG5cdFx0XHRcdFx0JGZvb3RlclJlc3VsdC5hZGRDbGFzcygnQ29sb3JaZXRhQkcnKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkaGlkZGVuTGluayA9ICQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfaGlkZGluZ0xpbmsgYScpO1xyXG5cclxuXHRcdFx0XHRcdGlmICgkaGlkZGVuTGluay5sZW5ndGggPiAwKSAkaGlkZGVuTGluay5jbGljaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmIChDYXJkU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHQkKCcuU2NhbGVDYXJkJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcclxuXHRcdFx0XHRcdFx0JHBhcmVudFNjYWxlQ2FyZCA9ICQodGhpcykuY2xvc2VzdCgnLlNjYWxlTGlzdC5DYXJkU2NhbGUnKTtcclxuXHRcdFx0XHRcdFx0JHBhcmVudFNjYWxlQ2FyZC5maW5kKCcuU2NhbGVDYXJkJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChSdWxlclNjYWxlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0JCgnLlJ1bGVyU2NhbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmZpbmQoJy52aWV3bW9kZScpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgJHJ1bGVyU2NhbGVMaXN0ID0gJCh0aGlzKS5jbG9zZXN0KCcuU2NhbGVMaXN0LlJ1bGVyJyk7XHJcblx0XHRcdFx0XHRcdCRydWxlclNjYWxlTGlzdC5maW5kKCcuUnVsZXJTY2FsZV9udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcylcclxuXHRcdFx0XHRcdFx0XHQuZmluZCgnLlJ1bGVyU2NhbGVfbnVtYmVyJylcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRUb3RhbENhbGMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKE11bHRpcGxlU2NhbGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHR2YXIgY291bnRlcjtcclxuXHRcdFx0XHR2YXIgU2NhbGVMaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNUaXRsZScpO1xyXG5cdFx0XHRcdHZhciBTY2FsZUxpc3RTdWJUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1N1YnRvdGFsJyk7XHJcblx0XHRcdFx0dmFyIFNjYWxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpub3QoLmlzVGl0bGUpOm5vdCguaXNTdWJ0b3RhbCknKTtcclxuXHJcblx0XHRcdFx0JCgnLkJ1dHRvbkdyb3VwU2NhbGUnKVxyXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZTpudGgtY2hpbGQoMm4pJylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnRXZlbkxpbmUnKTtcclxuXHRcdFx0XHR2YXIgbnVtYmVyT2ZHcm91cFNjYWxlID0gU2NhbGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5CdXR0b25Hcm91cFNjYWxlJykubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHQkKCcuU2NhbGVMaXN0Lk11bHRpcGxlU2NhbGUuaXNTdWJ0b3RhbCAuQnV0dG9uR3JvdXBTY2FsZScpLnRleHQoMCk7XHJcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgTXVsdGlwbGUgU2NhbGUgVGl0bGUgZXhpc3RzIHRoZW4gYWRqdXN0IHRpdGxlIHdpZHRoXHJcblx0XHRcdFx0aWYgKCQoJy5TY2FsZUxpc3QuTXVsdGlwbGVTY2FsZS5pc1RpdGxlJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0Zm9yIChjb3VudGVyID0gMDsgY291bnRlciA8IG51bWJlck9mR3JvdXBTY2FsZTsgY291bnRlcisrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBTY2FsZUxpc3RXaWR0aCA9IFNjYWxlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2NvdW50ZXJdLm9mZnNldFdpZHRoO1xyXG5cdFx0XHRcdFx0XHRTY2FsZUxpc3RUaXRsZS5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2NvdW50ZXJdLnN0eWxlLndpZHRoID0gU2NhbGVMaXN0V2lkdGggKyAncHgnO1xyXG5cdFx0XHRcdFx0XHRTY2FsZUxpc3RTdWJUb3RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuQnV0dG9uR3JvdXBTY2FsZScpW2NvdW50ZXJdLnN0eWxlLndpZHRoID0gU2NhbGVMaXN0V2lkdGggKyAncHgnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JCgnLkJ1dHRvbkdyb3VwX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0VG90YWxDYWxjKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHNldHVwU2NhbGUgPSAoKSA9PiB7XHJcblx0XHR2YXIgSXNDYXJkU2NhbGU7XHJcblx0XHR2YXIgSXNSdWxlclNjYWxlO1xyXG5cdFx0dmFyIElzTXVsdGlwbGVTY2FsZTtcclxuXHJcblx0XHQkKCcuU2NhbGVDYXJkJykubGVuZ3RoID4gMCA/IChJc0NhcmRTY2FsZSA9IHRydWUpIDogKElzQ2FyZFNjYWxlID0gZmFsc2UpO1xyXG5cdFx0JCgnLkJ1dHRvbkdyb3VwU2NhbGUnKS5sZW5ndGggPiAwID8gKElzTXVsdGlwbGVTY2FsZSA9IHRydWUpIDogKElzTXVsdGlwbGVTY2FsZSA9IGZhbHNlKTtcclxuXHRcdCQoJy5SdWxlclNjYWxlJykubGVuZ3RoID4gMCA/IChJc1J1bGVyU2NhbGUgPSB0cnVlKSA6IChJc1J1bGVyU2NhbGUgPSBmYWxzZSk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0U2NhbGVDb3VudCh7XHJcblx0XHRcdFx0SXNDYXJkU2NhbGU6IElzQ2FyZFNjYWxlLFxyXG5cdFx0XHRcdElzUnVsZXJTY2FsZTogSXNSdWxlclNjYWxlLFxyXG5cdFx0XHRcdElzTXVsdGlwbGVTY2FsZTogSXNNdWx0aXBsZVNjYWxlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0aWYgKCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKS50ZXh0KCctLS0nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmVzZXRTY2FsZXMgPSAoKSA9PiB7XHJcblx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX2NvbnRlbnQnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX29wdGlvbnMgLlRvZ2dsZUl0ZW1Db250cm9sJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuU2NhbGVNYWluU3RydWN0dXJlX3RvdGFsU2NvcmUnKS50ZXh0KCctLS0nKTtcclxuXHRcdFx0c2V0dXBTY2FsZSgpO1xyXG5cdFx0fSwgNjAwKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfY29udGVudCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmVfb3B0aW9ucyAuVG9nZ2xlSXRlbUNvbnRyb2wnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH07XHJcblxyXG5cdGJpbmRDbGlja3MgPSAoKSA9PiB7XHJcblx0XHRpZiAoJCgnLlNjYWxlTWFpblN0cnVjdHVyZV9vcHRpb25zIC5Ub2dnbGVJdGVtQ29udHJvbCAnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCQoJy5TY2FsZU1haW5TdHJ1Y3R1cmUnKVxyXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5Ub2dnbGVJdGVtQ29udHJvbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmVzZXRTY2FsZXMoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoJCgnLk5hdmlnYXRpb25fY29udHJvbCcpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0JCgnLk5hdmlnYXRpb25fcmlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhJCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnYScpWzBdXHJcblx0XHRcdFx0XHRcdC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoJy5OYXZpZ2F0aW9uX2xlZnQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhJCh0aGlzKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnYScpWzBdXHJcblx0XHRcdFx0XHRcdC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHJlc2V0U2NhbGVzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRTYXBwaGlyZVdpZGdldHMuU2NhbGVNYWluU3RydWN0dXJlID0geyBjcmVhdGUgfTtcclxufSkoalF1ZXJ5LCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cyk7XHJcbiIsIi8qIENvbXBvbmVudCBUb2dnbGVJdGVtQ29udHJvbCAqL1xuU2FwcGhpcmVXaWRnZXRzLlRvZ2dsZUl0ZW1Db250cm9sID0gKCkgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKCcuVG9nZ2xlSXRlbUNvbnRyb2wgaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sJylcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLlRvZ2dsZUl0ZW1Db250cm9sJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG5cdFx0XHRcdFx0Lm5vdCgnOmNoZWNrZWQnKVxuXHRcdFx0XHRcdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcblx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuXHRcdFx0XHRcdFx0LmlzKCc6Y2hlY2tlZCcpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpXG5cdFx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQoJy5Ub2dnbGVJdGVtQ29udHJvbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXG5cdFx0XHRcdFx0XHRcdFx0LmlzKCc6Y2hlY2tlZCcpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcbn07XG4iLCJ2YXIgU2VhcmNoU2VsZWN0RGVmaW5lID0gKHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgPSB3aW5kb3cuU2VhcmNoU2VsZWN0RGVmaW5lIHx8IHt9KTtcblxuU2FwcGhpcmVXaWRnZXRzLlNlbGVjdFNTRCA9IGZ1bmN0aW9uIFNTRFNlbGVjdFNldHVwKGNvbmZpZykge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkU1NEc2VsZWN0SWQgPSAkKCcjJyArIGNvbmZpZy5TU0RTZWxlY3RJZCk7XG5cdFx0dmFyIGlzTXVsdGlwbGUgPSBjb25maWcuaXNNdWx0aXBsZTtcblxuXHRcdHZhciAkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdHZhciAkQ29tcG9uZW50U1NEaW5wdXQgPSAkQ29tcG9uZW50U1NELmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jyk7XG5cdFx0dmFyIENvbXBvbmVudGlucHV0bGVuZ3RoID0gJENvbXBvbmVudFNTRGlucHV0LnZhbCgpLmxlbmd0aDtcblxuXHRcdGlmIChDb21wb25lbnRpbnB1dGxlbmd0aCA+IDApIHtcblx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX2NvbnRlbnRUaXRsZScpLmhpZ2hsaWdodCgkQ29tcG9uZW50U1NEaW5wdXQudmFsKCksIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuXHRcdFx0XHR3b3Jkc09ubHk6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyICRmYXZvcml0ZXNTZWFyY2hJbnB1dCA9ICRDb21wb25lbnRTU0QuZmluZCgnLlNlYXJjaFNEX2ZpbHRlcmZhdm9yaXRlcyBpbnB1dCcpO1xuXG5cdFx0aWYgKCRmYXZvcml0ZXNTZWFyY2hJbnB1dC5sZW5ndGgpIHtcblx0XHRcdHZhciBmYXZvcml0ZXNTZWFyY2hMZW5ndGggPSAkZmF2b3JpdGVzU2VhcmNoSW5wdXQudmFsKCkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoY29uZmlnLkhhc0Zhdm9yaXRlID09PSAnVHJ1ZScgJiYgZmF2b3JpdGVzU2VhcmNoTGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLlNlbGVjdFNEX19jb250ZW50VGl0bGUnKS5oaWdobGlnaHQoJGZhdm9yaXRlc1NlYXJjaElucHV0LnZhbCgpLCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0U0Qtc2VhcmNoZWQtdGVybScsXG5cdFx0XHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXG5cdFx0XHRcdFx0d29yZHNPbmx5OiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIE9wZW5Db25maXJtUG9wdXAgPSBmdW5jdGlvbigkU1NEc2VsZWN0SWQpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkUG9wdXBJRCA9ICRDb21wb25lbnRTU0Quc2libGluZ3MoJy5TU0RQb3B1cFdyYXBwZXInKTtcblxuXHRcdFx0JFBvcHVwSUQuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRDb21wb25lbnRTU0QuYWRkQ2xhc3MoJ0RvbnRfQ2xvc2UnKTtcblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwT2snKVxuXHRcdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkUG9wdXBJRC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoJENvbXBvbmVudFNTRC5yZW1vdmVDbGFzcygnRG9udF9DbG9zZScpLCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JFBvcHVwSURcblx0XHRcdFx0XHQuZmluZCgnLlNTRHBvcHVwQ2FuY2VsJylcblx0XHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JFBvcHVwSUQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCRDb21wb25lbnRTU0QucmVtb3ZlQ2xhc3MoJ0RvbnRfQ2xvc2UnKSwgNTAwKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBTU0RDaGVja0JveFNlbGVjdCA9IGZ1bmN0aW9uKCR3aWRnZXRJZCkge1xuXHRcdFx0dmFyIGNoZWNrQm94Q291bnQgPSAwO1xuXHRcdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0XHRjaGVja0JveENvdW50ID0gJHdpZGdldElkXG5cdFx0XHRcdFx0LmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKVxuXHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKS5sZW5ndGg7XG5cblx0XHRcdFx0JGFsbExpc3RjYXJkID0gJHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRF9jb250ZW50Jyk7XG5cblx0XHRcdFx0aWYgKGNoZWNrQm94Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5hZGRDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9jb250ZW50V3JhcHBlcicpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpXG5cdFx0XHRcdFx0XHRcdC5vZmYoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHdpZGdldElkLmNsb3Nlc3QoJy5TZWFyY2hTRC5zaG93RmF2b3JpdGUnKS5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdFx0XHQkd2lkZ2V0SWQuY2xvc2VzdCgnLlNlYXJjaFNEX2NvbnRlbnQgLlNlbGVjdFNEICcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKVxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKCcuTGluZUFjdGlvbkxJTksgPiBhJylcblx0XHRcdFx0XHRcdFx0XHRcdC5jbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmZpbmQoJy5TZWxlY3RTRF9hY3Rpb25MaW5rJylcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0XHQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpXG5cdFx0XHRcdFx0XHRcdFx0XHQuY2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKGlzTXVsdGlwbGUgPT09ICdUcnVlJykge1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRTU0RDaGVja0JveFNlbGVjdCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRF9fc3RhckxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoISRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0QgLlNlbGVjdFNEX19zdGFyV3JhcHBlcicpLmhhc0NsYXNzKCdzdGFyRGlzYWJsZWQnKSkge1xuXHRcdFx0XHRpZiAoJFNTRHNlbGVjdElkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfX3N0YXJXcmFwcGVyJykuaGFzQ2xhc3MoJ3N0YXJTZWxlY3RlZCcpKSB7XG5cdFx0XHRcdFx0T3BlbkNvbmZpcm1Qb3B1cCgkU1NEc2VsZWN0SWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfX3N0YXJUcmlnZ2VyID4gYScpLmNsaWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfY29udGVudFdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQkQ29tcG9uZW50U1NEID0gJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpO1xuXHRcdFx0JFNTRHNlbGVjdElkLmZpbmQoJy5MaW5lQWN0aW9uTElOSyA+IGEnKS5jbGljaygpO1xuXHRcdFx0aWYgKCEkQ29tcG9uZW50U1NELmhhc0NsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpKSB7XG5cdFx0XHRcdFNlYXJjaFNlbGVjdERlZmluZS5TU0RTZWFyY2gucmV0dXJuVG9TZWFyY2goJFNTRHNlbGVjdElkLmNsb3Nlc3QoJy5TZWFyY2hTRCcpKTtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5jbG9zZVNTRCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0fVxuXG5cdFx0XHQkQ29tcG9uZW50U1NEaW5wdXQudmFsKCcnKTtcblx0XHR9KTtcblxuXHRcdCRTU0RzZWxlY3RJZC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdCRDb21wb25lbnRTU0QgPSAkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJyk7XG5cdFx0XHQkU1NEc2VsZWN0SWQuZmluZCgnLkxpbmVBY3Rpb25MSU5LID4gYScpLmNsaWNrKCk7XG5cdFx0XHRpZiAoISRDb21wb25lbnRTU0QuaGFzQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJykpIHtcblx0XHRcdFx0U2VhcmNoU2VsZWN0RGVmaW5lLlNTRFNlYXJjaC5yZXR1cm5Ub1NlYXJjaCgkU1NEc2VsZWN0SWQuY2xvc2VzdCgnLlNlYXJjaFNEJykpO1xuXHRcdFx0XHRTZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoLmNsb3NlU1NEKCRTU0RzZWxlY3RJZC5jbG9zZXN0KCcuU2VhcmNoU0QnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcbiIsInZhciBTZWFyY2hTZWxlY3REZWZpbmUgPSAod2luZG93LlNlYXJjaFNlbGVjdERlZmluZSA9IHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUgfHwge30pO1xuXG5TYXBwaGlyZVdpZGdldHMuU1NEU2VhcmNoID0gZnVuY3Rpb24gU1NEc2VhcmNoU2V0dXAoY29uZmlnKSB7XG5cdCQoZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRTU0R3aWRnZXQgPSAkKCcjJyArIGNvbmZpZy5TU0RXaWRnZXRJZCk7IC8vIFNTRENvbXBvbmVudCBtYXAgbm90IHVzZWQgYWdhaW5cblx0XHR2YXIgJFNTRENvbXBvbmVudCA9ICRTU0R3aWRnZXQuZmluZCgnLlNlYXJjaFNEJyk7IC8vIFNTRFNlYXJjaCBDb21wb25lbnQgaWQgZm9yIHVzZSBpbiB0aGUgZnVuY3Rpb24gYW5kIG1hbmlwdWxhdGUgY2xhc3Nlc1xuXHRcdHZhciAkU1NEQ29tcG9uZW50Q29udGVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnQnKTsgLy8gU1NEY29tcG9uZW50IGNvbnRlbnRcblx0XHR2YXIgaGFzQ2xvbmUgPSBjb25maWcuSGFzQ2xvbmU7IC8vIEhhc0Nsb25lIHZhcmlhYmxlIGlucHV0IHBhcmFtZXRlciB2YWx1ZVxuXHRcdHZhciBoYXNGYXZvcml0ZSA9IGNvbmZpZy5IYXNGYXZvcml0ZTsgLy8gSGFzRmF2b3JpdGUgdmFyaWFibGUgaW5wdXQgcGFyYW1ldGVyIHZhbHVlXG5cdFx0dmFyIHNob3dDbG9uZXMgPSBjb25maWcuU2hvd0Nsb25lczsgLy8gU2hvd0Nsb25lcyB2YXJpYWJsZSBpbnB1dCBwYXJhbWV0ZXIgdmFsdWVcblx0XHR2YXIgbGV0dGVyTGltaXQgPSBjb25maWcuTGltaXRMZXR0ZXI7IC8vIE51bWJlciBvZiBsZXR0ZXIgdG8gZW50ZXIgYmVmb3JlIHRyaWdnZXIgdGhlIHNlYXJjaCBhY3Rpb25cblx0XHR2YXIgaGFzU2hpZWxkID0gY29uZmlnLkhhc1NoaWVsZDtcblx0XHR2YXIgc2hpZWxkVGltZW91dCA9IGNvbmZpZy5TaGllbGRUaW1lb3V0O1xuXHRcdHZhciBpbnB1dExlbmd0aCA9IGNvbmZpZy5TZWFyY2hJbnB1dExlbmd0aDtcblx0XHR2YXIgJHdpZGdldFNoaWVsZCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNELS1zaGllbGQnKTtcblx0XHR2YXIgc2VhcmNoVHJpZ2dlclRpbWVyO1xuXHRcdGNvbnN0ICRTU0RDbGVhckJ1dHRvbiA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJyk7XG5cdFx0Y29uc3QgJFNTRElucHV0RWxlbWVudCA9ICRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKTtcblxuXHRcdCRTU0RJbnB1dEVsZW1lbnQuYXR0cignbWF4TGVuZ3RoJywgaW5wdXRMZW5ndGgpO1xuXG5cdFx0dmFyIGV4ZWN1dGVTZWFyY2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUcmlnZ2VyVGltZXIpO1xuXHRcdFx0c2VhcmNoVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0VHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdH0sIDcwMCk7XG5cdFx0fTtcblxuXHRcdGlmIChoYXNTaGllbGQpIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2lkZ2V0U2hpZWxkLmhpZGUoKTtcblx0XHRcdH0sIHNoaWVsZFRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdC8qICBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG5cdFx0ICogICBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG5cdFx0ICogICBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcblx0XHQgKiAgIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG5cdFx0ICovXG5cdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdFx0XHR2YXIgdGltZW91dDtcblx0XHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvKioqKlxuXHRcdCAqICAgUmVzZXQgU2VhcmNoIFVJIHRvIHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIHJlc2V0VUkgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2VhcmNoX2Zhdm9yaXRlTGluaycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlJykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlQWN0aW9ucycpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmhpZGUoKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyIC5TZWFyY2hTRF9fcmV0dXJuJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fcmVtb3ZlJykuaGlkZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIEZhdm9yaXRlcyBVSVxuXHRcdCAqICAtLSAgcmVzdCBTU0Rjb21wb25lbnRcblx0XHQgKiAgLS0gIHNob3cgRmF2b3JpdGUgZmVhdHVyZXNcblx0XHQgKiAgLS0gIHJlbW92ZSBjbGFzcyBzaG93Q2xvbmUgaWYgY29tcG9uZW50IGhhdmUgdGhhdCBjbGFzc1xuXHRcdCAqICAtLSAgYWRkIGNsYXNzIHNob3dGYXZvcml0ZSB0byBoYXZlIGNvbXBvbmVudCBjb250cm9sXG5cdFx0ICogIC0tICBhZGRDbGFzcyBPcGVuIHdpdGggc2xpZGVcblx0XHQgKi9cblx0XHR2YXIgZ29Ub0Zhdm9yaXRlcyA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19yZXR1cm4nKS5oaWRlKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuaGlkZSgpO1xuXG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnc2hvd0Nsb25lJyk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsgJykuc2hvdygpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX0Zhdm9yaXRlUmVtb3ZlICcpLnNob3coKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZUFjdGlvbnMnKS5zaG93KCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdzaG93RmF2b3JpdGUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlbGVjdFNELmhhc0Zhdm9yaXRlID4gYScpLmZvY3VzKCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKioqKioqKioqKioqKlxuXHRcdCAqXG5cdFx0ICogIEdvIHRvIENsb25lIFVJXG5cdFx0ICogIC0tICByZW1vdmUgY2xhc3MgT3BlblxuXHRcdCAqICAtLSBBZGQgU2hvd0Nsb25lIGNsYXNzXG5cdFx0ICogIC0tIFNsaWRlRG93biBlZmZlY3QgYW5kIGFkZCBPcGVuIENsYXNzXG5cdFx0ICovXG5cdFx0dmFyIGdvVG9DbG9uZSA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19faW5wdXQgaW5wdXQnKS52YWwoJycpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXG5cdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dDbG9uZScpKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dDbG9uZScpO1xuXHRcdFx0fVxuXHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnT3BlbicpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqIFJldHVybiB0byBzZWFyY2ggZnJvbSBmYXZvcml0ZSBvciBjbG9uZVxuXHRcdCAqL1xuXHRcdHZhciByZXR1cm5Ub1NlYXJjaCA9IGZ1bmN0aW9uKCRTU0RDb21wb25lbnQpIHtcblx0XHRcdC8vIGxvYWRpbmcgc2hvdyBoaWRlIGxpc3Rcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0JykuaGlkZSgpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUgYScpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0Rfc2hvd01vcmUnKS5oaWRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc2V0VUkoJFNTRENvbXBvbmVudCk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdzaG93Q2xvbmUnKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ3Nob3dGYXZvcml0ZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnTXVsdGlTZWxlY3RBY3RpdmUnKTtcblxuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2lucHV0V3JhcHBlciAuU2VhcmNoU0RfX3JldHVybicpLmhpZGUoKTtcblxuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ2hhc0Nsb25lJykpIHtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5hZGRDbGFzcygnaGFzQ2xvbmUnKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnaGFzRmF2b3JpdGUnKSkge1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNGYXZvcml0ZScpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgU1NEQ2xlYXIgY2xvc2VzIFNTRFNlYXJjaCBjb250YWluZXJcblx0XHQgKiAgIGFuZCBjbGVhciBzc2QgZmlsdGVyIGlucHV0XG5cdFx0ICovXG5cdFx0dmFyIHNzZENsZWFyID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgnJyk7XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ICogICBDbG9zZVNTRCBjbG9zZXMgU1NEU2VhcmNoIGNvbnRhaW5lclxuXHRcdCAqICAgbXVzdCByZW1vdmUgaGlnaHRsaWdodFNlbGVjdGlvbiBkb25lIGJ5IGtleWJvYXJkIG5hdmlnYXRpb25cblx0XHQgKi9cblx0XHR2YXIgY2xvc2VTU0QgPSBmdW5jdGlvbigkU1NEQ29tcG9uZW50KSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdPcGVuJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZVVwKCcyNTAnKTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJy5zZWxlY3RlZCcpO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgQWRkIE9wZW4gY2xhc3MgdG8gU1NEQ29tcG9uZW50XG5cdFx0ICogICBpZiBTU0RDb21wb25lbnQgaGFzIGNsYXNzIE9wZW4gdGhlbiBmb2N1c1xuXHRcdCAqICAgbWFrZXMgb3BlbiBlZmZlY3QsIGNoZWNrIHRoZSBjaGFyYWN0ZXJzIGluc2lkZSB0aGUgaW5wdXQgdG8gZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIHNzZEZvY3VzID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0Ly8gbG9hZGluZyBzaG93IGhpZGUgbGlzdFxuXHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9jb250ZW50TGlzdCcpLmhpZGUoKTtcblx0XHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2xvYWRpbmcnKS5zaG93KCk7XG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zaG93TW9yZSBhJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JFNTRENvbXBvbmVudC5yZW1vdmVDbGFzcygnT3BlbicpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCcuc2hvd0Nsb25lJyk7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJy5zaG93RmF2b3JpdGUnKTtcblxuXHRcdFx0XHRpZiAoISRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCBhJykuY2xpY2soKTtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdPcGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFdoZW4gY2xpY2tpbmcgY2xpY2tpbmcgb3V0c2lkZSB0aGUgY29tcG9uZW50XG5cdFx0ICogICB0aGUgU1NEIG11c3QgY2xvc2UgYW5kIHJldHVybiB0byBpbml0aWFsIHN0YXRlXG5cdFx0ICovXG5cdFx0dmFyIENsaWNrT3V0ID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCEkU1NEQ29tcG9uZW50LmlzKGUudGFyZ2V0KSAmJiAkU1NEQ29tcG9uZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0XHQkU1NEQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdNdWx0aVNlbGVjdEFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgVHJpZ2dlcnMgdGhlIGxpbmsgdG8gaW5pdGlhbGl6ZVxuXHRcdCAqICAgdGhlIGRhdGFiYXNlIHNlYXJjaCBiYXNlZCBvbiBjdXJyZW50IGxlbmd0aCBvZiB0aGUgc3RyaW5nIGluc2VydGVkIG9uIHRoZSBpbnB1dFxuXHRcdCAqL1xuXHRcdHZhciBUcmlnZ2VyU2VhcmNoID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0dmFyIGN1cnJlbnRXb3JkID0gJFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX19pbnB1dCBpbnB1dCcpLnZhbCgpO1xuXHRcdFx0dmFyIGN1cnJlbnRDb3VudCA9IGN1cnJlbnRXb3JkLmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50Q291bnQgPj0gbGV0dGVyTGltaXQgfHwgY3VycmVudENvdW50ID09PSAwKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaExpbmtJbnB1dCA+IGEnKS5jbGljaygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKlxuXHRcdCAqICAgUmVtb3ZlcyBhbGwgZmF2b3JpdGUgY2hlY2tlZCBib3hlc1xuXHRcdCAqICAgYW5kIGVuZHMgTXVsdGlwbGVTZWxlY3Rcblx0XHQgKi9cblx0XHR2YXIgTXVsdGlVbmNoZWNrID0gZnVuY3Rpb24oJFNTRENvbXBvbmVudCkge1xuXHRcdFx0JGNoZWNrQm94ZXMgPSAkU1NEQ29tcG9uZW50LnBhcmVudCgpLmZpbmQoJy5TZWxlY3RTRF9fbXVsdGlwbGUgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblx0XHRcdCRTU0RDb21wb25lbnQucmVtb3ZlQ2xhc3MoJ011bHRpU2VsZWN0QWN0aXZlJyk7XG5cblx0XHRcdCRTU0RDb21wb25lbnRcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5maW5kKCcuU2VsZWN0U0RfX211bHRpcGxlID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIEtleUJvYXJkIGV2ZW50cyB1cCBkb3duIGFuZCBlbnRlciBpZiBub3QgZmlsdGVyXG5cdFx0ICovXG5cdFx0dmFyIGtleWJvYXJkRXZlbnRzID0gZnVuY3Rpb24oZSwgJFNTRENvbXBvbmVudCkge1xuXHRcdFx0aWYgKCRTU0RDb21wb25lbnQuaGFzQ2xhc3MoJ09wZW4nKSkge1xuXHRcdFx0XHR2YXIgY3VycmVudFNlbGVjdGVkID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3Bhbi5zZWxlY3RlZCcpOyAvLyBDdXJyZW50IHNlbGVjdGFibGUgaXRlbVxuXHRcdFx0XHR2YXIgJGZpcnN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpmaXJzdC1jaGlsZCcpOyAvLyBGaXJzdCBzZWxlY3RhYmxlIGl0ZW1cblx0XHRcdFx0dmFyICRsYXN0U2VsZWN0ID0gJFNTRENvbXBvbmVudENvbnRlbnQuZmluZCgnLkxpc3RSZWNvcmRzID4gc3BhbjpsYXN0LWNoaWxkJyk7IC8vIExhc3Qgc2VsZWN0YWJsZSBpdGVtXG5cdFx0XHRcdHZhciBjb3VudFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkLmxlbmd0aDsgLy8gTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1cblxuXHRcdFx0XHRpZiAoZS53aGljaCA9PSAzOCkge1xuXHRcdFx0XHRcdC8vIGlmIGtleSBwcmVzc2VkIGlzIHVwIGFycm93XG5cdFx0XHRcdFx0aWYgKGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9ICRsYXN0U2VsZWN0O1xuXHRcdFx0XHRcdFx0JGxhc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQucHJldigpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQubGFzdCgpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLndoaWNoID09IDQwKSB7XG5cdFx0XHRcdFx0Ly8gaWYga2V5IHByZXNzZWQgaXMgZG93biBhcnJvd1xuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID09PSAwKSB7XG5cdFx0XHRcdFx0XHQkZmlyc3RTZWxlY3QuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5leHQgPSBjdXJyZW50U2VsZWN0ZWQubmV4dCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0XHRpZiAobmV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3RlZCA9IG5leHQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWQuZXEoMCkuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0XHQvLyBpZiBrZXkgcHJlc3NlZCBpcyBlbnRlclxuXHRcdFx0XHRcdGlmIChjb3VudFNlbGVjdGVkID4gMCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkLmZpbmQoJy5TZWxlY3RTRCAuU2VsZWN0U0RfYWN0aW9uTGluaycpLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRzc2RDbGVhcigkU1NEQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgkU1NEQ29tcG9uZW50LmZpbmQoJ1NlYXJjaFNEX19faW5wdXQgaW5wdXQnKS5pcygnOmFjdGl2ZScpICYmIGNvdW50U2VsZWN0ZWQgPT09IDApIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRleGVjdXRlU2VhcmNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Lypcblx0XHQgKiAgIFRoZSBmaXJzdCBzdGVwIGlzIHRvIHJlc2V0IHRoZSBzZWV0aW5ncyB0byBkZWZhdWx0XG5cdFx0ICovXG5cdFx0cmVzZXRVSSgkU1NEQ29tcG9uZW50KTtcblxuXHRcdC8qXG5cdFx0ICogIFJlbW92ZSBhdXRvQ29tcGxldGUgZnJvbSBzZWFyY2ggaW5wdXRcblx0XHQgKi9cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuYXR0cignYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG5cdFx0Lypcblx0XHQgKiAgIElmIFNTRCBoYXMgQ2xvbmUgYW5kIHRoZSBjbG9uZSBsaXN0IGlzIHZpc2libGVcblx0XHQgKiAgIG9uY2xpY2sgXCJDbG9uZSBwcmV2aW91cyBtZWRpY2F0aW9uXCIgdGhlblxuXHRcdCAqICAgcmVtb3ZlIE9wZW4gYW5kIHNob3cgaXRlbXMgdG8gY2xvbmUgbGlzdFxuXHRcdCAqL1xuXHRcdGlmIChoYXNDbG9uZSA9PT0gJ1RydWUnKSB7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmFkZENsYXNzKCdoYXNDbG9uZScpO1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfX2Nsb25lV3JhcHBlcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0Zhdm9yaXRlID09PSAnVHJ1ZScpIHtcblx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ2hhc0Zhdm9yaXRlJyk7XG5cdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9zZWFyY2hfZmF2b3JpdGVMaW5rJykuc2hvdygpO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzQ2xvbmUgPT09ICdUcnVlJykgJiAoc2hvd0Nsb25lcyA9PT0gJ1RydWUnKSkge1xuXHRcdFx0JFNTRENvbXBvbmVudC5maW5kKCcuU2VhcmNoU0RfY2xvbmVXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCRTU0RDb21wb25lbnQuYWRkQ2xhc3MoJ09wZW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19GYXZvcml0ZVJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KTtcblx0XHRcdGRlYm91bmNlKFRyaWdnZXJTZWFyY2goJFNTRENvbXBvbmVudCksIDU1MCk7XG5cdFx0XHRkZWJvdW5jZSgkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoKSwgNTYwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19jbG9uZVdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdGdvVG9DbG9uZSgkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Nsb25lID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9faW5wdXRXcmFwcGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJFNTRENvbXBvbmVudC5oYXNDbGFzcygnc2hvd0Nsb25lJykpIHtcblx0XHRcdFx0cmV0dXJuVG9TZWFyY2goJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQ2FuY2VsJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRNdWx0aVVuY2hlY2soJFNTRENvbXBvbmVudCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWJvdW5jZShzc2RGb2N1cygkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCQoJ2JvZHknKS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcblx0XHRcdENsaWNrT3V0KGUsICRTU0RDb21wb25lbnQpO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0ICogICBLZXlCb2FyZCBldmVudHMgb24ga2V5IHByZXNzXG5cdFx0ICovXG5cdFx0JFNTRENvbXBvbmVudFxuXHRcdFx0LmZpbmQoJy5TZWFyY2hTRF9fX2lucHV0IGlucHV0Jylcblx0XHRcdC5hZGQoJFNTRENvbXBvbmVudC5maW5kKCcuU2VsZWN0U0RfYWN0aW9uTGluaycpKVxuXHRcdFx0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKCFlLndoaWNoICE9IDEzKSB7XG5cdFx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJFNTRElucHV0RWxlbWVudC52YWwoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0JFNTRENsZWFyQnV0dG9uLmFuaW1hdGUoeyBvcGFjaXR5OiAnaGlkZScgfSwgMzAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkU1NEQ2xlYXJCdXR0b24uYW5pbWF0ZSh7IG9wYWNpdHk6ICdzaG93JyB9LCAzMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdC8qXG5cdFx0ICogICBQcmV2ZW50IGZvcm0gc3VibWlzc2lvbiBvbiBlbnRlcixcblx0XHQgKiAgIGluc3RlYWQgZ28gdG8ga2V5Ym9hcmQgZXZlbnRzIHRvIHRyaWdnZXJcblx0XHQgKiAgIHRoZSBzZWxlY3Rpb25cblx0XHQgKi9cblx0XHQkKCRTU0RDb21wb25lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcblx0XHRcdFx0a2V5Ym9hcmRFdmVudHMoZSwgJFNTRENvbXBvbmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0c3NkQ2xlYXIoJFNTRENvbXBvbmVudCk7XG5cdFx0XHRkZWJvdW5jZShyZXR1cm5Ub1NlYXJjaCgkU1NEQ29tcG9uZW50KSwgNjAwKTtcblx0XHR9KTtcblxuXHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3NlYXJjaF9mYXZvcml0ZUxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdHNzZENsZWFyKCRTU0RDb21wb25lbnQpO1xuXHRcdFx0Z29Ub0Zhdm9yaXRlcygkU1NEQ29tcG9uZW50KTtcblx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX19fZ29Ub0Zhdm9yaXRlID4gYScpLmNsaWNrKCk7XG5cdFx0fSk7XG5cblx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fRmF2b3JpdGVBY3Rpb25zQWRkID4gYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVib3VuY2UoVHJpZ2dlclNlYXJjaCgkU1NEQ29tcG9uZW50KSwgMjAwKTtcblx0XHRcdGRlYm91bmNlKHJldHVyblRvU2VhcmNoKCRTU0RDb21wb25lbnQpLCAzNTApO1xuXHRcdH0pO1xuXG5cdFx0Lypcblx0XHQgKiAgIE9uIEFqYXggUmVxdWVzdCBoaWRlIGxvYWRpbmcgZGl2IGlmIHRoZSBTU0QgaXMgb3BlbiB0aGVuIHNob3cgdGhlXG5cdFx0ICogICBMaXN0UmVjb3Jkc1xuXHRcdCAqL1xuXHRcdG9zQWpheEJhY2tlbmQgJiZcblx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICgkU1NEQ29tcG9uZW50Lmhhc0NsYXNzKCdPcGVuJykpIHtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50LmZpbmQoJy5TZWFyY2hTRF9fbG9hZGluZycpLmhpZGUoKTtcblx0XHRcdFx0XHQkU1NEQ29tcG9uZW50Q29udGVudC5zbGlkZURvd24oJzEwMDAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX2NvbnRlbnRMaXN0Jykuc2hvdygpO1xuXHRcdFx0XHRcdFx0aWYgKCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlIGEnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdCRTU0RDb21wb25lbnQuZmluZCgnLlNlYXJjaFNEX3Nob3dNb3JlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdCQoJ2Zvcm0nKS5hcHBlbmQoJzxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cInNzZElucHV0XCIgb25jbGljaz1cInJldHVybiBmYWxzZTtcIiAgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz4nKTtcblxuXHRcdHdpbmRvdy5TZWFyY2hTZWxlY3REZWZpbmUuU1NEU2VhcmNoID0ge1xuXHRcdFx0cmV0dXJuVG9TZWFyY2g6IHJldHVyblRvU2VhcmNoLFxuXHRcdFx0cmVzZXRVSTogcmVzZXRVSSxcblx0XHRcdGNsb3NlU1NEOiBjbG9zZVNTRCxcblx0XHRcdHNzZEZvY3VzOiBzc2RGb2N1cyxcblx0XHRcdFRyaWdnZXJTZWFyY2g6IFRyaWdnZXJTZWFyY2gsXG5cdFx0XHRzc2RDbGVhcjogc3NkQ2xlYXIsXG5cdFx0fTtcblx0fSk7XG59O1xuLy8gQWRkZWQgdG8gY2xvc2UgdGhlIHNlbGVjdCBsaXN0IGlmIHdlIGNsaWNrIHRoZSBwcmVzY3JpcHRpb24gSWZyYW1lO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XG5cdHZhciByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblx0cm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lW3NyYyo9J1ByZXNjcmlwdGlvbnNfQ1cnXVwiKSAmJlxuXHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lW3NyYyo9J1ByZXNjcmlwdGlvbnNfQ1cnXVwiKVxuXHRcdFx0XHRcdC5jb250ZW50V2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNlYXJjaFNEJykuY2xhc3NMaXN0LnJlbW92ZSgnT3BlbicpO1xuXHRcdFx0XHRcdFx0dmFyIGFsbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNlYXJjaFNEX19faW5wdXQnKS5jaGlsZHJlbjtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBpbiBhbGxJbnB1dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWxsSW5wdXRbZWxlbWVudF0udmFsdWUgIT0gdW5kZWZpbmVkID8gKGFsbElucHV0W2VsZW1lbnRdLnZhbHVlID0gJycpIDogbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHR9LFxuXHRcdHRydWVcblx0KTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IFNlYXJjaENsaWVudFNpZGUgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRjbGFzcyBTZWFyY2hDbGllbnRTaWRlIHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblxuXHRcdFx0JCh3aW5kb3cpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRcdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0JCgnIycgKyB0aGlzLm9wdGlvbnMuaW5wdXRJZCkudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0JCgnIycgKyB0aGlzLm9wdGlvbnMuaW5wdXRJZCkub24oJ2NoYW5nZSBrZXlkb3duIHBhc3RlIGlucHV0JywgZSA9PiB7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ2xpZW50U2lkZShcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9ucy5pbnB1dElkLFxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLnNlYXJjaGFibGVFbGVtZW50U2VsZWN0b3IsXG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuc2VhcmNoYWJsZUNoaWxkU2VsZWN0b3Jcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZWFyY2hDbGllbnRTaWRlKGlucHV0SWQsIHNlbGVjdG9yLCBjaGlsZFNlbGVjdG9yKSB7XG5cdFx0XHRpZiAoJCgnIycgKyBpbnB1dElkKS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHR2YXIgc2VhcmNoVGV4dCA9IG9zanMoJyMnICsgaW5wdXRJZClcblx0XHRcdFx0XHQudmFsKClcblx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0dmFyIHNlYXJjaENvdW50ZXIgPSAwO1xuXHRcdFx0XHR2YXIgc2VsZWNpb24gPSBvc2pzKHNlbGVjdG9yKTtcblxuXHRcdFx0XHRzZWxlY2lvbi5yZW1vdmVDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcblx0XHRcdFx0c2VsZWNpb24ucmVtb3ZlQ2xhc3MoJ3NlYXJjaEZvdW5kJyk7XG5cdFx0XHRcdHNlbGVjaW9uLnVuaGlnaGxpZ2h0KCk7XG5cblx0XHRcdFx0aWYgKGNoaWxkU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50VG9TZWFyY2ggPSBvc2pzKGNoaWxkU2VsZWN0b3IpO1xuXHRcdFx0XHRcdGVsZW1lbnRUb1NlYXJjaC51bmhpZ2hsaWdodCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNlYXJjaFRleHQubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHNlbGVjaW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0VG9Db21wYXJlID0gY2hpbGRTZWxlY3RvclxuXHRcdFx0XHRcdFx0XHQ/ICQodGhpcylcblx0XHRcdFx0XHRcdFx0XHRcdC5maW5kKGNoaWxkU2VsZWN0b3IpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCgpXG5cdFx0XHRcdFx0XHRcdDogdGhpcy5pbm5lclRleHQ7XG5cblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0dGV4dFRvQ29tcGFyZVxuXHRcdFx0XHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0XHRcdC5pbmRleE9mKHNlYXJjaFRleHQpID4gLTFcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRvc2pzKHRoaXMpLmFkZENsYXNzKCdzZWFyY2hGb3VuZCcpO1xuXHRcdFx0XHRcdFx0XHRzZWFyY2hDb3VudGVyKys7XG5cdFx0XHRcdFx0XHRcdG9zanModGhpcykuaGlnaGxpZ2h0KHNlYXJjaFRleHQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0b3Nqcyh0aGlzKS5hZGRDbGFzcygnc2VhcmNoTm90Rm91bmQnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZSA9IGNvbmZpZyA9PiAod2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2VhcmNoQ2xpZW50U2lkZShjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2VhcmNoQ2xpZW50U2lkZSA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTZWN0aW9uRXhwYW5kYWJsZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGZ1bmN0aW9uIFNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XG5cblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikucGFyZW50KCk7XG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcblxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xuXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0dGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XG5cblx0XHRcdFx0aWYgKCQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOCcpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ2llOScpKSB7XG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBhamF4IHJlZnJlcyBmdW5jdGlvblxuXHRcdHRoYXQuYWpheFJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIHJlbW92ZSBjbGljayBldmVudHNcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20nKS5vZmYoKTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIHNlbGVjdCwgLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbSBhJ1xuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgbmV3IGNsaWNrIGV2ZW50c1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlX2hlYWRlckN1c3RvbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9uc1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7XG5cdFx0XHRcdFx0XHRjbGllbnQ6IHN0YXQsXG5cdFx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGN1cmVudCBzdGF0ZSAoYWpheCBzdGF0ZSB4IGluaXRpYWwgc3RhdGUpXG5cdFx0XHRcdHZhciBjdXJTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGNoZWNrIGlmIHN0YXJ0IGV4cGFuZGFibGVcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRjdXJTdGF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjaGVjayBpZiBhamF4ICE9IGluaXRpYWwgc2VydmVyXG5cdFx0XHRcdGlmIChjdXJTdGF0ZSAhPSBwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSkge1xuXHRcdFx0XHRcdC8vIGN1cnN0YXRlXG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydzZXJ2ZXInXSA9IGN1clN0YXRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGhhcyBjbGFzcyBleHBhbmRlZFxuXHRcdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSBmYWxzZSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50Jylcblx0XHRcdFx0XHRcdFx0LmhlaWdodCgwKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID09IHRydWUgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGV2ZW50c1xuXHRcdHRoYXQuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gZWFjaCBhbGwgc2VjdGlvbnMgdG8gY3JlYXRlIGFycmF5IHN0YXRcblx0XHRcdCQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbScpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIGFkZCBzdGF0IG9uIGFycmF5XG5cdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdHN0YXQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID0ge1xuXHRcdFx0XHRcdGNsaWVudDogc3RhdCxcblx0XHRcdFx0XHRzZXJ2ZXI6IHN0YXQsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCQodGhpcykuaGFzQ2xhc3MoJ0hpZGVXaGVuRW1wdHknKSAmJlxuXHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdC5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGVDdXN0b21fY29udGVudCcpXG5cdFx0XHRcdFx0XHQudGV4dCgpLmxlbmd0aCA9PT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmhpZGUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGhhY2sgdG8gZGlzcGxheSBhIG1lc3NhZ2Ugd2hlbiBTZWN0aW9uRXhwYW5kYWJsZUN1c3RvbSBoYXMgbm8gY2hpbGQgaXRlbXNcblx0XHRcdFx0dmFyIGlzRW1wdHkgPSB0cnVlO1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZUN1c3RvbV9jb250ZW50IGRpdiwgLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQgc3BhbicpXG5cdFx0XHRcdFx0Lm5vdCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5Jylcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLnRleHQoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIWlzRW1wdHkpIHtcblx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHQuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlQ3VzdG9tX2NvbnRlbnQtLWVtcHR5Jylcblx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciAkZXhwYW5kYWJsZUluc3RhbmNlID0gJCh0aGlzKTtcblx0XHRcdFx0dmFyICR0b2dnbGVyID0gJCh0aGlzKS5maW5kKCc+IC5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVyJyk7XG5cdFx0XHRcdGlmICgkdG9nZ2xlci5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR2YXIgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHNob3ddJykuZGF0YSgnbGFiZWxzaG93JykpO1xuXHRcdFx0XHRcdCR0b2dnbGVyLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdCR0b2dnbGVyU3RhdGUgPSAhJHRvZ2dsZXJTdGF0ZTtcblx0XHRcdFx0XHRcdGlmICgkdG9nZ2xlclN0YXRlKSB7XG5cdFx0XHRcdFx0XHRcdCRleHBhbmRhYmxlSW5zdGFuY2UuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbGhpZGVdJykuZGF0YSgnbGFiZWxoaWRlJykpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0JGV4cGFuZGFibGVJbnN0YW5jZS5maW5kKCcuU2VjdGlvbkV4cGFuZGFibGUtdG9nZ2xlZCcpLmhpZGUoKTtcblx0XHRcdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tJylcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y2xpY2tFdmVudHModGhpcyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxuXHRcdFx0JChcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gaW5wdXQsIC5TZWN0aW9uRXhwYW5kYWJsZV9oZWFkZXJDdXN0b20gc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVfaGVhZGVyQ3VzdG9tIGEnXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGV2ZW50IGFqYXhcblx0XHRcdG9zQWpheEJhY2tlbmQgJiYgb3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdCh0aGF0LmFqYXhSZWZyZXNoKTtcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVDdXN0b20oKTtcblxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TZWN0aW9uRXhwYW5kYWJsZSA9IHtcblx0XHRjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGZ1bmN0aW9uIFNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdC8vIE9iamVjdCB0byBzYXZlIHN0YXRzXG5cdFx0dmFyIHByZXZpZXdzdGF0ID0gW107XG5cblx0XHQvLyBzZXQgY2xpY2sgZXZlbnRzXG5cdFx0ZnVuY3Rpb24gY2xpY2tFdmVudHMob2IpIHtcblx0XHRcdC8vIHN0b3JlIHF1ZXJ5cyBpbiBhIHNpbmdsZSB2YXJcblx0XHRcdHZhciBTZWN0aW9uID0gJChvYikucGFyZW50KCk7XG5cdFx0XHR2YXIgU2VjdGlvbkNvbnRlbnQgPSBTZWN0aW9uLmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfY29udGVudCcpO1xuXG5cdFx0XHQvLyBnZXQgaWRcblx0XHRcdHZhciBpZCA9IFNlY3Rpb24uYXR0cignaWQnKTtcblxuXHRcdFx0dmFyIHRlbXBIZWlnaHQgPSAwO1xuXG5cdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdGlmIChTZWN0aW9uLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodCwgZHVyaW5nIHRoaXMgcHJvY2VzcywgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmFkZENsYXNzKCdub1RyYW5zaXRpb24nKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuaGVpZ2h0KFNlY3Rpb25Db250ZW50LmhlaWdodCgpKTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnRbMF0ub2Zmc2V0SGVpZ2h0OyAvLyBoYWNrIHRvIGZvcmNlIGEgcmVwYWludFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5yZW1vdmVDbGFzcygnbm9UcmFuc2l0aW9uJyk7XG5cblx0XHRcdFx0Ly8gQ29sbGFwc2UgY29udGVudFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdFNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdFx0XHRcdFNlY3Rpb25Db250ZW50LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGNsYXNzLCBzZXQgaGVpZ2h0IGFuZCBzYXZlIHN0YXRlXG5cdFx0XHRcdHByZXZpZXdzdGF0W2lkXVsnY2xpZW50J10gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIENhbGMgYW5kIHNldCBhIGZpeGVkIGhlaWdodFxuXHRcdFx0XHRTZWN0aW9uQ29udGVudC5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdFx0Ly8gdGVtcEhlaWdodCA9IFNlY3Rpb25Db250ZW50LmhlaWdodCgpO1xuXHRcdFx0XHQvLyBTZWN0aW9uQ29udGVudC5oZWlnaHQoMCk7XG5cdFx0XHRcdC8vIFNlY3Rpb25Db250ZW50LmhlaWdodCh0ZW1wSGVpZ2h0KTtcblx0XHRcdFx0U2VjdGlvbkNvbnRlbnQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MsIHNldCBoZWlnaHQgYW5kIHNhdmUgc3RhdGVcblx0XHRcdFx0U2VjdGlvbi5hZGRDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0cHJldmlld3N0YXRbaWRdWydjbGllbnQnXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYWpheCByZWZyZXMgZnVuY3Rpb25cblx0XHR0aGF0LmFqYXhSZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZW1vdmUgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpLm9mZigpO1xuXG5cdFx0XHQvLyBhZGQgc3RvcCBwcmVwYWdhdGlvblxuXHRcdFx0JChcblx0XHRcdFx0Jy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGlucHV0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBzZWxlY3QsIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfaGVhZGVyIGEnXG5cdFx0XHQpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGFkZCBuZXcgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGlja0V2ZW50cyh0aGlzKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBlYWNoIGFsbCBzZWN0aW9uc1xuXHRcdFx0JCgnLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gaWYgbmV3IFNlY3Rpb25FeHBhbmRhYmxlIHRoZW4gYWRkIHRvIHByZXZpZXdzdGF0IGFycmF5XG5cdFx0XHRcdGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldID09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHRcdHZhciBzdGF0ID0gZmFsc2U7XG5cdFx0XHRcdFx0Ly8gaWYgb3BlblxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRkIHJvd1xuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV0gPSB7IGNsaWVudDogc3RhdCwgc2VydmVyOiBzdGF0IH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjdXJlbnQgc3RhdGUgKGFqYXggc3RhdGUgeCBpbml0aWFsIHN0YXRlKVxuXHRcdFx0XHR2YXIgY3VyU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBjaGVjayBpZiBzdGFydCBleHBhbmRhYmxlXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0Y3VyU3RhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2hlY2sgaWYgYWpheCAhPSBpbml0aWFsIHNlcnZlclxuXHRcdFx0XHRpZiAoY3VyU3RhdGUgIT0gcHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10pIHtcblx0XHRcdFx0XHQvLyBjdXJzdGF0ZVxuXHRcdFx0XHRcdHByZXZpZXdzdGF0WyQodGhpcykuYXR0cignaWQnKV1bJ2NsaWVudCddID0gY3VyU3RhdGU7XG5cdFx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnc2VydmVyJ10gPSBjdXJTdGF0ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoYXMgY2xhc3MgZXhwYW5kZWRcblx0XHRcdFx0XHRpZiAocHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXVsnY2xpZW50J10gPT0gZmFsc2UgJiYgJCh0aGlzKS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcblx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0LmNoaWxkcmVuKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGVfY29udGVudCcpXG5cdFx0XHRcdFx0XHRcdC5oZWlnaHQoMCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcmV2aWV3c3RhdFskKHRoaXMpLmF0dHIoJ2lkJyldWydjbGllbnQnXSA9PSB0cnVlICYmICEkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdleHBhbmRlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudHNcblx0XHR0aGF0LmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdC8vIGVhY2ggYWxsIHNlY3Rpb25zIHRvIGNyZWF0ZSBhcnJheSBzdGF0XG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBhZGQgc3RhdCBvbiBhcnJheVxuXHRcdFx0XHR2YXIgc3RhdCA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIGlmIG9wZW5cblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcblx0XHRcdFx0XHRzdGF0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFkZCByb3dcblx0XHRcdFx0cHJldmlld3N0YXRbJCh0aGlzKS5hdHRyKCdpZCcpXSA9IHsgY2xpZW50OiBzdGF0LCBzZXJ2ZXI6IHN0YXQgfTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBhZGQgY2xpY2sgZXZlbnRzXG5cdFx0XHQkKCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlcicpXG5cdFx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNsaWNrRXZlbnRzKHRoaXMpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gYWRkIHN0b3AgcHJlcGFnYXRpb25cblx0XHRcdCQoXG5cdFx0XHRcdCcuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBpbnB1dCwgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlIC5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZV9oZWFkZXIgc2VsZWN0LCAuU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUgLlNlY3Rpb25FeHBhbmRhYmxlSW5zaWRlX2hlYWRlciBhJ1xuXHRcdFx0KS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBldmVudCBhamF4XG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QodGhhdC5hamF4UmVmcmVzaCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHNldE9wZW5DbG9zZUNsYXNzID0gaWQgPT4ge1xuXHRcdGlkLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGlkLnBhcmVudCgpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZmluZCgnLkhlYWRlckljb24nKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmZpbmQoJy5IZWFkZXJJY29uJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Nsb3NlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdjbG9zZWQnKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5maW5kKCcuSGVhZGVySWNvbicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdvcGVuJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IGV4cGFuZGFibGUgPSBuZXcgU2VjdGlvbkV4cGFuZGFibGVJbnNpZGUoKTtcblxuXHRcdGV4cGFuZGFibGUuaW5pdCgpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5TZWN0aW9uRXhwYW5kYWJsZUluc2lkZSA9IHtcblx0XHRjcmVhdGUsXG5cdFx0c2V0T3BlbkNsb3NlQ2xhc3MsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBTZWxlY3RTeXN0ZW0gKi9cblNhcHBoaXJlV2lkZ2V0cy5TZWxlY3RTeXN0ZW0gPSBjb25maWcgPT4ge1xuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBXaWRnZXRJZCA9IGNvbmZpZy5XaWRnZXRJZDsgLy9Db21ibyBCb3ggSWQgdG8gYmUgdXNlZC5cblx0XHR2YXIgQ2xhc3MgPSBjb25maWcuQ2xhc3M7IC8vQWxsIENvbWJvIGJveGVzIHdpdGggdGhpcyBjbGFzcyB3aWxsIGJlIGJlIHRyYW5zZm9ybWVkLlxuXHRcdHZhciBOb1Jlc3VsdHNUZXh0ID0gY29uZmlnLk5vUmVzdWx0c1RleHQ7IC8vVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuXG5cdFx0dmFyIGlucHV0VHlwZSA9IGNvbmZpZy5JbnB1VHlwZTsgLy9PcHRpb25zOiBGSWx0ZXJzLCBEcm9wZG93biwgU2VsZWN0MlxuXHRcdHZhciBQcm9tcHQgPSBjb25maWcuUHJvbXB0OyAvL1Byb21wdCBpbiBzZWFyY2hcblx0XHR2YXIgU2VsZWN0MlR5cGUgPSBjb25maWcuU2VsZWN0VHlwZTsgLy8gVHlwZSBvZiBzZWxlY3QyIGNvbmZpZ3VyYXRpb25cblx0XHR2YXIgSGFzU2VhcmNoID0gY29uZmlnLkhhc1NlYXJjaDsgLy8gaGFzIHNlYXJjaFxuXHRcdHZhciBPblNlbGVjdGluZ0pTID0gY29uZmlnLk9uU2VsZWN0aW5nSlM7XG5cdFx0dmFyIE9uVW5TZWxlY3RpbmdKUyA9IGNvbmZpZy5PblVuU2VsZWN0aW5nSlM7XG5cdFx0dmFyIE1heGltdW1MZW5ndGggPSBjb25maWcuTWF4aW11bUxlbmd0aDtcblx0XHR2YXIgU2VsZWN0ZWRWYWx1ZSA9IGNvbmZpZy5TZWxlY3RlZFZhbHVlO1xuXHRcdHZhciBhbGxvd0NsZWFyID0gY29uZmlnLmFsbG93Q2xlYXI7XG5cdFx0Ly8gIFNlbGVjdDIgQWpheCBDb25maWd1cmF0aW9uXG5cdFx0dmFyIEFqYXhVUkwgPSBjb25maWcuQWpheFVSTDtcblx0XHR2YXIgQWpheERlbGF5ID0gY29uZmlnLkFqYXhEZWxheTtcblx0XHR2YXIgUGFnaW5hdGlvblNpemUgPSBjb25maWcuUGFnaW5hdGlvblNpemU7XG5cdFx0dmFyIE1pbmltdW1JbnB1dExlbmdodCA9IGNvbmZpZy5NaW5pbXVtSW5wdXRMZW5naHQ7XG5cdFx0dmFyIFNlYXJjaFRlcm0gPSBjb25maWcuU2VhcmNoVGVybTtcblx0XHR2YXIgU2VhcmNoRXh0cmFQYXJhbTEgPSBjb25maWcuU2VhcmNoRXh0cmFQYXJhbTE7XG5cdFx0dmFyIFBhZ2VUZXJtID0gY29uZmlnLlBhZ2VUZXJtO1xuXHRcdHZhciBBbW91bnRQYWdlID0gY29uZmlnLlBhZ2VBbW91bnQ7XG5cdFx0dmFyIGlzTXVsdGlwbGUgPSBjb25maWcuaXNNdWx0aXBsZTtcblx0XHR2YXIgU2VsZWN0Mk9wdGlvbnMgPSB7fTtcblx0XHR2YXIgJFdpZGdldElkZW50aWZpZXI7XG5cblx0XHRpZiAoY29uZmlnLmxvY2FsZSA9PT0gJ0FSJyB8fCBjb25maWcubG9jYWxlID09PSAnRkEnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0XG5cdFx0U2VsZWN0Mk9wdGlvbnMudGhlbWUgPSAnZGVmYXVsdCBTZWxlY3RTeXN0ZW0nO1xuXG5cdFx0Y29uc29sZS5sb2coXCItLS0gXCIgKyBTZWxlY3QyVHlwZSArIFwiIC0tLVwiKTtcblx0XHQvKiAgXG4gICAgICAgICAgQ2hhbmdlIHNlbGVjdDIgc2VhcmNoIGRpc3BsYXkgXG4gICAgICAgICAgICAgIC1NdWx0aXBsZSBTZWxlY3QyIHNlYXJjaCBVSSBsaWtlIFNpbmdsZSBTZWxlY3QyXG4gICAgICAqL1xuXHRcdCQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKFxuXHRcdFx0J1NlYXJjaExpa2VTaW5nbGUnLFxuXHRcdFx0W1xuXHRcdFx0XHQnc2VsZWN0Mi91dGlscycsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duJyxcblx0XHRcdFx0J3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaENvbnRhaW5lcicsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL3NlYXJjaCcsXG5cdFx0XHRcdCdzZWxlY3QyL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxcblx0XHRcdF0sXG5cdFx0XHRmdW5jdGlvbihVdGlscywgRHJvcGRvd24sIEF0dGFjaEJvZHksIEF0dGFjaENvbnRhaW5lciwgU2VhcmNoLCBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCkge1xuXHRcdFx0XHRsZXQgZHJvcGRvd25TZWFyY2ggPSBVdGlscy5EZWNvcmF0ZShEcm9wZG93biwgU2VhcmNoKTtcblx0XHRcdFx0ZHJvcGRvd25TZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciAkcmVuZGVyZWQgPSBEcm9wZG93bi5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG5cdFx0XHRcdFx0Ly8gQWRkIGFiaWxpdHkgZm9yIGEgcGxhY2Vob2xkZXIgaW4gdGhlIHNlYXJjaCBib3hcblx0XHRcdFx0XHRsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdwbGFjZWhvbGRlckZvclNlYXJjaCcpIHx8ICcnO1xuXHRcdFx0XHRcdHZhciAkc2VhcmNoID0gJChcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93blwiPicgK1xuXHRcdFx0XHRcdFx0XHQnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgcGxhY2Vob2xkZXI9XCInICtcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXIgK1xuXHRcdFx0XHRcdFx0XHQnXCIgdHlwZT1cInNlYXJjaFwiJyArXG5cdFx0XHRcdFx0XHRcdCcgdGFiaW5kZXg9XCItMVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIicgK1xuXHRcdFx0XHRcdFx0XHQnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz4nICtcblx0XHRcdFx0XHRcdFx0Jzwvc3Bhbj4nXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG5cdFx0XHRcdFx0dGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXHRcdFx0XHRcdCRzZWFyY2guYWRkQ2xhc3MoJ011bHRpcGxlU2VsZWN0Jyk7XG5cblx0XHRcdFx0XHQkcmVuZGVyZWQucHJlcGVuZCgkc2VhcmNoKTtcblx0XHRcdFx0XHQkc2VhcmNoLnBhcmVudCgpLmFkZENsYXNzKCdNdWx0aXBsZVNlbGVjdCcpO1xuXHRcdFx0XHRcdHJldHVybiAkcmVuZGVyZWQ7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gRGVjb3JhdGUgdGhlIGRyb3Bkb3duK3NlYXJjaCB3aXRoIHRoZSBjb250YWluZXJzXG5cdFx0XHRcdGxldCBhZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoZHJvcGRvd25TZWFyY2gsIEF0dGFjaENvbnRhaW5lcik7XG5cdFx0XHRcdGFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShhZGFwdGVyLCBBdHRhY2hCb2R5KTtcblxuXHRcdFx0XHRyZXR1cm4gYWRhcHRlcjtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogRGVmYXVsdCBDb25maWd1cmF0aW9uIG5lZWRlZCB0byBhc3NvY2lhdGUgdGhlIHdpZGdldCB0byB0aGUgc2VsZWN0MiBwbHVnaW5cblx0XHQgKi9cblx0XHRpZiAoV2lkZ2V0SWQgPT09ICcnICYmIENsYXNzICE9ICcnKSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllciA9ICQoJy4nICsgQ2xhc3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllciA9ICQoJyMnICsgV2lkZ2V0SWQpO1xuXHRcdH1cblx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdzZWxlY3QtaGlkZSAnICsgaW5wdXRUeXBlO1xuXG5cdFx0Ly8gIFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duUGFyZW50PSAkKCcjJytQYXJlbnREaXYpO1xuXG5cdFx0dmFyIGZvcm1hdFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuXHRcdFx0dmFyICRzZWxlY3RlZE9wdGlvbnNWYWx1ZSA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJzpzZWxlY3RlZCcpO1xuXHRcdFx0dmFyIHNlbGVjdGVkT3B0aW9ucyA9ICRzZWxlY3RlZE9wdGlvbnNWYWx1ZS5sZW5ndGg7XG5cdFx0XHR2YXIgdG90YWxPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykubGVuZ3RoO1xuXHRcdFx0dmFyIHNlbGVjdEFsbE9wdCA9ICRXaWRnZXRJZGVudGlmaWVyLmZpbmQoJ29wdGlvbjpmaXJzdC1jaGlsZDpzZWxlY3RlZCcpLmxlbmd0aDtcblx0XHRcdHZhciBhY3RpdmVWYWx1ZXMgPSAnJztcblx0XHRcdHZhciBhbGxPcHRFeGNlcHRBbGwgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQ6bm90KFwiLlNlbGVjdGVkQWxsXCIpJykubGVuZ3RoO1xuXHRcdFx0dmFyICRhbGxPcHRFeGNlcHRBbGxPYmogPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCc6c2VsZWN0ZWQ6bm90KFwiLlNlbGVjdGVkQWxsXCIpJyk7XG5cblx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPT09IHRvdGFsT3B0aW9ucykge1xuXHRcdFx0XHRpZiAodG90YWxPcHRpb25zIC0gMSA+IDMpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ0FsbCBTZWxlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGFsbE9wdEV4Y2VwdEFsbE9iai5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQ7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzLnJlcGxhY2UoLyxcXHMqJC8sICcnKTtcblx0XHRcdFx0XHRyZXR1cm4gYWN0aXZlVmFsdWVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdG90YWxvcHQgPSB0b3RhbE9wdGlvbnMgLSAxO1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRPcHRpb25zID4gMykge1xuXHRcdFx0XHRcdHJldHVybiBzZWxlY3RlZE9wdGlvbnMgKyAnIG9mICcgKyB0b3RhbG9wdCArICcgc2VsZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChzZWxlY3RlZE9wdGlvbnMgPiAwKSB7XG5cdFx0XHRcdFx0XHQkc2VsZWN0ZWRPcHRpb25zVmFsdWUuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlVmFsdWVzID0gYWN0aXZlVmFsdWVzICsgJyAnICsgJCh0aGlzKVswXS5pbm5lclRleHQgKyAnLCAnO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRhY3RpdmVWYWx1ZXMgPSBhY3RpdmVWYWx1ZXMucmVwbGFjZSgvLFxccyokLywgJycpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFjdGl2ZVZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdTZWxlY3QgYW4gb3B0aW9uJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKE5vUmVzdWx0c1RleHQgIT0gJycpIHtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmZvcm1hdE5vTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gTm9SZXN1bHRzVGV4dDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKGlucHV0VHlwZSAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9IGlucHV0VHlwZTtcblx0XHR9XG5cblx0XHRpZiAoYWxsb3dDbGVhciA9PT0gJ1RydWUnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5hbGxvd0NsZWFyID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoTWF4aW11bUxlbmd0aCAhPSAnJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWF4aW11bUlucHV0TGVuZ3RoID0gTWF4aW11bUxlbmd0aDtcblx0XHR9XG5cblx0XHRpZiAoUHJvbXB0ICE9ICcnKSB7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5wbGFjZWhvbGRlciA9IFByb21wdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMucGxhY2Vob2xkZXIgPSB7XG5cdFx0XHRcdGlkOiAnLTEnLCAvLyB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvblxuXHRcdFx0XHR0ZXh0OiAnU2VsZWN0IGFuIG9wdGlvbicsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzMnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIEFqYXhcblx0XHRcdFNlbGVjdDJPcHRpb25zID0ge307XG5cblx0XHRcdGlmIChjb25maWcubG9jYWxlID09PSAnQVInIHx8IGNvbmZpZy5sb2NhbGUgPT09ICdGQScpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93Q2xlYXIgPSBmYWxzZTtcblxuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGVtcGxhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbihyZXBvKSB7XG5cdFx0XHRcdGlmICghcmVwby5lbGVtZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21wdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXBvLmZ1bGxfbmFtZSB8fCByZXBvLnRleHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy50ZW1wbGF0ZVJlc3VsdCA9IGZ1bmN0aW9uKHJlcG8pIHtcblx0XHRcdFx0aWYgKHJlcG8ubG9hZGluZykge1xuXHRcdFx0XHRcdHJldHVybiByZXBvLnRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIG1hcmt1cCA9ICc8ZGl2IGNsYXNzPVwiXCJDbGVhcmZpeFwiXCI+JyArICc8ZGl2IGNsYXNzPVwiXCJUaGVtZUdyaWRfV2lkdGgxMlwiXCI+JyArIHJlcG8udGV4dCArICc8L2Rpdj4nO1xuXHRcdFx0XHRpZiAocmVwby5kZXNjcmlwdGlvbikge1xuXHRcdFx0XHRcdG1hcmt1cCArPSAnPGRpdiBjbGFzcz1cIlwiT1NBdXRvTWFyZ2luVG9wXCJcIj4nICsgcmVwby5kZXNjcmlwdGlvbiArICc8L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcmt1cCArPSAnPC9kaXY+Jztcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcblx0XHRcdH07XG5cblx0XHRcdChTZWxlY3QyT3B0aW9ucy5hamF4ID0ge1xuXHRcdFx0XHR1cmw6IEFqYXhVUkwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRlbGF5OiBBamF4RGVsYXksXG5cdFx0XHRcdGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHRcdHZhciBTZWxlY3QyQWpheE9wdCA9IHt9O1xuXHRcdFx0XHRcdHZhciBTcGxpdFBhcmFtZXRlciA9IFNlYXJjaEV4dHJhUGFyYW0xLnNwbGl0KCcsJyk7XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuU2VhcmNoUGFyYW1ldGVyID0gcGFyYW1zLnRlcm07XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuUGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XG5cdFx0XHRcdFx0U2VsZWN0MkFqYXhPcHQuUGFnZUFtb3VudCA9IEFtb3VudFBhZ2U7XG5cblx0XHRcdFx0XHRTcGxpdFBhcmFtZXRlci5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3BsaXRUZXh0ID0gZWwuc3BsaXQoJzonKTtcblx0XHRcdFx0XHRcdFNlbGVjdDJBamF4T3B0W3NwbGl0VGV4dFswXV0gPSBzcGxpdFRleHRbMV07XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gU2VsZWN0MkFqYXhPcHQ7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbihkYXRhLCBwYXJhbXMpIHtcblx0XHRcdFx0XHRwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XG5cblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0cmVzdWx0czogZGF0YS5pdGVtcyxcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0XHRcdFx0bW9yZTogcGFyYW1zLnBhZ2UgKiBQYWdpbmF0aW9uU2l6ZSA8IGRhdGEudG90YWxfY291bnQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNhY2hlOiB0cnVlLFxuXHRcdFx0fSksXG5cdFx0XHRcdChTZWxlY3QyT3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSBNaW5pbXVtSW5wdXRMZW5naHQpO1xuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbihtYXJrdXApIHtcblx0XHRcdFx0cmV0dXJuIG1hcmt1cDtcblx0XHRcdH07XG5cblx0XHRcdGlmIChjb25maWcuaXNNdWx0aXBsZSkge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IHRydWU7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ1NlbGVjdDJBamF4IE11bHRpcGxlJztcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25Dc3NDbGFzcyA9ICdTZWxlY3QyQWpheCBNdWx0aXBsZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5tdWx0aXBsZSA9IGZhbHNlO1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdTZWxlY3QyQWpheCc7XG5cdFx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAnU2VsZWN0MkFqYXgnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoU2VsZWN0ZWRWYWx1ZSAhPT0gJycpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShTZWxlY3RlZFZhbHVlKTtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEuVmFsdWUsIGRhdGEuSWQsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuYXBwZW5kKG9wdGlvbikudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50IFNlbGVjdFN5c3RlbSAoJHtXaWRnZXRJZH0pOiBTZWxlY3RlZFZhbHVlIG11c3QgYmUgYSB2YWxpZCBKU09OIWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gMDtcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSBjb25maWcuSGFzVGFncztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNsb3NlT25zZWxlY3QgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzInKSB7XG5cdFx0XHQvL1NlbGVjdDIgd2l0aCBDaGVja0JveFxuXG5cdFx0XHR2YXIgaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0aWYgKCRXaWRnZXRJZGVudGlmaWVyWzBdLm9wdGlvbnMubGVuZ3RoID09PSAkV2lkZ2V0SWRlbnRpZmllclswXS5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdGlzQWxsU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoV2lkZ2V0SWQgIT0gJycpIHtcblx0XHRcdFx0b3B0aW9uID0gbmV3IE9wdGlvbignU2VsZWN0IEFsbCcsICdBbGwnLCB0cnVlLCBpc0FsbFNlbGVjdGVkKTtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIucHJlcGVuZChvcHRpb24pO1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnU2VsZWN0ZWRBbGwnKTtcblx0XHRcdH1cblx0XHRcdFNlbGVjdDJPcHRpb25zLm11bHRpcGxlID0gdHJ1ZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNsb3NlT25TZWxlY3QgPSBmYWxzZTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmFsbG93SHRtbCA9IGZhbHNlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMudGFncyA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoSGFzU2VhcmNoID09PSAnVHJ1ZScpIHtcblx0XHRcdFx0U2VsZWN0Mk9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKCdTZWFyY2hMaWtlU2luZ2xlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA9IC0xO1xuXHRcdFx0fVxuXG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5jb250YWluZXJDc3NDbGFzcyA9ICdNdWx0aXBsZVNlbGVjdCc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ011bHRpcGxlU2VsZWN0Jztcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRlbXBsYXRlU2VsZWN0aW9uID0gZm9ybWF0UmVzdWx0O1xuXHRcdH1cblxuXHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzYnKSB7XG5cdFx0XHQvLyBTZWxlY3QyIEh0bWxPcHRpb25zXG5cdFx0XHRTZWxlY3QyT3B0aW9ucyA9IHt9O1xuXHRcdFx0aWYgKGNvbmZpZy5sb2NhbGUgPT09ICdBUicgfHwgY29uZmlnLmxvY2FsZSA9PT0gJ0ZBJykge1xuXHRcdFx0XHRTZWxlY3QyT3B0aW9ucy5kaXIgPSAncnRsJztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGFIdG1sT3B0aW9uID0gW107XG5cdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0dmFyIG9wdGlvbk9iamVjdCA9IHtcblx0XHRcdFx0XHRpZDogJCh0aGlzKS52YWwoKSxcblx0XHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcblx0XHRcdFx0XHRodG1sOiAkKHRoaXMpLnRleHQoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0ZGF0YUh0bWxPcHRpb24ucHVzaChvcHRpb25PYmplY3QpO1xuXHRcdFx0fSk7XG5cblx0XHRcdFNlbGVjdDJPcHRpb25zLmNvbnRhaW5lckNzc0NsYXNzID0gJ2N1c3RvbVNlbGVjdCc7XG5cdFx0XHRTZWxlY3QyT3B0aW9ucy5kcm9wZG93bkNzc0NsYXNzID0gJ2Ryb3Bkb3duQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRhdGEgPSBkYXRhSHRtbE9wdGlvbjtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmVzY2FwZU1hcmt1cCA9IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRyZXR1cm4gbWFya3VwO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKFNlbGVjdGVkVmFsdWUgIT0gJycpIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKFNlbGVjdGVkVmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKCcnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICcxJykge1xuXHRcdFx0Ly8gU2VsZWN0MiBUYWdDdXN0b21cblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAndGFnQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAndGFnQ3VzdG9tJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLlRva2VuU2VwYXJhdG9zID0gWycsJywgJyAnXTtcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNyZWF0ZVNlYXJjaENob2ljZSA9IGZ1bmN0aW9uKHRlcm0sIGRhdGEpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCQoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dC5sb2NhbGVDb21wYXJlKHRlcm0pID09PSAwO1xuXHRcdFx0XHRcdH0pLmxlbmd0aCA9PT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0aWQ6IHRlcm0sXG5cdFx0XHRcdFx0XHR0ZXh0OiB0ZXJtLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKFNlbGVjdDJUeXBlID09PSAnNScpIHtcblx0XHRcdC8vIFNlbGVjdDIgVGFnTXVsdGlwbGVcblx0XHRcdFNlbGVjdDJPcHRpb25zLnRhZ3MgPSB0cnVlO1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgPSAndGFnU3lzdGVtJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgPSAndGFnU3lzdGVtJztcblx0XHRcdFNlbGVjdDJPcHRpb25zLmNyZWF0ZVRhZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHR2YXIgdGVybSA9ICQudHJpbShwYXJhbXMudGVybSk7XG5cdFx0XHRcdGlmICh0ZXJtID09PSAnJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWQ6ICcjJyArIHRlcm0sXG5cdFx0XHRcdFx0dGV4dDogdGVybSxcblx0XHRcdFx0XHRuZXdUYWc6IHRydWUsIC8vIGFkZCBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKEhhc1NlYXJjaCA9PT0gJ0ZhbHNlJykge1xuXHRcdFx0U2VsZWN0Mk9wdGlvbnMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSAtMTtcblx0XHR9XG5cblx0XHRpZiAoT25VblNlbGVjdGluZ0pTICE9ICcnIHx8IE9uU2VsZWN0aW5nSlMgIT0gJycpIHtcblx0XHRcdCRXaWRnZXRJZGVudGlmaWVyXG5cdFx0XHRcdC5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKVxuXHRcdFx0XHQub24oJ3NlbGVjdDI6dW5zZWxlY3RpbmcnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCd1bnNlbGVjdGluZycsIHRydWUpO1xuXHRcdFx0XHRcdE9uVW5TZWxlY3RpbmdKUztcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6c2VsZWN0aW5nJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdE9uU2VsZWN0aW5nSlM7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignc2VsZWN0Om9wZW5pbmcnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndW5zZWxlY3RpbmcnKSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVEYXRhKCd1bnNlbGVjdGluZycpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdzZWxlY3Q6b3BlbicsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ3NlbGVjdDI6Y2xvc2UnLCBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChTZWxlY3QyVHlwZSA9PT0gJzInKSB7XG5cdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHR2YXIgaWR3aWRnZXQgPSAnIycgKyBXaWRnZXRJZDtcblxuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0VW5zZWxlY3RlZElkID0gZS5wYXJhbXMuZGF0YS5pZDtcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xuXHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkSXRlbXMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBhbGxPcHRpb25zID0gJChpZHdpZGdldCArICcgb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRhbGxPcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKHNlbGVjdGVkSXRlbXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RlZE9wdGlvbnMgPSAkV2lkZ2V0SWRlbnRpZmllci5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR2YXIgdG90YWxPcHRpb25zID0gJFdpZGdldElkZW50aWZpZXIuZmluZCgnb3B0aW9uJykubGVuZ3RoO1xuXHRcdFx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9ucyA9PT0gdG90YWxPcHRpb25zIC0gMSAmJiAkKGlkd2lkZ2V0ICsgJyA+ICBvcHRpb246c2VsZWN0ZWQ6Zmlyc3QtY2hpbGQnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkSXRlbXMgPSBbXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFsbE9wdGlvbnMgPSAkKGlkd2lkZ2V0ICsgJyBvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0YWxsT3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIudmFsKHNlbGVjdGVkSXRlbXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXHRcdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6dW5zZWxlY3QnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0VW5zZWxlY3RlZElkID0gZS5wYXJhbXMuZGF0YS5pZDtcblx0XHRcdFx0XHRpZiAoVW5zZWxlY3RlZElkID09PSAnQWxsJykge1xuXHRcdFx0XHRcdFx0JChpZHdpZGdldCArICcgPiBvcHRpb24nKS5yZW1vdmVBdHRyKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MignZGVzdHJveScpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRcdFx0XHQkKGlkd2lkZ2V0KVxuXHRcdFx0XHRcdFx0XHQudmFsKCcnKVxuXHRcdFx0XHRcdFx0XHQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdFx0XHQvLyQoaWR3aWRnZXQgKycgPiBvcHRpb24nKS5hdHRyKCdzZWxlY3RlZCcsIFwic2VsZWN0ZWRcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoaWR3aWRnZXQgKyAnID4gb3B0aW9uOmZpcnN0LWNoaWxkJykucmVtb3ZlQXR0cignc2VsZWN0ZWQnKTtcblx0XHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnNlbGVjdDIoU2VsZWN0Mk9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5zZWxlY3QyKFNlbGVjdDJPcHRpb25zKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoU2VsZWN0MlR5cGUgPT09ICc0Jykge1xuXHRcdFx0JFdpZGdldElkZW50aWZpZXIuc2VsZWN0MihTZWxlY3QyT3B0aW9ucyk7XG5cdFx0XHR2YXIgaWR3aWRnZXQgPSAnIycgKyBXaWRnZXRJZDtcblxuXHRcdFx0JFdpZGdldElkZW50aWZpZXIub24oJ3NlbGVjdDI6c2VsZWN0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZihlLnRhcmdldC5zZWxlY3RlZEluZGV4ICE9PSAwKXtcblx0XHRcdFx0XHQkV2lkZ2V0SWRlbnRpZmllci5wYXJlbnQoKS5hZGRDbGFzcygnU2VsZWN0U3lzdGVtRmlsdGVyLVNlbGVjdGVkJyk7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCRXaWRnZXRJZGVudGlmaWVyLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdTZWxlY3RTeXN0ZW1GaWx0ZXItU2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdENvbnRhaW5lciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHRsZXQgc2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyO1xuXHRsZXQgJHNoaWZ0Q29udGFpbmVySWQgPSAkKCk7XG5cblx0Y29uc3QgY3JlYXRlID0gc2hpZnRDb250YWluZXJJZCA9PiB7XG5cdFx0Ly8gJCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0JHNoaWZ0Q29udGFpbmVySWQgPSAkKHNoaWZ0Q29udGFpbmVySWQpO1xuXG5cdFx0aGFzU2Nyb2xsQmFyKCk7XG5cdFx0aGFuZGxlU2hpZnRUYWJsZSgpO1xuXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHQkKCcuU2hpZnRDYXJkX3RpbWVMaW5lJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHQvLyBcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudSAnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHQvLyB9LCAxNTAwKTtcblxuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfX2Fycm93Jylcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXG5cdFx0XHQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcblx0XHRcdFx0fSwgMTUwMCk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaGlmdFRhYmxlID0gKCkgPT4ge1xuXHRcdCQoJy5TaGlmdEV4cGFuZGFibGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0dmFyICRlbEZsYWcgPSAkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lJyk7XG5cdFx0XHR2YXIgJGVsRmxhZ1RpbWUgPSAkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmluZCgnLkZsYWdMaW5lX3RpbWUnKTtcblx0XHRcdHZhciAkY29sdW1uRmxhZyA9ICRlbEZsYWcuZGF0YSgnY29sdW1uJyk7XG5cdFx0XHR2YXIgJG1pbnV0ZXNGbGFnID0gJGVsRmxhZy5kYXRhKCdtaW51dGVzJyk7XG5cdFx0XHR2YXIgJHNsb3RzID0gJCh0aGlzKVxuXHRcdFx0XHQuY2xvc2VzdCgnLlNoaWZ0Q29udGFpbmVyJylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENvbnRhaW5lcl9oZWFkZXInKVxuXHRcdFx0XHQuZmluZCgnLlNoaWZ0Q2VsbENvbnRlbnQnKTtcblx0XHRcdHZhciAkc2xvdFdpZHRoID0gTWF0aC5yb3VuZCgkc2xvdHMuZXEoMCkud2lkdGgoKSk7XG5cdFx0XHR2YXIgbWludXRlc1Bvc2l0aW9uID0gKCRtaW51dGVzRmxhZyAqICRzbG90V2lkdGgpIC8gNjA7XG5cblx0XHRcdC8vIGhhbmRsZSBjdXJyZW50IHRpbWUgZmxvZyBob3Jpem9udGFsIHBvc2l0aW9uaW5nXG5cdFx0XHR2YXIgc2xvdHNQb3NpdGlvbiA9IFtdO1xuXHRcdFx0JHNsb3RzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHRcdHNsb3RzUG9zaXRpb24ucHVzaCgkKHRoaXMpLnBvc2l0aW9uKCkubGVmdCk7XG5cdFx0XHR9KTtcblx0XHRcdCRlbEZsYWcuY3NzKCdsZWZ0Jywgc2xvdHNQb3NpdGlvblskY29sdW1uRmxhZyAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcblx0XHRcdCRlbEZsYWcuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHRpZiAoJGNvbHVtbkZsYWcgPT09ICRzbG90cy5sZW5ndGgpIHtcblx0XHRcdFx0JGVsRmxhZ1RpbWUuY3NzKHtcblx0XHRcdFx0XHRyaWdodDogJzFweCcsXG5cdFx0XHRcdFx0bGVmdDogJ2F1dG8nLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIGNlbGxzIHRoYXQgbWlnaHQgc3BhbiBvdmVyIHNldmVyYWwgc2xvdHNcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LmZpbmQoJy5TaGlmdENhcmQnKVxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbihpbmRleCwgZWxSb3cpIHtcblx0XHRcdFx0XHR2YXIgcm93SGFzU3Bhbm5lZENlbGwgPSBmYWxzZTtcblx0XHRcdFx0XHQkKGVsUm93KVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5TaGlmdENlbGxDb250ZW50Jylcblx0XHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbENlbGwpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvbHNwYW4gPSAkKGVsQ2VsbCkuZGF0YSgnY29sc3BhbicpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY29sc3BhbiA9PT0gc2xvdHNQb3NpdGlvbi5sZW5ndGggfHwgcm93SGFzU3Bhbm5lZENlbGwpIHtcblx0XHRcdFx0XHRcdFx0XHQkKGVsQ2VsbCkuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJzEgMSBhdXRvJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjb2xzcGFuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHJvd0hhc1NwYW5uZWRDZWxsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHQkKGVsQ2VsbCkuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleDogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICsoc2xvdHNQb3NpdGlvbltjb2xzcGFuXSAtIHNsb3RzUG9zaXRpb25bMF0pICsgJ3B4Jyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBoYW5kbGUgaG9yaXpvbnRhbCBzY3JvbGwgYmVoYXZpb3Jcblx0XHRcdGlmIChlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoKSB7XG5cdFx0XHRcdCQoZWwpLndpZHRoKGVsLnNjcm9sbFdpZHRoKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0XHQud2lkdGgoZWwuc2Nyb2xsV2lkdGgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChlbCkud2lkdGgoJ2F1dG8nKTtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5jbG9zZXN0KCcuU2hpZnRDb250YWluZXInKVxuXHRcdFx0XHRcdC5maW5kKCcuU2hpZnRDb250YWluZXJfaGVhZGVyJylcblx0XHRcdFx0XHQud2lkdGgoJ2F1dG8nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYXNTY3JvbGxCYXIgPSAoKSA9PiB7XG5cdFx0dmFyICRTY3JvbGxhYmxlRGl2ID0gJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKTtcblx0XHRpZiAoJHNoaWZ0Q29udGFpbmVySWQuZmluZCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAoJFNjcm9sbGFibGVEaXYuZ2V0KDApLnNjcm9sbEhlaWdodCA+ICRTY3JvbGxhYmxlRGl2LmhlaWdodCgpKSB7XG5cdFx0XHRcdHZhciAkbGFzdENlbGwgPSAkc2hpZnRDb250YWluZXJJZC5maW5kKCcuSXNUaW1lcjpsYXN0LWNoaWxkJyk7XG5cdFx0XHRcdCRsYXN0Q2VsbC5jc3MoJ3BhZGRpbmctcmlnaHQnLCAnN3B4Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHJlZHJhd1NoaWZ0VGltZWxpbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHNoaWZ0VGltZWxpbmVSZXNpemVUaW1lcik7XG5cdFx0c2hpZnRUaW1lbGluZVJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGhhc1Njcm9sbEJhcigpO1xuXHRcdFx0aGFuZGxlU2hpZnRUYWJsZSgpO1xuXHRcdH0sIDQwMCk7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG5cdFx0dmFyIGhDb250ZW50ID0gJCgnLkNvbnRlbnQnKS5oZWlnaHQoKTtcblx0XHR2YXIgaFdpbmRvdyA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuXHRcdGlmIChoQ29udGVudCA+IGhXaW5kb3cpIHJlZHJhd1NoaWZ0VGltZWxpbmUoKTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIgPSB7XG5cdFx0Y3JlYXRlLFxuXHRcdGNoZWNrU2Nyb2xsLFxuXHRcdHJlZHJhd1NoaWZ0VGltZWxpbmUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG5cbiQod2luZG93KVxuXHQub2ZmKCdyZXNpemUuR2VuZXJpY0dhbGxlcnknKVxuXHQub24oJ3Jlc2l6ZS5HZW5lcmljR2FsbGVyeScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cblx0XHRvc0FqYXhCYWNrZW5kICYmIG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmUpO1xuXG5cdFx0c2V0VGltZW91dChTYXBwaGlyZVdpZGdldHMuU2hpZnRDb250YWluZXIuY2hlY2tTY3JvbGwsIDEwMDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgMTUwMCk7XG5cdH0pO1xuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0aWYgKCEhJCgnLlNoaWZ0Q29udGFpbmVyJykubGVuZ3RoKSB7XG5cdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lciAuQWN0aW9uc01lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0fSwgNDAwKTtcblxuXHRcdHNldFRpbWVvdXQoU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLmNoZWNrU2Nyb2xsLCA1MDApO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0JCgnLlNoaWZ0RXhwYW5kYWJsZV9jb250YWluZXIgLkFjdGlvbnNNZW51JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSwgNjAwKTtcblxuXHRcdCQoJy5uYXZpZ2F0aW9uLWNvbnRyb2wtaXRlbScpXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5TaGlmdENhcmRfdGltZUxpbmUnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblxuXHRcdC8vVmVyaWZ5IHRoZSBzY3JvbGwgaWYgdG9vbHRpcCBvcGVuZWRcblx0XHQkKCcuU2hpZnRFeHBhbmRhYmxlX2NvbnRhaW5lcicpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCcudG9vbHRpcHN0ZXItYmFzZScpLmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdCQoJy50b29sdGlwc3Rlci1iYXNlJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3NBamF4QmFja2VuZC5CaW5kQWZ0ZXJBamF4UmVxdWVzdChmdW5jdGlvbigpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5yZWRyYXdTaGlmdFRpbWVsaW5lKCk7XG5cdFx0XHR9LCA0MDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KFNhcHBoaXJlV2lkZ2V0cy5TaGlmdENvbnRhaW5lci5jaGVja1Njcm9sbCwgNTAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLlNoaWZ0Q2FyZF90aW1lTGluZScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdCQoJy5TaGlmdEV4cGFuZGFibGVfY29udGFpbmVyIC5BY3Rpb25zTWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0fSwgNjAwKTtcblxuXHRcdFx0Ly8gU2FwcGhpcmVXaWRnZXRzLlNoaWZ0Q29udGFpbmVyLnJlZHJhd1NoaWZ0VGltZWxpbmU7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwiLyogQ29tcG9uZW50IFNoaWZ0VGFibGUgKi9cblNhcHBoaXJlV2lkZ2V0cy5TaGlmdFRhYmxlID0gd2lkZ2V0SWQgPT4ge1xuXHQkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCAkc2hpZnRUYWJsZSA9ICQoYCMke3dpZGdldElkfWApO1xuXHRcdFx0Y29uc3QgJGhlYWRlckNlbGxMaXN0ID0gJHNoaWZ0VGFibGUuZmluZCgnLlNoaWZ0VGFibGVfX0hlYWRlckxhYmVscyAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRcdGNvbnN0ICRob3VyTGluZSA9ICRzaGlmdFRhYmxlLmZpbmQoJy5Ib3VyTGluZScpO1xuXG5cdFx0XHRjb25zdCBjb2x1bW5MaW5lID0gJGhvdXJMaW5lLmRhdGEoJ2NvbHVtbicpO1xuXHRcdFx0Y29uc3QgbWludXRlc0xpbmUgPSAkaG91ckxpbmUuZGF0YSgnbWludXRlcycpO1xuXG5cdFx0XHRjb25zdCBjZWxsV2lkdGggPSAkaGVhZGVyQ2VsbExpc3QuZXEoMCkud2lkdGgoKTtcblx0XHRcdGNvbnN0IG1pbnV0ZXNQb3NpdGlvbiA9IChjZWxsV2lkdGggLyA2MCkgKiBtaW51dGVzTGluZTtcblxuXHRcdFx0Ly8gSGFuZGxlIGN1cnJlbnQgaG91ciBsaW5lIGhvcml6b250YWwgcG9zaXRpb25pbmdcblx0XHRcdGNvbnN0IGNlbGxQb3NpdGlvbiA9IFtdO1xuXG5cdFx0XHQkaGVhZGVyQ2VsbExpc3QuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcblx0XHRcdFx0Y2VsbFBvc2l0aW9uLnB1c2goJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdCRob3VyTGluZS5jc3MoJ2xlZnQnLCBjZWxsUG9zaXRpb25bY29sdW1uTGluZSAtIDFdICsgbWludXRlc1Bvc2l0aW9uKTtcblx0XHRcdCRob3VyTGluZS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHRcdH0sIDUwMCk7XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkID0gd2lkZ2V0SWQgPT4ge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7d2lkZ2V0SWR9YCk7XG5cdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTW9yZUFjdGlvbnMnKTtcblx0Y29uc3QgaGFzQWN0aW9ucyA9ICRhY3Rpb25zLmxlbmd0aCA+IDA7XG5cblx0aWYgKGhhc0FjdGlvbnMpIHtcblx0XHQkYWN0aW9ucy5vbignY2xpY2snLCBlID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdCQoJy5TaGlmdFRhYmxlQ2FyZCcpLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZC0tc2VsZWN0ZWQnKTtcblx0XHRcdCRjb21wb25lbnQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBvbkNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuXHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygkY29tcG9uZW50KSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjb21wb25lbnQpLmlzKCRjb21wb25lbnQpKSB7XG5cdFx0XHRcdCRjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNoaWZ0VGFibGVDYXJkUHJvZ3Jlc3MgPSBjb25maWcgPT4ge1xuXHRjb25zdCBERUZBVUxUX1BBRERJTkcgPSA4O1xuXHRjb25zdCBERUZBVUxUX0NBUkRfSEVJR0hUID0gNTY7XG5cblx0Y29uc3Qgc2V0VGFibGVDYXJkUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZFByb2dyZXNJRCA9IGNvbmZpZy53aWRnZXRJZDtcblx0XHRjb25zdCBzdGFydENvbHVtbiA9IGNvbmZpZy5zdGFydENvbHVtbjtcblx0XHRjb25zdCBlbmRDb2x1bW4gPSBjb25maWcuZW5kQ29sdW1uO1xuXG5cdFx0Y29uc3QgJGNhcmRQcm9ncmVzcyA9ICQoJyMnICsgY2FyZFByb2dyZXNJRCk7XG5cdFx0Y29uc3QgJHNoaWZ0VGFibGUgPSAkY2FyZFByb2dyZXNzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlJyk7XG5cdFx0Y29uc3QgJHRhYmxlQ2VsbExpc3QgPSAkc2hpZnRUYWJsZS5maW5kKCcuU2hpZnRUYWJsZV9fQ29udGVudCAuU2hpZnRUYWJsZUNlbGwnKTtcblx0XHRjb25zdCAkdGFibGVSb3dDb250ZW50ID0gJGNhcmRQcm9ncmVzcy5jbG9zZXN0KCcuU2hpZnRUYWJsZVJvd19fQ29udGVudCcpO1xuXHRcdGNvbnN0ICR0YWJsZUNhcmQgPSAkdGFibGVSb3dDb250ZW50LmZpbmQoJy5TaGlmdFRhYmxlQ2FyZCcpO1xuXHRcdGNvbnN0ICRjYXJkUHJvZ3Jlc3NMaXN0ID0gJHRhYmxlUm93Q29udGVudC5maW5kKCcuU2hpZnRUYWJsZUNhcmRQcm9ncmVzcycpO1xuXHRcdGNvbnN0ICRwcm9ncmVzc0Jhckxpc3QgPSAkY2FyZFByb2dyZXNzLmZpbmQoJy5Qcm9ncmVzc0JhcldyYXAnKTtcblx0XHRjb25zdCAkYWN0aW9ucyA9ICRjYXJkUHJvZ3Jlc3MuZmluZCgnLk1vcmVBY3Rpb25zJyk7XG5cblx0XHRjb25zdCBjYXJkc1RvdGFsID0gJHRhYmxlQ2FyZC5sZW5ndGg7XG5cdFx0Y29uc3QgdGltZVNsb3RXaWR0aCA9ICR0YWJsZUNlbGxMaXN0WzFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdGNvbnN0IGNvbEZpbGwgPSBwYXJzZUludChlbmRDb2x1bW4pIC0gcGFyc2VJbnQoc3RhcnRDb2x1bW4pICsgMTtcblx0XHRjb25zdCBtaW51dGVWYWx1ZVdpZHRoID0gdGltZVNsb3RXaWR0aCAvIDYwO1xuXHRcdGNvbnN0IGhhc0FjdGlvbnMgPSAkYWN0aW9ucy5sZW5ndGggPiAwO1xuXG5cdFx0bGV0IHRvdGFsTGVmdCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhcnNlSW50KHN0YXJ0Q29sdW1uKTsgaSsrKSB7XG5cdFx0XHR0b3RhbExlZnQgKz0gJHRhYmxlQ2VsbExpc3RbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0fVxuXG5cdFx0bGV0IHJvdW5kV2lkdGggPSBNYXRoLnJvdW5kKCh0aW1lU2xvdFdpZHRoICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcblx0XHRjb25zdCBwYWRkaW5nT2Zmc2V0ID0gREVGQVVMVF9QQURESU5HICogMjtcblx0XHRjb25zdCBuZXdXaWR0aCA9IGNvbEZpbGwgKiByb3VuZFdpZHRoIC0gcGFkZGluZ09mZnNldDtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSAkKCcuUGFnZScpLmhhc0NsYXNzKCdBUicpIHx8ICQoJy5QYWdlJykuaGFzQ2xhc3MoJ0ZBJykgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoJ3dpZHRoJywgYCR7bmV3V2lkdGh9cHhgKTtcblx0XHQkY2FyZFByb2dyZXNzLmNzcygnbWF4LXdpZHRoJywgJ3Vuc2V0Jyk7XG5cdFx0JGNhcmRQcm9ncmVzcy5jc3MoZGlyZWN0aW9uLCBgJHsodG90YWxMZWZ0ICs9IERFRkFVTFRfUEFERElORyl9cHhgKTtcblxuXHRcdGlmIChjYXJkc1RvdGFsID4gMCkge1xuXHRcdFx0bGV0IGNvdW50ID0gMDtcblxuXHRcdFx0JHRhYmxlQ2FyZC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdGNvbnN0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblxuXHRcdFx0XHRpZiAoaXNPdmVybGFwZWQgPT09IHRydWUgJiYgY291bnQgPCAkY2FyZFByb2dyZXNzTGlzdC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgJGNhcmRQcm9ncmVzcy5oZWlnaHQoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb3VudCA9IGNvdW50Kys7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGNhcmRQcm9ncmVzc0xpc3QuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRcdGNvbnN0IGhlbHBlciA9IGhlbHBlck9iaigkdGhpcywgJGNhcmRQcm9ncmVzcywgJGNhcmRQcm9ncmVzc0xpc3QpO1xuXG5cdFx0XHRcdGlmIChoZWxwZXIuaXNPdmVybGFwZWQpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRoaXNbMF0ub2Zmc2V0VG9wICsgMTMwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJHRhYmxlUm93Q29udGVudC5oZWlnaHQoKSAtIERFRkFVTFRfUEFERElORyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSA0ICsgREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdCR0YWJsZVJvd0NvbnRlbnQuaGVpZ2h0KCRjYXJkUHJvZ3Jlc3NMaXN0Lmxhc3QoKS5wb3NpdGlvbigpLnRvcCArIG9mZnNldCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjYXJkUHJvZ3Jlc3NMaXN0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblxuXHRcdFx0XHRjb25zdCBoZWxwZXIgPSBoZWxwZXJPYmooJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KTtcblxuXHRcdFx0XHRpZiAoaGVscGVyLmlzT3ZlcmxhcGVkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gREVGQVVMVF9DQVJEX0hFSUdIVCArIERFRkFVTFRfUEFERElORyAqIDI7XG5cblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLmNzcygndG9wJywgJGNhcmRQcm9ncmVzc1swXS5vZmZzZXRUb3AgKyBvZmZzZXQgKyAncHgnKTtcblx0XHRcdFx0XHRoZWxwZXIuJHNoaWZ0Q2FyZC5oZWlnaHQoaGVscGVyLiRzaGlmdENhcmQuaGVpZ2h0KCkgKyAkdGhpc1swXS5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmICh0aW1lU2xvdFdpZHRoICE9PSAkdGFibGVDZWxsTGlzdFsxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fVxuXHRcdH0sIDUwMCk7XG5cblx0XHRpZiAoaGFzQWN0aW9ucykge1xuXHRcdFx0JGFjdGlvbnMub24oJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0JGNhcmRQcm9ncmVzcy5hZGRDbGFzcygnU2hpZnRUYWJsZUNhcmRQcm9ncmVzcy0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgb25DbGlja091dHNpZGUgPSBlID0+IHtcblx0XHRcdFx0Y29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkUHJvZ3Jlc3MpICYmICEkdGFyZ2V0LnBhcmVudHMoJGNhcmRQcm9ncmVzcykuaXMoJGNhcmRQcm9ncmVzcykpIHtcblx0XHRcdFx0XHQkY2FyZFByb2dyZXNzLnJlbW92ZUNsYXNzKCdTaGlmdFRhYmxlQ2FyZFByb2dyZXNzLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qJHByb2dyZXNzQmFyTGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRjb25zdCBiZWdpbnNsb3QgPSAkKHRoaXMpLmRhdGEoJ2JlZ2luc2xvdCcpO1xuXHRcdFx0Y29uc3QgYmVnaW5taW51dGUgPSAkKHRoaXMpLmRhdGEoJ2JlZ2lubWludXRlJyk7XG5cdFx0XHRjb25zdCBlbmRzbG90ID0gJCh0aGlzKS5kYXRhKCdlbmRzbG90Jyk7XG5cdFx0XHRjb25zdCBlbmRtaW51dGUgPSAkKHRoaXMpLmRhdGEoJ2VuZG1pbnV0ZScpO1xuXHRcdFx0Y29uc3QgYWN0aW9uc1dpZHRoID0gNTY7XG5cblx0XHRcdGNvbnN0IHByb2dyZXNzQmFyTWludXRlcyA9IChlbmRzbG90IC0gYmVnaW5zbG90KSAqIDYwICsgZW5kbWludXRlIC0gYmVnaW5taW51dGU7XG5cdFx0XHRjb25zdCBwcm9ncmVzc2VuZFdpdGhQZXIgPSBwcm9ncmVzc0Jhck1pbnV0ZXMgKiBtaW51dGVWYWx1ZVdpZHRoO1xuXG5cdFx0XHRjb25zdCAkcHJvZ3Jlc3NUb3RhbCA9ICQodGhpcykuZmluZCgnLlByb2dyZXNzQmFyX19hbmltYXRpb24nKTtcblxuXHRcdFx0Ly8kKHRoaXMpLmNzcygnbGVmdCcsICgoYmVnaW5zbG90IC0gMSkgKiA2MCArIGJlZ2lubWludXRlKSAqIG1pbnV0ZVZhbHVlV2lkdGggKyAncHgnKTtcblx0XHRcdCRwcm9ncmVzc1RvdGFsLmNzcygnd2lkdGgnLCBwcm9ncmVzc2VuZFdpdGhQZXIgLSBhY3Rpb25zV2lkdGggKyAncHgnKTtcblx0XHR9KTsqL1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrRm9yT3ZlcmxhcCA9IChlbDEsIGVsMikgPT4ge1xuXHRcdGNvbnN0IGJvdW5kczEgPSBlbDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgYm91bmRzMiA9IGVsMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGNvbnN0IGZpcnN0SXN0TGVmdG1vc3QgPSBib3VuZHMxLmxlZnQgPD0gYm91bmRzMi5sZWZ0O1xuXHRcdGNvbnN0IGxlZnRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMSA6IGJvdW5kczI7XG5cdFx0Y29uc3QgcmlnaHRlc3QgPSBmaXJzdElzdExlZnRtb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHQvLyBSZXBsYWNlID4gdG8gdG8gPj0gaWYgYm9yZGVyIG92ZXJsYXAgc2hvdWxkIGNvdW50XG5cdFx0aWYgKGxlZnRlc3QucmlnaHQgPiByaWdodGVzdC5sZWZ0KSB7XG5cdFx0XHRjb25zdCBmaXJzdElzVG9wbW9zdCA9IGJvdW5kczEudG9wIDw9IGJvdW5kczIudG9wO1xuXHRcdFx0Y29uc3QgdG9wZXN0ID0gZmlyc3RJc1RvcG1vc3QgPyBib3VuZHMxIDogYm91bmRzMjtcblx0XHRcdGNvbnN0IGJvdHRvbWVzdCA9IGZpcnN0SXNUb3Btb3N0ID8gYm91bmRzMiA6IGJvdW5kczE7XG5cblx0XHRcdC8vIFJlcGxhY2UgPiB0byA+PSBpZiBib3JkZXIgc2hvdWxkIGNvdW50XG5cdFx0XHRyZXR1cm4gdG9wZXN0LmJvdHRvbSA+IGJvdHRvbWVzdC50b3A7XG5cdFx0fSBlbHNlIHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBoZWxwZXJPYmogPSAoJHRoaXMsICRjYXJkUHJvZ3Jlc3MsICRjYXJkUHJvZ3Jlc3NMaXN0KSA9PiB7XG5cdFx0Y29uc3QgJHNoaWZ0Q2FyZCA9ICR0aGlzLmNsb3Nlc3QoJy5TaGlmdFRhYmxlUm93X19Db250ZW50Jyk7XG5cdFx0bGV0IGlzT3ZlcmxhcGVkID0gY2hlY2tGb3JPdmVybGFwKCRjYXJkUHJvZ3Jlc3NbMF0sICR0aGlzWzBdKTtcblx0XHRjb25zdCBjcmVhdGVkSWQgPSAkY2FyZFByb2dyZXNzLmF0dHIoJ2lkJyk7XG5cdFx0Y29uc3QgbG9vcGVkSWQgPSAkdGhpcy5hdHRyKCdpZCcpO1xuXHRcdGNvbnN0ICRmaXJzdFNsb3RDcmVhdGVkID0gJGNhcmRQcm9ncmVzc0xpc3RbMF07XG5cblx0XHRpc092ZXJsYXBlZCA9IGlzT3ZlcmxhcGVkID09PSB0cnVlICYmIGNyZWF0ZWRJZCAhPSBsb29wZWRJZCAmJiBjcmVhdGVkSWQgIT0gJGZpcnN0U2xvdENyZWF0ZWQuaWQ7XG5cblx0XHRyZXR1cm4geyAkc2hpZnRDYXJkLCBjcmVhdGVkSWQsIGxvb3BlZElkLCAkZmlyc3RTbG90Q3JlYXRlZCwgaXNPdmVybGFwZWQgfTtcblx0fTtcblxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdGlmICh3aW5kb3dbY29uZmlnLndpZGdldElkXSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHdpbmRvd1tjb25maWcud2lkZ2V0SWRdLnJlc2l6ZWRGaW5pc2hlZCk7XG5cdFx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXS5yZXNpemVkRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUYWJsZUNhcmRQcm9ncmVzcyhjb25maWcpO1xuXHRcdFx0fSwgMjUwKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaGlmdFRhYmxlQ2FyZEhvdmVyICovXG5TYXBwaGlyZVdpZGdldHMuU2hpZnRUYWJsZUNhcmRIb3ZlciA9IHdpZGdldElkID0+IHtcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgJGNhcmQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkY2FyZENvbnRlbnQgPSAkY2FyZC5maW5kKCcuU2hpZnRUYWJsZUNhcmRIb3Zlcl9fQ29udGVudCcpO1xuXG5cdFx0JGNhcmRDb250ZW50Lm9uKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0JGNhcmQuYWRkQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmICghZS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCRjYXJkKSAmJiAhJHRhcmdldC5wYXJlbnRzKCRjYXJkKS5pcygkY2FyZCkpIHtcblx0XHRcdFx0JGNhcmQucmVtb3ZlQ2xhc3MoJ1NoaWZ0VGFibGVDYXJkSG92ZXItLXNlbGVjdGVkJyk7XG5cblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufTtcbiIsIi8qIENvbXBvbmVudCBTaWRlTWVudVN0cnVjdHVyZSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNsYXNzIFNpZGVNZW51IHtcblx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5vbkNvbXBvbmVudEluaXQoKTtcblx0XHR9XG5cblx0XHRzZXRNYWluTWVudVdpZHRoKCkge1xuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkc2lkZUJhcklmcmFtZSA9ICQoJy5MYXlvdXRCYXNlLWlmcmFtZXNpZGViYXIubm90RXhwYW5kYWJsZScpO1xuXG5cdFx0XHRcdGlmICgkc2lkZUJhcklmcmFtZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCAkbWFpbk1lbnUgPSAkKCcuTGF5b3V0QmFzZS1NYWluTWVudScpO1xuXHRcdFx0XHRcdCRtYWluTWVudS5jc3Moe1xuXHRcdFx0XHRcdFx0d2lkdGg6ICdjYWxjKDEwMCUgLSAyNjJweCknLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRvcGVuQ2xvc2VNZW51KHRvT3Blbikge1xuXHRcdFx0aWYgKHRvT3Blbikge1xuXHRcdFx0XHR0aGlzLiRjb21wb25lbnQuYWRkQ2xhc3MoJ1NpZGVNZW51LS1vcGVuJyk7XG5cblx0XHRcdFx0JCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhcicpLmNzcyh7XG5cdFx0XHRcdFx0ekluZGV4OiAwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGNvbXBvbmVudC5yZW1vdmVDbGFzcygnU2lkZU1lbnUtLW9wZW4nKTtcblxuXHRcdFx0XHQkKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyJykuY3NzKHtcblx0XHRcdFx0XHR6SW5kZXg6IDcwLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR3aW5kb3dDbGljaygkY29tcG9uZW50KSB7XG5cdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0Lm9mZignY2xpY2suU2lkZU1lbnVTdHJ1Y3R1cmUnKVxuXHRcdFx0XHQub24oJ2NsaWNrLlNpZGVNZW51U3RydWN0dXJlJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGlzTWVudUl0ZW0gPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50ICYmICQoZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudCkuaGFzQ2xhc3MoJ01lbnVJdGVtJyk7XG5cblx0XHRcdFx0XHRpZiAoIWlzTWVudUl0ZW0pIHtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuXG5cdFx0XHRcdFx0XHQkKHdpbmRvdykub2ZmKCdjbGljay5TaWRlTWVudVN0cnVjdHVyZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0b25Db21wb25lbnRJbml0KCkge1xuXHRcdFx0dGhpcy5zZXRNYWluTWVudVdpZHRoKCk7XG5cblx0XHRcdHRoaXMuJGNvbXBvbmVudCA9ICQoYCMke3RoaXMub3B0aW9ucy53aWRnZXRJZH1gKTtcblx0XHRcdHRoaXMuJHRyaWdnZXIgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UcmlnZ2VyJyk7XG5cdFx0XHR0aGlzLiRzaGllbGQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19TaGllbGQnKTtcblx0XHRcdHRoaXMuJGNsb3NlQnV0dG9uID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fTWVudUNsb3NlJyk7XG5cdFx0XHR0aGlzLiR0YWJJdGVtID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgLk1lbnVJdGVtJyk7XG5cdFx0XHR0aGlzLiRtZW51SXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fX0l0ZW1UaXRsZScpO1xuXHRcdFx0dGhpcy4kc3ViSXRlbSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcyAuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdHRoaXMuJGRlcGFydG1lbnQgPSB0aGlzLiRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzIC5EZXBhcnRtZW50TmFtZScpO1xuXG5cdFx0XHQvL3RoaXMuJHRyaWdnZXIuaGlkZSgpO1xuXHRcdFx0dGhpcy4kZGVwYXJ0bWVudC5oaWRlKCk7XG5cblx0XHRcdHRoaXMuJGlmcmFtZUNvbnRhaW5lciA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCcuaWZyYW1lQ29udGFpbmVyJyk7XG5cdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGRzLXJpbmcgT0lcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PicpO1xuXHRcdFx0dGhpcy4kaWZyYW1lQ29udGFpbmVyLmZpbmQoJ2lmcmFtZScpLmxvYWQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiRpZnJhbWVDb250YWluZXIuZmluZCgnLmxkcy1yaW5nJykuZmFkZU91dCgpO1xuXG5cdFx0XHRcdGlmICghdGhpcy4kY29tcG9uZW50Lmhhc0NsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJykpIHtcblx0XHRcdFx0XHQvL3RoaXMuJHRyaWdnZXIuc2hvdygpO1xuXHRcdFx0XHRcdHRoaXMuJGRlcGFydG1lbnQuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kdHJpZ2dlci5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5DbG9zZU1lbnUodHJ1ZSkpO1xuXHRcdFx0dGhpcy4kc2hpZWxkLm9uKCdjbGljaycsICgpID0+IHRoaXMub3BlbkNsb3NlTWVudShmYWxzZSkpO1xuXHRcdFx0dGhpcy4kY2xvc2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcGVuQ2xvc2VNZW51KGZhbHNlKSk7XG5cblx0XHRcdHRoaXMuJHRhYkl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kbWVudUl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0ljb24gPSBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaWNvbiBpY29uLWNoYW5nZWRvd24nO1xuXHRcdFx0XHRpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmICFpc0ljb24pIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKTtcblx0XHRcdFx0Y29uc3QgJHN1Ykl0ZW1zID0gJHRhcmdldC5maW5kKCcuTWVudUl0ZW1fc3ViSXRlbXMnKTtcblx0XHRcdFx0Y29uc3QgJGxpbmsgPSAkdGFyZ2V0LmZpbmQoJy5NZW51SXRlbV9sYWJlbCBhJyk7XG5cblx0XHRcdFx0aWYgKCRsaW5rLmxlbmd0aCkgJGxpbmsuZ2V0KDApLmNsaWNrKCk7XG5cblx0XHRcdFx0aWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHRcdFx0JHRhcmdldC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JHN1Ykl0ZW1zLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLmFjdGl2ZScpXG5cdFx0XHRcdFx0XHQubm90KCR0YXJnZXQpXG5cdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRcdFx0dGhpcy4kY29tcG9uZW50XG5cdFx0XHRcdFx0XHQuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMgLnNob3cnKVxuXHRcdFx0XHRcdFx0Lm5vdCgkdGFyZ2V0KVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cblx0XHRcdFx0XHQkdGFyZ2V0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkc3ViSXRlbXMudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLiRjb21wb25lbnQuaGFzQ2xhc3MoJ1NpZGVNZW51LS10YWJzVGhlbWUnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy53aW5kb3dDbGljayh0aGlzLiRjb21wb25lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHN1Ykl0ZW0ub24oJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpO1xuXG5cdFx0XHR0aGlzLiRjb21wb25lbnRcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fVGFiSXRlbXMgPiBkaXY6ZW1wdHknKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCByZXNpemVUYWJzID0gKCRjb21wb25lbnQsICRtZW51VGFicywgaXNSZWN1cnNpdmUpID0+IHtcblx0XHRjb25zdCAkbWVudVRyaWdnZXIgPSAkY29tcG9uZW50LmZpbmQoJy5TaWRlTWVudV9fVHJpZ2dlcicpO1xuXHRcdGNvbnN0IGhlYWRlcldpZHRoID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0hlYWRlcicpLm91dGVyV2lkdGgoKTtcblx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0Y29uc3QgdGFic1dpZHRoID0gJG1lbnVJdGVtcy5sZW5ndGggPyAkbWVudUl0ZW1zLm91dGVyV2lkdGgoKSA6ICRtZW51VGFicy5vdXRlcldpZHRoKCk7XG5cblx0XHRjb25zdCBmaXhlZFZhbHVlID0gJCh3aW5kb3cucGFyZW50KS53aWR0aCgpIDwgMTAyNCA/IDE4MCA6IDE5Njtcblx0XHRsZXQgaGFzSXRlbVRvUmVtb3ZlID0gdHJ1ZTtcblxuXHRcdGlmICh0YWJzV2lkdGggPiAwICYmIHRhYnNXaWR0aCArIGZpeGVkVmFsdWUgPiBoZWFkZXJXaWR0aCAmJiBoYXNJdGVtVG9SZW1vdmUpIHtcblx0XHRcdGNvbnN0ICRtb3JlT3B0aW9ucyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50Jyk7XG5cdFx0XHRjb25zdCAkbGFzdEl0ZW0gPSAkbWVudVRhYnNcblx0XHRcdFx0LmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpXG5cdFx0XHRcdC5sYXN0KClcblx0XHRcdFx0LmRldGFjaCgpO1xuXG5cdFx0XHRpZiAoISRtb3JlT3B0aW9ucy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmxlbmd0aCkge1xuXHRcdFx0XHQkKCc8ZGl2IGNsYXNzPVwiU2lkZU1lbnVfX01lbnVJdGVtc1wiPjwvZGl2PicpLmFwcGVuZFRvKCRtb3JlT3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRtZW51SXRlbXMgPSAkbW9yZU9wdGlvbnMuZmluZCgnLlNpZGVNZW51X19NZW51SXRlbXMnKTtcblx0XHRcdCRsYXN0SXRlbS5wcmVwZW5kVG8oJG1lbnVJdGVtcyk7XG5cblx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG5cdFx0XHRoYXNJdGVtVG9SZW1vdmUgPSAhISRsYXN0SXRlbS5sZW5ndGg7XG5cblx0XHRcdHJlc2l6ZVRhYnMoJGNvbXBvbmVudCwgJG1lbnVUYWJzLCAhISRsYXN0SXRlbS5sZW5ndGgpO1xuXHRcdH0gZWxzZSBpZiAoIWlzUmVjdXJzaXZlKSB7XG5cdFx0XHRjb25zdCAkbWVudUl0ZW1zID0gJG1lbnVUYWJzLmZpbmQoJy5TaWRlTWVudV9fTWVudUl0ZW1zJyk7XG5cdFx0XHRsZXQgJGZpcnN0SXRlbSA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19Db250ZW50IC5TaWRlTWVudV9fTWVudUl0ZW1zIC5NZW51SXRlbScpLmZpcnN0KCk7XG5cblx0XHRcdGNvbnN0IG5ld0xpbmtXaWR0aCA9IDE0MCAqIDEuMTYgKyAxNjsgLy8gRm9udC1zaXplICsgcGFkZGluZyBiZXR3ZWVuIGl0ZW1zIChnYXApXG5cdFx0XHRjb25zdCBuZXdJdGVtc1dpZHRoID0gbmV3TGlua1dpZHRoICsgJG1lbnVJdGVtcy5vdXRlcldpZHRoKCk7XG5cblx0XHRcdGlmIChuZXdJdGVtc1dpZHRoICsgZml4ZWRWYWx1ZSA8IGhlYWRlcldpZHRoKSB7XG5cdFx0XHRcdCRmaXJzdEl0ZW0gPSAkZmlyc3RJdGVtLmRldGFjaCgpO1xuXHRcdFx0XHQkZmlyc3RJdGVtLmFwcGVuZFRvKCRtZW51VGFicy5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpKTtcblxuXHRcdFx0XHRpZiAoJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX0NvbnRlbnQgLlNpZGVNZW51X19NZW51SXRlbXMgLk1lbnVJdGVtJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRtZW51VHJpZ2dlci5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3Qgc2V0VGFic1RoZW1lID0gKCkgPT4ge1xuXHRcdCQodG9wLmRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5TaWRlTWVudScsIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQpLmFkZENsYXNzKCdTaWRlTWVudS0tdGFic1RoZW1lJyk7XG5cblx0XHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKCcuU2lkZU1lbnUnLCB3aW5kb3cucGFyZW50LmRvY3VtZW50KTtcblx0XHRcdGNvbnN0ICRtZW51VGFicyA9ICRjb21wb25lbnQuZmluZCgnLlNpZGVNZW51X19UYWJzJyk7XG5cblx0XHRcdCRtZW51VGFicy5maW5kKCc+IGRpdjplbXB0eScpLmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJGl0ZW1zID0gJGNvbXBvbmVudC5maW5kKCcuU2lkZU1lbnVfX01lbnVJdGVtcycpLmRldGFjaCgpO1xuXHRcdFx0JGl0ZW1zLmFwcGVuZFRvKCRtZW51VGFicyk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNpemVUYWJzKCRjb21wb25lbnQsICRtZW51VGFicywgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0JCh3aW5kb3cucGFyZW50KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cucmVzaXplZEZpbmlzaGVkKTtcblx0XHRcdFx0d2luZG93LnJlc2l6ZWRGaW5pc2hlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVzaXplVGFicygkY29tcG9uZW50LCAkbWVudVRhYnMpO1xuXHRcdFx0XHR9LCAyNTApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlID0gY29uZmlnID0+ICh3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTaWRlTWVudShjb25maWcpKTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU2lkZU1lbnUgPSB7IGNyZWF0ZSwgc2V0VGFic1RoZW1lIH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBJU2lkZWJhciAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cykge1xuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy53aWRnZXRJZF0gPSBuZXcgU2lkZWJhcihjb25maWcpO1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5TaWRlYmFyLndpZGdldElkID0gY29uZmlnLndpZGdldElkO1xuXHR9O1xuXG5cdHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvd1tTYXBwaGlyZVdpZGdldHMuU2lkZWJhci53aWRnZXRJZF0uY2xvc2UoKTtcblx0fTtcblxuXHR2YXIgU2lkZWJhciA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5pc0V4cGFuZGFibGUgPSBjb25maWcuaXNFeHBhbmRhYmxlO1xuXHRcdHRoaXMuJHdpZGdldCA9ICQoJyMnICsgY29uZmlnLndpZGdldElkKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhcicpO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51ID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1tZW51Jyk7XG5cdFx0dGhpcy4kc2lkZWJhck1lbnVJdGVtID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TaWRlYmFyTWVudUl0ZW0nKTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5JU2lkZWJhci1zaGllbGQnKTtcblx0XHR0aGlzLiRzaWRlYmFyQ29udGVudCA9IHRoaXMuJHdpZGdldC5maW5kKCcuSVNpZGViYXItY29udGVudCcpO1xuXHRcdHRoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJz4gZGl2JykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdQSCcpICYmICQodGhpcykudGV4dCgpID09PSAnJykge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XG5cdFx0aWYgKCF0aGlzLmlzRXhwYW5kYWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuTWVudUl0ZW0oMCk7XG5cdFx0fVxuXHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIWNvbmZpZy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JChgLiR7Y29uZmlnLnNlbGVjdGVkVGFifWApLmNsaWNrKCk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLkxheW91dEJhc2UtaWZyYW1lc2lkZWJhciAubGRzLXJpbmcnKS5mYWRlT3V0KCk7XG5cblx0XHRcdGlmICghdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdFx0JCgnaW5wdXRbdHlwZT1cInRleHRcIl06dmlzaWJsZScpXG5cdFx0XHRcdFx0LmVxKDApXG5cdFx0XHRcdFx0LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykudW5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LnBhcmVudC4kKCcuTGF5b3V0QmFzZS1pZnJhbWVzaWRlYmFyIC5sZHMtcmluZycpLmZhZGVPdXQoKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5hdHRhY2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuJHNpZGViYXJNZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0aWYgKCFfdGhpcy4kc2lkZWJhci5oYXNDbGFzcygnb3BlbicpKSB7XG5cdFx0XHRcdF90aGlzLm9wZW5NZW51SXRlbSgwKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyTWVudUl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZWN0ZWRQb3NpdGlvbiA9ICQodGhpcykuaW5kZXgoKTtcblx0XHRcdF90aGlzLm9wZW5NZW51SXRlbShzZWxlY3RlZFBvc2l0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyU2hpZWxkLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuY2xvc2UoKTtcblx0XHR9KTtcblx0XHR0aGlzLiRzaWRlYmFyLm9uKCdjbGljaycsICcuU2VhcmNoU2lkZUJhckZpZWxkcyAuQnV0dG9uR3JvdXBfYnV0dG9uOmZpcnN0LWNoaWxkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy4kc2lkZWJhclxuXHRcdFx0XHQuZmluZCgnLkZpZWxkc1NsaWRlcicpXG5cdFx0XHRcdC5hZGRDbGFzcygnVGFiMScpXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnVGFiMicpO1xuXHRcdFx0X3RoaXMuc2V0RmllbGRGb2N1cyhfdGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuJHNpZGViYXIub24oJ2NsaWNrJywgJy5TZWFyY2hTaWRlQmFyRmllbGRzIC5CdXR0b25Hcm91cF9idXR0b246bGFzdC1jaGlsZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHNpZGViYXJcblx0XHRcdFx0LmZpbmQoJy5GaWVsZHNTbGlkZXInKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1RhYjInKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ1RhYjEnKTtcblx0XHRcdF90aGlzLnNldEZpZWxkRm9jdXMoX3RoaXMuJHNpZGViYXJDb250ZW50LmZpbmQoJy5UZXh0SW5wdXQ6dmlzaWJsZScpLmVxKDApKTtcblx0XHR9KTtcblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5vcGVuTWVudUl0ZW0gPSBmdW5jdGlvbihzZWxlY3RlZFBvc2l0aW9uKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR0aGlzLiRzaWRlYmFyXG5cdFx0XHQuZmluZCgnLlNpZGViYXJNZW51SXRlbScpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHQuZXEoc2VsZWN0ZWRQb3NpdGlvbilcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0dGhpcy4kc2lkZWJhclxuXHRcdFx0LmZpbmQoJy5JU2lkZWJhci1jb250ZW50ID4gLklTaWRlYmFyLWNvbnRlbnQtcGFuZWwnKVxuXHRcdFx0LmhpZGUoKVxuXHRcdFx0LmVxKHNlbGVjdGVkUG9zaXRpb24pXG5cdFx0XHQuc2hvdygpO1xuXHRcdHRoaXMuJHNpZGViYXIuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGggJiYgdGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2Uub3BlblNpZGViYXJJZnJhbWUoMCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLiRzaWRlYmFyQ29udGVudC5maW5kKCcuVGV4dElucHV0OnZpc2libGUnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNldEZpZWxkRm9jdXModGhpcy4kc2lkZWJhckNvbnRlbnQuZmluZCgnLlRleHRJbnB1dDp2aXNpYmxlJykuZXEoMCkpO1xuXHRcdH1cblx0XHRpZiAod2luZG93LnBhcmVudC4kKCcuc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKS5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuJCgnLnNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKS5zZWxlY3QyKCdjbG9zZScpO1xuXHRcdH1cblx0fTtcblxuXHRTaWRlYmFyLnByb3RvdHlwZS5zZXRGaWVsZEZvY3VzID0gZnVuY3Rpb24oJGlucHV0KSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkaW5wdXQuY2xpY2soKS5zZWxlY3QoKTtcblx0XHR9LCAyNTApO1xuXHR9O1xuXG5cdFNpZGViYXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRpZiAod2luZG93LnBhcmVudC5sZW5ndGgpIHtcblx0XHRcdHdpbmRvdy5wYXJlbnQuU2FwcGhpcmVXaWRnZXRzLkxheW91dEJhc2UuY2xvc2VTaWRlYmFySWZyYW1lKDApO1xuXHRcdH1cblx0XHRpZiAodGhpcy5pc0V4cGFuZGFibGUpIHtcblx0XHRcdHRoaXMuJHNpZGViYXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLlNpZGViYXJNZW51SXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuJHNpZGViYXIuZmluZCgnLklTaWRlYmFyLWNvbnRlbnQgPiAuSVNpZGViYXItY29udGVudC1wYW5lbCcpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlNpZGViYXIgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0Y2xvc2U6IGNsb3NlLFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiU2FwcGhpcmVXaWRnZXRzLlNtYWxsQm94U2VsZWN0YWJsZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfWApO1xuXG5cdGlmIChjb25maWcuc2VsZWN0T25DbGljaykge1xuXHRcdCRjb21wb25lbnQuY2xpY2soKCkgPT4ge1xuXHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuU21hbGxCb3hMaXN0IC5TbWFsbEJveFNlbGVjdGFibGUnKS5ub3QoJGNvbXBvbmVudCk7XG5cblx0XHRcdCRsaXN0LnJlbW92ZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0XHQkY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdTbWFsbEJveFNlbGVjdGFibGUtLXNlbGVjdGVkJyk7XG5cdFx0fSk7XG5cdH1cbn07XG4iLCIvKiBDb21wb25lbnQgU3Bpbm5lckhvcml6b250YWwgKi9cblNhcHBoaXJlV2lkZ2V0cy5TcGlubmVySG9yaXpvbnRhbCA9IHtcblx0Y3JlYXRlOiBjb25maWcgPT4ge1xuXHRcdGNvbnN0ICRpbnB1dCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gaW5wdXRgKTtcblx0XHRjb25zdCAkcGx1cyA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gYS5QbHVzYCk7XG5cdFx0Y29uc3QgJG1pbnVzID0gJChgIyR7Y29uZmlnLndpZGdldElkfSBhLk1pbnVzYCk7XG5cblx0XHRsZXQgdmFsID0gJGlucHV0LnZhbCgpO1xuXG5cdFx0aWYgKHZhbCA8PSArY29uZmlnLm1pblZhbHVlKSB7XG5cdFx0XHQkbWludXMuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2UgaWYgKHZhbCA+PSArY29uZmlnLm1heFZhbHVlKSB7XG5cdFx0XHQkcGx1cy5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblxuXHRcdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YWwgPSBNYXRoLmFicyhwYXJzZUludCh0aGlzLnZhbHVlLCAxMCkgfHwgK2NvbmZpZy5taW5WYWx1ZSk7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsID4gK2NvbmZpZy5tYXhWYWx1ZSA/ICtjb25maWcubWF4VmFsdWUgOiB2YWwgPCArY29uZmlnLm1pblZhbHVlID8gK2NvbmZpZy5taW5WYWx1ZSA6IHZhbDtcblxuXHRcdFx0aWYgKHZhbCA8PSArY29uZmlnLm1pblZhbHVlKSAkbWludXMuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdGVsc2UgJG1pbnVzLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cblx0XHRcdGlmICh2YWwgPj0gK2NvbmZpZy5tYXhWYWx1ZSkgJHBsdXMuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdGVsc2UgJHBsdXMucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHR9KTtcblx0fSxcblx0aW5jcmVtZW50OiBmdW5jdGlvbihlbGVtZW50SWQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlKSB7XG5cdFx0dmFyIF9lbGVtZW50ID0gJChlbGVtZW50SWQpXG5cdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpXG5cdFx0XHQuZmlyc3QoKTtcblx0XHRpZiAoX2VsZW1lbnQudmFsKCkgPT0gdW5kZWZpbmVkIHx8IF9lbGVtZW50LnZhbCgpID09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpKSkge1xuXHRcdFx0X2VsZW1lbnQudmFsKG1pblZhbHVlKTtcblx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcblx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8IG1heFZhbHVlKSB7XG5cdFx0XHRcdF9lbGVtZW50LnZhbChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSArIDEpO1xuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XG5cdFx0XHRcdFx0X2VsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdFx0LmZpbmQoJ2EuTWludXMnKVxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID49IG1heFZhbHVlKSB7XG5cdFx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHRcdC5maW5kKCdhLlBsdXMnKVxuXHRcdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0ZGVjcmVtZW50OiBmdW5jdGlvbihlbGVtZW50SWQsIG1pblZhbHVlLCB0cmlnZ2VyT25DaGFuZ2UpIHtcblx0XHR2YXIgX2VsZW1lbnQgPSAkKGVsZW1lbnRJZClcblx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcblx0XHRcdC5maXJzdCgpO1xuXHRcdGlmIChfZWxlbWVudC52YWwoKSA9PSB1bmRlZmluZWQgfHwgX2VsZW1lbnQudmFsKCkgPT0gJycgfHwgaXNOYU4ocGFyc2VGbG9hdChfZWxlbWVudC52YWwoKSkpKSB7XG5cdFx0XHRfZWxlbWVudC52YWwobWluVmFsdWUpO1xuXHRcdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkge1xuXHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpID4gbWluVmFsdWUpIHtcblx0XHRcdFx0X2VsZW1lbnQudmFsKHBhcnNlRmxvYXQoX2VsZW1lbnQudmFsKCkpIC0gMSk7XG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcblx0XHRcdFx0XHRfZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0XHQuZmluZCgnYS5QbHVzJylcblx0XHRcdFx0XHQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYXJzZUZsb2F0KF9lbGVtZW50LnZhbCgpKSA8PSBtaW5WYWx1ZSkge1xuXHRcdFx0XHQkKGVsZW1lbnRJZClcblx0XHRcdFx0XHQuZmluZCgnYS5NaW51cycpXG5cdFx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxufTtcbiIsIi8qIENvbXBvbmVudCBTcGlubmVyVmVydGljYWwgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCAkbWludXNWZXJ0aWNhbCA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH1gKS5maW5kKCcuTWludXNWZXJ0aWNhbCcpO1xuXHRcdFx0Y29uc3QgJGlucHV0U3Bpbm5lciA9ICQoYCMke2NvbmZpZy53aWRnZXRJZH0gLlNwaW5uZXJJbnB1dFZlcnRpY2FsIGlucHV0YCk7XG5cblx0XHRcdCRpbnB1dFNwaW5uZXIub24oJ2JsdXIga2V5dXAgaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50SW5wdXRWYWx1ZSA9ICRpbnB1dFNwaW5uZXIudmFsKCk7XG5cblx0XHRcdFx0aWYgKGNvbmZpZy5udW1iZXJMaXN0ICYmIGV2ZW50LnR5cGUgPT09ICdibHVyJykge1xuXHRcdFx0XHRcdGNvbnN0IGlucHV0VmFsdWVJbnQgPSBwYXJzZUludChjdXJyZW50SW5wdXRWYWx1ZSk7XG5cdFx0XHRcdFx0Y29uc3QgYXJyYXlUb1NwaW4gPSBjb25maWcubnVtYmVyTGlzdDtcblx0XHRcdFx0XHRjb25zdCAkZXJyb3JNZXNzYWdlID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuU3Bpbm5lckVycm9yTWVzc2FnZWApO1xuXG5cdFx0XHRcdFx0JGVycm9yTWVzc2FnZS5jc3MoJ2Rpc3BsYXknLCBhcnJheVRvU3Bpbi5pbmRleE9mKGlucHV0VmFsdWVJbnQpID09PSAtMSA/ICdibG9jaycgOiAnbm9uZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRJbnB1dFZhbHVlIDwgY29uZmlnLm1pblZhbHVlKSAkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHRcdGVsc2UgJG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICgkaW5wdXRTcGlubmVyLnZhbCgpIDw9IGNvbmZpZy5taW5WYWx1ZSkge1xuXHRcdFx0XHQkbWludXNWZXJ0aWNhbC5hZGRDbGFzcygnRGlzYWJsZWRTcGluJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcubnVtYmVyTGlzdCAmJiAkaW5wdXRTcGlubmVyLnZhbCgpID09PSAnJykge1xuXHRcdFx0XHRsZXQgY3VycmVudE51bWJlciA9IDA7XG5cdFx0XHRcdGNvbnN0IGFycmF5VG9TcGluID0gY29uZmlnLm51bWJlckxpc3Quc3BsaXQoJywnKTtcblxuXHRcdFx0XHQkaW5wdXRTcGlubmVyLnZhbChhcnJheVRvU3BpbltjdXJyZW50TnVtYmVyXSk7XG5cdFx0XHRcdCRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy5pc0N1cnNvck9uRm9jdXMpIHtcblx0XHRcdFx0JCgnYm9keScpLm9uKCdmb2N1cycsIGAjJHtjb25maWcuaW5wdXRJRH0gaW5wdXRgLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dGhhdC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0dmFyIHZhbCA9IHRoYXQudmFsdWU7XG5cdFx0XHRcdFx0XHR0aGF0LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0XHR0aGF0LnZhbHVlID0gdmFsO1xuXHRcdFx0XHRcdH0sIDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy5pc0lucHV0RW1wdHkpIHtcblx0XHRcdFx0JGlucHV0U3Bpbm5lci5hdHRyKCd2YWx1ZScsICcnKTtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGluY3JlbWVudCA9IChlbGVtZW50SWQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCwgbGlzdFRvc3BpbiA9IFtdKSA9PiB7XG5cdFx0Y29uc3QgJHNwaW5uZXIgPSAkKGVsZW1lbnRJZCk7XG5cdFx0bGV0ICRpbnB1dCA9ICRzcGlubmVyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuZmlyc3QoKTtcblxuXHRcdHZhciBmb3JjZUludGVnZXIgPSAkKGVsZW1lbnRJZCkuZGF0YSgnZm9yY2VpbnRlZ2VyJykgPT09ICdUcnVlJyA/IHRydWUgOiBmYWxzZTtcblx0XHR2YXIgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpO1xuXHRcdHZhciBpbmNyZW1lbnRVbml0ID0gMTtcblx0XHR2YXIgaXNEZWNpbWFscyA9IGN1cnJlbnRWYWx1ZSAlIDEgIT0gMDtcblx0XHR2YXIgYXJyYXl0b3NwaW4gPSBsaXN0VG9zcGluO1xuXG5cdFx0Y29uc3QgJG1pbnVzVmVydGljYWwgPSAkKGVsZW1lbnRJZCkuZmluZCgnLk1pbnVzVmVydGljYWwnKTtcblx0XHRjb25zdCAkcGx1c1ZlcnRpY2FsID0gJChlbGVtZW50SWQpLmZpbmQoJy5QbHVzVmVydGljYWwnKTtcblxuXHRcdCRtaW51c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblxuXHRcdGlmIChhcnJheXRvc3Bpbi5sZW5ndGgpIHtcblx0XHRcdHZhciBjdXJyZW50UG9zaXRpb24gPSBhcnJheXRvc3Bpbi5pbmRleE9mKHBhcnNlSW50KCRpbnB1dC52YWwoKSkpO1xuXHRcdFx0dmFyIG1heGltdW1Ub1NwaW4gPSBhcnJheXRvc3Bpbi5sYXN0SW5kZXhPZihhcnJheXRvc3Bpbi5zbGljZSgtMSlbMF0pO1xuXG5cdFx0XHQkcGx1c1ZlcnRpY2FsLnJlbW92ZUNsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblxuXHRcdFx0aWYgKG1heGltdW1Ub1NwaW4gLSAxID09PSBjdXJyZW50UG9zaXRpb24pIHtcblx0XHRcdFx0Y3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgMTtcblx0XHRcdFx0JGlucHV0LnZhbChhcnJheXRvc3BpbltjdXJyZW50UG9zaXRpb25dKTtcblxuXHRcdFx0XHRpZiAodHJpZ2dlck9uQ2hhbmdlKSAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRcdGlmICh0cmlnZ2VyT25JbnB1dCkgJGlucHV0LnRyaWdnZXIoJ2lucHV0Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKG1heGltdW1Ub1NwaW4gPT09IGN1cnJlbnRQb3NpdGlvbikge1xuXHRcdFx0XHRjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gJSBtYXhpbXVtVG9TcGluO1xuXHRcdFx0XHQkaW5wdXQudmFsKGFycmF5dG9zcGluW2N1cnJlbnRQb3NpdGlvbl0pO1xuXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IChjdXJyZW50UG9zaXRpb24gKyAxKSAlIG1heGltdW1Ub1NwaW47XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3VycmVudFBvc2l0aW9uID09PSBtYXhpbXVtVG9TcGluKSAkcGx1c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblx0XHRcdGlmIChjdXJyZW50UG9zaXRpb24gPT09IDApICRtaW51c1ZlcnRpY2FsLmFkZENsYXNzKCdEaXNhYmxlZFNwaW4nKTtcblxuXHRcdFx0JHNwaW5uZXIuZmluZCgnLlNwaW5uZXJFcnJvck1lc3NhZ2UnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpIDwgbWluVmFsdWUpIHtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwuYWRkQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQ2xhc3MoJ0Rpc2FibGVkU3BpbicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWZvcmNlSW50ZWdlciAmJiBpc0RlY2ltYWxzKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xuXG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID09PSB1bmRlZmluZWQgfHwgY3VycmVudFZhbHVlID09PSAnJyB8fCBpc05hTihwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkpKSB7XG5cdFx0XHRcdCRpbnB1dC52YWwobWluVmFsdWUpO1xuXG5cdFx0XHRcdHRyaWdnZXJFdmVudHMoJGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPCBtYXhWYWx1ZSkge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IDAgJiYgIWZvcmNlSW50ZWdlcikgaW5jcmVtZW50VW5pdCA9IHBhcnNlRmxvYXQoMC4xKTtcblxuXHRcdFx0XHRcdCRpbnB1dC52YWwocGFyc2VGbG9hdCgoY3VycmVudFZhbHVlICsgaW5jcmVtZW50VW5pdCkudG9GaXhlZCgxKSkpO1xuXG5cdFx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkcGx1c1ZlcnRpY2FsLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2hlY2tEaXNhYmxlZFN0YXR1cyhlbGVtZW50SWQsIHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKSwgbWluVmFsdWUsIG1heFZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgZGVjcmVtZW50ID0gKGVsZW1lbnRJZCwgbWluVmFsdWUsIG1heFZhbHVlLCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0LCBsaXN0VG9zcGluID0gW10pID0+IHtcblx0XHRjb25zdCAkc3Bpbm5lciA9ICQoZWxlbWVudElkKTtcblx0XHRjb25zdCAkaW5wdXQgPSAkc3Bpbm5lci5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmZpcnN0KCk7XG5cblx0XHRsZXQgZm9yY2VJbnRlZ2VyID0gJChlbGVtZW50SWQpLmRhdGEoJ2ZvcmNlaW50ZWdlcicpID09PSAnVHJ1ZScgPyB0cnVlIDogZmFsc2U7XG5cdFx0bGV0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbCgpKTtcblx0XHRsZXQgaW5jcmVtZW50VW5pdCA9IDE7XG5cdFx0bGV0IGlzRGVjaW1hbHMgPSBjdXJyZW50VmFsdWUgJSAxICE9IDA7XG5cdFx0bGV0IGFycmF5dG9zcGluID0gbGlzdFRvc3BpbjtcblxuXHRcdGNvbnN0ICRtaW51c1ZlcnRpY2FsID0gJChlbGVtZW50SWQpLmZpbmQoJy5NaW51c1ZlcnRpY2FsJyk7XG5cdFx0Y29uc3QgJHBsdXNWZXJ0aWNhbCA9ICQoZWxlbWVudElkKS5maW5kKCcuUGx1c1ZlcnRpY2FsJyk7XG5cblx0XHRpZiAoYXJyYXl0b3NwaW4ubGVuZ3RoKSB7XG5cdFx0XHRsZXQgY3VycmVudFBvc2l0aW9uID0gYXJyYXl0b3NwaW4uaW5kZXhPZihwYXJzZUludCgkaW5wdXQudmFsKCkpKTtcblx0XHRcdGxldCBtYXhpbXVtVG9TcGluID0gYXJyYXl0b3NwaW4ubGFzdEluZGV4T2YoYXJyYXl0b3NwaW4uc2xpY2UoLTEpWzBdKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRQb3NpdGlvbiA9PSAwKSB7XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bbWF4aW11bVRvU3Bpbl0pO1xuXG5cdFx0XHRcdGlmICh0cmlnZ2VyT25DaGFuZ2UpICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdFx0aWYgKHRyaWdnZXJPbklucHV0KSAkaW5wdXQudHJpZ2dlcignaW5wdXQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQb3NpdGlvbiA9IChjdXJyZW50UG9zaXRpb24gLSAxKSAlIG1heGltdW1Ub1NwaW47XG5cdFx0XHRcdCRpbnB1dC52YWwoYXJyYXl0b3NwaW5bY3VycmVudFBvc2l0aW9uXSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3Bpbm5lci5maW5kKCcuU3Bpbm5lckVycm9yTWVzc2FnZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghZm9yY2VJbnRlZ2VyICYmIGlzRGVjaW1hbHMpIGluY3JlbWVudFVuaXQgPSBwYXJzZUZsb2F0KDAuMSk7XG5cblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50VmFsdWUgPT09ICcnIHx8IGlzTmFOKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSkpIHtcblx0XHRcdFx0JGlucHV0LnZhbChtaW5WYWx1ZSk7XG5cblx0XHRcdFx0dHJpZ2dlckV2ZW50cygkaW5wdXQsIHRyaWdnZXJPbkNoYW5nZSwgdHJpZ2dlck9uSW5wdXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSA+IG1pblZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PT0gMSAmJiAhZm9yY2VJbnRlZ2VyKSBpbmNyZW1lbnRVbml0ID0gcGFyc2VGbG9hdCgwLjEpO1xuXG5cdFx0XHRcdFx0JGlucHV0LnZhbChwYXJzZUZsb2F0KChjdXJyZW50VmFsdWUgLSBpbmNyZW1lbnRVbml0KS50b0ZpeGVkKDEpKSk7XG5cblx0XHRcdFx0XHR0cmlnZ2VyRXZlbnRzKCRpbnB1dCwgdHJpZ2dlck9uQ2hhbmdlLCB0cmlnZ2VyT25JbnB1dCk7XG5cblx0XHRcdFx0XHQkcGx1c1ZlcnRpY2FsLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JG1pbnVzVmVydGljYWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjaGVja0Rpc2FibGVkU3RhdHVzKGVsZW1lbnRJZCwgcGFyc2VGbG9hdCgkaW5wdXQudmFsKCkpLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0cmlnZ2VyRXZlbnRzID0gKGlucHV0LCB0cmlnZ2VyT25DaGFuZ2UsIHRyaWdnZXJPbklucHV0KSA9PiB7XG5cdFx0aWYgKHRyaWdnZXJPbkNoYW5nZSkgaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0aWYgKHRyaWdnZXJPbklucHV0KSBpbnB1dC50cmlnZ2VyKCdpbnB1dCcpO1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrRGlzYWJsZWRTdGF0dXMgPSAoZWxlbWVudElkLCB2YWx1ZVRvQ2hlY2ssIG1pblZhbHVlLCBtYXhWYWx1ZSkgPT4ge1xuXHRcdGlmICh2YWx1ZVRvQ2hlY2sgPD0gbWluVmFsdWUpIHtcblx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHQuZmluZCgnYS5NaW51c1ZlcnRpY2FsJylcblx0XHRcdFx0LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHQuZmluZCgnYS5NaW51c1ZlcnRpY2FsJylcblx0XHRcdFx0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZVRvQ2hlY2sgPj0gbWF4VmFsdWUpIHtcblx0XHRcdCQoZWxlbWVudElkKVxuXHRcdFx0XHQuZmluZCgnYS5QbHVzVmVydGljYWwnKVxuXHRcdFx0XHQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChlbGVtZW50SWQpXG5cdFx0XHRcdC5maW5kKCdhLlBsdXNWZXJ0aWNhbCcpXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU3Bpbm5lclZlcnRpY2FsID0ge1xuXHRcdGNyZWF0ZSxcblx0XHRpbmNyZW1lbnQsXG5cdFx0ZGVjcmVtZW50LFxuXHR9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFNwbGl0QnV0dG9uICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR3aW5kb3dbY29uZmlnLndpZGdldElkXSA9IG5ldyBTcGxpdEJ1dHRvbihjb25maWcpO1xuXHR9O1xuXG5cdHZhciBTcGxpdEJ1dHRvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyB0aGlzLmNvbmZpZy53aWRnZXRJZCk7XG5cdFx0dGhpcy4kYnV0dG9uID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TcGxpdEJ1dHRvbi1idXR0b24nKTtcblx0XHR0aGlzLiRidXR0b25MaW5rID0gdGhpcy4kYnV0dG9uLmZpbmQoJz4gYScpO1xuXHRcdHRoaXMuJHRyaWdnZXIgPSB0aGlzLiR3aWRnZXQuZmluZCgnLlNwbGl0QnV0dG9uLXRyaWdnZXInKTtcblx0XHR0aGlzLiRhY3Rpb25zID0gdGhpcy4kd2lkZ2V0LmZpbmQoJy5TcGxpdEJ1dHRvbi1hY3Rpb25zJyk7XG5cdFx0aWYgKCEhdGhpcy4kYWN0aW9ucy50ZXh0KCkpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCc+IC5TcGxpdEJ1dHRvbicpLmFkZENsYXNzKCdoYXNUcmlnZ2VyJyk7XG5cdFx0XHR0aGlzLmJ1aWxkQWN0aW9uc1RyaWdnZXIoKTtcblx0XHR9XG5cdH07XG5cblx0U3BsaXRCdXR0b24ucHJvdG90eXBlLmJ1aWxkQWN0aW9uc1RyaWdnZXIgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBjbGFzc0xpc3QgPSB0aGlzLiRidXR0b25MaW5rWzBdLmNsYXNzTGlzdC52YWx1ZTtcblx0XHR0aGlzLiR0cmlnZ2VyLmFkZENsYXNzKGNsYXNzTGlzdCk7XG5cdFx0JChmdW5jdGlvbigpIHtcblx0XHRcdC8vIGluc2lkZSBhIGRvY3VtZW50IHJlYWR5IGR1ZSB0byBzYXBwaGlyZSBwb3B1cCBiaW5kZWQgZXZlbnRzXG5cdFx0XHRpZiAoIV90aGlzLiR0cmlnZ2VyLmhhc0NsYXNzKCd0b29sdGlwc3RlcmVkJykpIHtcblx0XHRcdFx0X3RoaXMuJHRyaWdnZXIudG9vbHRpcHN0ZXIoe1xuXHRcdFx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICQoJzxzZWN0aW9uLz4nKS5hcHBlbmQoX3RoaXMuJGFjdGlvbnMuY2xvbmUodHJ1ZSkpLFxuXHRcdFx0XHRcdHRyaWdnZXI6IF90aGlzLmNvbmZpZy50cmlnZ2VyRXZlbnQsXG5cdFx0XHRcdFx0cG9zaXRpb246IF90aGlzLmNvbmZpZy5wb3NpdGlvbixcblx0XHRcdFx0XHRtYXhXaWR0aDogX3RoaXMuY29uZmlnLm1heFdpZHRoLFxuXHRcdFx0XHRcdHRoZW1lOiAndG9vbHRpcHN0ZXItc3BsaXRidXR0b24gUGFkZGluZy0nICsgX3RoaXMuY29uZmlnLnBhZGRpbmcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRfdGhpcy4kYWN0aW9ucy5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuU3BsaXRCdXR0b24gPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCJ2YXIgbWlsaXNlY29uZHBhc3NlZCA9IDA7XG52YXIgc3RvcHRpbWVyID0gdHJ1ZTtcbnZhciBteVRpbW91dCAgPSBudWxsO1xuXG5mdW5jdGlvbiBvbktleWRvd25GdW5jdGlvbigpIHtcbiAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcbiAgXG4gICAgc3RvcHRpbWVyPXRydWU7XG4gICAgY2xlYXJJbnRlcnZhbChteVRpbW91dCk7XG4gICAgbXlUaW1vdXQgPSBudWxsO1xuICB9O1xuICBcbiAgZnVuY3Rpb24gb25LZXlVcEZ1bmN0aW9uKGVsZW1lbnRUb0NsaWNrKSB7XG4gIHN0b3B0aW1lciA9IGZhbHNlO1xuICBcbiAgaWYobWlsaXNlY29uZHBhc3NlZCA9PSAwICYmIG15VGltb3V0PT1udWxsKXtcbiAgICAgIG15VGltb3V0ID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1pbGlzZWNvbmRwYXNzZWQrPTEwMDtcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChtaWxpc2Vjb25kcGFzc2VkID49IDQwMCAmJiBzdG9wdGltZXI9PWZhbHNlKSB7XG4gICAgICAgICAgICBtaWxpc2Vjb25kcGFzc2VkID0gMDtcbiAgICAgICAgICAgIHN0b3B0aW1lcj10cnVlO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteVRpbW91dCk7XG4gICAgICAgICAgICBteVRpbW91dCA9IG51bGw7XG4gICAgICAgICAgICBlbGVtZW50VG9DbGljay5jbGljaygpO1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYoc3RvcHRpbWVyPT10cnVlKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgaWYoc3RvcHRpbWVyPT10cnVlKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUaW1vdXQpO1xuICAgICAgICAgICAgbXlUaW1vdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGlmKHN0b3B0aW1lcj09dHJ1ZSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15VGltb3V0KTtcbiAgICAgICAgICAgIG15VGltb3V0ID0gbnVsbDtcbiAgICAgICAgfSAgIFxuICAgIH1cbn07XG5cbmlmKHR5cGVvZihzc2RDb21wb25lbnQpID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgc3NkQ29tcG9uZW50ID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIG51bWJlck9mQWN0aXZlOiAwLFxuICAgICAgICBpc1JUTDogZmFsc2UsXG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdG9EZXN0cm95OiBmYWxzZSxcbiAgICAgICAgb25CbHVyRGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc3NkQ29tcG9uZW50LmlkICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnQgPSAkKCcjJyArIHNzZENvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICAgICAgdmFyIF93cmFwcGVyID0gJCgnW2RhdGEtc3NkLXBsYWNlaG9sZGVyPScgKyBzc2RDb21wb25lbnQuaWQgKyAnXScpO1xuICAgICAgICAgICAgICAgIGlmIChzc2RDb21wb25lbnQudG9EZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJy5TU0RMaXN0UmVmcmVzaEhhbmRsZXInKS5maW5kKCdhLnRvLWRlc3Ryb3knKS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBfd3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgX3dyYXBwZXIgPSAkKCdbZGF0YS1zc2QtcGxhY2Vob2xkZXI9JyArIHNzZENvbXBvbmVudC5pZCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmJsdXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiBmdW5jdGlvbihzc2RDb21wb25lbnRXaWRnZXQpIHtcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmNoaWxkcmVuKCdkaXYuU1NELVdyYXBwZXI6bm90KC5TZWxlY3RlZCknKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybjsgLy9JZiB0aGlzIFNTRC1XcmFwcGVyIGlzIGFscmVhZHkgU2VsZWN0ZWQsIHJldHVybi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlKVxuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5ibHVyKCk7IC8vQmx1cnMgdGhlIG90aGVyIGZvY3VzZWQgU1NEJ3MuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5udW1iZXJPZkFjdGl2ZSsrO1xuICAgICAgICAgICAgaWYoIV9zc2RDb21wb25lbnRXaWRnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ1NTRFBvcHVwJykpe1xuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2hpbGRyZW4oJy5TU0QtQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50LmlzUlRMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh3aW5kb3cpLndpZHRoKCkgLSAkKHRoaXMpLm91dGVyV2lkdGgoKSAtIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuY2hpbGRyZW4oJy5TU0QtQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuU1NELUxpc3QnKS5hdHRyKCdjdXJyZW50LWZvY3VzJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCFfc3NkQ29tcG9uZW50V2lkZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdTU0RQb3B1cCcpKXtcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQoX3NzZENvbXBvbmVudFdpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50V2lkZ2V0LmFkZENsYXNzKCdQb3NpdGlvbmVkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zc2RDb21wb25lbnRXaWRnZXQuYWRkQ2xhc3MoJ1NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgMVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBibHVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgX3dyYXBwZXIgPSAkKCdkaXYuU1NELVdyYXBwZXIuUG9zaXRpb25lZC5TZWxlY3RlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfd3JhcHBlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS1zc2QtcGxhY2Vob2xkZXInKSk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfd3JhcHBlci5yZW1vdmVDbGFzcygnUG9zaXRpb25lZCcpXG4gICAgICAgICAgICAuY2hpbGRyZW4oJy5TU0QtQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJycsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnU2VhcmNoaW5nIEZpeGVkIEtleWJvYXJkTmF2JylcbiAgICAgICAgICAgIC5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF93cmFwcGVyLnJlbW92ZUNsYXNzKCdTZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuU1NELUJhcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFic0NsZWFyKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCAxXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlLS07XG4gICAgICAgICAgICAkKFwiLlNTRF9MaXN0UmVjb3JkcyBzcGFuLCAuU1NEX0xpc3RMaW5lLlNob3dNb3JlLCAuU1NEX0RlbGV0ZU9uQmx1clwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCFzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL0lmIHRoZXJlJ3Mgbm8gU1NEIGFjdGl2ZSwgdGhlcmUncyBubyBuZWVkIHRvIHJlc2l6ZSBpdC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIF9zc2RXcmFwcGVyID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkJykuZmlyc3QoKTtcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50V2lkZ2V0ID0gJCgnIycgKyBfc3NkV3JhcHBlci5hdHRyKCdkYXRhLXNzZC1wbGFjZWhvbGRlcicpKVswXTtcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZFdyYXBwZXIuY2hpbGRyZW4oJy5TU0QtQ29tcG9uZW50Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3NzZENvbXBvbmVudFdpZGdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoX3NzZENvbXBvbmVudFdpZGdldCkud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfS8qLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3NzZENvbXBvbmVudFdpZGdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNzZENvbXBvbmVudC5pc1JUTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zc2RDb21wb25lbnRXaWRnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzc2RDb21wb25lbnQuaXNSVEwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQod2luZG93KS53aWR0aCgpIC0gJChfc3NkQ29tcG9uZW50V2lkZ2V0KS5vdXRlcldpZHRoKCkgLSBfc3NkQ29tcG9uZW50V2lkZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICB9KS5jaGlsZHJlbignLlNTRC1CYXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRhYlNlbGVjdDogZnVuY3Rpb24oc3NkQ29tcG9uZW50V2lkZ2V0LCBzc2RCYXIsIHNlbGVjdGVkVGFiLCBpc0lucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRUYWIgPSAkKHNlbGVjdGVkVGFiKTtcblxuICAgICAgICAgICAgaWYoc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID09IDApIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXMoc3NkQ29tcG9uZW50V2lkZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIV9zZWxlY3RlZFRhYi5pcygnLlNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFic0NsZWFyKHNzZEJhcik7XG4gICAgICAgICAgICAgICAgX3NlbGVjdGVkVGFiLmFkZENsYXNzKCdTZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuZm9jdXNTZWxlY3RlZFRhYihzc2RCYXIsaXNJbnB1dEV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNTZWxlY3RlZFRhYjogZnVuY3Rpb24oc3NkQmFyLGlzSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU2VsZWN0ZWQgdGFiIGlzIHRoZSBTZWFyY2ggaW5wdXQ/XG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TZWFyY2hJbnB1dC1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFRvQ2xpY2sgPSBzc2RCYXIuc2libGluZ3MoJy5TU0RMaXN0UmVmcmVzaEhhbmRsZXInKS5maW5kKCdhOm5vdCgudG8tZGVzdHJveSknKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihpc0lucHV0RXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICBvbktleVVwRnVuY3Rpb24oZWxlbWVudFRvQ2xpY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9DbGljay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLklucHV0UGxhY2Vob2xkZXIgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpmb2N1cyknKS5maXJzdCgpLnNlbGVjdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZWxlY3RlZCB0YWIgaXMgdGhlIFNob3J0IGxpc3Q/XG4gICAgICAgICAgICBpZihzc2RCYXIuY2hpbGRyZW4oJy5TaG9ydExpc3RTZWxlY3Rvci1Db250YWluZXIuU2VsZWN0ZWQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzc2RCYXIuZmluZCgnLlNob3J0TGlzdFNlbGVjdG9yLUNvbnRhaW5lciA+IGEnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLypcbiAgICAgICAgICogTWV0aG9kIGJlaW5nIGNhbGxlZCBieSB1c2VyIGFjdGlvbiBqc19zc2RDb21wb25lbnRfZm9jdXNDdXJyZW50Um93XG4gICAgICAgICAqL1xuICAgICAgICBmb2N1c0N1cnJlbnRSb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9zc2RDb21wb25lbnQgPSAkKCdkaXYuU1NELVdyYXBwZXIuU2VsZWN0ZWQgLlNTRC1Db21wb25lbnQnKS5maXJzdCgpO1xuICAgICAgICAgICAgdmFyIF9zc2RMaXN0ID0gX3NzZENvbXBvbmVudC5maW5kKCcuU1NELUxpc3QnKTtcbiAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xuXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpO1xuICAgICAgICAgICAgX3NzZExpc3QuZmluZCgnc3Bhbi5TU0RfTGlzdFJlY29yZHMgPiBzcGFuOm50aC1jaGlsZCgnICsgX2N1cnJlbnRGb2N1cyArICcpJykuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhYnNDbGVhcjogZnVuY3Rpb24oc3NkQmFyKSB7XG4gICAgICAgICAgICAkKHNzZEJhcikuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnU2VsZWN0ZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoSWNvbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC50YWJTZWxlY3QoZXZlbnQuZGF0YS5zc2RDb21wb25lbnRXaWRnZXQsIGV2ZW50LmRhdGEuc3NkQmFyLCAkKGV2ZW50LmRhdGEuc3NkQmFyKS5jaGlsZHJlbignLlNlYXJjaElucHV0LUNvbnRhaW5lcicpLGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLypcbiAgICAgICAgICogQG5hbWUgaW5wdXRFdmVudFxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dEV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIF9pbnB1dENvbnRhaW5lciA9ICQoZXZlbnQuZGF0YS5pbnB1dCkuY2xvc2VzdCgnLlNlYXJjaElucHV0LUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgX2lucHV0Q29udGFpbmVyLHRydWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZigkKGV2ZW50LmRhdGEuaW5wdXQpLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0Q29udGFpbmVyLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykucmVtb3ZlQ2xhc3MoJ1NlYXJjaGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2lucHV0Q29udGFpbmVyLmNsb3Nlc3QoJy5TU0QtQ29tcG9uZW50JykuYWRkQ2xhc3MoJ1NlYXJjaGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBrZXlkb3duRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgIG9uS2V5ZG93bkZ1bmN0aW9uKCk7ICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZEhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT0gXCJTaGlmdFwiIHx8IGV2ZW50LmtleSA9PSBcIkNvbnRyb2xcIilcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gJCgnZGl2LlNTRC1XcmFwcGVyLlNlbGVjdGVkIC5TU0QtQ29tcG9uZW50JykuZmlyc3QoKTtcbiAgICAgICAgICAgIHZhciBfc3NkTGlzdCA9IF9zc2RDb21wb25lbnQuZmluZCgnLlNTRC1MaXN0Jyk7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkVudGVyXCIgJiYgX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZS5mb2N1cycpLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5hZGRDbGFzcygnS2V5Ym9hcmROYXYnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEZvY3VzID0gX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycpO1xuICAgICAgICAgICAgICAgIHZhciBfc2VsZWN0ZWRFbGVtZW50ID0gJChudWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCcuU1NEX0xpc3RMaW5lLlNob3dNb3JlLmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoX2N1cnJlbnRGb2N1cyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3BhbjpudGgtY2hpbGQoJyArIF9jdXJyZW50Rm9jdXMgKyAnKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LmFkZENsYXNzKCdLZXlib2FyZE5hdicpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3BhbjpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKS5wcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW4nKS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NzZExpc3QuZmluZCgnLlNTRF9MaXN0TGluZS5TaG93TW9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEVsZW1lbnQuaXMoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9ICQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZWN0ZWRFbGVtZW50ID0gX3NlbGVjdGVkRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXMnKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoICYmIF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudCA9IF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQgPSBfc3NkTGlzdC5maW5kKCdzcGFuLlNTRF9MaXN0UmVjb3JkcyA+IHNwYW46Zmlyc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9zZWxlY3RlZEVsZW1lbnQuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIV9zZWxlY3RlZEVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudC5mb2N1c1NlbGVjdGVkVGFiKF9zc2RDb21wb25lbnQuZmluZCgnLlNTRC1CYXInKSxmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9jdXMgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghX3NlbGVjdGVkRWxlbWVudC5maW5kKCcuU1NEX0xpc3RMaW5lLkRpc2FibGVkJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkRWxlbWVudC5maW5kKCcuRXhwYW5kQ29udHJvbCA+IGEnKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3NzZExpc3QuZmluZCgnYS5PdGhlckNvbnRyb2xMaW5rJykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycsIF9jdXJyZW50Rm9jdXMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzc2RDb21wb25lbnQuY2xlYXJLZXlib2FyZE5hdlN0YXR1cyhfc3NkQ29tcG9uZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJLZXlib2FyZE5hdlN0YXR1czogZnVuY3Rpb24oc3NkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoc3NkQ29tcG9uZW50KTtcbiAgICAgICAgICAgIHZhciBfc3NkTGlzdCA9IF9zc2RDb21wb25lbnQuZmluZCgnLlNTRC1MaXN0Jyk7XG5cbiAgICAgICAgICAgIGlmKF9zc2RMaXN0LmZpbmQoJy5TU0RfTGlzdExpbmUuU2hvd01vcmUuZm9jdXMnKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBfc3NkQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdLZXlib2FyZE5hdicpO1xuICAgICAgICAgICAgX3NzZExpc3QuYXR0cignY3VycmVudC1mb2N1cycsIDApXG4gICAgICAgICAgICAgICAgLmZpbmQoJ3NwYW4uU1NEX0xpc3RSZWNvcmRzID4gc3Bhbi5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5FeHBhbmRDb250cm9sID4gYScpLmJsdXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudCA9ICQoJ2Rpdi5TU0QtV3JhcHBlci5TZWxlY3RlZCAuU1NELUNvbXBvbmVudCcpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZihNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIDw9IDEwMjQpe1xuICAgICAgICAgICAgICAgIGlmKF9zc2RDb21wb25lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gJChcIi50b29sYmFyLXdyYXBwZXIuRml4ZWRcIikub3V0ZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfc3NkQ29tcG9uZW50LnJlbW92ZUNsYXNzKCdGaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoJy5TU0QtV3JhcHBlci5TZWxlY3RlZCA+IC5TU0QtQ29tcG9uZW50LkZpeGVkID4gLlNTRC1CYXInKS5jc3MoJ3RvcCcsICQoXCIudG9vbGJhci13cmFwcGVyLkZpeGVkXCIpLm91dGVySGVpZ2h0KCkgKyAncHgnKTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvKk5vdCBNb2JpbGUgYXBwbHkgZml4ZWQgYmVoYXZpb3VyKi9cbiAgICAgICAgICAgICAgICBpZihfc3NkQ29tcG9uZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+ICgkKCcuVG9wUGF0aWVudEhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpICsgJCgnLkhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpICsgJChcIi50b29sYmFyLXdyYXBwZXJcIikub3V0ZXJIZWlnaHQoKSsgJCgnLkNUVEFTTGV2ZWxBc3Nlc3NtZW50TWFpbkNvbnRhaW5lcicpLm91dGVySGVpZ2h0KHRydWUpICkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NzZENvbXBvbmVudC5yZW1vdmVDbGFzcygnRml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAkKCcuU1NELVdyYXBwZXIuU2VsZWN0ZWQgPiAuU1NELUNvbXBvbmVudC5GaXhlZCA+IC5TU0QtQmFyJykuY3NzKCd0b3AnLCgkKCcuVG9wUGF0aWVudEhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpICsgJCgnLkhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpICsgJChcIi50b29sYmFyLXdyYXBwZXJcIikub3V0ZXJIZWlnaHQoKSArICQoJy5DVFRBU0xldmVsQXNzZXNzbWVudE1haW5Db250YWluZXInKS5vdXRlckhlaWdodCh0cnVlKSkgKyAncHgnKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIF9zc2RDb21wb25lbnQuYWRkQ2xhc3MoJ0ZpeGVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKF9pbnB1dElkKSB7IC8qIFVzZWQgdG8gZGVzdHJveSBhIHNwZWNpZmljIHNzZCBjb21wb25lbnQgYnkgcmVjZWl2ZSB0aGUgaW5wdXQgaWRlbnRpZmllciBhcyBwYXJhbWV0ZXIgYW5kIGRldGVybWluZSB0aGUgd3JhcHBlciB0byByZW1vdmUuICovXG4gICAgICAgICAgICAkKCdbZGF0YS1zc2QtcGxhY2Vob2xkZXI9JyArIHNzZENvbXBvbmVudC5pZCArICddJykucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHNzZENvbXBvbmVudFdpZGdldCxfdG9EZXN0cm95KSB7XG4gICAgICAgICAgICBzc2RDb21wb25lbnQubGVuZ3RoKys7XG4gICAgICAgICAgICBzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPSAwO1xuICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlzUlRMID0gJCgnaHRtbCcpLmlzKCcucnRsJyk7XG4gICAgICAgICAgICBzc2RDb21wb25lbnQudG9EZXN0cm95ID0gX3RvRGVzdHJveTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3NkQ29tcG9uZW50V2lkZ2V0ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmlkID0gJChzc2RDb21wb25lbnRXaWRnZXQpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3NzZENvbXBvbmVudFdpZGdldCA9ICQoc3NkQ29tcG9uZW50V2lkZ2V0KTtcbiAgICAgICAgICAgIHZhciBfc3NkQ29tcG9uZW50ID0gX3NzZENvbXBvbmVudFdpZGdldC5maW5kKCcuU1NELUNvbXBvbmVudCcpO1xuICAgICAgICAgICAgdmFyIF9zc2RCYXIgPSBfc3NkQ29tcG9uZW50LmNoaWxkcmVuKCcuU1NELUJhcicpLmZpcnN0KCk7XG4gICAgICAgICAgICB2YXIgX3NlYXJjaEljb24gPSBfc3NkQmFyLmZpbmQoJy5TZWFyY2hJY29uJykuZmlyc3QoKTtcbiAgICAgICAgICAgIHZhciBfaW5wdXQgPSBfc3NkQmFyLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuZmlyc3QoKTtcbiAgICAgICAgICAgIHZhciBfY2xlYXJDb250cm9sID0gX3NzZEJhci5maW5kKCcuQ2xlYXJDb250cm9sJykuZmlyc3QoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3NlYXJjaEljb24ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyXG4gICAgICAgICAgICB9LCBzc2RDb21wb25lbnQuc2VhcmNoSWNvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9zc2RCYXIuY2hpbGRyZW4oJ2RpdicpLm9mZignY2xpY2snKS5vbignY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50V2lkZ2V0OiBfc3NkQ29tcG9uZW50V2lkZ2V0LFxuICAgICAgICAgICAgICAgIHNzZEJhcjogX3NzZEJhclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQudGFiU2VsZWN0KGV2ZW50LmRhdGEuc3NkQ29tcG9uZW50V2lkZ2V0LCBldmVudC5kYXRhLnNzZEJhciwgdGhpcyxmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2NsZWFyQ29udHJvbC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3kpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfaW5wdXQub2ZmKCdrZXl1cCcpLm9uKCdrZXl1cCcsIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnRXaWRnZXQ6IF9zc2RDb21wb25lbnRXaWRnZXQsXG4gICAgICAgICAgICAgICAgc3NkQmFyOiBfc3NkQmFyLFxuICAgICAgICAgICAgICAgIGlucHV0OiBfaW5wdXRcbiAgICAgICAgICAgIH0sIHNzZENvbXBvbmVudC5pbnB1dEV2ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2lucHV0Lm9mZigna2V5ZG93bicpLm9uKCdrZXlkb3duJywge1xuICAgICAgICAgICAgICAgIHNzZENvbXBvbmVudFdpZGdldDogX3NzZENvbXBvbmVudFdpZGdldCxcbiAgICAgICAgICAgICAgICBzc2RCYXI6IF9zc2RCYXIsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IF9pbnB1dFxuICAgICAgICAgICAgfSwgc3NkQ29tcG9uZW50LmtleWRvd25FdmVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoX3NzZENvbXBvbmVudCkub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICBzc2RDb21wb25lbnQ6IF9zc2RDb21wb25lbnRcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50LmNsZWFyS2V5Ym9hcmROYXZTdGF0dXMoZXZlbnQuZGF0YS5zc2RDb21wb25lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgc3NkQ29tcG9uZW50LnJlc2l6ZSgpO1xuICAgIH0pO1xuICAgIFxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmKCEkKGV2ZW50LnRhcmdldCkuaXMoJzp2aXNpYmxlJykpIHsgLyogQ2xpY2tzIG9uIGhpZGRlbiBlbGVtZW50cyBhcmUgZGlzbWlzc2VkLiAqL1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgZSA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuU1NELUNvbXBvbmVudCcpO1xuICAgICAgICBcbiAgICAgICAgaWYoIWUubGVuZ3RoKSB7IC8vIFVzZXIgY2xpY2tlZCBvdXRzaWRlIHRoZSBTU0QtQ29tcG9uZW50P1xuICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYoc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID4gMCkge1xuICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBcIjI3XCIpIHsgLy8gVXNlciBoaXQgRXNjYXBlXG4gICAgICAgICAgICAgICAgc3NkQ29tcG9uZW50Lm9uQmx1ckRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZihzc2RDb21wb25lbnQubnVtYmVyT2ZBY3RpdmUgPiAwKSB7IC8vIElmIHRoZXJlJ3MgYW4gU1NEIGNvbXBvbmVudCBhY3RpdmUsIGdvIGZvciBLZXlib2FyZCBoYW5kbGVyXG4gICAgICAgICAgICBzc2RDb21wb25lbnQua2V5Ym9hcmRIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoc3NkQ29tcG9uZW50Lm51bWJlck9mQWN0aXZlID4gMCkgeyAvLyBJZiB0aGVyZSdzIGFuIFNTRCBjb21wb25lbnQgYWN0aXZlLCBnbyBmb3Igc2Nyb2xsIGhhbmRsZXJcbiAgICAgICAgICAgIHNzZENvbXBvbmVudC5zY3JvbGxIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLyogQ29tcG9uZW50IFNTRExpc3RMaW5lICovXG5TYXBwaGlyZVdpZGdldHMuU1NETGlzdExpbmUgPSB7XG5cdHRvZ2dsZTogKGxpbmVJZCwgbGluZUhhbmRsZXIgPSAnJykgPT4ge1xuXHRcdHZhciBfbGluZSA9ICQobGluZUlkKS5pcygnLlNTRF9MaXN0TGluZScpXG5cdFx0XHQ/ICQobGluZUlkKVxuXHRcdFx0OiAkKGxpbmVJZClcblx0XHRcdFx0XHQuY2hpbGRyZW4oJy5TU0RfTGlzdExpbmUnKVxuXHRcdFx0XHRcdC5maXJzdCgpO1xuXG5cdFx0aWYgKCFfbGluZS5sZW5ndGgpIHJldHVybjtcblxuXHRcdHZhciBfZXhwYW5kQ29udHJvbCA9ICQoJy5leHBhbmQtY29udHJvbC1jdXN0b20td2lkdGgnKTtcblxuXHRcdGlmIChfZXhwYW5kQ29udHJvbC5sZW5ndGggIT0gMCkge1xuXHRcdFx0X2V4cGFuZENvbnRyb2wucmVtb3ZlQ2xhc3MoJ2V4cGFuZC1jb250cm9sLWN1c3RvbS13aWR0aCcpO1xuXHRcdFx0X2V4cGFuZENvbnRyb2wuY3NzKCd3aWR0aCcsICcnKTtcblx0XHR9XG5cblx0XHRpZiAoIV9saW5lLmlzKCcuQWN0aXZlJykpIHtcblx0XHRcdHZhciBfbGluZUhlYWRlciA9IF9saW5lXG5cdFx0XHRcdC5jbG9zZXN0KCdkaXYuU2VsZWN0YWJsZUxpc3QsIC5TZWxlY3RhYmxlTGlzdC1MaXN0UmVjb3JkcycpXG5cdFx0XHRcdC5maW5kKCdkaXYuU2VsZWN0YWJsZUxpc3QtTGluZS5BY3RpdmUnKVxuXHRcdFx0XHQubm90KF9saW5lKTtcblxuXHRcdFx0X2xpbmVIZWFkZXIuZmluZCgnYVtoaWRlLWFjdGlvbl0nKS5jbGljaygpO1xuXHRcdFx0X2xpbmVIZWFkZXJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdBY3RpdmUnKVxuXHRcdFx0XHQuY2hpbGRyZW4oJ3NwYW4nKVxuXHRcdFx0XHQuaGlkZSgyMDApO1xuXHRcdFx0X2xpbmUuYWRkQ2xhc3MoJ0FjdGl2ZScpO1xuXG5cdFx0XHRpZiAoJChsaW5lSGFuZGxlcikubGVuZ3RoKSB7XG5cdFx0XHRcdCQobGluZUhhbmRsZXIpLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9saW5lLnJlbW92ZUNsYXNzKCdBY3RpdmUnKTtcblx0XHR9XG5cdH0sXG59O1xuIiwiLyogQ29tcG9uZW50IFRhYmxlRm9ybSAqL1xuKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGFkZEVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJUYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbVwiPjwvZGl2PicpO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZUVtcHR5TGluZSA9IGNvbmZpZyA9PiB7XG5cdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGFibGVGb3JtQ29sdW1uOm5vdCguVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZSkgLlRhYmxlRm9ybUNvbHVtbl9fRmllbGRzID4gLkxpc3RSZWNvcmRzJyk7XG5cblx0XHQkbGlzdC5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5maW5kKCc+IC5UYWJsZUZvcm1Db2x1bW5fX0VtcHR5SXRlbTpmaXJzdCcpXG5cdFx0XHRcdC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBvbkNvbXBvbmVudFJlbG9hZCA9IHdpZGdldElkID0+IHtcblx0XHRjb25zdCAkdGFibGUgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblx0XHRjb25zdCAkZWRpdGluZyA9ICR0YWJsZS5maW5kKCcuVGFibGVGb3JtQ29sdW1uLS1lZGl0TW9kZScpO1xuXG5cdFx0aWYgKCRlZGl0aW5nLmxlbmd0aCkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKCdUYWJsZUZvcm0tLXNjcm9sbERpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0YWJsZS5yZW1vdmVDbGFzcygnVGFibGVGb3JtLS1zY3JvbGxEaXNhYmxlZCcpO1xuXHRcdH1cblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFibGVGb3JtID0geyBhZGRFbXB0eUxpbmUsIG9uQ29tcG9uZW50UmVsb2FkLCByZW1vdmVFbXB0eUxpbmUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogQ29tcG9uZW50IFRhYnNFeHRlbmRlZCAqL1xuU2FwcGhpcmVXaWRnZXRzLlRhYnNFeHRlbmRlZCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY29tcG9uZW50ID0gJChgIyR7Y29uZmlnLndpZGdldElkfSAuVGFic19FeHRlbmRlZGApO1xuXHRcdGNvbnN0ICR0YWJIZWFkZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzX2hlYWRlcicpO1xuXHRcdGNvbnN0ICR0YWJDb250YWluZXIgPSAkY29tcG9uZW50LmZpbmQoJy5UYWJzQ29udGFpbmVyJyk7XG5cdFx0Y29uc3QgJHRhYnMgPSAkdGFiSGVhZGVyLmZpbmQoJz4gLlRhYnNfX3RhYicpO1xuXHRcdGNvbnN0ICR0YWJzRW5hYmxlZCA9ICR0YWJIZWFkZXIuZmluZCgnPiAuVGFic19fdGFiOm5vdCguZGlzYWJsZWQpJyk7XG5cdFx0Y29uc3QgJHRhYnNJbnB1dCA9ICRjb21wb25lbnQuZmluZCgnLlRhYnNfSW5wdXQgaW5wdXQnKTtcblxuXHRcdCR0YWJzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICcnKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkdGFic0VuYWJsZWQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkdGFiQ29udGFpbmVyLmF0dHIoJ2FjdGl2ZXRhYicsICQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cblx0XHRcdCR0YWJzSW5wdXQudmFsKCQodGhpcykuYXR0cigndmFsdWUnKSk7XG5cdFx0XHQkdGFic0lucHV0LmNoYW5nZSgpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYnNFbmFibGVkLm9mZignbW91c2Vkb3duJykub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0dmFyICR0YWJzRXh0ZW5kZWQgPSAkKGV2dC50YXJnZXQpLmNsb3Nlc3QoJy5UYWJzX0V4dGVuZGVkJyk7XG5cdFx0XHQkdGFic0V4dGVuZGVkLnJlbW92ZUNsYXNzKCdpc0Nsb3NlZCcpO1xuXHRcdH0pO1xuXG5cdFx0JCgnLlRhYnNfRXh0ZW5kZWQuSGlkZUFjdGl2ZU9uQ2xpY2sgLlRhYnNfaGVhZGVyJylcblx0XHRcdC5vZmYoJ21vdXNlZG93bicpXG5cdFx0XHQub24oJ21vdXNlZG93bicsICcuVGFic19fdGFiLmFjdGl2ZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHR2YXIgJHRhYnNFeHRlbmRlZCA9ICQoZXZ0LnRhcmdldCkuY2xvc2VzdCgnLlRhYnNfRXh0ZW5kZWQnKTtcblx0XHRcdFx0dmFyICR0YWJzQm9keSA9ICR0YWJzRXh0ZW5kZWQuZmluZCgnLlRhYnNfYm9keScpO1xuXG5cdFx0XHRcdGlmICgkdGFic0JvZHkuaGFzQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJykpIHtcblx0XHRcdFx0XHQkdGFic0JvZHkucmVtb3ZlQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5yZW1vdmVDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkdGFic0JvZHkuYWRkQ2xhc3MoJ1RhYnNfYm9keS0tY2xvc2VkJyk7XG5cdFx0XHRcdFx0JHRhYnNFeHRlbmRlZC5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQkdGFiSGVhZGVyLmZpbmQoJy5UYWJzX0V4dGVuZGVkLS1kaXNhYmxlZCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cdFx0XHQkKGVsKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKVxuXHRcdFx0XHQub2ZmKCdjbGljaycpO1xuXHRcdH0pO1xuXG5cdFx0JGNvbXBvbmVudC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuXHRcdFx0aWYgKCQoZWwpLmhhc0NsYXNzKCdUYWJzX0V4dGVuZGVkLS1jbG9zZWRvbnN0YXJ0JykpIHtcblx0XHRcdFx0JChlbClcblx0XHRcdFx0XHQuZmluZCgnLlRhYnNfYm9keScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdUYWJzX2JvZHktLWNsb3NlZCcpO1xuXHRcdFx0XHQkKGVsKS5hZGRDbGFzcygnaXNDbG9zZWQnKTtcblx0XHRcdFx0JChlbCkucmVtb3ZlQ2xhc3MoJ1RhYnNfRXh0ZW5kZWQtLWNsb3NlZG9uc3RhcnQnKTtcblx0XHRcdH1cblxuXHRcdFx0JChlbClcblx0XHRcdFx0Lm9mZignY2xpY2snKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJy5UYWJzX0V4dGVuZGVkLS1jbG9zZScsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRcdCQoZXZ0LnRhcmdldClcblx0XHRcdFx0XHRcdC5jbG9zZXN0KCcuVGFic19ib2R5Jylcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnVGFic19ib2R5LS1jbG9zZWQnKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIWNvbmZpZy50YWIxRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9MV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIyRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9Ml0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWIzRW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9M10nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI0RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NF0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRpZiAoIWNvbmZpZy50YWI1RW5hYmxlZCkgJHRhYkhlYWRlci5maW5kKCc+IC5UYWJzX190YWJbdmFsdWU9NV0nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0fSk7XG59O1xuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJMaXN0ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBhbGxUYWJ1bGFyTGlzdHMgPSBbXTtcblxuXHR2YXIgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0d2luZG93W2NvbmZpZy50YWJ1bGFyTGlzdElkXSA9IG5ldyBUYWJ1bGFyTGlzdChjb25maWcpO1xuXHRcdGFsbFRhYnVsYXJMaXN0cy5wdXNoKHdpbmRvd1tjb25maWcudGFidWxhckxpc3RJZF0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVRhYnVsYXJMaXN0Q29sdW1ucygpO1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplLnRhYnVsYXJsaXN0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYWxsVGFidWxhckxpc3RzID0gU2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJMaXN0LmFsbCgpO1xuXHRcdFx0YWxsVGFidWxhckxpc3RzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuXHRcdFx0XHRlbGVtZW50LmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzKDIwMCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgVGFidWxhckxpc3QgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IDA7XG5cdFx0dGhpcy4kd2lkZ2V0ID0gJCgnIycgKyBjb25maWcudGFidWxhckxpc3RJZCk7XG5cdFx0dGhpcy4kd2lkZ2V0TGlzdCA9IHRoaXMuJHdpZGdldC5maW5kKCc+IC5UYWJ1bGFyTGlzdCcpO1xuXHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3cnKS5lYWNoKGZ1bmN0aW9uKGksIHJvdykge1xuXHRcdFx0X3RoaXMuY29sdW1uc0NvdW50ID0gMDtcblx0XHRcdCQocm93KVxuXHRcdFx0XHQuZmluZCgnLlRhYnVsYXJMaXN0Um93LXZhbHVlcyAuVGFidWxhckxpc3RSb3ctaXRlbScpXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdFx0JChlbCkuYWRkQ2xhc3MoJ1RhYnVsYXJMaXN0Q29sdW1uJyArIChpICsgMSkpO1xuXHRcdFx0XHRcdF90aGlzLmNvbHVtbnNDb3VudCsrO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoISFjb25maWcuYnJlYWtPbikge1xuXHRcdFx0dGhpcy5icmVha09uT3JkZXIgPSBwYXJzZUludChjb25maWcuYnJlYWtPbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnJlYWtPbk9yZGVyID0gMDtcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVUYWJ1bGFyTGlzdENvbHVtbnMoKTtcblx0fTtcblxuXHRUYWJ1bGFyTGlzdC5wcm90b3R5cGUuaGFuZGxlVGFidWxhckxpc3RDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuY29uZmlnLmNvbHVtbnNXaWR0aCA9PT0gJ0F1dG8nKSB7XG5cdFx0XHRpZiAodGhpcy4kd2lkZ2V0TGlzdC53aWR0aCgpID4gMSkge1xuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHRoaXMuY29sdW1uc0NvdW50OyBpKyspIHtcblx0XHRcdFx0XHR2YXIgbWF4V2lkdGhDb250ZW50ID0gTWF0aC5tYXguYXBwbHkoXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0dGhpcy4kd2lkZ2V0XG5cdFx0XHRcdFx0XHRcdC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSlcblx0XHRcdFx0XHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZ2V0KClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RDb2x1bW4nICsgaSkud2lkdGgobWF4V2lkdGhDb250ZW50KTtcblx0XHRcdFx0XHR0aGlzLiR3aWRnZXQuZmluZCgnLlRhYnVsYXJMaXN0Q29sdW1uJyArIGkpLmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctcHJvcGVydHknKS5jc3MoJ21pbi13aWR0aCcsIGNvbnZlcnRJbkNTU1ZhbHVlKHRoaXMuY29uZmlnLnByb3BlcnR5TWluV2lkdGgpKTtcblx0XHR9XG5cdFx0aWYgKCEhdGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1wcm9wZXJ0eScpLmNzcygnbWF4LXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcucHJvcGVydHlNYXhXaWR0aCkpO1xuXHRcdH1cblx0XHRpZiAoISF0aGlzLmNvbmZpZy5hY3Rpb25zTWluV2lkdGgpIHtcblx0XHRcdHRoaXMuJHdpZGdldC5maW5kKCcuVGFidWxhckxpc3RSb3ctYWN0aW9ucycpLmNzcygnbWluLXdpZHRoJywgY29udmVydEluQ1NTVmFsdWUodGhpcy5jb25maWcuYWN0aW9uc01pbldpZHRoKSk7XG5cdFx0fVxuXHRcdGlmICghIXRoaXMuY29uZmlnLmFjdGlvbnNNYXhXaWR0aCkge1xuXHRcdFx0dGhpcy4kd2lkZ2V0LmZpbmQoJy5UYWJ1bGFyTGlzdFJvdy1hY3Rpb25zJykuY3NzKCdtYXgtd2lkdGgnLCBjb252ZXJ0SW5DU1NWYWx1ZSh0aGlzLmNvbmZpZy5hY3Rpb25zTWF4V2lkdGgpKTtcblx0XHR9XG5cdH07XG5cblx0VGFidWxhckxpc3QucHJvdG90eXBlLmhhbmRsZVJlc3BvbnNpdmVDbGFzc2VzID0gZnVuY3Rpb24odGltZW91dCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRhYnVsYXJMaXN0UmVzaXplVGltZXIpO1xuXHRcdHRoaXMudGFidWxhckxpc3RSZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoZnVuY3Rpb24oaW5kZXgsIGNsYXNzTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKXNjcmVlbi1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X3RoaXMuJHdpZGdldExpc3QucmVtb3ZlQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblxuXHRcdFx0dmFyIHdpZGdldFdpZHRoID0gX3RoaXMuJHdpZGdldExpc3Qub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdGlmICh3aWRnZXRXaWR0aCA9PT0gMCkge1xuXHRcdFx0XHR3aWRnZXRXaWR0aCA9IF90aGlzLiR3aWRnZXRMaXN0XG5cdFx0XHRcdFx0LnBhcmVudHMoJzp2aXNpYmxlJylcblx0XHRcdFx0XHQuZXEoMClcblx0XHRcdFx0XHQub3V0ZXJXaWR0aCh0cnVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHdpZGdldFdpZHRoID49IDE5MDApIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wSEQnKTtcblx0XHRcdFx0aWYgKF90aGlzLmJyZWFrT25PcmRlciA+PSA2KSB7XG5cdFx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ2lzQnJlYWtpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh3aWRnZXRXaWR0aCA+PSAxNjAwKSB7XG5cdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdzY3JlZW4tRGVza3RvcEJpZycpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDUpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDEzNjYpIHtcblx0XHRcdFx0X3RoaXMuJHdpZGdldExpc3QuYWRkQ2xhc3MoJ3NjcmVlbi1EZXNrdG9wJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gNCkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAod2lkZ2V0V2lkdGggPj0gMTAyNCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLURlc2t0b3BTbWFsbCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDMpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHdpZGdldFdpZHRoID49IDQyMCkge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVRhYmxldCcpO1xuXHRcdFx0XHRpZiAoX3RoaXMuYnJlYWtPbk9yZGVyID49IDIpIHtcblx0XHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnaXNCcmVha2luZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfdGhpcy4kd2lkZ2V0TGlzdC5hZGRDbGFzcygnc2NyZWVuLVBob25lJyk7XG5cdFx0XHRcdGlmIChfdGhpcy5icmVha09uT3JkZXIgPj0gMSkge1xuXHRcdFx0XHRcdF90aGlzLiR3aWRnZXRMaXN0LmFkZENsYXNzKCdpc0JyZWFraW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCB0aW1lb3V0KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVGFidWxhckxpc3QgPSB7XG5cdFx0Y3JlYXRlOiBjcmVhdGUsXG5cdFx0YWxsOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBhbGxUYWJ1bGFyTGlzdHM7XG5cdFx0fSxcblx0fTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcblxuZnVuY3Rpb24gY29udmVydEluQ1NTVmFsdWUodmFsdWVfaW4pIHtcblx0dmFyIHJldHVybmVkO1xuXHRpZiAodmFsdWVfaW4uaW5jbHVkZXMoJ3B4JykgfHwgdmFsdWVfaW4uaW5jbHVkZXMoJyUnKSkge1xuXHRcdHJldHVybmVkID0gdmFsdWVfaW47XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuZWQgPSB2YWx1ZV9pbiArICdweCc7XG5cdH1cblx0cmV0dXJuIHJldHVybmVkO1xufVxuIiwiLyogQ29tcG9uZW50IFRhYnVsYXJTY3JvbGwgKi9cbihmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpIHtcblx0Y29uc3QgY3JlYXRlID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuVGFidWxhclNjcm9sbCcpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcblx0XHRcdFx0c2V0dXBUYWJ1bGFyU2Nyb2xsKCQoZWwpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRvc0FqYXhCYWNrZW5kICYmXG5cdFx0XHRcdG9zQWpheEJhY2tlbmQuQmluZEFmdGVyQWpheFJlcXVlc3QoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdFx0XHRzZXR1cFRhYnVsYXJTY3JvbGwoJChlbCkpO1xuXHRcdFx0XHRcdFx0cmVzaXplUm93cygkKGVsKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUudGFidWxhcnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCgnLlRhYnVsYXJTY3JvbGwnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XG5cdFx0XHRcdHZhciAkY2VudGVyVGFibGUgPSAkKGVsKS5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXItdGFibGUnKTtcblx0XHRcdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKCcuVGFidWxhclNjcm9sbC1jZW50ZXIgLlRvcFNjcm9sbERyYWdnZXInKVxuXHRcdFx0XHRcdC53aWR0aCh0YWJsZVdpZHRoKTtcblx0XHRcdFx0aWYgKCRjZW50ZXJUYWJsZVswXS5zY3JvbGxXaWR0aCA+ICRjZW50ZXJUYWJsZS53aWR0aCgpKSB7XG5cdFx0XHRcdFx0JChlbClcblx0XHRcdFx0XHRcdC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpXG5cdFx0XHRcdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdFx0LmZpbmQoJy5Ub3BTY3JvbGxXcmFwcGVyJylcblx0XHRcdFx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldHVwVGFidWxhclNjcm9sbCA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0dmFyICR0b3BTY3JvbGxXcmFwcGVyID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKTtcblx0XHR2YXIgJGNlbnRlclRhYmxlID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtY2VudGVyLXRhYmxlJyk7XG5cdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkY2VudGVyVGFibGUuc2Nyb2xsTGVmdCgkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdCRjZW50ZXJUYWJsZS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHQkdG9wU2Nyb2xsV3JhcHBlci5zY3JvbGxMZWZ0KCRjZW50ZXJUYWJsZS5zY3JvbGxMZWZ0KCkpO1xuXHRcdH0pO1xuXHRcdC8vIHNpbWlsYXIgdG8gUmVzaXplXG5cdFx0dmFyIHRhYmxlV2lkdGggPSAkY2VudGVyVGFibGUuZmluZCgndGFibGUnKS53aWR0aCgpO1xuXHRcdCR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlciAuVG9wU2Nyb2xsRHJhZ2dlcicpLndpZHRoKHRhYmxlV2lkdGgpO1xuXHRcdGlmICgkY2VudGVyVGFibGVbMF0uc2Nyb2xsV2lkdGggPiAkY2VudGVyVGFibGUud2lkdGgoKSkge1xuXHRcdFx0JHRhYnVsYXJTY3JvbGwuZmluZCgnLlRvcFNjcm9sbFdyYXBwZXInKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGFidWxhclNjcm9sbC5maW5kKCcuVG9wU2Nyb2xsV3JhcHBlcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVzaXplUm93cyA9IGZ1bmN0aW9uKCR0YWJ1bGFyU2Nyb2xsKSB7XG5cdFx0bGV0IGFycnJheUhlaWdodCA9IFtdO1xuXHRcdGNvbnN0ICR0YWJsZUNlbnRlciA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWNlbnRlci10YWJsZSB0YWJsZSB0Ym9keScpO1xuXHRcdGNvbnN0ICR0YWJsZVJpZ2h0ID0gJHRhYnVsYXJTY3JvbGwuZmluZCgnLlRhYnVsYXJTY3JvbGwtcmlnaHQgLkxpc3RSZWNvcmRzJyk7XG5cdFx0Y29uc3QgJHRhYmxlTGVmdCA9ICR0YWJ1bGFyU2Nyb2xsLmZpbmQoJy5UYWJ1bGFyU2Nyb2xsLWxlZnQgLkxpc3RSZWNvcmRzJyk7XG5cblx0XHRhcnJyYXlIZWlnaHQgPSAkdGFibGVDZW50ZXJcblx0XHRcdC5jaGlsZHJlbigndHInKVxuXHRcdFx0Lm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0XHR9KVxuXHRcdFx0LmdldCgpO1xuXG5cdFx0JHRhYmxlUmlnaHQuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHQkKHRoaXMpLmNzcygnaGVpZ2h0JywgYXJycmF5SGVpZ2h0W2luZGV4XSArICdweCcpO1xuXHRcdH0pO1xuXG5cdFx0JHRhYmxlTGVmdC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdCQodGhpcykuY3NzKCdoZWlnaHQnLCBhcnJyYXlIZWlnaHRbaW5kZXhdICsgJ3B4Jyk7XG5cdFx0fSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRhYnVsYXJTY3JvbGwgPSB7IGNyZWF0ZSB9O1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50LCBTYXBwaGlyZVdpZGdldHMpO1xuIiwiLyogVGltZWxpbmUgSGVscGVycyAqL1xuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lQ291bnRlckl0ZW1zID0gZnVuY3Rpb24odGl0bGVJdGVtSUQsIGxhYmVsKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRzZWN0aW9uID0gJChgIyR7dGl0bGVJdGVtSUR9YCkucGFyZW50cygnLlRpbWVsaW5lSXRlbVNlY3Rpb24nKTtcblx0XHRjb25zdCAkdGl0bGUgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtSGVhZGVyIGEnKTtcblx0XHRjb25zdCAkaXRlbXMgPSAkc2VjdGlvbi5maW5kKCcuVGltZWxpbmVJdGVtJyk7XG5cblx0XHQkdGl0bGUuYXBwZW5kKCQoYDxkaXYgY2xhc3M9J0NvbG9yR3JleVRleHQgVGV4dExhcmdlIFRleHRSZWd1bGFyJz4gKCR7JGl0ZW1zLmxlbmd0aH0pPC9kaXY+YCkpO1xuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5TY3JvbGxUb0V2ZW50ID0gZnVuY3Rpb24oZWxlbWVudElkKSB7XG5cdFNhcHBoaXJlV2lkZ2V0cy5MYXlvdXRCYXNlLnNjcm9sbFRvRWxlbWVudCgkKGAjJHtlbGVtZW50SWR9OmZpcnN0YCwgd2luZG93LnRvcC5kb2N1bWVudCksIDUyKTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5MaW5lVGltZWxpbmVDb21wb25lbnQgPSBmdW5jdGlvbih3aWRnZXRJZCwgaGFzQ29udGVudCwgaXNFeHBhbmRhYmxlKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0ICRjb21wb25lbnQgPSAkKGAjJHt3aWRnZXRJZH1gKTtcblxuXHRcdGlmIChoYXNDb250ZW50ICYmIGlzRXhwYW5kYWJsZSkge1xuXHRcdFx0Y29uc3QgJGV4cGFuZGFibGVMaW5rID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19IZWFkZXInKTtcblx0XHRcdGNvbnN0ICRhY3Rpb25zID0gJGNvbXBvbmVudC5maW5kKCcuTGluZVRpbWVMaW5lX19BY3Rpb25zJyk7XG5cblx0XHRcdCRleHBhbmRhYmxlTGluay5jbGljaygoKSA9PiB7XG5cdFx0XHRcdCRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ0xpbmVUaW1lTGluZS0tZXhwYW5kZWQnKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0JGFjdGlvbnMuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5UaW1lbGluZVBhZ2VFdmVudHMgPSBmdW5jdGlvbihzaG93TW9yZVRpbWVsaW5lTGluaykge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHQkKHdpbmRvdylcblx0XHRcdC5vZmYoJ3Njcm9sbC5UaW1lbGluZScpXG5cdFx0XHQub24oJ3Njcm9sbC5UaW1lbGluZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAod2luZG93LnNjcm9sbFkgPT09IDApIHtcblx0XHRcdFx0XHRjb25zdCAkaXRlbSA9ICQoJy5UaW1lbGluZUFuY2hvcicpLmZpcnN0KCk7XG5cdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0c2VsZWN0SXRlbSgkaXRlbS5hdHRyKCdpZCcpKTtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblxuXHRcdFx0XHRcdCRsaXN0LnNjcm9sbFRvcCgwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93LnNjcm9sbEZpbmlzaGVkKTtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsRmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bGV0IGlkID0gMDtcblxuXHRcdFx0XHRcdFx0JCgnLlRpbWVsaW5lQW5jaG9yJykuZWFjaChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgMTkwID49ICQodGhpcykub2Zmc2V0KCkudG9wKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoaW5kZXggPT0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGVuZ3RoIC0gMSkgc2VsZWN0SXRlbShpZCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SXRlbShpZCwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubGFzdEl0ZW1JRCA9IGlkO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh0aGlzKS5oZWlnaHQoKSAtIDE1MCA8ICQodGhpcykuc2Nyb2xsVG9wKCkpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGxpc3QgPSAkKCcuVGltZWxpbmVQYWdlX19OYXZpZ2F0aW9uIC5MaXN0UmVjb3JkcycpO1xuXG5cdFx0XHRcdFx0XHRcdCQoYCMke3Nob3dNb3JlVGltZWxpbmVMaW5rfWApLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdCQoJy5UaW1lbGluZVBhZ2VfX1JpZ2h0IC5UaW1lbGluZVBhZ2VfX0xvYWRpbmdNb3JlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsTGlzdFBvc2l0aW9uID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoZWNrRW5kT2ZQYWdlKCk7XG5cdFx0XHR9KTtcblxuXHRcdGluZmluaXRlU2Nyb2xsTGlzdChzaG93TW9yZVRpbWVsaW5lTGluayk7XG5cdH0pO1xufTtcblxuU2FwcGhpcmVXaWRnZXRzLlRpbWVsaW5lUmVzdG9yZUV2ZW50cyA9IGZ1bmN0aW9uKHNob3dNb3JlVGltZWxpbmVMaW5rKSB7XG5cdCQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJykuc2Nyb2xsVG9wKHdpbmRvdy5zY3JvbGxMaXN0UG9zaXRpb24pO1xuXHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cblx0d2luZG93LmFscmVhZHlDbGlja2VkID0gZmFsc2U7XG5cblx0aW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlVGltZWxpbmVMaW5rKTtcblxuXHRpZiAod2luZG93Lmxhc3RJdGVtSUQpIHNlbGVjdEl0ZW0od2luZG93Lmxhc3RJdGVtSUQpO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0SXRlbShpZCwgc2Nyb2xsVG8pIHtcblx0Y29uc3QgJG5hdkl0ZW0gPSAkKGBbZGF0YS1pdGVtPWV2ZW50LSR7aWR9XSAuVGltZWxpbmVJdGVtYCk7XG5cblx0JCgnLlRpbWVsaW5lSXRlbS5UaW1lbGluZUl0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdUaW1lbGluZUl0ZW0tLWFjdGl2ZScpO1xuXHQkbmF2SXRlbS5hZGRDbGFzcygnVGltZWxpbmVJdGVtLS1hY3RpdmUnKTtcblxuXHRpZiAoc2Nyb2xsVG8gJiYgJG5hdkl0ZW0ubGVuZ3RoKSBzY3JvbGxUb1ZpZXcoJG5hdkl0ZW0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb1ZpZXcoZWxlbWVudCkge1xuXHRjb25zdCAkcGFyZW50RGl2ID0gJCgnLlRpbWVsaW5lUGFnZV9fTmF2aWdhdGlvbiAuTGlzdFJlY29yZHMnKTtcblxuXHQkcGFyZW50RGl2LnNjcm9sbFRvcChcblx0XHQkcGFyZW50RGl2LnNjcm9sbFRvcCgpICsgZWxlbWVudC5wb3NpdGlvbigpLnRvcCAtICRwYXJlbnREaXYuaGVpZ2h0KCkgLyAyICsgZWxlbWVudC5oZWlnaHQoKSAvIDJcblx0KTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW5maW5pdGVTY3JvbGxMaXN0KHNob3dNb3JlTmF2TGluaywgbmFtZSkge1xuXHRjb25zdCAkbGlzdCA9ICQoJy5UaW1lbGluZVBhZ2VfX05hdmlnYXRpb24gLkxpc3RSZWNvcmRzJyk7XG5cblx0JGxpc3Qub2ZmKCdtb3VzZXdoZWVsLlRpbWVsaW5lTmF2Jykub24oJ21vdXNld2hlZWwuVGltZWxpbmVOYXYnLCBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBsaXN0SGVpZ2h0ID0gJGxpc3QuaGVpZ2h0KCk7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJGxpc3Quc2Nyb2xsVG9wKCk7XG5cdFx0Y29uc3Qgc2Nyb2xsSGVpZ2h0ID0gJGxpc3QucHJvcCgnc2Nyb2xsSGVpZ2h0Jyk7XG5cblx0XHRpZiAobGlzdEhlaWdodCArIHNjcm9sbFRvcCArIDEwMCA+IHNjcm9sbEhlaWdodCAmJiBzY3JvbGxUb3AgPiAwICYmICF3aW5kb3cuYWxyZWFkeUNsaWNrZWQpIHtcblx0XHRcdGNsZWFyVGltZW91dCh3aW5kb3cuc2Nyb2xsTGlzdEZpbmlzaGVkKTtcblx0XHRcdHdpbmRvdy5zY3JvbGxMaXN0RmluaXNoZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKGAjJHtzaG93TW9yZU5hdkxpbmt9YCkuY2xpY2soKTtcblxuXHRcdFx0XHQkKCcuVGltZWxpbmVQYWdlX19Mb2FkaW5nTW9yZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cblx0XHRcdFx0d2luZG93LnNjcm9sbExpc3RQb3NpdGlvbiA9ICRsaXN0LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHR3aW5kb3cuYWxyZWFkeUNsaWNrZWQgPSB0cnVlO1xuXHRcdFx0fSwgMTAwKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0VuZE9mUGFnZSgpIHtcblx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCkge1xuXHRcdGNvbnN0ICRpdGVtID0gJCgnLlRpbWVsaW5lQW5jaG9yJykubGFzdCgpO1xuXHRcdHdpbmRvdy5sYXN0SXRlbUlEID0gJGl0ZW0uYXR0cignaWQnKTtcblx0fVxufVxuIiwiLyogQ29tcG9uZW50IFRyaWdnZXJJZnJhbWVUb29sdGlwICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdHZhciBjcmVhdGUgPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgJGVsZW1lbnRJZCA9ICQoJyMnICsgY29uZmlnLmVsZW1lbnRJZCk7XG5cblx0XHQkZWxlbWVudElkLmFkZENsYXNzKCd0b29sdGlwJyk7XG5cblx0XHRpZiAoY29uZmlnLnRyaWdnZXJJZCA9PT0gJ2NsaWNrJykgJGVsZW1lbnRJZC5hZGRDbGFzcygndG9vbHRpcHN0ZXJlZC0tcG9pbnRlcicpO1xuXG5cdFx0Y29uc3Qgd2lkZ2V0Tm90aWZ5RGl2ID0gJC5maW5kKCdbZGF0YS1pZnJhbWV0b29sdGlwdHJpZ2dlcmlkPVwiJyArIGNvbmZpZy5lbGVtZW50SWQgKyAnXCJdJyk7XG5cdFx0bGV0IHdpZGdldE5vdGlmeUlkID0gJyc7XG5cblx0XHRpZiAod2lkZ2V0Tm90aWZ5RGl2Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0d2lkZ2V0Tm90aWZ5SWQgPSAkKHdpZGdldE5vdGlmeURpdikuZGF0YSgnaWZyYW1ldG9vbHRpcG5vdGlmeWlkJyk7XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnRJZC50b29sdGlwc3Rlcih7XG5cdFx0XHRjb250ZW50QXNIVE1MOiB0cnVlLFxuXHRcdFx0dGhlbWU6IGNvbmZpZy50aGVtZSxcblx0XHRcdGludGVyYWN0aXZlOiB0cnVlLFxuXHRcdFx0cG9zaXRpb246IGNvbmZpZy5wb3NpdGlvbklkLFxuXHRcdFx0dHJpZ2dlcjogY29uZmlnLnRyaWdnZXJJZCxcblx0XHRcdG1pbldpZHRoOiBjb25maWcubWluV2lkdGgsXG5cdFx0XHRtYXhXaWR0aDogY29uZmlnLm1heFdpZHRoLFxuXHRcdFx0emluZGV4OiBjb25maWcuemluZGV4LFxuXHRcdFx0b25seU9uZTogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGA8aWZyYW1lIGlkPVwidG9vbHRpcHN0ZXItZnJhbWVcIiBkYXRhLXVpPVwiaWZyYW1lLXRvb2x0aXBcIiBzcmM9XCIke2NvbmZpZy5VUkx9XCIgc3R5bGU9XCJib3JkZXI6bm9uZTsgbWluLWhlaWdodDoke2NvbmZpZy5taW5IZWlnaHR9cHg7XCIgZGF0YS1pZnJhbWV0b29sdGlwdHJpZ2dlcmlkPVwiJHtjb25maWcuZWxlbWVudElkfVwiIGlmcmFtZXRvb2x0aXBub3RpZnlpZD1cIiR7d2lkZ2V0Tm90aWZ5SWR9XCI+PC9pZnJhbWU+YCxcblx0XHRcdGZ1bmN0aW9uUmVhZHk6IGZ1bmN0aW9uKGluc3RhbmNlLCBoZWxwZXIpIHtcblx0XHRcdFx0JChoZWxwZXIpLmNzcyh7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuXG5cdFx0XHRcdGlmIChjb25maWcubm9QYWRkaW5nKSAkKCcudG9vbHRpcHN0ZXItY29udGVudCcpLmFkZENsYXNzKCd0b29sdGlwc3Rlci0tbm9QYWRkaW5nJyk7XG5cdFx0XHRcdGlmIChjb25maWcuY3VzdG9tQ2xhc3MpICQoJy50b29sdGlwc3Rlci1jb250ZW50JykuYWRkQ2xhc3MoY29uZmlnLmN1c3RvbUNsYXNzKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQoJy50b29sdGlwc3Rlci1iYXNlJykuY3NzKHtcblx0XHRcdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0XHRcdG1pbkhlaWdodDogY29uZmlnLm1pbkhlaWdodCA+IDAgPyBjb25maWcubWluSGVpZ2h0IDogJ2F1dG8nLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LCA1MDApO1xuXG5cdFx0XHRcdCQoJy50b29sdGlwc3Rlci1jb250ZW50JykucHJlcGVuZCgnPGRpdiBjbGFzcz1cIlRvb2x0aXBzdGVyTG9hZGluZ1wiPjxkaXYgY2xhc3M9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PC9kaXY+Jyk7XG5cblx0XHRcdFx0Y29uc3QgaXNMZWZ0T3JSaWdodCA9IGNvbmZpZy5wb3NpdGlvbklkID09PSAnbGVmdCcgfHwgY29uZmlnLnBvc2l0aW9uSWQgPT09ICdyaWdodCc7XG5cblx0XHRcdFx0Ly8gU2V0IGEgZml4ZWQgaGVpZ2h0IGluIG9yZGVyIHRvIGtlZXAgdGhlIGFycm93IGluIHRoZSBzYW1lIHBvc2l0aW9uXG5cdFx0XHRcdGlmIChpc0xlZnRPclJpZ2h0KSB7XG5cdFx0XHRcdFx0c2V0Rml4SGVpZ2h0KCk7XG5cblx0XHRcdFx0XHQkKHdpbmRvdylcblx0XHRcdFx0XHRcdC5vZmYoJ3Njcm9sbC5Ub29sdGlwJylcblx0XHRcdFx0XHRcdC5vbignc2Nyb2xsLlRvb2x0aXAnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0Rml4SGVpZ2h0KCk7XG5cdFx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uQWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHdpbmRvdykub2ZmKCdzY3JvbGwuVG9vbHRpcCcpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBzZXRGaXhIZWlnaHQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJGFycm93ID0gJCgnLnRvb2x0aXBzdGVyLWFycm93Jyk7XG5cblx0XHQkYXJyb3cuaGVpZ2h0KCRhcnJvdy5oZWlnaHQoKSk7XG5cdH07XG5cblx0U2FwcGhpcmVXaWRnZXRzLlRyaWdnZXJJZnJhbWVUb29sdGlwID0geyBjcmVhdGUgfTtcbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8qIENvbXBvbmVudCBUcnVuY2F0ZWRDb250ZW50ICovXG4oZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKGNvbmZpZyA9IHt9KSB7XG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgJGFsbFRydW5jYXRlZCA9ICQoW10pO1xuXHRcdFx0dmFyIHJvb3RTZWxlY3RvciA9IGAjJHtjb25maWcud2lkZ2V0SWR9YDtcblx0XHRcdHZhciBvcGVuZXJTZWxlY3RvciA9ICcuVHJ1bmNhdGVkQ29udGVudC0tYWxsJztcblx0XHRcdHZhciBib2R5U2VsZWN0b3IgPSAnLlRydW5jYXRlZENvbnRlbnQtLWJvZHknO1xuXG5cdFx0XHQkKHJvb3RTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyICRlbCA9ICQodGhpcyk7XG5cdFx0XHRcdCRhbGxUcnVuY2F0ZWQgPSAkYWxsVHJ1bmNhdGVkLmFkZCgkZWwpO1xuXHRcdFx0XHR2YXIgJGVsQm9keSA9ICRlbC5maW5kKGJvZHlTZWxlY3Rvcik7XG5cdFx0XHRcdHZhciBtYXhMaW5lcyA9ICRlbC5kYXRhKCdtYXhsaW5lcycpO1xuXHRcdFx0XHR2YXIgbGluZUhlaWdodCA9IHdpbmRvd1xuXHRcdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKCRlbC5maW5kKCc+IGRpdicpWzBdKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdsaW5lLWhlaWdodCcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ3B4JywgJycpO1xuXHRcdFx0XHR2YXIgbGluZUNvdW50ID0gTWF0aC5jZWlsKCRlbC5oZWlnaHQoKSAvIGxpbmVIZWlnaHQpO1xuXHRcdFx0XHRpZiAobGluZUNvdW50ID4gbWF4TGluZXMpIHtcblx0XHRcdFx0XHQkZWxCb2R5LmNzcyh7XG5cdFx0XHRcdFx0XHRtYXhIZWlnaHQ6IGxpbmVIZWlnaHQgKiBtYXhMaW5lcyArICdweCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dmFyIHNlbnRlbmNlID0gJGVsLmRhdGEoJ2FkZGl0aW9uYWwnKS5yZXBsYWNlKCd7bn0nLCBsaW5lQ291bnQgLSBtYXhMaW5lcyk7XG5cdFx0XHRcdFx0JGVsLmFwcGVuZCgnPHAgY2xhc3M9XCInICsgb3BlbmVyU2VsZWN0b3IucmVwbGFjZSgnLicsICcnKSArICdcIj4nICsgc2VudGVuY2UgKyAnPC9wPicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0JChyb290U2VsZWN0b3IpLm9uKCdjbGljaycsIG9wZW5lclNlbGVjdG9yLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsID0gJCh0aGlzKS5jbG9zZXN0KHJvb3RTZWxlY3Rvcik7XG5cdFx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KGVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudCA9IGZ1bmN0aW9uKGVsKSB7XG5cdFx0XHRcdCQoZWwpXG5cdFx0XHRcdFx0LmZpbmQoYm9keVNlbGVjdG9yKVxuXHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnbm9uZScpO1xuXHRcdFx0XHQkKGVsKVxuXHRcdFx0XHRcdC5maW5kKG9wZW5lclNlbGVjdG9yKVxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgd2luZG93LmZyYW1lRWxlbWVudC5pZCA9PT0gJ3Rvb2x0aXBzdGVyLWZyYW1lJykge1xuXHRcdFx0XHQkKHJvb3RTZWxlY3Rvcikub2ZmKCdjbGljaycsIG9wZW5lclNlbGVjdG9yKTtcblx0XHRcdFx0JChvcGVuZXJTZWxlY3RvcikuYWRkQ2xhc3MoJ2luLXRvb2x0aXAnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRTYXBwaGlyZVdpZGdldHMuVHJ1bmNhdGVkQ29udGVudCA9IHtcblx0XHRjcmVhdGUsXG5cdFx0b3BlbjogZnVuY3Rpb24oZWwpIHtcblx0XHRcdG9wZW5UcnVuY2F0ZWRDb250ZW50KGVsKTtcblx0XHR9LFxuXHRcdG9wZW5BbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0JGFsbFRydW5jYXRlZC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvcGVuVHJ1bmNhdGVkQ29udGVudCgkKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQsIFNhcHBoaXJlV2lkZ2V0cyk7XG4iLCJTYXBwaGlyZVdpZGdldHMuQ2xpbmljaWFuV29ya0FyZWEgPSBmdW5jdGlvbihjb250YWluZXJJRCkge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gJChgIyR7Y29udGFpbmVySUR9YCk7XG5cdFx0Y29uc3QgJHRvZ2dsZXIgPSAkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVyJyk7XG5cblx0XHRpZiAoJHRvZ2dsZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRsZXQgJHRvZ2dsZXJTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHQkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbHZhbHVlXScpLnRleHQoJHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWxzaG93XScpLmRhdGEoJ2xhYmVsc2hvdycpKTtcblxuXHRcdFx0JHRvZ2dsZXIub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0YnV0dG9uQ2xpY2soKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBidXR0b25DbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkdG9nZ2xlclN0YXRlID0gISR0b2dnbGVyU3RhdGU7XG5cblx0XHRcdFx0aWYgKCR0b2dnbGVyU3RhdGUpIHtcblx0XHRcdFx0XHQkY29udGFpbmVyLmZpbmQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkJykuc2hvdygpO1xuXHRcdFx0XHRcdCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsdmFsdWVdJykudGV4dCgkdG9nZ2xlci5maW5kKCdbZGF0YS1sYWJlbGhpZGVdJykuZGF0YSgnbGFiZWxoaWRlJykpO1xuXG5cdFx0XHRcdFx0JHRvZ2dsZXIuaGlkZSgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGNhbmNlbEJ1dHRvbiA9ICQoJy5TZWN0aW9uRXhwYW5kYWJsZS10b2dnbGVkIC5CdXR0b25DYW5jZWxTZWFyY2gnKTtcblx0XHRcdFx0XHQkY2FuY2VsQnV0dG9uLmNsaWNrKCgpID0+IGJ1dHRvbkNsaWNrKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjb250YWluZXIuZmluZCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQnKS5oaWRlKCk7XG5cdFx0XHRcdFx0JHRvZ2dsZXIuZmluZCgnW2RhdGEtbGFiZWx2YWx1ZV0nKS50ZXh0KCR0b2dnbGVyLmZpbmQoJ1tkYXRhLWxhYmVsc2hvd10nKS5kYXRhKCdsYWJlbHNob3cnKSk7XG5cblx0XHRcdFx0XHQkdG9nZ2xlci5zaG93KCk7XG5cblx0XHRcdFx0XHRjb25zdCAkY2FuY2VsQnV0dG9uID0gJCgnLlNlY3Rpb25FeHBhbmRhYmxlLXRvZ2dsZWQgLkJ1dHRvbkNhbmNlbFNlYXJjaCcpO1xuXHRcdFx0XHRcdCRjYW5jZWxCdXR0b24ub2ZmKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG59O1xuIiwiU2FwcGhpcmVXaWRnZXRzLlFSQ29kZVNjYW5uZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdEh0bWw1UXJjb2RlLmdldENhbWVyYXMoKVxuXHRcdC50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0aWYgKGRldmljZXMgJiYgZGV2aWNlcy5sZW5ndGgpIHN0YXJ0Q2FtZXJhKGRldmljZXNbMF0uaWQpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHQvLyBBcHAgZG9lc24ndCBoYXZlIGFjY2VzcyB0byB0aGUgY2FtZXJhLi4uXG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkY2hlY2tib3ggPSAkKCcuQWNjZXNzQ29kZU9wdGlvbicpO1xuXG5cdFx0XHRcdCRjaGVja2JveC5hdHRyKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0JCgnLkxheW91dFNjYW5Db2RlJykuYWRkQ2xhc3MoJ0xheW91dFNjYW5Db2RlLS1tb2RlT25seUNvZGUnKTtcblxuXHRcdFx0XHQkKCcuTGF5b3V0U2NhbkNvZGVfX1NwbGFzaCcpLmZhZGVPdXQoNTAwKTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSk7XG5cblx0ZnVuY3Rpb24gc3RhcnRDYW1lcmEoY2FtZXJhSUQpIHtcblx0XHRjb25zdCBodG1sNVFyQ29kZSA9IG5ldyBIdG1sNVFyY29kZSgncXJyZWFkZXInKTtcblx0XHRjb25zdCBjb25maWcgPSB7IGZwczogNSwgcXJib3g6IDI1MCB9O1xuXG5cdFx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gcmVzcG9uc2UgPT4ge1xuXHRcdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHQkKCcuU2Nhbk92ZXJsYXknKS5hZGRDbGFzcygnU2Nhbk92ZXJsYXktLWNvcnJlY3RDb2RlJyk7XG5cblx0XHRcdE9zTm90aWZ5V2lkZ2V0KG9wdGlvbnMud2lkZ2V0RmFrZU5vdGlmeUlkLCByZXNwb25zZSk7XG5cblx0XHRcdC8vc2V0VGltZW91dCgoKSA9PiBodG1sNVFyQ29kZS5zdG9wKCksIDEwMDApO1xuXHRcdH07XG5cblx0XHRjb25zdCBlcnJvckNhbGxiYWNrID0gcmVzcG9uc2UgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG5cdFx0fTtcblxuXHRcdGh0bWw1UXJDb2RlXG5cdFx0XHQuc3RhcnQoeyBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIH0sIGNvbmZpZywgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+ICQoJy5MYXlvdXRTY2FuQ29kZV9fU3BsYXNoJykuZmFkZU91dCg1MDApLCA1MDApO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGxldCBpc1BvcnRyYWl0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcblx0bGV0IGlzT3JpZW50YXJpb25DaGFuZ2VkID0gZmFsc2U7XG5cblx0JCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKCQoJy5Nb2RlQWNjZXNzQ29kZScpLmxlbmd0aCkge1xuXHRcdFx0aXNPcmllbnRhcmlvbkNoYW5nZWQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKS5tYXRjaGVzO1xuXHRcdFx0U2FwcGhpcmVXaWRnZXRzLklzT3JpZW50YXJpb25DaGFuZ2VkID0gIShpc1BvcnRyYWl0IF4gaXNPcmllbnRhcmlvbkNoYW5nZWQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9KTtcbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5Pbk1vZGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0JCgnLlNjYW5PdmVybGF5JykucmVtb3ZlQ2xhc3MoJ1NjYW5PdmVybGF5LS1jb3JyZWN0Q29kZScpO1xuXHQkKCcuU2Nhbk92ZXJsYXknKS5yZW1vdmVDbGFzcygnU2Nhbk92ZXJsYXktLWluY29ycmVjdENvZGUnKTtcblxuXHRpZiAoU2FwcGhpcmVXaWRnZXRzLklzT3JpZW50YXJpb25DaGFuZ2VkICYmICEkKCcuTW9kZUFjY2Vzc0NvZGUnKS5sZW5ndGgpIHtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cblNhcHBoaXJlV2lkZ2V0cy5Hb05leHRJbnB1dCA9IGZ1bmN0aW9uKGN1cnJlbnRJbnB1dCwgbmV4dElucHV0Q2xhc3MpIHtcblx0Y29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcblx0Y29uc3QgaXNOdW1iZXIgPSAhaXNOYU4oZXZlbnQua2V5KSAmJiAhaXNOYU4ocGFyc2VGbG9hdChldmVudC5rZXkpKTtcblxuXHRjb25zdCAkY3VyciA9ICQoY3VycmVudElucHV0KTtcblx0Y29uc3QgJG5leHQgPSAkKGAuJHtuZXh0SW5wdXRDbGFzc31gKTtcblx0Y29uc3QgJHByZXYgPSAkY3Vyci5wcmV2QWxsKCdpbnB1dCcpLmZpcnN0KCk7XG5cblx0aWYgKGtleSA9PT0gOCB8fCBrZXkgPT09IDQ2KSB7XG5cdFx0JHByZXYuZm9jdXMoKTtcblx0XHQkY3Vyci5yZW1vdmVDbGFzcygnQ29sb3JBbHBoYUJvcmRlcicpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzTnVtYmVyKSB7XG5cdFx0JG5leHQuZm9jdXMoKTtcblx0XHQkY3Vyci5hZGRDbGFzcygnQ29sb3JBbHBoYUJvcmRlcicpO1xuXHRcdCQoJy5WYWxpZGF0ZUlucHV0QnV0dG9uJykuY2xpY2soKTtcblx0fSBlbHNlIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuIiwiKGZ1bmN0aW9uKCQsIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKSB7XG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cdFx0Y29uc3QgJGhlYWRlciA9ICR3aWRnZXQuZmluZCgnLlJlbW90ZUFwcG9pbnRtZW50X19IZWFkZXInKTtcblx0XHRjb25zdCAkbWluaW1pemUgPSAkaGVhZGVyLmZpbmQoJy5NaW5pbWl6ZScpO1xuXHRcdGNvbnN0ICRzbWFsbFNpemUgPSAkaGVhZGVyLmZpbmQoJy5TbWFsbCcpO1xuXHRcdGNvbnN0ICRtZWRpdW1TaXplID0gJGhlYWRlci5maW5kKCcuTWVkaXVtJyk7XG5cdFx0Y29uc3QgJGZ1bGxTY3JlZW4gPSAkaGVhZGVyLmZpbmQoJy5GdWxsU2NyZWVuJyk7XG5cdFx0Y29uc3QgJHJlc3RvcmVXaW5kb3cgPSAkd2lkZ2V0LmZpbmQoJy5SZW1vdGVBcHBvaW50bWVudF9fUmVzdG9yZVdpbmRvdycpO1xuXG5cdFx0bGV0IGlzUHJldmlvdXNTbWFsbCA9ICRzbWFsbFNpemUuaXMoJzp2aXNpYmxlJyk7XG5cblx0XHQkbWluaW1pemUuY2xpY2soKCkgPT4ge1xuXHRcdFx0aXNQcmV2aW91c1NtYWxsID0gJG1lZGl1bVNpemUuaXMoJzp2aXNpYmxlJyk7XG5cblx0XHRcdC8vJHdpZGdldC5kcmFnZ2FibGUoeyBkaXNhYmxlZDogdHJ1ZSB9KTtcblxuXHRcdFx0JHdpZGdldC5hZGRDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xuXHRcdFx0JG1pbmltaXplLmhpZGUoKTtcblx0XHRcdCRtZWRpdW1TaXplLnNob3coKTtcblxuXHRcdFx0JHdpZGdldC5hbmltYXRlKG1pbmltaXplZFBvc2l0aW9uKCRoZWFkZXIuaGVpZ2h0KCkpKTtcblx0XHR9KTtcblxuXHRcdCRzbWFsbFNpemUuY2xpY2soKCkgPT4ge1xuXHRcdFx0JHdpZGdldC5yZW1vdmVDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLW1pbmltaXplZCcpO1xuXHRcdFx0JG1pbmltaXplLnNob3coKTtcblx0XHRcdCRzbWFsbFNpemUuaGlkZSgpO1xuXHRcdFx0JG1lZGl1bVNpemUuc2hvdygpO1xuXG5cdFx0XHQkd2lkZ2V0LmFuaW1hdGUoe1xuXHRcdFx0XHR0b3A6ICc1MCUnLFxuXHRcdFx0XHRyaWdodDogJzUwJScsXG5cdFx0XHRcdGxlZnQ6ICc1MCUnLFxuXHRcdFx0XHR3aWR0aDogJzI4MHB4Jyxcblx0XHRcdFx0aGVpZ2h0OiAnMzgwcHgnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQkbWVkaXVtU2l6ZS5jbGljaygoKSA9PiB7XG5cdFx0XHRjb25zdCBpc0NhbGxTdGFydGVkID0gJHdpZGdldC5oYXNDbGFzcygnUmVtb3RlQXBwb2ludG1lbnQtLWNhbGxTdGFydGVkJyk7XG5cblx0XHRcdC8vJHdpZGdldC5kcmFnZ2FibGUoJ2VuYWJsZScpO1xuXG5cdFx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tbWluaW1pemVkJyk7XG5cdFx0XHQkbWluaW1pemUuc2hvdygpO1xuXHRcdFx0JG1lZGl1bVNpemUuaGlkZSgpO1xuXHRcdFx0aWYgKGlzQ2FsbFN0YXJ0ZWQpICRzbWFsbFNpemUuc2hvdygpO1xuXG5cdFx0XHQkd2lkZ2V0LmFuaW1hdGUoe1xuXHRcdFx0XHR0b3A6ICc1MCUnLFxuXHRcdFx0XHRyaWdodDogJzUwJScsXG5cdFx0XHRcdGxlZnQ6ICc1MCUnLFxuXHRcdFx0XHR3aWR0aDogaXNDYWxsU3RhcnRlZCA/ICc0NXZ3JyA6ICc0NTBweCcsXG5cdFx0XHRcdGhlaWdodDogaXNDYWxsU3RhcnRlZCA/ICc0NXZoJyA6ICcyNjBweCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdCRmdWxsU2NyZWVuLmNsaWNrKCgpID0+IHtcblx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5SZW1vdGVBcHBvaW50bWVudCBpZnJhbWUnKTtcblxuXHRcdFx0aWYgKGlmcmFtZS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4oKTtcblx0XHRcdH0gZWxzZSBpZiAoaWZyYW1lLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRcdGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHJlc3RvcmVXaW5kb3cuY2xpY2soKCkgPT4ge1xuXHRcdFx0aWYgKGlzUHJldmlvdXNTbWFsbCkgJHNtYWxsU2l6ZS5jbGljaygpO1xuXHRcdFx0ZWxzZSAkbWVkaXVtU2l6ZS5jbGljaygpO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHQkd2lkZ2V0LmRyYWdnYWJsZSh7XG5cdFx0XHRcdGNvbnRhaW5tZW50OiAnd2luZG93Jyxcblx0XHRcdFx0aGFuZGxlOiAkaGVhZGVyLFxuXHRcdFx0XHRzY3JvbGw6IGZhbHNlLFxuXHRcdFx0XHRzbmFwOiB0cnVlLFxuXHRcdFx0XHRpZnJhbWVGaXg6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0ZmFrZUFqYXhSZWZyZXNoKCk7XG5cdFx0fSk7XG5cblx0XHRjaGVja0lmcmFtZUxvYWRlZCgpO1xuXHR9O1xuXG5cdGNvbnN0IG1pbmltaXplZFBvc2l0aW9uID0gKGhlYWRlckhlaWdodCA9IDQ4KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogJCh3aW5kb3cpLmhlaWdodCgpIC0gaGVhZGVySGVpZ2h0IC0gMTYsXG5cdFx0XHRyaWdodDogJzc2cHgnLFxuXHRcdFx0bGVmdDogJCh3aW5kb3cpLndpZHRoKCkgLSAyODAgLSA2MCAtIDE2LFxuXHRcdFx0d2lkdGg6ICcyNzVweCcsXG5cdFx0XHRoZWlnaHQ6ICc0OHB4Jyxcblx0XHR9O1xuXHR9O1xuXG5cdGNvbnN0IHJlc2l6ZVdoZW5Kb2luID0gKCkgPT4ge1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKCcuUmVtb3RlQXBwb2ludG1lbnQnKTtcblx0XHRjb25zdCAkc21hbGxTaXplID0gJHdpZGdldC5maW5kKCcuU21hbGwnKTtcblxuXHRcdCRzbWFsbFNpemUuc2hvdygpO1xuXHRcdCR3aWRnZXQuYWRkQ2xhc3MoJ1JlbW90ZUFwcG9pbnRtZW50LS1jYWxsU3RhcnRlZCcpO1xuXG5cdFx0JHdpZGdldC5jc3Moe1xuXHRcdFx0aGVpZ2h0OiAnNDV2aCcsXG5cdFx0XHR3aWR0aDogJzQ1dncnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY2VudGVyUHggPSAoJCh3aW5kb3cudG9wKS53aWR0aCgpIC0gJHdpZGdldC53aWR0aCgpKSAvIDI7XG5cblx0XHQkd2lkZ2V0LmNzcyh7XG5cdFx0XHRpbnNldDogYDIzMHB4IGF1dG8gYXV0byAke2NlbnRlclB4fXB4YCxcblx0XHR9KTtcblxuXHRcdGxldCB0aW1lb3V0O1xuXG5cdFx0ZnVuY3Rpb24gd2FybmluZyhlKSB7XG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gSGFjayB0byBrZWVwIHRoZSBjdXJyZW50IHRhYiBzZWxlY3RlZCBpZiB1c2VyIGRvZXNuJ3QgZ28gdG8gYW5vdGhlciBwYWdlXG5cdFx0XHRcdGNvbnN0IGlmcmFtZUNvbnRlbnRzID0gd2luZG93LnRvcC4kKCcuTWFpbkNvbnRlbnQgPiBpZnJhbWUnKS5jb250ZW50cygpO1xuXHRcdFx0XHRjb25zdCB0YWJJdGVtcyA9IGlmcmFtZUNvbnRlbnRzLmZpbmQoJy5UYWJXcmFwcGVyJyk7XG5cblx0XHRcdFx0dGFiSXRlbXMucmVtb3ZlQ2xhc3MoJ0FjdGl2ZScpO1xuXHRcdFx0XHR0YWJJdGVtcy5maXJzdCgpLmFkZENsYXNzKCdBY3RpdmUnKTtcblx0XHRcdH0sIDEwMDApO1xuXG5cdFx0XHRyZXR1cm4gKGUucmV0dXJuVmFsdWUgPSAnWW91IGFyZSBsZWF2aW5nIHRoZSBwYWdlJyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbm9UaW1lb3V0KCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy50b3Aub25iZWZvcmV1bmxvYWQgPSB3YXJuaW5nO1xuXHRcdHdpbmRvdy50b3AudW5sb2FkID0gbm9UaW1lb3V0O1xuXG5cdFx0Lyp3aW5kb3cudG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUucmV0dXJuVmFsdWUgPSAnMTIzJztcblx0XHR9KTsqL1xuXHR9O1xuXG5cdGNvbnN0IHNldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCgnLlJlbW90ZUFwcG9pbnRtZW50Jyk7XG5cdFx0Y29uc3QgJHNtYWxsU2l6ZSA9ICR3aWRnZXQuZmluZCgnLlNtYWxsJyk7XG5cdFx0Y29uc3QgJG1lZGl1bVNpemUgPSAkd2lkZ2V0LmZpbmQoJy5NZWRpdW0nKTtcblxuXHRcdCRzbWFsbFNpemUuaGlkZSgpO1xuXHRcdCRtZWRpdW1TaXplLmhpZGUoKTtcblx0XHQkd2lkZ2V0LnJlbW92ZUNsYXNzKCdSZW1vdGVBcHBvaW50bWVudC0tY2FsbFN0YXJ0ZWQnKTtcblxuXHRcdHdpbmRvdy50b3AudW5sb2FkID0gbnVsbDtcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcblxuXHRcdCQoJy5SZW1vdGVBcHBvaW50bWVudCcpLmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnaW5pdGlhbCcsXG5cdFx0XHRyaWdodDogJzIyJScsXG5cdFx0XHR0b3A6ICczMCUnLFxuXHRcdFx0aGVpZ2h0OiAnMjYwcHgnLFxuXHRcdFx0d2lkdGg6ICc0NTBweCcsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0TW9kYWxNaW5pbWl6ZWQgPSAoKSA9PiB7XG5cdFx0Ly8gVG8gdXNlIG9ubHkgaW5zaWRlIFNhcHBoaXJlIGlGcmFtZSBwYWdlc1xuXHRcdGNvbnN0ICRtb2RhbFJlbW90ZUFwcHQgPSB3aW5kb3cudG9wLiQoJy5SZW1vdGVBcHBvaW50bWVudCcpO1xuXG5cdFx0aWYgKCRtb2RhbFJlbW90ZUFwcHQubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCAkbWluaW1pemVNb2RhbCA9ICRtb2RhbFJlbW90ZUFwcHQuZmluZCgnLk1pbmltaXplJyk7XG5cdFx0XHQkbWluaW1pemVNb2RhbC5jbGljaygpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVja0lmcmFtZUxvYWRlZCA9ICgpID0+IHtcblx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdTYXBwaGlyZUZyYW1lJylbMF07XG5cdFx0Y29uc3QgaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudCB8fCBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblxuXHRcdGlmIChpZnJhbWVEb2MucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSB7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0SW5pdGlhbFN0YXRlKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2luZG93LnNldFRpbWVvdXQoY2hlY2tJZnJhbWVMb2FkZWQsIDEwMCk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Q2FsbFN0YXJ0ZWQgPSAoKSA9PiB7fTtcblxuXHRjb25zdCBmYWtlQWpheFJlZnJlc2ggPSAoKSA9PiB7XG5cdFx0Y29uc3QgJGlmcmFtZSA9ICQoJy5TYXBwaGlyZUZyYW1lJyk7XG5cblx0XHQkaWZyYW1lLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdCQoJy5GZWVkYmFja19BamF4V2FpdCcpLnNob3coKTtcblx0XHRcdH07XG5cblx0XHRcdCQoJy5GZWVkYmFja19BamF4V2FpdCcpLmhpZGUoKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBvcGVuTW9kYWxMZWF2ZUNvbnRleHQgPSB1cmwgPT4ge1xuXHRcdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudC5sZWF2ZVVSTCA9IHVybDtcblxuXHRcdHdpbmRvdy50b3AudW5sb2FkID0gbnVsbDtcblx0XHR3aW5kb3cudG9wLm9uYmVmb3JldW5sb2FkID0gbnVsbDtcblxuXHRcdCQoJy5PcGVuTW9kYWxMZWF2ZUNvbnRleHQnKS5jbGljaygpO1xuXHR9O1xuXG5cdFNhcHBoaXJlV2lkZ2V0cy5SZW1vdGVBcHBvaW50bWVudCA9IHtcblx0XHRjcmVhdGUsXG5cdFx0cmVzaXplV2hlbkpvaW4sXG5cdFx0c2V0Q2FsbFN0YXJ0ZWQsXG5cdFx0c2V0SW5pdGlhbFN0YXRlLFxuXHRcdGZha2VBamF4UmVmcmVzaCxcblx0XHRzZXRNb2RhbE1pbmltaXplZCxcblx0XHRvcGVuTW9kYWxMZWF2ZUNvbnRleHQsXG5cdH07XG59KShqUXVlcnksIHdpbmRvdywgU2FwcGhpcmVXaWRnZXRzKTtcbiIsIi8vU2FwcGhpcmVXaWRnZXRzID0gd2luZG93LlNhcHBoaXJlV2lkZ2V0cyA9IHdpbmRvdy5TYXBwaGlyZVdpZGdldHMgfHwge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==